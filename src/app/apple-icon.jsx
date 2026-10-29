import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1e3a9e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: "110px",
            fontWeight: "700",
            fontFamily: "sans-serif",
          }}
        >
          V
        </span>
      </div>
    ),
    { ...size },
  );
}
