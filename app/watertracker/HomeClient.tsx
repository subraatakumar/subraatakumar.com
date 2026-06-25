"use client";

import Image from "next/image";
import Link from "next/link";
import { LineChart, Paintbrush2, Cloud, Smartphone, ChevronRight } from "lucide-react";
import { useWaterTrackerScrollSpy } from "./components/useWaterTrackerScrollSpy";

type HomeSection = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

type FluidChoiceCard = {
  name: string;
  icon: string;
  qty: string;
  hydration: string;
  tone: string;
};

type FluidChoiceGroup = {
  label: string;
  accent: string;
  drinks: FluidChoiceCard[];
};

type LanguageFlag = {
  code: string;
  name: string;
  flag: string;
  top: string;
  left: string;
  delay: string;
};

const FLUID_CHOICE_GROUPS: FluidChoiceGroup[] = [
  {
    label: "Water",
    accent: "#66d9ff",
    drinks: [
      { name: "Water", icon: "💧", qty: "250 ml", hydration: "100%", tone: "#38BDF8" },
      { name: "Mineral Water", icon: "💧", qty: "250 ml", hydration: "100%", tone: "#7DD3FC" },
    ],
  },
  {
    label: "Coffee",
    accent: "#c3926f",
    drinks: [
      { name: "Coffee", icon: "☕", qty: "250 ml", hydration: "98%", tone: "#8B5A3C" },
      { name: "Espresso", icon: "☕", qty: "60 ml", hydration: "86%", tone: "#6B3F24" },
    ],
  },
  {
    label: "Tea",
    accent: "#a4d96c",
    drinks: [
      { name: "Tea", icon: "🍵", qty: "250 ml", hydration: "99%", tone: "#65A30D" },
      { name: "Matcha", icon: "🍵", qty: "250 ml", hydration: "99%", tone: "#166534" },
    ],
  },
  {
    label: "Juice",
    accent: "#ffd36a",
    drinks: [
      { name: "Orange Juice", icon: "🍊", qty: "250 ml", hydration: "89%", tone: "#FB923C" },
      { name: "Lemonade", icon: "🍋", qty: "250 ml", hydration: "99%", tone: "#EAB308" },
    ],
  },
];

const LANGUAGE_COUNT = 59;

