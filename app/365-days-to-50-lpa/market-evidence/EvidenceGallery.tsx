"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const openings = [
  {
    company: "Aera Technology",
    role: "Senior AI / Machine Learning Engineer",
    location: "Pune · Hybrid",
    experience: "5–8 years",
    image: "/365-days-to-50-lpa/market-evidence/aera-ai-ml-engineer-2026-09-13.png",
    source: "https://jobs.lever.co/aeratechnology/05e71552-a936-4067-976e-fbad0a3698e0",
  },
  {
    company: "IICL",
    role: "AI Engineer",
    location: "Hyderabad · Hybrid / on-site",
    experience: "3–5 years",
    image: "/365-days-to-50-lpa/market-evidence/iicl-ai-engineer-2026-09-13.png",
    source: "https://www.iicl.in/careers/ai-engineer",
  },
  {
    company: "Sabrixa",
    role: "AI Engineer — RAG & Agents",
    location: "Gurugram / Remote India",
    experience: "1–5 years",
    image: "/365-days-to-50-lpa/market-evidence/sabrixa-ai-engineer-2026-09-13.png",
    source: "https://sabrixa.com/careers/ai-engineer",
  },
  {
    company: "Partython AI",
    role: "ML / AI Engineer",
    location: "Remote · India",
    experience: "3+ years · internships considered",
    image: "/365-days-to-50-lpa/market-evidence/partython-ml-ai-engineer-2026-09-13.png",
    source: "https://www.partython.com/careers/ml-engineer",
  },
];

export default function EvidenceGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const showPrevious = () => setActiveIndex((index) => (index - 1 + openings.length) % openings.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % openings.length);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 620px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (mediaQuery.matches) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + openings.length) % openings.length);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % openings.length);
      }
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="d365-evidence-gallery" aria-labelledby="evidence-gallery-title">
      <div className="d365-evidence-gallery-heading">
        <div>
          <p className="d365-kicker">Screenshot gallery · captured 13 Sep 2026</p>
          <h2 id="evidence-gallery-title">Current openings preserved.</h2>
          <p>Use the left and right arrow keys on desktop. On mobile, scroll vertically through every opening.</p>
        </div>
        <div className="d365-evidence-controls" aria-label="Evidence gallery controls">
          <button type="button" onClick={showPrevious} aria-label="Show previous opening"><ChevronLeft aria-hidden="true" /></button>
          <span aria-live="polite">{activeIndex + 1} / {openings.length}</span>
          <button type="button" onClick={showNext} aria-label="Show next opening"><ChevronRight aria-hidden="true" /></button>
        </div>
      </div>

      <div className="d365-evidence-stack">
        {openings.map((opening, index) => {
          const offset = (index - activeIndex + openings.length) % openings.length;
          const isActive = offset === 0;

          return (
            <article
              className={`d365-evidence-card${isActive ? " is-active" : ""}`}
              style={{ "--evidence-offset": offset } as React.CSSProperties}
              aria-hidden={!isMobile && !isActive}
              key={opening.company}
            >
              <div className="d365-evidence-card-meta">
                <div>
                  <span>{opening.company}</span>
                  <h3>{opening.role}</h3>
                  <p>{opening.location} · {opening.experience}</p>
                </div>
                <a href={opening.source} target="_blank" rel="noreferrer" tabIndex={isMobile || isActive ? 0 : -1}>
                  Live source <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
              <div className="d365-evidence-image-frame">
                <Image src={opening.image} alt={`${opening.company} ${opening.role} job opening captured on 13 September 2026`} width={1440} height={1000} priority={index === 0} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
