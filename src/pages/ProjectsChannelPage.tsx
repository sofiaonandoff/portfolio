import { ProjectChannelIntro } from '../components/ProjectChannelIntro'
import { ProjectGrid } from '../components/ProjectGrid'
import type { ProjectChannel } from '../types'
import './ProjectsChannelPage.css'

type Props = {
  channel: ProjectChannel
}

export function ProjectsChannelPage({ channel }: Props) {
  return (
    <div className="channel-page page-width">
      <ProjectChannelIntro channel={channel} showLink={false} />
      <ProjectGrid channel={channel} />
    </div>
  )
}

export function OffProjectsPage() {
  return <ProjectsChannelPage channel="off" />
}

export function OnProjectsPage() {
  return <ProjectsChannelPage channel="on" />
}
