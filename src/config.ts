import type { AccentColor, BaseColor } from "./colors";

export const SITE = "https://georg.teufelberger.dev";
export const BASE = "";

export const SITE_TITLE = "Georg's Website";
export const SITE_DESCRIPTION = "";
export const SITE_FAVICON = "🛰️";

// Footer
// (c) <YEAR> <NAME> - LICENSE
export const NAME = "Georg Teufelberger";

// will be used in the footer as the license of the content (e.g. "All right reserved" or "CC-BY-SA 4.0")
export const LICENSE = "CC BY-NC-SA 4.0";
export const LICENSE_URL = "https://creativecommons.org/licenses/by-nc-sa/4.0/";

export const SOURCE_LINK = "https://github.com/gteufelberger/website";

// Colours
export const BASE_COLOR: BaseColor = "neutral";
export const ACCENT_COLOR: AccentColor = "cyan";

// will show all icons that are not empty in the footer as links
export const SOCIAL_LINKS: {
  GITHUB_URL?: string;
  LINKEDIN_URL?: string;
  YOUTUBE_URL?: string;
  SUBSTACK_URL?: string;
  EMAIL?: string;
} = {
  GITHUB_URL: "https://github.com/gteufelberger",
  LINKEDIN_URL: "https://www.linkedin.com/in/georg-teufelberger",
};

export const MANUAL_DARK_MODE = true;
export const SHOW_IMAGES = true;
export const POSTS_PER_PAGE = 8;

// shows a link to /blog/rss.xml on the blog list pages
export const SHOW_RSS = true;

// In header, if left blank will instead show SITE_TITLE
export const SITE_NAME = "";

// If true, will show the SITE_FAVICON in the header
export const SHOW_FAVICON_IN_HEADER = true;
