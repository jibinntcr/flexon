import { NextResponse } from "next/server";
import { organization } from "../../../data/content.js";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    name: organization.name,
    framework: "Next.js App Router"
  });
}

