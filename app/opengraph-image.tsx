import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.positioning}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0E0E0C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#E8E6E1",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 48,
            height: 2,
            background: "#E24A1B",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontFamily: "Georgia, serif",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 24,
              maxWidth: 860,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#8A8780",
            }}
          >
            {site.positioning}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#8A8780",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          {site.location}
        </div>
      </div>
    ),
    { ...size },
  );
}
