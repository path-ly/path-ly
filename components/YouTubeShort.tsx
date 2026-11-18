"use client";
import { useState } from "react";
import SiteIcon from "@/components/SiteIcon";

/**
 * Vertical YouTube video (Shorts) with a click-to-play facade.
 * Nothing loads from YouTube's player (and no YouTube cookies are set) until the
 * visitor presses play; then the privacy-enhanced youtube-nocookie player loads.
 */
export default function YouTubeShort({ id, title, maxWidth = 280 }: { id: string; title: string; maxWidth?: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{ width: "100%", maxWidth: `${maxWidth}px`, margin: "0 auto" }}>
      <div style={{
        position: "relative", aspectRatio: "9 / 16", borderRadius: "16px", overflow: "hidden",
        background: "#2D2D2D", boxShadow: "var(--shadow-card)",
      }}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`הפעלת הסרטון: ${title}`}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 0, border: 0, cursor: "pointer", background: "transparent" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <span style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: "64px", height: "64px", borderRadius: "50%", background: "rgba(158,79,88,0.92)",
              color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            }}>
              <SiteIcon name="play" size={28} />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
