import type { AccentColor, BaseColor } from "./colors";

export const SITE = "https://georg.teufelberger.dev";
export const BASE = "";

export const SITE_TITLE = "Georg's Website";
export const SITE_DESCRIPTION = "";
export const SITE_FAVICON = "🛰️";

// Footer
// (c) <YEAR> <NAME> - LICENSE
export const NAME = "Georg Teufelberger";
export const SOURCE_LINK = "https://github.com/gteufelberger/website";

// Colours
export const BASE_COLOR: BaseColor = "neutral";
export const ACCENT_COLOR: AccentColor = "cyan";

// will show all icons that are not empty in the footer as links
export const SOCIAL_LINKS: {
  FACEBOOK_URL?: string;
  TWITTER_URL?: string;
  GITHUB_URL?: string;
  INSTAGRAM_URL?: string;
  LINKEDIN_URL?: string;
  YOUTUBE_URL?: string;
  SUBSTACK_URL?: string;
  EMAIL?: string;
  SHOW_RSS?: boolean;
} = {
  SHOW_RSS: true,
};

export const MANUAL_DARK_MODE = true;
export const SHOW_IMAGES = true;
export const POSTS_PER_PAGE = 8;

// In header, if left blank will instead show SITE_TITLE
export const SITE_NAME = "";

// If true, will show the SITE_FAVICON in the header
export const SHOW_FAVICON_IN_HEADER = true;
