import type { BlogPost } from '../types'

const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const data: Record<string, unknown> = {}
  const lines = raw.split('\n')

  if (lines[0]?.trim() !== '---') return { data, content: raw }

  let endIndex = -1
  for (let i = 1; i < lines.length; i++) {
    if (lines[i]?.trim() === '---') {
      endIndex = i
      break
    }
    const colonIdx = lines[i].indexOf(':')
    if (colonIdx === -1) continue
    const key = lines[i].slice(0, colonIdx).trim()
    let val: unknown = lines[i].slice(colonIdx + 1).trim()

    if (val === 'true') val = true
    else if (val === 'false') val = false
    else if ((val as string).startsWith('[') && (val as string).endsWith(']')) {
      val = (val as string)
        .slice(1, -1)
        .split(',')
        .map(s => s.trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1'))
        .filter(Boolean)
    } else if ((val as string).startsWith('"') && (val as string).endsWith('"')) {
      val = (val as string).slice(1, -1)
    } else if ((val as string).startsWith("'") && (val as string).endsWith("'")) {
      val = (val as string).slice(1, -1)
    }

    data[key] = val
  }

  const content = endIndex !== -1 ? lines.slice(endIndex + 1).join('\n').trim() : raw
  return { data, content }
}

function loadPosts(): BlogPost[] {
  const posts: BlogPost[] = []

  for (const [path, raw] of Object.entries(modules)) {
    if (typeof raw !== 'string') continue
    const { data, content } = parseFrontmatter(raw)
    const slug = path.split('/').pop()?.replace('.md', '') ?? ''
    posts.push({
      slug,
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? '',
      excerpt: (data.excerpt as string) ?? '',
      tags: (data.tags as string[]) ?? [],
      content,
      published: (data.published as boolean) ?? true,
    })
  }

  return posts
    .filter(p => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllPosts(): BlogPost[] {
  return loadPosts()
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return loadPosts().find(p => p.slug === slug)
}
