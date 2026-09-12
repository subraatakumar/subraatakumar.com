import { schedule } from "./schedule-data";

export const TOTAL_JOURNEY_DAYS = 365;
export const JOURNEY_START_DATE = new Date(Date.UTC(2026, 8, 14));

const weekdayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday"] as const;

export function daySlug(day: number) {
  return `day-${String(day).padStart(3, "0")}`;
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

  if (scheduledWeek && weekdayIndex < 5) {
    topic = scheduledWeek[weekdayKeys[weekdayIndex]];
  } else if (day === TOTAL_JOURNEY_DAYS) {
    topic = "Final 365-day retrospective";
  } else if (weekdayIndex === 5) {
    topic = "Weekly review and public build update";
  } else {
    topic = "Reflection, gaps, and next-week planning";
  }

  return { day, week, weekdayIndex, topic, date: getJourneyDate(day) };
}

export function dayNumberFromSlug(slug: string) {
  const match = /^day-(\d{3})$/.exec(slug);
  if (!match) return null;
  const day = Number(match[1]);
  return day >= 1 && day <= TOTAL_JOURNEY_DAYS ? day : null;
}
