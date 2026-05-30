import { Link } from 'react-router-dom'
import { ProjectChannelIntro } from '../components/ProjectChannelIntro'
import { ProjectGrid } from '../components/ProjectGrid'
import { projectChannels, site } from '../data/portfolio'
import './HomePage.css'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__content page-width">
          <p className="hero__eyebrow">Portfolio</p>
          <h1 className="hero__title">{site.fullName}</h1>
          <p className="hero__role">{site.role}</p>
          <p className="hero__intro-title">{site.introTitle}</p>
          <p className="hero__intro-subtitle">{site.introSubtitle}</p>
          <div className="hero__actions">
            <Link to={projectChannels.off.path} className="btn btn--primary">
              OFF PROJECTS
            </Link>
            <Link to={projectChannels.on.path} className="btn btn--ghost">
              ON PROJECTS
            </Link>
          </div>
        </div>
      </section>

      <section className="home-channel page-width">
        <ProjectChannelIntro channel="off" />
        <ProjectGrid channel="off" limit={2} />
      </section>

      <section className="home-channel page-width">
        <ProjectChannelIntro channel="on" />
        <ProjectGrid channel="on" limit={2} />
      </section>
    </>
  )
}
