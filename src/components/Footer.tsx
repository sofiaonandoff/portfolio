import { site } from '../data/portfolio'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p className="site-footer__copy">
        © {year} {site.fullName}
      </p>
      <div className="site-footer__links">
        <a href={site.social.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={site.social.github} target="_blank" rel="noreferrer">
          Git
        </a>
        <a href={site.social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
