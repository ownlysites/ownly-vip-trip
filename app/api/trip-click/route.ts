import { NextRequest, NextResponse } from "next/server";

/**
 * Ownly VIP Trip — click tracker.
 *
 * Fires a DBC (GoHighLevel) note in the background recording which trip
 * the visitor selected. Returns 200 immediately so the client redirect
 * is never blocked. All integration errors are swallowed and logged.
 *
 * env: DBC_PIT_TOKEN, DBC_LOCATION_ID
 */

export const runtime = "nodejs";

type ClickBody = {
  tripSlug?: string;
  affiliateUrl?: string;
};

const VALID_SLUGS = new Set([
  "cruise",
  "worldwide",
  "flystay",
  "mexico",
  "sunscape",
  "cash",
]);

export async function POST(req: NextRequest) {
  let body: ClickBody;
  try {
    body = (await req.json()) as ClickBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const slug = (body.tripSlug ?? "").trim().toLowerCase();
  if (!VALID_SLUGS.has(slug)) {
    return NextResponse.json({ ok: false, error: "Invalid trip slug" }, { status: 422 });
  }

  // Fire-and-forget DBC ping. Never block the response.
  if (process.env.DBC_PIT_TOKEN && process.env.DBC_LOCATION_ID) {
    const tag = `ownly_vip_trip_${slug}`;
    // Best-effort: upsert a placeholder contact tagged with the trip choice.
    // This mirrors venice-50k-challenge's intake pattern so Dave can see
    // which trip slugs are being clicked even before contact details exist.
    fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.DBC_PIT_TOKEN}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        locationId: process.env.DBC_LOCATION_ID,
        firstName: "VIP",
        lastName: "Trip Click",
        source: "ownly-vip-trip",
        tags: [tag, "ownly_source_vip_trip"],
      }),
    })
      .then(async (r) => {
        if (!r.ok) {
          console.error("[trip-click] DBC failed", r.status, await r.text());
        }
      })
      .catch((err) => console.error("[trip-click] DBC threw", err));
  } else {
    console.warn("[trip-click] DBC env missing — skipping");
  }

  return NextResponse.json({ ok: true });
}
