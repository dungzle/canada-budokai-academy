import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0a1110 0%, #1a1c1c 100%)",
          color: "#f5ebc8",
          padding: "54px 64px",
          border: "3px solid #b8963d",
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: 1.4, fontWeight: 700 }}>
          CANADA BUDOKAI ACADEMY
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: "90%",
              color: "#d4af37",
            }}
          >
            Traditional Karate in Victoria and Duncan, BC
          </div>
          <div style={{ fontSize: 30, color: "#f3f2ee" }}>
            Beginner-friendly classes for youth and adults
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#eddc9f", letterSpacing: 0.6 }}>
          Vancouver Island, British Columbia
        </div>
      </div>
    ),
    size,
  );
}
