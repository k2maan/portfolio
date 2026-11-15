import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The home-screen icon: the same k as the tab icon, full-bleed, since iOS rounds the corners itself
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const bold = await readFile(join(process.cwd(), "lib/fonts/funnel-display-700.woff"));
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#d6d8fc",
          color: "#1f1a26",
          fontFamily: "Funnel Display",
          fontSize: 132,
          fontWeight: 700,
          lineHeight: 1,
          paddingBottom: 14,
        }}
      >
        k
      </div>
    ),
    { ...size, fonts: [{ name: "Funnel Display", data: bold, weight: 700, style: "normal" }] },
  );
}
