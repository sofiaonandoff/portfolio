import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getChannelPath, getProject } from '../data/portfolio'
import './ProjectPage.css'

export function ProjectPage() {
  const { projectId } = useParams()
  const project = projectId ? getProject(projectId) : undefined
  const [aspectRatios, setAspectRatios] = useState<Record<string, number>>({})

  useEffect(() => {
    if (!project) return
    setAspectRatios({}) // reset when project changes
    project.images.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setAspectRatios((prev) => ({
          ...prev,
          [src]: img.naturalWidth / img.naturalHeight,
        }))
      }
    })
  }, [project])

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

  // Split description by double newlines into paragraphs
  const paragraphs = project.description.split('\n\n').filter((p) => p.trim())
  const introParagraph = paragraphs[0] || ''
  const remainingParagraphs = paragraphs.slice(1)

  // Use `coverImage` as hero/cover only.
  // If the cover image accidentally exists inside `images`, exclude it from the gallery.
  const bodyImages = project.images.filter((src) => src !== project.coverImage)

  // Interleave remaining paragraphs into the gallery images
  const N = bodyImages.length
  const M = remainingParagraphs.length
  const groupSize = M > 0 ? Math.ceil(N / (M + 1)) : N

  const galleryItems: Array<
    | { type: 'image'; src: string }
    | { type: 'text'; text: string }
  > = []

  // No body images: still render editorial text blocks.
  if (N === 0) {
    for (let j = 0; j < M; j++) {
      galleryItems.push({ type: 'text', text: remainingParagraphs[j] })
    }
  } else {
    for (let i = 0; i < N; i++) {
      galleryItems.push({ type: 'image', src: bodyImages[i] })

      const nextImgIndex = i + 1
      if (M > 0 && nextImgIndex % groupSize === 0 && nextImgIndex <= N) {
        const pIndex = Math.floor(nextImgIndex / groupSize) - 1
        if (pIndex < M) {
          galleryItems.push({ type: 'text', text: remainingParagraphs[pIndex] })
        }
      }
    }

    const insertedCount = Math.floor(N / groupSize)
    for (let j = insertedCount; j < M; j++) {
      galleryItems.push({ type: 'text', text: remainingParagraphs[j] })
    }
  }

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
              {project.category} · {project.year} · {project.location}
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
        {introParagraph && (
          <p className="project-page__description">{introParagraph}</p>
        )}
      </div>

      <div className="project-page__gallery page-width">
        {galleryItems.map((item, index) => {
          if (item.type === 'image') {
            const aspect = aspectRatios[item.src]
            // Default to landscape layout (span 2) if not loaded yet
            const isLandscape = aspect === undefined ? true : aspect >= 1.2
            const className = isLandscape
              ? 'project-page__figure project-page__figure--landscape'
              : 'project-page__figure project-page__figure--portrait'

            return (
              <figure key={item.src + index} className={className}>
                <img src={item.src} alt="" loading="lazy" />
              </figure>
            )
          } else {
            return (
              <div
                key={`text-${index}`}
                className="project-page__editorial-text"
              >
                <div className="project-page__editorial-text-inner">
                  <p>{item.text}</p>
                </div>
              </div>
            )
          }
        })}
      </div>
    </article>
  )
}

