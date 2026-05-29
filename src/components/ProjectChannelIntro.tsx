import { Link } from 'react-router-dom'
import { projectChannels } from '../data/portfolio'
import type { ProjectChannel } from '../types'
import './ProjectChannelIntro.css'

type Props = {
  channel: ProjectChannel
  showLink?: boolean
}

export function ProjectChannelIntro({ channel, showLink = true }: Props) {
  const config = projectChannels[channel]

  return (
    <header className="channel-intro">
      <div className="channel-intro__text">
        <h2 className="channel-intro__title">{config.title}</h2>
        <p className="channel-intro__subtitle">{config.subtitle}</p>
        <p className="channel-intro__description">{config.description}</p>
      </div>
      {showLink && (
        <Link to={config.path} className="channel-intro__link">
          View all
        </Link>
      )}
    </header>
  )
}
