import { Link } from 'react-router-dom'
import { getChannelPath } from '../data/portfolio'
import type { Project } from '../types'
import './ProjectCard.css'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const basePath = getChannelPath(project.channel)

  return (
    <Link to={`${basePath}/${project.id}`} className="project-card">
      <div className="project-card__media">
        <img src={project.coverImage} alt={project.title} loading="lazy" />
        <span className="project-card__overlay" aria-hidden />
      </div>
      <div className="project-card__meta">
        <h3>{project.title}</h3>
        <p>
          {project.category} · {project.year}
        </p>
      </div>
    </Link>
  )
}
