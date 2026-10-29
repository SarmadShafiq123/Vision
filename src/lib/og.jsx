import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const ROYAL = "#1e3a9e";
const SKY = "#34a0e8";
const INK = "#0a1430";
const WHITE = "#ffffff";
const MUTED = "rgba(255,255,255,0.4)";
const DIM = "rgba(255,255,255,0.1)";

export function createOgImage(title, subtitle) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: INK,
          display: "flex",
          flexDirection: "column",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              background: ROYAL,
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: WHITE, fontSize: "24px", fontWeight: "700", fontFamily: "sans-serif" }}>
              V
            </span>
          </div>
          <span style={{ display: "flex", color: "#d8e2f0", fontSize: "18px", fontFamily: "sans-serif", fontWeight: "600" }}>
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: "flex", flex: "1", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", color: SKY, fontSize: "16px", fontFamily: "sans-serif", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>
            {subtitle || siteConfig.city}
          </div>
          <div
            style={{
              display: "flex",
              color: WHITE,
              fontSize: title.length > 40 ? "48px" : "60px",
              fontFamily: "sans-serif",
              fontWeight: "700",
              lineHeight: "1.1",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: `1px solid ${DIM}`,
            paddingTop: "20px",
            color: MUTED,
            fontSize: "14px",
            fontFamily: "sans-serif",
          }}
        >
          {siteConfig.city}, Pakistan
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
