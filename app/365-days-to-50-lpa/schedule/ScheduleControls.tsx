"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  ["Python engineering", 1, 8],
  ["Backend systems", 9, 15],
  ["Azure foundations", 16, 20],
  ["LLM applications", 21, 28],
  ["Agents and MCP", 29, 35],
  ["Full-stack AI", 36, 44],
  ["Production release", 45, 48],
  ["Market readiness", 49, 52],
] as const;

function phaseStartForWeek(week: number) {
  return [...phases].reverse().find(([, start]) => week >= start)?.[1] ?? 1;
}

function getCurrentWeek() {
  const start = Date.UTC(2026, 8, 14);
  const today = new Date();
  const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.min(52, Math.max(1, Math.floor((todayUtc - start) / 604_800_000) + 1));
}

export default function ScheduleControls() {
  const controlsRef = useRef<HTMLElement>(null);
  const [activeWeek, setActiveWeek] = useState(1);

  useEffect(() => {
    let frame = 0;
    const updateFromScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = (controlsRef.current?.getBoundingClientRect().bottom ?? 80) + 18;
        let visibleWeek = 1;
        document.querySelectorAll<HTMLElement>(".d365-week").forEach((element, index) => {
          if (element.getBoundingClientRect().top <= marker) visibleWeek = index + 1;
        });
        setActiveWeek(visibleWeek);
      });
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, []);

  const goToWeek = (week: number) => {
    setActiveWeek(week);
    document.getElementById(`week-${week}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#week-${week}`);
  };

  return (
    <nav ref={controlsRef} className="d365-schedule-controls" aria-label="Schedule navigation">
      <label>
        <span>Phase</span>
        <select value={phaseStartForWeek(activeWeek)} onChange={(event) => goToWeek(Number(event.target.value))}>
          {phases.map(([name, start, end]) => <option value={start} key={name}>{name} · W{start}–{end}</option>)}
        </select>
      </label>
      <label>
        <span>Visible week</span>
        <select value={activeWeek} onChange={(event) => goToWeek(Number(event.target.value))}>
          {Array.from({ length: 52 }, (_, index) => <option value={index + 1} key={index + 1}>Week {index + 1}</option>)}
        </select>
      </label>
      <button type="button" onClick={() => goToWeek(getCurrentWeek())}>Go to current week <span aria-hidden="true">↓</span></button>
    </nav>
  );
}
