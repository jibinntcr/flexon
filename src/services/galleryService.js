/**
 * Flexon Sports Foundation - Scalable Backend-Ready Gallery Service & Facet Engine
 *
 * Designed for multi-event scale (dozens/hundreds of events from a backend API or CMS):
 * - Normalizes any backend event/album payload into a consistent schema
 * - Auto-derives Level 1 (Sport/Initiative Verticals), Level 2 (Events, Cities, Years),
 *   and Level 3 (Contextual Photo Moments/Categories) dynamically from data
 * - Supports async backend fetching (`window.FLEXON_GALLERY_API_URL`) with instant static fallback
 * - Exposes `window.FlexonGalleryAPI` so backend scripts or admin tools can push events dynamically
 */

import { galleryAlbums as staticGalleryAlbums } from "../data/content.js";

const SPORT_META_MAP = {
  running: { label: "Running & Marathon", shortLabel: "Running • FLEXATHON", icon: "🏃" },
  football: { label: "Football", shortLabel: "Football", icon: "⚽" },
  cricket: { label: "Cricket", shortLabel: "Cricket", icon: "🏏" },
  athletics: { label: "Athletics & Track", shortLabel: "Athletics", icon: "👟" },
  school: { label: "School & College Meets", shortLabel: "School Meets", icon: "🎓" },
  community: { label: "Community Sports", shortLabel: "Community", icon: "🤝" }
};

const MOMENT_ICON_MAP = {
  all: "📸",
  "flag-off": "🏁",
  "community-waves": "🏃",
  "warm-up": "🔥",
  "podium-awards": "🏆",
  "pitch-kickoff": "⚽",
  "camp-inauguration": "🎙️",
  "youth-orientation": "👥",
  coaching: "⚽",
  cricket: "🏏",
  match: "⚡",
  ceremony: "🎖️",
  highlights: "✨"
};

// Runtime store for dynamically injected backend albums
let runtimeBackendAlbums = [];

/**
 * Infers the sport key from an album's sport, initiative, or title fields
 */
function inferSportKey(raw) {
  if (raw.sport && SPORT_META_MAP[raw.sport.toLowerCase()]) {
    return raw.sport.toLowerCase();
  }
  const text = `${raw.sport || ""} ${raw.initiative || ""} ${raw.title || ""}`.toLowerCase();
  if (text.includes("flexathon") || text.includes("run") || text.includes("marathon")) return "running";
  if (text.includes("football") || text.includes("soccer") || text.includes("empower youth")) return "football";
  if (text.includes("cricket") || text.includes("sixes")) return "cricket";
  if (text.includes("school") || text.includes("college")) return "school";
  return raw.sport ? raw.sport.toLowerCase() : "community";
}

/**
 * Normalizes a single album object from backend API or static config
 */
export function normalizeAlbum(raw, index = 0) {
  const items = Array.isArray(raw.items)
    ? raw.items.map((item, idx) => ({
        id: item.id || `${raw.id || "album"}-${idx + 1}`,
        src: item.src || item.url || item.imageUrl || "",
        caption: item.caption || item.title || item.description || raw.title || "Event Photograph",
        alt: item.alt || item.caption || raw.title || "Flexon Sports event photograph",
        category: item.category || item.moment || "highlights",
        categoryLabel: item.categoryLabel || item.momentLabel || item.category || "Event Highlight",
        orientation: item.orientation || "landscape",
        featured: Boolean(item.featured)
      }))
    : [];

  const sportKey = inferSportKey(raw);
  const sportMeta = SPORT_META_MAP[sportKey] || {
    label: raw.sportLabel || "Community Sports",
    shortLabel: raw.sportLabel || "Community",
    icon: raw.sportIcon || "🏅"
  };

  // Auto-extract unique moment categories from items if not explicitly provided
  const categoryMap = new Map();
  if (Array.isArray(raw.categories)) {
    raw.categories.forEach((c) => {
      if (c && c.id && c.id !== "all") {
        categoryMap.set(c.id, {
          id: c.id,
          label: c.label || c.id,
          icon: c.icon || MOMENT_ICON_MAP[c.id] || "🏷️"
        });
      }
    });
  }
  items.forEach((item) => {
    if (item.category && !categoryMap.has(item.category)) {
      categoryMap.set(item.category, {
        id: item.category,
        label: item.categoryLabel || item.category,
        icon: MOMENT_ICON_MAP[item.category] || "🏷️"
      });
    }
  });

  // Extract year from isoDate or date string
  const yearMatch = `${raw.year || ""} ${raw.isoDate || ""} ${raw.date || ""}`.match(/\b(20\d{2})\b/);
  const year = yearMatch ? yearMatch[1] : "2026";

  return {
    id: raw.id || `event-${index + 1}`,
    title: raw.title || "Official Event Album",
    shortTitle: raw.shortTitle || raw.title || "Event Album",
    subtitle: raw.subtitle || `${raw.city || "India"} • ${raw.date || year}`,
    date: raw.date || year,
    isoDate: raw.isoDate || `${year}-01-01`,
    year,
    city: raw.city || "Regional",
    venue: raw.venue || raw.city || "",
    sport: sportKey,
    sportLabel: raw.sportLabel || sportMeta.label,
    sportShortLabel: sportMeta.shortLabel,
    sportIcon: raw.sportIcon || sportMeta.icon,
    initiative: raw.initiative || sportMeta.label,
    organisedBy: raw.organisedBy || "Flexon Sports Foundation",
    inauguratedBy: raw.inauguratedBy || "",
    programme: raw.programme || raw.initiative || "",
    ageGroup: raw.ageGroup || "",
    trainingPeriod: raw.trainingPeriod || "",
    description: raw.description || "",
    sdg: raw.sdg || "",
    featured: Boolean(raw.featured),
    folder: raw.folder || "",
    cover: raw.cover || (items[0] ? items[0].src : "/assets/animated/hero-sports-animated.jpg"),
    count: items.length,
    categories: Array.from(categoryMap.values()),
    items
  };
}

