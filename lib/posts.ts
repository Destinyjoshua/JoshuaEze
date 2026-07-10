import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  image?: string;
  xThreadUrl?: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content/blog");

function isPublishedPost(fileName: string): boolean {
  return (
    fileName.endsWith(".md") &&
    !fileName.startsWith("_") &&
    !fileName.startsWith("TEMPLATE")
  );
}

function parsePost(fileName: string, fileContents: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    category: data.category || data.pillar || "Business Strategy",
    readTime: data.readTime || data.readingTime || "5 min",
    image: data.image || undefined,
    xThreadUrl: data.xThreadUrl || undefined,
    content,
  };
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter(isPublishedPost)
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      return parsePost(fileName, fileContents);
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  return parsePost(`${slug}.md`, fileContents);
}