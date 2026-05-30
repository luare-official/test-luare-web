import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "src", "content", "insights");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

/**
 * Get all post slugs from the content directory.
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs
    .readdirSync(contentDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/**
 * Get sorted metadata for all posts (newest first).
 */
export function getAllPosts(): PostMeta[] {
  const slugs = getAllSlugs();
  const posts = slugs.map((slug) => {
    const filePath = path.join(contentDirectory, `${slug}.md`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? "",
      category: (data.category as string) ?? "",
      excerpt: (data.excerpt as string) ?? "",
    };
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Get a single post by slug, including rendered HTML.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const result = await remark()
    .use(html, { sanitize: false })
    .process(content);

  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    category: (data.category as string) ?? "",
    excerpt: (data.excerpt as string) ?? "",
    contentHtml: result.toString(),
  };
}
