import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The browser-tab icon: a lowercase k in Funnel Display, plum-black on the lavender field
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 14,
          background: "#d6d8fc",
          color: "#1f1a26",
          fontFamily: "Funnel Display",
          fontSize: 52,
          fontWeight: 700,
          lineHeight: 1,
          paddingBottom: 6,
        }}
      >
        k
      </div>
    ),
    { ...size, fonts: [{ name: "Funnel Display", data: bold, weight: 700, style: "normal" }] },
  );
}
