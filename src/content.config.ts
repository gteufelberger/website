import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

function blogLoader() {
  const inner = glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog/",
  });
  return {
    ...inner,
    name: "blog-with-date",
    load: async (context: Parameters<typeof inner.load>[0]) => {
      await inner.load({
        ...context,
        parseData: (async (props: Parameters<typeof context.parseData>[0]) => {
          let { id, data } = props;
          if (!data.pubDate) {
            const match = id.match(/^(\d{4}-\d{2}-\d{2})/);
            if (match) data = { ...data, pubDate: match[1] };
          }
          return context.parseData({ ...props, data });
        }) as typeof context.parseData,
      });
    },
  };
}

const blog = defineCollection({
  loader: blogLoader(),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    shortDescription: z.string().optional(),
    lastModified: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    customOGImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects/",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lastModified: z.coerce.date().optional(),
    // pins the project to the top of the listing
    featured: z.boolean().optional(),
    repo: z.url().optional(),
    url: z.url().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog, projects };
