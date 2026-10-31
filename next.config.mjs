/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      { source: "/our-team", destination: "/team" },
      { source: "/leadership", destination: "/team" },
      { source: "/empower-youth", destination: "/programs/empower-youth-football-camp" },
      { source: "/empower-youth-football", destination: "/programs/empower-youth-football-camp" },
      { source: "/empower-youth-football-camp", destination: "/programs/empower-youth-football-camp" },
      { source: "/programs/empower-youth", destination: "/programs/empower-youth-football-camp" },
      { source: "/programs/empower-youth-football", destination: "/programs/empower-youth-football-camp" },
      { source: "/flexathon/hyderabad", destination: "/flexathon/hyderabad-2026" },
      { source: "/flexathon/kochi-edition", destination: "/flexathon/kochi" },
      { source: "/veteran-sixes-cricket", destination: "/veteran-sixes" },
      { source: "/cricket", destination: "/veteran-sixes" },
      { source: "/programs/veteran-sixes", destination: "/veteran-sixes" },
      { source: "/programs/veteran-sixes-cricket", destination: "/veteran-sixes" },
      { source: "/programs/cricket", destination: "/veteran-sixes" }
    ];
  }
};

export default nextConfig;

