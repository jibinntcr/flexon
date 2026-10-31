import { NextResponse } from "next/server";
import { getAllGalleryAlbums } from "../../../services/galleryService.js";

export async function GET() {
  const albums = getAllGalleryAlbums();
  return NextResponse.json({
    status: "ok",
    count: albums.length,
    albums
  });
}

