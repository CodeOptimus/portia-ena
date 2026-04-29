"use client";

import { useEffect, useRef } from "react";

export function useFadeIn() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.classList.add("visible");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px 8% 0px" }
    );

    observer.observe(el);

    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.05;
      if (inView) {
        reveal();
        observer.disconnect();
      }
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}