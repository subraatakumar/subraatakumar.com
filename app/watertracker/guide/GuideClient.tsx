"use client";
import React, { useState } from "react";
import Link from "next/link";

type Step = {
  title: string;
  body?: string;
  images?: { src: string; caption?: string }[];
};

export default function GuideClient({ steps, faq }: { steps: Step[]; faq: any[] }) {
  const [openImage, setOpenImage] = useState<{ src: string; caption?: string } | null>(null);

  return (
    <>
      <div className="wtg-wrap">
        <h1 className="wt-font-display">How To Use WaterTracker</h1>
        <p className="wtg-intro">
          This guide covers the fastest setup flow and the core features: drink management,
          intake logging, reminders, data protection, and backup/restore.
        </p>

        <div className="wtg-grid">
          {steps.map((step, index) => (
            <div key={step.title} className={`wtg-step ${step.images ? "has-images" : ""}`}>
              <div className="wtg-step-header">
                <span className="n">{index + 1}</span>
                <b>{step.title}</b>
              </div>
              <p>{step.body}</p>

              {step.images && step.images.length > 0 && (
                <div className="wtg-screens" aria-hidden={false}>
                  {step.images.map((img, imgIndex) => (
                    <figure key={img.src}>
                      <div className="img-wrap">
                        <img
                          src={img.src}
                          alt={img.caption}
                          role="button"
                          tabIndex={0}
                          onClick={() => setOpenImage({ src: img.src, caption: img.caption })}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") setOpenImage({ src: img.src, caption: img.caption });
                          }}
                          style={{ cursor: "pointer" }}
                        />
                        <div className="overlay">🔍 Click to enlarge</div>
                        <figcaption>
                          {img.caption ?? (imgIndex === 0 ? "Home screen — ml" : "Home screen — oz")}
                        </figcaption>
                      </div>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {openImage && (
          <div
            className="wtg-modal"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpenImage(null)}
          >
            <button
              className="close"
              aria-label="Close image"
              onClick={() => setOpenImage(null)}
            >
              ×
            </button>
            <div className="inner" onClick={(e) => e.stopPropagation()}>
              <img src={openImage.src} alt={openImage.caption} />
              {openImage.caption && <div className="caption">{openImage.caption}</div>}
            </div>
          </div>
        )}

        <div className="wtg-section">
          <h2 className="wt-font-display">Quick FAQ</h2>
          <div className="wtg-faq">
            {faq.map((item) => (
              <div key={item.q} className="wtg-faq-item">
                <b>{item.q}</b>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wtg-section">
          <h2 className="wt-font-display">Need More Help?</h2>
          <p style={{ margin: 0, color: "#4b5f89", lineHeight: 1.7 }}>
            If something is unclear or you hit an issue, share the exact device and app behavior
            so support can reproduce and guide you quickly.
          </p>
          <div className="wtg-actions">
            <Link href="/watertracker" className="wtg-btn wtg-btn-primary">Back To Landing Page</Link>
            <Link href="/watertracker/benefits" className="wtg-btn wtg-btn-ghost">Hydration Benefits</Link>
            <Link href="/contact" className="wtg-btn wtg-btn-ghost">Contact Support</Link>
          </div>
        </div>
      </div>
    </>
  );
}
