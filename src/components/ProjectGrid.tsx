import { getProjectsByChannel } from '../data/portfolio'
import type { ProjectChannel } from '../types'
import { ProjectCard } from './ProjectCard'
import './ProjectGrid.css'

type Props = {
  channel: ProjectChannel
  limit?: number
}

export function ProjectGrid({ channel, limit }: Props) {
  const items = getProjectsByChannel(channel)
  const visible = limit ? items.slice(0, limit) : items

  return (
    <div className="project-grid">
      {visible.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
