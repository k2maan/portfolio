import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The link preview, set like the hero in dark mode: the K. mark, the kicker line, the name at
// poster size ending on a red full stop, the role along one rule, and the dot portrait right of
// KETUMAN. lib/og/dot-portrait.png is a still render of components/dot-portrait.tsx.

export const alt = "Ketuman Vishwakarma, Forward Deployed Engineer at Bluecore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#f2f2f2";
const MUTED = "#9a9a9a";
const SIGNAL = "#ff4a3d";

export default async function OpengraphImage() {
  const [portrait, archivo] = await Promise.all([
    readFile(join(process.cwd(), "lib/og/dot-portrait.png")),
    // Archivo at weight 800, width 62: the display face used for the name on the site
    readFile(join(process.cwd(), "lib/fonts/archivo-800-62.ttf")),
  ]);
  const dots = `data:image/png;base64,${portrait.toString("base64")}`;
  const name = { fontSize: 150, lineHeight: 0.84, letterSpacing: -3 };

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: 56,
          background: "#000",
          color: INK,
          fontFamily: "Archivo",
        }}
      >
        <img src={dots} alt="" width={330} height={391} style={{ position: "absolute", right: 56, top: 24 }} />
        <div style={{ display: "flex", alignItems: "flex-end", fontSize: 56, lineHeight: 0.8 }}>
          K
          <div style={{ width: 15, height: 15, borderRadius: 15, background: SIGNAL, marginLeft: 2 }} />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            marginBottom: 24,
            width: 660,
            fontSize: 24,
            lineHeight: 1.3,
            color: MUTED,
          }}
        >
          I embed with customers’ engineering teams, build whatever it takes to get our product live in their stack,
          and keep it running in production.
        </div>
        <div style={{ display: "flex", ...name }}>KETUMAN</div>
        <div style={{ display: "flex", alignItems: "flex-end", ...name }}>
          VISHWAKARMA
          <div
            style={{ width: 30, height: 30, borderRadius: 30, background: SIGNAL, marginLeft: 7, marginBottom: 6 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 24,
            paddingTop: 16,
            borderTop: `1px solid ${INK}`,
            fontSize: 24,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 10, background: SIGNAL, marginRight: 12 }} />
          Forward Deployed Engineer at Bluecore
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Archivo", data: archivo, weight: 800, style: "normal" }] },
  );
}
