import { AboutTimeline } from '../components/AboutTimeline'
import { site } from '../data/portfolio'
import './AboutPage.css'

const educationTimeline = site.education.map((entry) => ({
  id: entry.id,
  period: entry.period,
  location: entry.location,
  title: entry.institution,
  lines: entry.lines,
}))

const experienceTimeline = site.experience.map((entry) => ({
  id: entry.id,
  period: entry.period,
  title: entry.organization,
  lines: entry.lines,
  bulleted: true as const,
}))

export function AboutPage() {
  return (
    <div className="about-page page-width">
      <div className="about-page__grid">
        <header>
          <h1>About</h1>
        </header>
        <div className="about-page__content">
          <p className="about-page__lead">
            I’m {site.fullName}, a {site.role.toLowerCase()} based in{' '}
            {site.location}.
          </p>
          <ul className="about-page__intro">
            {site.intro.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <section
            className="about-page__section"
            aria-labelledby="education-heading"
          >
            <h2 id="education-heading" className="about-page__section-title">
              Education
            </h2>
            <AboutTimeline entries={educationTimeline} />
          </section>

          <section
            className="about-page__section"
            aria-labelledby="experience-heading"
          >
            <h2 id="experience-heading" className="about-page__section-title">
              Experience
            </h2>
            <AboutTimeline entries={experienceTimeline} />
          </section>

          <section
            className="about-page__section"
            aria-labelledby="skills-heading"
          >
            <h2 id="skills-heading" className="about-page__section-title">
              Skills
            </h2>
            <ul className="about-page__bullet-list">
              {site.skills.map((skill) => (
                <li key={skill.label}>
                  <strong>{skill.label}:</strong> {skill.value}
                </li>
              ))}
            </ul>
          </section>

          <dl className="about-page__details">
            <div>
              <dt>Location</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>
                Architectural/Spatial Design, HCI
              </dd>
            </div>
            <div>
              <dt>Studio/Lab</dt>
              <dd>{site.brand}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
