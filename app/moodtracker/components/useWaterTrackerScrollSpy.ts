"use client";

import { useEffect, useState } from "react";

export function useWaterTrackerScrollSpy(sectionIds: string[], initialId?: string) {
  const [activeSection, setActiveSection] = useState(initialId ?? sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) return;
    const topOffset = 120;

    const updateActiveSection = () => {
      const nodes = sectionIds
        .map((id) => document.getElementById(id))
        .filter((node): node is HTMLElement => Boolean(node));

      if (!nodes.length) return;

      // Pick the last section whose top has crossed the sticky-header offset.
      let current = nodes[0].id;
      for (const node of nodes) {
        const rect = node.getBoundingClientRect();
        if (rect.top - topOffset <= 0) {
          current = node.id;
        } else {
          break;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  const jumpTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { activeSection, jumpTo };
}

export const useMoodTrackerScrollSpy = useWaterTrackerScrollSpy;