/**
 * Returns all normalized albums (merging static + runtime backend albums)
 */
export function getAllGalleryAlbums() {
  const combined = [...runtimeBackendAlbums, ...staticGalleryAlbums];
  const seen = new Set();
  const unique = [];
  combined.forEach((album, idx) => {
    const norm = normalizeAlbum(album, idx);
    if (!seen.has(norm.id)) {
      seen.add(norm.id);
      unique.push(norm);
    }
  });
  return unique;
}

/**
 * Optional async fetch from a backend API endpoint if configured on window.FLEXON_GALLERY_API_URL
 */
export async function fetchBackendGalleryAlbums(
  apiUrl = typeof window !== "undefined" ? window.FLEXON_GALLERY_API_URL : undefined
) {
  if (!apiUrl) return getAllGalleryAlbums();
  try {
    const res = await fetch(apiUrl, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const payload = await res.json();
    const list = Array.isArray(payload) ? payload : payload.albums || payload.data || [];
    if (Array.isArray(list) && list.length > 0) {
      runtimeBackendAlbums = list;
    }
  } catch (err) {
    console.warn("[FlexonGalleryService] Using local verified archive fallback:", err.message);
  }
  return getAllGalleryAlbums();
}

/**
 * Computes the 3-Tier Hierarchical Facets from the current album dataset and filter state
 *
 * Hierarchy:
 * - Tier 1: Sport / Programme Verticals (Macro Tabs)
 * - Tier 2: Event / Album Selector, City Selector, Year Selector
 * - Tier 3: Contextual Photo Moments / Sub-categories from the active scope
 */
export function computeGalleryFacets(albums, state) {
  const {
    sport = "all",
    eventId = "all",
    city = "all",
    year = "all",
    moment = "all",
    search = "",
    sortBy = "newest"
  } = state;

  const totalPhotos = albums.reduce((sum, a) => sum + a.items.length, 0);

  // 1. Tier 1: Macro Sport Verticals
  const sportMap = new Map();
  albums.forEach((album) => {
    const existing = sportMap.get(album.sport) || {
      id: album.sport,
      label: album.sportShortLabel || album.sportLabel,
      fullLabel: album.sportLabel,
      icon: album.sportIcon,
      albumCount: 0,
      photoCount: 0
    };
    existing.albumCount += 1;
    existing.photoCount += album.items.length;
    sportMap.set(album.sport, existing);
  });

  const sportsFacet = [
    {
      id: "all",
      label: "All Sports",
      fullLabel: "All Sports & Initiatives",
      icon: "🌐",
      albumCount: albums.length,
      photoCount: totalPhotos
    },
    ...Array.from(sportMap.values())
  ];

  // Filter albums by Tier 1 (Sport)
  const albumsAfterSport = albums.filter((a) => sport === "all" || a.sport === sport);

  // 2. Tier 2 Facets: Cities & Years available within the selected Sport
  const cityCounts = new Map();
  const yearCounts = new Map();
  albumsAfterSport.forEach((a) => {
    cityCounts.set(a.city, (cityCounts.get(a.city) || 0) + a.items.length);
    yearCounts.set(a.year, (yearCounts.get(a.year) || 0) + a.items.length);
  });

  const citiesFacet = Array.from(cityCounts.entries()).map(([name, count]) => ({
    id: name,
    label: name,
    count
  }));

  const yearsFacet = Array.from(yearCounts.entries())
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([yr, count]) => ({
      id: yr,
      label: `${yr} Season`,
      count
    }));

  // Filter albums by City & Year to populate the Event Dropdown & Event Cards Strip
  const albumsMatchingContext = albumsAfterSport.filter((a) => {
    if (city !== "all" && a.city !== city) return false;
    if (year !== "all" && a.year !== year) return false;
    return true;
  });

  // Sort albums according to sortBy
  const sortedContextAlbums = [...albumsMatchingContext].sort((a, b) => {
    if (sortBy === "most-photos") return b.items.length - a.items.length;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    // Default "newest"
    return (b.isoDate || "").localeCompare(a.isoDate || "");
  });

  // Events Dropdown options
  const eventsFacet = sortedContextAlbums.map((a) => ({
    id: a.id,
    title: a.shortTitle || a.title,
    fullTitle: a.title,
    city: a.city,
    date: a.date,
    year: a.year,
    initiative: a.initiative,
    sportIcon: a.sportIcon,
    cover: a.cover,
    photoCount: a.items.length
  }));

  // 3. Determine active albums after Event selection
  const activeAlbums = sortedContextAlbums.filter(
    (a) => eventId === "all" || a.id === eventId
  );

  // 4. Tier 3: Contextual Moments (derived dynamically from activeAlbums)
  const momentMap = new Map();
  let totalPhotosInActiveAlbums = 0;

  activeAlbums.forEach((album) => {
    totalPhotosInActiveAlbums += album.items.length;
    album.items.forEach((item) => {
      const catId = item.category || "highlights";
      const existing = momentMap.get(catId) || {
        id: catId,
        label: item.categoryLabel || catId,
        icon: MOMENT_ICON_MAP[catId] || "🏷️",
        count: 0
      };
      existing.count += 1;
      momentMap.set(catId, existing);
    });
  });

  const momentsFacet = [
    {
      id: "all",
      label: "All Moments",
      icon: "📸",
      count: totalPhotosInActiveAlbums
    },
    ...Array.from(momentMap.values())
  ];

  // 5. Filter individual photo items by Moment + Search Query
  const query = search.trim().toLowerCase();
  const filteredAlbumsResult = [];
  let totalMatchedPhotos = 0;

  activeAlbums.forEach((album) => {
    const matchedItems = album.items.filter((item) => {
      if (moment !== "all" && item.category !== moment) return false;
      if (query) {
        const haystack = `${item.caption} ${item.alt} ${item.categoryLabel} ${album.title} ${album.city} ${album.initiative} ${album.year}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });

    if (matchedItems.length > 0) {
      totalMatchedPhotos += matchedItems.length;
      filteredAlbumsResult.push({
        album,
        items: matchedItems
      });
    }
  });

  return {
    totalArchivePhotos: totalPhotos,
    totalArchiveAlbums: albums.length,
    sportsFacet,
    citiesFacet,
    yearsFacet,
    eventsFacet,
    momentsFacet,
    contextAlbums: sortedContextAlbums,
    filteredAlbumsResult,
    totalMatchedPhotos
  };
}

// Expose global helper for backend / runtime integration
if (typeof window !== "undefined") {
  window.FlexonGalleryAPI = {
    getAlbums: getAllGalleryAlbums,
    addEventAlbum(albumPayload) {
      runtimeBackendAlbums = [albumPayload, ...runtimeBackendAlbums];
      window.dispatchEvent(new CustomEvent("flexon:gallery-updated"));
      return getAllGalleryAlbums();
    },
    setEventAlbums(albumsArray) {
      if (Array.isArray(albumsArray)) {
        runtimeBackendAlbums = albumsArray;
        window.dispatchEvent(new CustomEvent("flexon:gallery-updated"));
      }
      return getAllGalleryAlbums();
    }
  };
}
