export type ProjectType = 'front-end' | 'full-stack' | 'creative'

export type ProjectStatus = 'finished' | 'prototype' | 'in-progress'

export type StackCategory = 'front-end' | 'back-end' | 'database' | 'design' | 'tool'

export type StackItem = {
  name: string
  category: StackCategory
}

export type ProjectLinks = {
  demo?: string
  github?: string
}

export type Project = {
  id: string
  slug: string
  title: string
  subtitle: string
  shortDescription: string
  longDescription: string
  type: ProjectType
  status: ProjectStatus
  year: string
  role: string[]
  stack: StackItem[]
  tags: string[]
  thumbnail: string
  coverImage: string
  context: string
  objectives: string[]
  features: string[]
  links: ProjectLinks
  isFeatured: boolean
  order: number
}
