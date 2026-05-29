import { site } from '../data/portfolio'
import './ContactPage.css'

export function ContactPage() {
  const { contact } = site

  return (
    <div className="contact-page page-width">
      <header className="contact-page__header">
        <h1>Contact</h1>
      </header>

      <div className="contact-page__grid">
        <div className="contact-copy">
          <p className="contact-copy__headline">{contact.headline}</p>

          <hr className="contact-copy__rule" />

          {contact.paragraphs.map((paragraph) => (
            <p key={paragraph} className="contact-copy__paragraph">
              {paragraph}
            </p>
          ))}

          <hr className="contact-copy__rule" />

          <h2 className="contact-copy__needs-title">{contact.needsTitle}</h2>
          <ul className="contact-copy__needs">
            {contact.needs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="contact-copy__closing">{contact.closing}</p>
        </div>

        <aside className="contact-aside">
          <p className="contact-aside__label">Email</p>
          <a href={`mailto:${site.email}`} className="contact-aside__email">
            {site.email}
          </a>
          <p className="contact-aside__label">Social</p>
          <ul>
            <li>
              <a href={site.social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.social.github} target="_blank" rel="noreferrer">
                Git
              </a>
            </li>
            <li>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
