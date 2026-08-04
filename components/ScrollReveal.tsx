"use client";
import { useEffect } from "react";

/**
 * ScrollReveal — adds `.visible` to `.reveal` / `.reveal-rtl` / `.reveal-scale`
 * elements so their CSS entrance animation plays as they scroll into view.
 *
 * Hardened so a section can never get stuck invisible: on top of the
 * IntersectionObserver, anything at or above the current viewport bottom is
 * force-revealed (on load, on scroll, on resize, and via a short timer). That
 * covers the cases where the observer silently misses an element — tall
 * sections, client-side navigation, and hydration races. Only content still
 * below the fold stays hidden, so it still animates in when reached.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const selector = ".reveal, .reveal-rtl, .reveal-scale";
    const reveal = (el: Element) => el.classList.add("visible");
    const targets = Array.from(document.querySelectorAll(selector));

    // Respect reduced-motion: show everything immediately, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach(reveal);
      return;
    }

    // Reveal anything already scrolled into (or past) view.
    const revealInView = () => {
      for (const el of targets) {
        if (el.classList.contains("visible")) continue;
        if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => observer.observe(el));

    // Safety net for observer misses (tall sections, route changes, races).
    revealInView();
    const timer = window.setTimeout(revealInView, 1200);
    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("resize", revealInView);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      window.removeEventListener("scroll", revealInView);
      window.removeEventListener("resize", revealInView);
    };
  }, []);

  return null; // renders nothing — just wires up the reveal behavior
}
