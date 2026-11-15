import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { products } from "@/lib/data";

// The link preview, set like the intro: the lavender field, the name in Funnel Display, the
// portrait to its right, the role line, and the year strip with one dot per project along the
// bottom. Fonts are the Fontsource WOFF builds of Funnel Display (the image renderer can't read WOFF2).

export const alt = "Ketuman Vishwakarma, Forward Deployed Engineer at Bluecore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FIELD = "#d6d8fc";
const INK = "#1f1a26";
const MUTED = "#45417a";

export default async function OpengraphImage() {
  const [bold, semi, portrait] = await Promise.all([
    readFile(join(process.cwd(), "lib/fonts/funnel-display-700.woff")),
    readFile(join(process.cwd(), "lib/fonts/funnel-display-600.woff")),
    readFile(join(process.cwd(), "public/portrait-square.jpg")),
  ]);
  const photo = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  const years = products.map((p) => p.year);
  const first = Math.min(...years);
  const last = Math.max(new Date().getFullYear(), ...years);
  const span = Array.from({ length: last - first + 1 }, (_, i) => first + i);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "52px 64px 44px",
          background: FIELD,
          color: INK,
          fontFamily: "Funnel Display",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>k2maan</div>

        <div style={{ display: "flex", alignItems: "center", gap: 72, marginTop: 28 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 118,
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: -4.5,
            }}
          >
            <span>Ketuman</span>
            <span>Vishwakarma</span>
          </div>
          <img
            src={photo}
            alt=""
            width={190}
            height={190}
            style={{ borderRadius: 190, border: "2px solid #ffffff" }}
          />
        </div>

        <div style={{ display: "flex", marginTop: 26, fontSize: 32, fontWeight: 600, color: MUTED }}>
          Forward Deployed Engineer at Bluecore
        </div>

        {/* The year strip: dots stacked over each year on one line */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", borderBottom: `3px solid ${INK}` }}>
            {span.map((year) => (
              <div
                key={year}
                style={{ display: "flex", flexDirection: "column-reverse", gap: 6, flex: 1, paddingBottom: 10 }}
              >
                {products
                  .filter((p) => p.year === year)
                  .map((p) => (
                    <div key={p.slug} style={{ width: 16, height: 16, borderRadius: 16, background: INK }} />
                  ))}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", marginTop: 8, fontSize: 18, fontWeight: 600, color: MUTED }}>
            {span.map((year) => (
              <div key={year} style={{ display: "flex", flex: 1 }}>
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Funnel Display", data: bold, weight: 700, style: "normal" },
        { name: "Funnel Display", data: semi, weight: 600, style: "normal" },
      ],
    },
  );
}
