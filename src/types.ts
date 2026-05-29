export type ProjectChannel = 'off' | 'on'

export type Project = {
  id: string
  channel: ProjectChannel
  title: string
  category: string
  year: string
  coverImage: string
  summary: string
  description: string
  images: string[]
  tags: string[]
}
