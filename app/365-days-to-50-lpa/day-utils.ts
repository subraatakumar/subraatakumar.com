import { schedule } from "./schedule-data";

export const TOTAL_JOURNEY_DAYS = 365;
export const JOURNEY_START_DATE = new Date(Date.UTC(2026, 8, 14));

const weekdayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;

type DayUrlOverride = {
  url: string;
  title: string;
};

const dayUrlOverrides: Partial<Record<number, DayUrlOverride>> = {
  1: {
    url: "/notes/02-enterprise-ai-system-vol-1/ch-01-taking-AI-off-the-cloud-and-bringing-it-directly-to-local-hardware.html",
    title: "Taking AI off the cloud and bringing it directly to local hardware",
  },
};

export function daySlug(day: number) {
  return `day-${String(day).padStart(3, "0")}`;
}

export function getDayUrl(day: number) {
  return dayUrlOverrides[day]?.url ?? `/365-days-to-50-lpa/${daySlug(day)}/`;
}

export function getDayTitle(day: number, defaultTitle: string) {
  return dayUrlOverrides[day]?.title ?? defaultTitle;
}

export function getJourneyDate(day: number) {
  const date = new Date(JOURNEY_START_DATE);
  date.setUTCDate(date.getUTCDate() + day - 1);
  return date;
}

export function formatJourneyDate(day: number, short = false) {
  return new Intl.DateTimeFormat("en-IN", short
    ? { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }
    : { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
  ).format(getJourneyDate(day));
}

export function getDayPlan(day: number) {
  if (day < 1 || day > TOTAL_JOURNEY_DAYS) return null;

  const zeroBased = day - 1;
  const week = Math.floor(zeroBased / 7) + 1;
  const weekdayIndex = zeroBased % 7;
  const scheduledWeek = schedule[week - 1];
  let topic: string;

  if (day === TOTAL_JOURNEY_DAYS) {
    topic = "Final 365-day retrospective";
  } else if (scheduledWeek) {
    topic = scheduledWeek[weekdayKeys[weekdayIndex]];
  } else {
    topic = "We review the journey and plan the next professional step.";
  }

  const title = day === TOTAL_JOURNEY_DAYS ? topic
    : weekdayIndex === 3 ? "Review, repair, and practise"
    : weekdayIndex === 5 ? "Curate and share our evidence"
    : weekdayIndex === 6 ? "Reflect and plan our next step"
    : `Week ${week} · ${["Start our next increment", "Build our next increment", "Test and extend our increment", "", "Integrate and verify"][weekdayIndex]}`;

  return { day, week, weekdayIndex, title, topic, scheduledWeek, date: getJourneyDate(day) };
}

export function dayNumberFromSlug(slug: string) {
  const match = /^day-(\d{3})$/.exec(slug);
  if (!match) return null;
  const day = Number(match[1]);
  return day >= 1 && day <= TOTAL_JOURNEY_DAYS ? day : null;
}
