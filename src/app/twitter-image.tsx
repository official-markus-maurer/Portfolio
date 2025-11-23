import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#1e1e2f,#0b1026)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 800, color: "white" }}>Markus Maurer</div>
          <div style={{ fontSize: 40, fontWeight: 700, color: "white" }}>Helpdesk Portfolio</div>
          <div style={{ fontSize: 26, color: "#cbd5e1" }}>AD/M365/Intune • VPN • PowerShell</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
