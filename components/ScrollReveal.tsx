"use client";
import { useEffect } from "react";

/**
 * ScrollReveal — attaches an IntersectionObserver to all elements
 * with .reveal, .reveal-rtl, or .reveal-scale classes.
 * When they enter the viewport, adds .visible to trigger CSS animation.
 * Mount once in layout.tsx or any client wrapper.
 */
export default function ScrollReveal() {
  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Immediately make everything visible
      document.querySelectorAll(".reveal, .reveal-rtl, .reveal-scale").forEach(el => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Observe all reveal elements
    const targets = document.querySelectorAll(".reveal, .reveal-rtl, .reveal-scale");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; // This component renders nothing — it just sets up the observer
}
