export interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
}

export interface Skill {
  name: string
  category: string
  level: number
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
  published: boolean
}

export interface NavLink {
  label: string
  href: string
}
