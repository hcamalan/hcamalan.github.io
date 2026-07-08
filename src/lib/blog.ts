import { getCollection } from 'astro:content';

export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getCategories() {
  const posts = await getPosts();
  const map = new Map<string, { label: string; count: number }>();
  for (const post of posts) {
    const slug = slugifyCategory(post.data.category);
    const existing = map.get(slug);
    if (existing) existing.count += 1;
    else map.set(slug, { label: post.data.category, count: 1 });
  }
  return Array.from(map.entries()).map(([slug, v]) => ({ slug, ...v }));
}
