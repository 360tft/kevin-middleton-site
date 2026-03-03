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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#E5A11C",
          borderRadius: "36px",
        }}
      >
        <span
          style={{
            fontSize: "110px",
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1,
          }}
        >
          K
        </span>
      </div>
    ),
    { ...size }
  );
}
