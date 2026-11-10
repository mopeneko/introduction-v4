import type { CSSProperties } from 'react'
import { profile, ui } from '../content/profile'
import './Works.css'

export function Works() {
  return (
    <div className="works">
      {profile.works.map((work, index) => (
        <article
          className="work"
          data-reveal
          key={work.title}
          style={{ '--d': `${Math.min(index, 3) * 0.06}s` } as CSSProperties}
        >
          <h3>{work.title}</h3>
          <p className="work-desc">{work.summary}</p>
          <ul className="tags">
            {work.stack.map((tech) => (
              <li className="tag" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
          <a
            className="work-link"
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.works.linkLabel(work.title)}
          >
            {ui.works.link}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </article>
      ))}
    </div>
  )
}
