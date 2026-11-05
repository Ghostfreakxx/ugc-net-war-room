import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "UGC NET War Room",
    short_name: "NET War Room",
    description:
      "Daily UGC NET Political Science prep: MCQs, PYQ notes, traps, chronology and JRF predictions.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#020617",
    theme_color: "#020617",
    categories: ["education"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Daily MCQ", url: "/daily", icons: [{ src: "/icon-192.png", sizes: "192x192" }] },
      { name: "Paper 1", url: "/paper1", icons: [{ src: "/icon-192.png", sizes: "192x192" }] },
      { name: "Paper 2", url: "/paper2", icons: [{ src: "/icon-192.png", sizes: "192x192" }] },
    ],
  };
}
