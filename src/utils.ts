import { getCollection } from "astro:content";

export const getBlogPosts = async () => {
  const posts = (await getCollection("blog")).sort(
    (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return posts;
};

// Get projects sorted by publication date
export const getProjects = async () => {
  const posts = (await getCollection("projects")).sort(
    (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return posts;
};