const LANGUAGE_FLAGS: LanguageFlag[] = [
  { code: "en", name: "English", flag: "🇺🇸", top: "6%", left: "52%", delay: "0s" },
  { code: "es", name: "Spanish", flag: "🇪🇸", top: "14%", left: "70%", delay: "0.2s" },
  { code: "fr", name: "French", flag: "🇫🇷", top: "26%", left: "82%", delay: "0.35s" },
  { code: "de", name: "German", flag: "🇩🇪", top: "42%", left: "87%", delay: "0.1s" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹", top: "58%", left: "82%", delay: "0.25s" },
  { code: "it", name: "Italian", flag: "🇮🇹", top: "74%", left: "69%", delay: "0.4s" },
  { code: "ru", name: "Russian", flag: "🇷🇺", top: "84%", left: "52%", delay: "0.15s" },
  { code: "ja", name: "Japanese", flag: "🇯🇵", top: "74%", left: "34%", delay: "0.3s" },
  { code: "ko", name: "Korean", flag: "🇰🇷", top: "58%", left: "21%", delay: "0.45s" },
  { code: "zh", name: "Chinese", flag: "🇨🇳", top: "42%", left: "16%", delay: "0.18s" },
  { code: "hi", name: "Hindi", flag: "🇮🇳", top: "26%", left: "21%", delay: "0.32s" },
  { code: "ar", name: "Arabic", flag: "🇸🇦", top: "14%", left: "34%", delay: "0.08s" },
  { code: "vi", name: "Vietnamese", flag: "🇻🇳", top: "31%", left: "53%", delay: "0.28s" },
  { code: "th", name: "Thai", flag: "🇹🇭", top: "42%", left: "63%", delay: "0.38s" },
  { code: "tr", name: "Turkish", flag: "🇹🇷", top: "53%", left: "53%", delay: "0.12s" },
  { code: "sw", name: "Swahili", flag: "🇰🇪", top: "42%", left: "42%", delay: "0.22s" },
];

const SECTIONS: HomeSection[] = [
  {
    id: "daily-tracking",
    title: "Track Intake In Seconds",
    summary:
      "Quick-add logging keeps hydration tracking fast. Switch between ml and oz anytime and see progress update instantly.",
    bullets: [
      "One-tap drink entry for daily consistency",
      "Supports ml and oz without resetting your data",
      "Clear progress view to stay on target",
    ],
    image: {
      src: "/watertrackerimages/5.png",
      alt: "Water Tracker home dashboard with hydration progress",
      caption: "Home dashboard with quick logging and unit toggle",
    },
  },
  {
    id: "reminders",
    title: "Reminder Schedule That Fits Your Day",
    summary:
      "Set reminder times, lead-time nudges, and optional follow-up alerts to build a reliable hydration routine.",
    bullets: [
      "Custom reminder time slots",
      "Lead-time and follow-up reminder options",
      "Sound and silent reminder modes",
    ],
    image: {
      src: "/watertrackerimages/4.png",
      alt: "Hydration reminder schedule screen in Water Tracker",
      caption: "Hydration goal and reminders on your schedule",
    },
  },
  {
    id: "drink-management",
    title: "Build Your Own Drink Setup",
    summary:
      "After choosing from the built-in catalog, you can create your own drink types with custom volume, icon, and color.",
    bullets: [
      "Add your own custom drink types",
      "Set icon, color, and default amount",
      "Keep logging aligned with real servings",
    ],
    image: {
      src: "/watertrackerimages/8.png",
      alt: "Custom drink type setup screen in Water Tracker",
      caption: "Create drink types with your own icon and volume",
    },
  },
  {
    id: "insights",
    title: "Trend Insights, Not Guesswork",
    summary:
      "Visual trends help you understand consistency and daily performance so you can improve hydration habits over time.",
    bullets: [
      "Daily consumption vs goal visualization",
      "History for habit review",
      "Actionable progress patterns",
    ],
    image: {
      src: "/watertrackerimages/9.png",
      alt: "Hydration trend chart screen in Water Tracker",
      caption: "Trend charts to measure consistency",
    },
  },
  {
    id: "privacy",
    title: "Privacy-First By Default",
    summary:
      "No mandatory account. Hydration logs stay on-device with optional local protection like PIN and biometric unlock.",
    bullets: [
      "No login required for core tracking",
      "Local-first data model",
      "PIN and biometric protection options",
    ],
    image: {
      src: "/watertrackerimages/1.png",
      alt: "Water Tracker privacy message screen",
      caption: "Built around local data privacy",
    },
  },
  {
    id: "backup-widgets",
    title: "Backup, Widgets, and Personalization",
    summary:
      "Backup and restore support, fluid widgets, and appearance themes make the app practical for long-term daily use.",
    bullets: [
      "Backup and restore tools",
      "Fluid intake widget support",
      "Appearance themes and customization",
    ],
    image: {
      src: "/watertrackerimages/2.png",
      alt: "Backup and restore screen in Water Tracker",
      caption: "Backup and restore support for safer continuity",
    },
  },
];

export default function HomeClient({ iosUrl, androidUrl }: { iosUrl?: string; androidUrl?: string }) {
  const { activeSection, jumpTo } = useWaterTrackerScrollSpy(SECTIONS.map((section) => section.id), SECTIONS[0].id);

  return (
    <section>
      <style>{`
        .wth-hero {
          position: relative;
          overflow: hidden;
          border-radius: 0;
          border: none;
          background:
            linear-gradient(106deg, rgba(3, 18, 48, 0.12) 12%, rgba(4, 24, 66, 0.42) 40%, rgba(8, 39, 92, 0.74) 68%, rgba(10, 51, 114, 0.86) 100%),
            url("/watertrackerimages/home_page_img1.png");
          background-size: cover;
          background-position: center;
          min-height: calc(100vh - 68px);
          padding: clamp(22px, 4vw, 42px);
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          margin-top: -26px;
          margin-bottom: 26px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .wth-hero-panel {
          width: min(530px, 100%);
          border: 1px solid rgba(228, 242, 255, 0.3);
          border-radius: 20px;
          background: linear-gradient(160deg, rgba(6, 26, 66, 0.72) 0%, rgba(9, 45, 106, 0.84) 100%);
          box-shadow: 0 18px 42px rgba(6, 20, 48, 0.34);
          padding: clamp(18px, 3vw, 30px);
          color: #eff8ff;
          margin-left: clamp(12px, 5vw, 110px);
        }
        .wth-hero-title {
          margin: 0;
          font-size: clamp(1.7rem, 3.8vw, 3rem);
          line-height: 1.06;
          letter-spacing: -0.03em;
          text-wrap: balance;
        }
        .wth-feature-ribbon {
          margin-top: 16px;
          display: block;
        }
        .wth-feature-badges {
          display: flex;
          gap: 8px;
          width: 100%;
          justify-content: space-between;
        }
        .wth-feature-badge-row {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 0;
          min-width: 0;
          min-height: clamp(100px, 10vw, 136px);
          padding: 8px 10px;
        }
        .wth-feature-badge-row::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/images/png-tree-award.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: clamp(120px, 100vw, 195px) auto;
          opacity: 0.95;
          filter: drop-shadow(0 5px 12px rgba(5, 19, 44, 0.42));
          pointer-events: none;
        }
        .wth-feature-badge {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: none;
          background: transparent;
          padding: 0;
          color: #e7f5ff;
          text-align: center;
          text-shadow: 0 2px 8px rgba(4, 22, 54, 0.74);
        }
        .wth-store-row {
          margin-top: 18px;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .wth-store-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 calc((100% - 10px) / 2);
          min-width: 0;
          width: calc((100% - 10px) / 2);
          height: 64px;
          border-radius: 12px;
          transition: transform 0.15s ease, filter 0.15s ease;
        }
        .wth-store-link:hover {
          transform: translateY(-1px);
          filter: brightness(1.04);
        }
        .wth-store-button {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .wth-store-button-play {
          transform: scale(1.5);
          transform-origin: center;
        }
        .wth-cta-row {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .wth-btn {
          text-decoration: none;
          min-height: 44px;
          border-radius: 12px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid transparent;
        }
        .wth-btn-primary {
          background: #b7e8ff;
          color: #0f326b;
          box-shadow: 0 8px 20px rgba(8, 17, 42, 0.32);
        }
        .wth-btn-secondary {
          background: transparent;
          color: #eaf7ff;
          border-color: rgba(234, 247, 255, 0.4);
        }
        .wth-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .wth-language-hero {
          position: relative;
          overflow: hidden;
          min-height: calc(100vh - 68px);
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          margin-bottom: 30px;
          padding: clamp(18px, 3vw, 34px);
          background:
            radial-gradient(circle at 20% 30%, rgba(111, 214, 255, 0.14), transparent 30%),
            radial-gradient(circle at 78% 25%, rgba(255, 205, 110, 0.12), transparent 26%),
            linear-gradient(125deg, #071a44 0%, #0a2f73 48%, #1255b0 100%);
          display: flex;
          align-items: center;
        }
        .wth-language-shell {
          width: min(1160px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(280px, 420px) minmax(0, 1fr);
          gap: clamp(18px, 3vw, 34px);
          align-items: center;
        }
        .wth-language-copy {
          color: #eff9ff;
        }
        .wth-language-kicker {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(181, 232, 255, 0.24);
          background: rgba(8, 31, 73, 0.34);
          color: #a6e5ff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .wth-language-title {
          margin: 14px 0 0;
          font-size: clamp(2rem, 4.4vw, 3.9rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          text-wrap: balance;
        }
        .wth-language-summary {
          margin: 14px 0 0;
          max-width: 36ch;
          font-size: 15px;
          line-height: 1.65;
          color: rgba(232, 245, 255, 0.84);
        }
        .wth-language-stat {
          margin-top: 18px;
          display: inline-flex;
          align-items: baseline;
          gap: 10px;
          padding: 14px 16px;
          border-radius: 20px;
          background: rgba(5, 24, 61, 0.32);
          border: 1px solid rgba(192, 236, 255, 0.18);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }
        .wth-language-stat strong {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1;
          color: #ffffff;
          letter-spacing: -0.05em;
        }
        .wth-language-stat span {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #9bdfff;
        }
        .wth-language-points {
          margin: 16px 0 0;
          display: grid;
          gap: 8px;
        }
        .wth-language-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 700;
          color: #eff8ff;
        }
        .wth-language-point strong {
          color: #9fe4ff;
        }
        .wth-language-dot {
          width: 9px;
          height: 9px;
          flex-shrink: 0;
          margin-top: 6px;
          border-radius: 999px;
          background: linear-gradient(135deg, #7ae0ff, #ffffff);
          box-shadow: 0 0 0 5px rgba(122, 224, 255, 0.12);
        }
        .wth-language-note {
          margin-top: 16px;
          padding: 12px 14px;
          border-radius: 18px;
          border: 1px solid rgba(188, 234, 255, 0.18);
          background: rgba(10, 36, 83, 0.34);
          color: rgba(233, 246, 255, 0.9);
          font-size: 12px;
          line-height: 1.55;
        }
        .wth-language-note strong {
          color: #9fe4ff;
        }
        .wth-language-art {
          position: relative;
          min-height: min(74vh, 680px);
          border-radius: 30px;
          border: 1px solid rgba(188, 234, 255, 0.16);
          background:
            radial-gradient(circle at 50% 50%, rgba(132, 225, 255, 0.1), transparent 33%),
            linear-gradient(180deg, rgba(240, 249, 255, 0.09) 0%, rgba(240, 249, 255, 0.04) 100%);
          box-shadow: 0 28px 60px rgba(3, 16, 45, 0.34);
          overflow: hidden;
        }
        .wth-language-art::before,
        .wth-language-art::after {
          content: "";
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          border: 1px dashed rgba(180, 230, 255, 0.16);
          pointer-events: none;
        }
        .wth-language-art::before {
          width: min(66%, 420px);
          height: min(66%, 420px);
        }
        .wth-language-art::after {
          width: min(84%, 560px);
          height: min(54%, 340px);
        }
        .wth-language-center {
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(-50%, -50%);
          width: min(42%, 260px);
          aspect-ratio: 1;
          border-radius: 999px;
          background: linear-gradient(160deg, rgba(255, 255, 255, 0.18), rgba(142, 219, 255, 0.08));
          border: 1px solid rgba(198, 239, 255, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          padding: 18px;
        }
        .wth-language-center strong {
          font-size: clamp(2rem, 4vw, 3.3rem);
          line-height: 1;
          color: #ffffff;
          letter-spacing: -0.05em;
        }
        .wth-language-center span {
          margin-top: 8px;
          font-size: 12px;
          line-height: 1.45;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #a8e7ff;
          max-width: 15ch;
        }
        .wth-language-orbit {
          position: absolute;
          inset: 0;
        }
        .wth-language-flag {
          position: absolute;
          width: clamp(56px, 7vw, 74px);
          aspect-ratio: 1;
          border-radius: 999px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          background: rgba(245, 251, 255, 0.97);
          border: 1px solid rgba(188, 234, 255, 0.45);
          box-shadow: 0 16px 28px rgba(7, 20, 55, 0.24);
          transform: translate(-50%, -50%);
          animation: wth-flag-float 4.8s ease-in-out infinite;
        }
        .wth-language-flag span {
          font-size: clamp(1.25rem, 2vw, 1.7rem);
          line-height: 1;
        }
        .wth-language-flag small {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #24416f;
        }
        @keyframes wth-flag-float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-7px); }
        }
        .wth-fluid-hero {
          position: relative;
          overflow: hidden;
          min-height: calc(100vh - 68px);
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          margin-bottom: 30px;
          padding: clamp(18px, 2.8vw, 30px);
          background:
            radial-gradient(circle at 15% 18%, rgba(96, 204, 255, 0.22), transparent 28%),
            radial-gradient(circle at 85% 24%, rgba(74, 130, 255, 0.2), transparent 30%),
            linear-gradient(135deg, #041a43 0%, #0b2f6f 48%, #0a4fa2 100%);
          display: flex;
          align-items: center;
        }
        .wth-fluid-shell {
          position: relative;
          z-index: 1;
          width: min(1160px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(260px, 360px) minmax(0, 1fr);
          gap: clamp(18px, 2.5vw, 28px);
          align-items: center;
        }
        .wth-fluid-copy {
          color: #eef8ff;
        }
        .wth-fluid-kicker {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9fe4ff;
          border: 1px solid rgba(183, 233, 255, 0.24);
          background: rgba(7, 26, 62, 0.32);
          backdrop-filter: blur(10px);
        }
        .wth-fluid-title {
          margin: 12px 0 0;
          font-size: clamp(1.9rem, 4.2vw, 3.7rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          text-wrap: balance;
        }
        .wth-fluid-summary {
          margin: 14px 0 0;
          max-width: 34ch;
          font-size: 15px;
          line-height: 1.65;
          color: rgba(232, 245, 255, 0.84);
        }
        .wth-fluid-points {
          margin: 14px 0 0;
          display: grid;
          gap: 8px;
        }
        .wth-fluid-point {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: #eff8ff;
          font-size: 13px;
          font-weight: 700;
        }
        .wth-fluid-point strong {
          color: #9fe4ff;
          font-weight: 800;
        }
        .wth-fluid-point-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          flex-shrink: 0;
          margin-top: 6px;
          background: linear-gradient(135deg, #6cdbff, #ffffff);
          box-shadow: 0 0 0 5px rgba(97, 219, 255, 0.12);
        }
        .wth-fluid-note {
          margin-top: 14px;
          padding: 11px 12px;
          border-radius: 16px;
          border: 1px solid rgba(188, 234, 255, 0.18);
          background: rgba(10, 36, 83, 0.34);
          color: rgba(233, 246, 255, 0.9);
          font-size: 12px;
          line-height: 1.55;
        }
        .wth-fluid-note strong {
          color: #9fe4ff;
        }
        .wth-fluid-board {
          position: relative;
          padding: clamp(14px, 1.8vw, 18px);
          border-radius: 24px;
          border: 1px solid rgba(189, 235, 255, 0.2);
          background: linear-gradient(180deg, rgba(240, 249, 255, 0.12) 0%, rgba(242, 250, 255, 0.08) 100%);
          box-shadow: 0 28px 60px rgba(3, 16, 45, 0.34);
          backdrop-filter: blur(16px);
        }
        .wth-fluid-board::before {
          content: "";
          position: absolute;
          inset: 14px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          pointer-events: none;
        }
        .wth-fluid-board-header {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .wth-fluid-board-title {
          margin: 0;
          font-size: 15px;
          font-weight: 800;
          color: #eef8ff;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .wth-fluid-search {
          min-width: min(100%, 250px);
          border-radius: 999px;
          padding: 9px 14px;
          border: 1px solid rgba(205, 239, 255, 0.18);
          background: rgba(5, 23, 57, 0.38);
          color: rgba(225, 241, 255, 0.82);
          font-size: 12px;
        }
        .wth-fluid-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 12px;
        }
        .wth-fluid-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          padding: 0 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #dbf4ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .wth-fluid-chip.active {
          background: rgba(103, 205, 255, 0.18);
          border-color: rgba(132, 223, 255, 0.4);
          color: #fff;
        }
        .wth-fluid-groups {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .wth-fluid-group {
          border-radius: 20px;
          border: 1px solid rgba(206, 239, 255, 0.16);
          background: rgba(4, 17, 43, 0.36);
          padding: 12px;
        }
        .wth-fluid-group-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }
        .wth-fluid-group-title {
          margin: 0;
          font-size: 14px;
          font-weight: 800;
          color: #eff8ff;
        }
        .wth-fluid-group-accent {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.04);
        }
        .wth-fluid-card-list {
          display: grid;
          gap: 8px;
        }
        .wth-fluid-card {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto auto auto;
          align-items: center;
          gap: 10px;
          border-radius: 16px;
          background: rgba(245, 251, 255, 0.96);
          padding: 10px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.65);
        }
        .wth-fluid-card-main {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }
        .wth-fluid-card-icon {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.44);
        }
        .wth-fluid-card-name {
          min-width: 0;
          display: flex;
          flex-direction: column;
        }
        .wth-fluid-card-name strong {
          font-size: 13px;
          color: #10244f;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .wth-fluid-card-name span {
          font-size: 10px;
          color: #61728f;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
        }
        .wth-fluid-stat {
          text-align: right;
          min-width: 52px;
        }
        .wth-fluid-stat strong {
          display: block;
          font-size: 12px;
          color: #10244f;
        }
        .wth-fluid-stat span {
          display: block;
          margin-top: 2px;
          font-size: 9px;
          color: #6a7e9f;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 800;
        }
        .wth-fluid-toggle {
          width: 40px;
          height: 24px;
          border-radius: 999px;
          background: linear-gradient(135deg, #49b8ff, #1e74f4);
          position: relative;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.32);
        }
        .wth-fluid-toggle::after {
          content: "";
          position: absolute;
          top: 3px;
          right: 3px;
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: #fff;
          box-shadow: 0 2px 6px rgba(8, 17, 42, 0.22);
        }
        .wth-fluid-board-footer {
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid rgba(203, 238, 255, 0.14);
        }
        .wth-fluid-footer-copy {
          color: rgba(230, 244, 255, 0.86);
          font-size: 11px;
          line-height: 1.45;
          max-width: 52ch;
        }
        .wth-fluid-footer-copy strong {
          color: #9fe4ff;
        }
        .wth-fluid-footer-action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #76d9ff, #3ba9ff);
          color: #05265d;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .wth-sidebar {
          width: 240px;
          flex-shrink: 0;
          position: sticky;
          top: 86px;
        }
        .wth-sidebar-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--wt-muted);
          margin: 0 0 10px;
          padding: 0 12px;
        }
        .wth-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wth-nav-item {
          border: none;
          text-align: left;
          cursor: pointer;
          width: 100%;
          padding: 9px 13px;
          border-radius: 11px;
          font-size: 13px;
          font-weight: 700;
          color: var(--wt-muted);
          background: transparent;
          transition: 0.2s ease;
        }
        .wth-nav-item:hover {
          background: rgba(79, 136, 255, 0.1);
        }
        .wth-nav-item.active {
          color: #fff;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          box-shadow: 0 5px 14px rgba(31, 79, 157, 0.2);
        }
        .wth-content {
          flex: 1;
          min-width: 0;
          display: grid;
          gap: 16px;
        }
        .wth-card {
          background: var(--wt-card);
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 22px;
          padding: 28px;
          box-shadow: 0 8px 24px rgba(16, 36, 79, 0.05);
          scroll-margin-top: 95px;
        }
        .wth-card h2 {
          margin: 0;
          font-size: clamp(1.35rem, 2.6vw, 2rem);
          color: var(--wt-navy-900);
          letter-spacing: -0.02em;
        }
        .wth-card p {
          margin: 12px 0 0;
          color: var(--wt-muted);
          line-height: 1.7;
          font-size: 15px;
        }
        .wth-feature-list {
          margin: 16px 0 0;
          display: grid;
          gap: 8px;
        }
        .wth-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--wt-navy-900);
          font-size: 14px;
          font-weight: 700;
        }
        .wth-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          margin-top: 6px;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          flex-shrink: 0;
        }
        .wth-shot {
          margin-top: 16px;
          border: 1px solid rgba(16, 36, 79, 0.08);
          border-radius: 16px;
          padding: 10px;
          background: #fff;
        }
        .wth-shot figure {
          margin: 0;
        }
        .wth-shot img {
          border-radius: 12px;
          width: 100%;
          height: auto;
        }
        .wth-shot figcaption {
          margin-top: 8px;
          font-size: 12px;
          color: var(--wt-muted);
          font-weight: 700;
        }
        .wth-faq {
          margin-top: 16px;
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 14px;
          background: #f8fcff;
          padding: 14px;
        }
        .wth-faq h3 {
          margin: 0 0 8px;
          font-size: 15px;
          color: var(--wt-navy-900);
        }
        .wth-faq p {
          margin: 0;
          font-size: 14px;
        }
        .wth-bottom-cta {
          margin-top: 4px;
          background: linear-gradient(140deg, var(--wt-navy-900) 0%, var(--wt-navy-700) 100%);
          border-radius: 22px;
          padding: 30px;
          color: #fff;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          justify-content: space-between;
        }
        .wth-bottom-cta h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(1.3rem, 2.4vw, 1.9rem);
        }
        .wth-bottom-cta p {
          margin: 7px 0 0;
          color: #d6edff;
          max-width: 620px;
        }
        .wth-mobile-jumps {
          display: none;
        }
        @media (max-width: 860px) {
          .wth-hero {
            justify-content: center;
            min-height: calc(100vh - 56px);
          }
          .wth-language-hero {
            min-height: auto;
            padding: 22px 14px 24px;
          }
          .wth-language-shell {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .wth-language-title {
            font-size: clamp(2rem, 12vw, 3rem);
          }
          .wth-language-summary {
            max-width: none;
          }
          .wth-language-art {
            min-height: 520px;
          }
          .wth-language-center {
            width: min(46%, 220px);
          }
          .wth-fluid-hero {
            min-height: auto;
            padding: 22px 14px 24px;
          }
          .wth-fluid-shell {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .wth-fluid-title {
            font-size: clamp(2rem, 12vw, 3rem);
          }
          .wth-fluid-summary {
            max-width: none;
          }
          .wth-fluid-groups {
            grid-template-columns: 1fr;
          }
          .wth-hero-panel {
            width: min(96%, 520px);
            margin-left: -70px;
            background: transparent;
            border-color: transparent;
            box-shadow: none;
            margin-top: -30px;
          }
          .wth-feature-ribbon {
            margin-top: 14px;
            margin-left: -40px;
          }
          .wth-feature-badges {
            display: grid;
            gap: 10px;
            justify-items: start;
            width: auto;
          }
          .wth-feature-badge-row {
            width: clamp(220px, 58vw, 290px);
            min-height: clamp(132px, 34vw, 188px);
            justify-self: start;
            justify-content: center;
          }
          .wth-feature-badge-row::before {
            inset: 0;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: 100% auto;
          }
          .wth-feature-badge {
            font-size: 11px;
            width: 62%;
            margin: 0 auto;
            line-height: 1.28;
          }
          .wth-store-row {
            flex-direction: column;
            align-items: stretch;
          }
          .wth-store-link {
            justify-content: center;
            width: 210px;
            height: 62px;
            flex: 0 0 auto;
          }
          .wth-store-button-play {
            transform: scale(1.33);
            transform-origin: center;
          }
          .wth-layout { flex-direction: column; }
          .wth-sidebar { display: none; }
          .wth-mobile-jumps {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 8px;
            padding-bottom: 8px;
            margin-bottom: 4px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .wth-mobile-jumps::-webkit-scrollbar { display: none; }
          .wth-mobile-jumps button {
            border: 1px solid rgba(16, 36, 79, 0.15);
            background: rgba(255, 255, 255, 0.78);
            color: var(--wt-navy-900);
            border-radius: 999px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            padding: 8px 12px;
            white-space: nowrap;
          }
          .wth-card { padding: 22px 16px; }
        }
        @media (max-width: 760px) {
          .wth-hero {
            margin-top: -22px;
          }
          .wth-language-art {
            min-height: 460px;
          }
          .wth-language-flag {
            width: 58px;
          }
          .wth-fluid-card {
            grid-template-columns: minmax(0, 1fr) auto auto auto;
          }
          .wth-store-link {
            width: 196px;
            height: 58px;
          }
        }
      `}</style>

      <div className="wth-hero">
        <div className="wth-hero-panel">
          <h1 className="wt-font-display wth-hero-title">Water Tracker N Reminder</h1>
          <div className="wth-feature-ribbon" aria-label="Water Tracker core features">
            <div className="wth-feature-badges">
              <div className="wth-feature-badge-row">
                <span className="wth-feature-badge">
                  <span>Offline</span>
                  <span>No Login</span>
                  <span>Private</span>
                </span>
              </div>
              <div className="wth-feature-badge-row">
                <span className="wth-feature-badge">
                  <span>Smart</span>
                  <span>Reminders</span>
                </span>
              </div>
              <div className="wth-feature-badge-row">
                <span className="wth-feature-badge">
                  <span>Insightful</span>
                  <span>Trend</span>
                  <span>Charts</span>
                </span>
              </div>
            </div>
          </div>
          <div className="wth-store-row">
            {iosUrl ? (
              <a href={iosUrl} target="_blank" rel="noopener noreferrer" className="wth-store-link" aria-label="Download on the App Store">
                <Image
                  src="/images/appstore-button-download.svg"
                  alt="Download on the App Store"
                  width={240}
                  height={80}
                  className="wth-store-button"
                />
              </a>
            ) : null}
            {androidUrl ? (
              <a href={androidUrl} target="_blank" rel="noopener noreferrer" className="wth-store-link" aria-label="Get it on Google Play">
                <Image
                  src="/images/playstore-button-download.png"
                  alt="Get it on Google Play"
                  width={646}
                  height={250}
                  className="wth-store-button wth-store-button-play"
                />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <section className="wth-fluid-hero" aria-labelledby="choose-your-fluid-title">
        <div className="wth-fluid-shell">
          <div className="wth-fluid-copy">
            <div className="wth-fluid-kicker">Feature Spotlight</div>
            <h2 id="choose-your-fluid-title" className="wt-font-display wth-fluid-title">
              Choose Your Fluid
            </h2>
            <p className="wth-fluid-summary">
              Water Tracker lets you choose from a real drink library, keep your active list focused on what you actually drink,
              and fine-tune default serving sizes before you start logging.
            </p>

            <div className="wth-fluid-points" role="list" aria-label="Choose Your Fluid highlights">
              <div className="wth-fluid-point" role="listitem">
                <span className="wth-fluid-point-dot" aria-hidden="true" />
                <span><strong>Browse by category:</strong> Water, Coffee, Tea, and Juice stay easy to scan inside the actual picker.</span>
              </div>
              <div className="wth-fluid-point" role="listitem">
                <span className="wth-fluid-point-dot" aria-hidden="true" />
                <span><strong>Set realistic defaults:</strong> each drink can carry its own quantity so quick logging stays accurate.</span>
              </div>
              <div className="wth-fluid-point" role="listitem">
                <span className="wth-fluid-point-dot" aria-hidden="true" />
                <span><strong>See hydration impact:</strong> every option uses the app&apos;s hydration values, not a one-size-fits-all assumption.</span>
              </div>
            </div>

            <div className="wth-fluid-note">
              <strong>This is the real feature flow:</strong> free users can choose up to 3 fluids, and Pro unlocks a broader drink library for more personalized tracking.
            </div>
          </div>

          <div className="wth-fluid-board" aria-label="Choose Your Fluid preview">
            <div className="wth-fluid-board-header">
              <p className="wth-fluid-board-title">Choose Your Fluid</p>
              <div className="wth-fluid-search">Search a drink type</div>
            </div>

            <div className="wth-fluid-chip-row" aria-label="Drink categories">
              <span className="wth-fluid-chip active">Water</span>
              <span className="wth-fluid-chip">Coffee</span>
              <span className="wth-fluid-chip">Tea</span>
              <span className="wth-fluid-chip">Juice</span>
              <span className="wth-fluid-chip">All</span>
            </div>

            <div className="wth-fluid-groups">
              {FLUID_CHOICE_GROUPS.map((group) => (
                <section key={group.label} className="wth-fluid-group" aria-label={`${group.label} drink choices`}>
                  <div className="wth-fluid-group-head">
                    <h3 className="wth-fluid-group-title">{group.label}</h3>
                    <span className="wth-fluid-group-accent" style={{ background: group.accent }} aria-hidden="true" />
                  </div>

                  <div className="wth-fluid-card-list">
                    {group.drinks.map((drink) => (
                      <article key={drink.name} className="wth-fluid-card">
                        <div className="wth-fluid-card-main">
                          <span className="wth-fluid-card-icon" style={{ background: drink.tone }} aria-hidden="true">
                            {drink.icon}
                          </span>
                          <span className="wth-fluid-card-name">
                            <strong>{drink.name}</strong>
                            <span>Default quantity</span>
                          </span>
                        </div>
                        <span className="wth-fluid-stat">
                          <strong>{drink.qty}</strong>
                          <span>Qty</span>
                        </span>
                        <span className="wth-fluid-stat">
                          <strong>{drink.hydration}</strong>
                          <span>Hydration</span>
                        </span>
                        <span className="wth-fluid-toggle" aria-hidden="true" />
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="wth-fluid-board-footer">
              <div className="wth-fluid-footer-copy">
                Selected drinks move into <strong>Manage Drinks</strong>, where your daily logging stays personal, faster, and more accurate.
              </div>
              <div className="wth-fluid-footer-action">
                Real app feature <ChevronRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wth-language-hero" aria-labelledby="watertracker-language-title">
        <div className="wth-language-shell">
          <div className="wth-language-copy">
            <div className="wth-language-kicker">Global Access</div>
            <h2 id="watertracker-language-title" className="wt-font-display wth-language-title">
              Hydration Support In {LANGUAGE_COUNT} Languages
            </h2>
            <p className="wth-language-summary">
              Water Tracker is built for a global audience, with real in-app language support that helps more people set goals,
              log drinks, and follow reminders in the language they understand best.
            </p>

            <div className="wth-language-stat">
              <strong>{LANGUAGE_COUNT}</strong>
              <span>Supported app languages</span>
            </div>

            <div className="wth-language-points" role="list" aria-label="Language support highlights">
              <div className="wth-language-point" role="listitem">
                <span className="wth-language-dot" aria-hidden="true" />
                <span><strong>Localized for real use:</strong> setup, tracking, and reminders become easier to follow day after day.</span>
              </div>
              <div className="wth-language-point" role="listitem">
                <span className="wth-language-dot" aria-hidden="true" />
                <span><strong>Broader reach:</strong> the app supports users across major global and regional languages.</span>
              </div>
              <div className="wth-language-point" role="listitem">
                <span className="wth-language-dot" aria-hidden="true" />
                <span><strong>Practical accessibility:</strong> language choice helps make hydration habits simpler for more households worldwide.</span>
              </div>
            </div>

            <div className="wth-language-note">
              <strong>Verified from the app language pack:</strong> this showcase reflects the actual supported language list used by Water Tracker.
            </div>
          </div>

          <div className="wth-language-art" aria-label={`Water Tracker supports ${LANGUAGE_COUNT} languages`}>
            <div className="wth-language-center">
              <strong>{LANGUAGE_COUNT}</strong>
              <span>Languages inside the actual Water Tracker app</span>
            </div>
            <div className="wth-language-orbit">
              {LANGUAGE_FLAGS.map((item) => (
                <div
                  key={item.code}
                  className="wth-language-flag"
                  style={{ top: item.top, left: item.left, animationDelay: item.delay }}
                  aria-label={item.name}
                  title={item.name}
                >
                  <span aria-hidden="true">{item.flag}</span>
                  <small>{item.code.toUpperCase()}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="wth-mobile-jumps" aria-label="Jump to sections">
        {SECTIONS.map((section) => (
          <button key={section.id} type="button" onClick={() => jumpTo(section.id)}>
            {section.title}
          </button>
        ))}
      </div>

      <div className="wth-layout">
        <aside className="wth-sidebar" aria-label="Water tracker sections">
          <p className="wth-sidebar-title">Explore</p>
          <div className="wth-nav-list">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => jumpTo(section.id)}
                className={`wth-nav-item ${activeSection === section.id ? "active" : ""}`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        <div className="wth-content">
          {SECTIONS.map((section) => (
            <article id={section.id} key={section.id} className="wth-card">
              <h2 className="wt-font-display">{section.title}</h2>
              <p>{section.summary}</p>

              <div className="wth-feature-list" role="list" aria-label={`${section.title} highlights`}>
                {section.bullets.map((item) => (
                  <div className="wth-feature-item" key={item} role="listitem">
                    <span className="wth-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {section.image ? (
                <div className="wth-shot">
                  <figure>
                    <Image src={section.image.src} alt={section.image.alt} width={1242} height={2688} sizes="(max-width: 860px) 100vw, 720px" />
                    <figcaption>{section.image.caption}</figcaption>
                  </figure>
                </div>
              ) : null}
            </article>
          ))}

          <div className="wth-faq">
            <h3>Is this a good water reminder app for daily use?</h3>
            <p>
              Yes. It is built for practical daily tracking with quick drink logging, schedule-based hydration reminders,
              and privacy-first local storage.
            </p>
          </div>

          <div className="wth-bottom-cta">
            <div>
              <h2 className="wt-font-display">Ready To Build Better Hydration Habits?</h2>
              <p>
                Open the full guide for setup steps, then review hydration benefits to make your intake plan sustainable.
              </p>
            </div>
            <div className="wth-cta-row" style={{ marginTop: 0 }}>
              <Link href="/watertracker/guide" className="wth-btn wth-btn-primary">
                Open Guide <ChevronRight size={14} />
              </Link>
              <Link href="/watertracker/benefits" className="wth-btn wth-btn-secondary">Read Benefits</Link>
            </div>
          </div>

          <div className="wth-faq">
            <h3>How is this different from a basic water tracker app?</h3>
            <p>
              Water Tracker N Reminder combines reminders, custom drinks, trend insights, backup support, widgets,
              and on-device privacy controls in one app flow.
            </p>
          </div>

          <div className="wth-faq">
            <h3>Need implementation-level walkthrough?</h3>
            <p>
              See the complete <Link href="/watertracker/guide" style={{ color: "var(--wt-navy-700)", fontWeight: 800 }}>WaterTracker guide</Link> to set goals,
              reminders, drink types, and backup options from start to finish.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Smartphone size={16} />
            <p style={{ margin: 0 }}>
              Looking for balanced hydration science? Read <Link href="/watertracker/benefits" style={{ color: "var(--wt-navy-700)", fontWeight: 800 }}>Benefits of Balanced Drinking</Link>.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Cloud size={16} />
            <p style={{ margin: 0 }}>
              For backup and restore details, open the guide section dedicated to recovery flow and safe device migration.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Paintbrush2 size={16} />
            <p style={{ margin: 0 }}>
              Personalization includes themes and appearance controls to match your routine and preference.
            </p>
          </div>

          <div className="wth-faq" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <LineChart size={16} />
            <p style={{ margin: 0 }}>
              Trend charts turn logs into insights, helping you see consistency and improve over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
