import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Kevin Middleton - Football AI Expert";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const profileBytes = await readFile(
    join(process.cwd(), "public", "images", "kevin-profile.png")
  );
  const profileBase64 = `data:image/png;base64,${profileBytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          background: "#edeadb",
          padding: "60px 80px",
          gap: "60px",
        }}
      >
        {/* Profile photo */}
        <img
          src={profileBase64}
          width={220}
          height={220}
          style={{ borderRadius: "110px" }}
        />

        {/* Text block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#E5A11C",
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
            }}
          >
            Kevin Middleton
          </span>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.15,
            }}
          >
            I build AI tools that give football coaches answers in seconds.
          </span>
          <span
            style={{
              fontSize: "22px",
              color: "#555",
              lineHeight: 1.4,
            }}
          >
            8 live products. 10,000+ coaches. 40+ countries.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
