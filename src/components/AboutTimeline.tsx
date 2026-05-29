import './AboutTimeline.css'

export type AboutTimelineEntry = {
  id: string
  period: string
  location?: string
  title: string
  lines: string[]
  bulleted?: boolean
}

type Props = {
  entries: AboutTimelineEntry[]
}

export function AboutTimeline({ entries }: Props) {
  return (
    <ul className="about-timeline">
      {entries.map((entry) => (
        <li key={entry.id} className="about-timeline__entry">
          <div className="about-timeline__meta">
            <p className="about-timeline__period">{entry.period}</p>
            {entry.location && (
              <p className="about-timeline__location">{entry.location}</p>
            )}
          </div>
          <div className="about-timeline__bar" aria-hidden="true" />
          <div className="about-timeline__body">
            <p className="about-timeline__title">{entry.title}</p>
            {entry.lines.length > 0 && (
              <ul
                className={
                  entry.bulleted
                    ? 'about-timeline__lines about-timeline__lines--bulleted'
                    : 'about-timeline__lines'
                }
              >
                {entry.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
