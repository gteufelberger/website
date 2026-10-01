import rss from "@astrojs/rss";
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  BASE,
  NAME,
  LICENSE,
  LICENSE_URL,
} from "../config.ts";
import { getBlogPosts } from "../utils";

export async function GET(context) {
  const posts = await getBlogPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site + BASE,
    customData: LICENSE
      ? `<copyright>© ${new Date().getFullYear()} ${NAME} — licensed under ${LICENSE} (${LICENSE_URL})</copyright>`
      : undefined,
    items: posts.map((post) => ({
      ...post.data,
      link: `${BASE}/blog/${post.id}/`,
    })),
  });
}
