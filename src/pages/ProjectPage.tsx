import { Link, useParams } from 'react-router-dom'
import { getChannelPath, getProject } from '../data/portfolio'
import './ProjectPage.css'

export function ProjectPage() {
  const { projectId } = useParams()
  const project = projectId ? getProject(projectId) : undefined

  if (!project) {
    return (
      <div className="project-page page-width">
        <p className="project-page__missing">Project not found.</p>
        <Link to="/" className="btn btn--ghost">
          Back to home
        </Link>
      </div>
    )
  }

  const listPath = getChannelPath(project.channel)

  return (
    <article className="project-page">
      <header className="project-page__hero">
        <img src={project.coverImage} alt={project.title} />
      </header>

      <div className="project-page__intro page-width">
        <Link to={listPath} className="project-page__back">
          ← Back to projects
        </Link>
        <div className="project-page__headline">
          <div>
            <p className="project-page__category">
              {project.category} · {project.year}
            </p>
            <h1>{project.title}</h1>
            <p className="project-page__summary">{project.summary}</p>
          </div>
          <ul className="project-page__tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <p className="project-page__description">{project.description}</p>
      </div>

      <div className="project-page__gallery">
        {project.images.map((src, index) => (
          <figure key={src + index} className="project-page__figure">
            <img src={src} alt="" loading="lazy" />
          </figure>
        ))}
      </div>
    </article>
  )
}
