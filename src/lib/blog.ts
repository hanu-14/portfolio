import matter from 'gray-matter'
import type { BlogPost } from '../types'

const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true })

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = []

  for (const [path, raw] of Object.entries(modules)) {
    if (typeof raw !== 'string') continue
    const { data, content } = matter(raw)
    const slug = path.split('/').pop()?.replace('.md', '') ?? ''
    posts.push({
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      tags: data.tags ?? [],
      content,
      published: data.published ?? true,
    })
  }

  return posts
    .filter(p => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find(p => p.slug === slug)
}
