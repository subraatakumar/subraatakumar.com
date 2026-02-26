export const SITE_URL = "https://subraatakumar.com";
export const SITE_NAME = "Subrata Kumar Das";
export const DEFAULT_OG_IMAGE = "/images/interview.png";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
