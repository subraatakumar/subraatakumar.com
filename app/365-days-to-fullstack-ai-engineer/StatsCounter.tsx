"use client";

import { useEffect, useRef, useState } from "react";

type StatsCounterProps = {
  value: number;
  suffix?: string;
};

// Adapted from Vengeance UI's Stats Counter interaction.
// Uses native browser APIs to avoid adding a motion runtime for four numbers.
export default function StatsCounter({ value, suffix = "" }: StatsCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplayValue(value);
          return;
        }

        const start = performance.now();
        const duration = 900;
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}
