import type { ReactNode } from 'react'
import './Section.css'

type SectionProps = {
  id: string
  num: string
  title: string
  children: ReactNode
}

export function Section({ id, num, title, children }: SectionProps) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap section-grid">
        <div className="section-label" data-reveal>
          <span className="num">{num}</span>
          <h2 className="section-title" id={`${id}-title`}>
            {title}
          </h2>
        </div>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
