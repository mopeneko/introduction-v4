import { profile, sectionIds, ui } from '../content/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import './SiteHeader.css'

export function SiteHeader() {
  useActiveSection(sectionIds)

  return (
    <header className="site-head">
      <div className="wrap head-in">
        <a className="brand" href="#top" aria-label={ui.brandLabel}>
          <span className="brand-ja">{profile.name}</span>
          <span className="brand-en">{profile.handle}</span>
        </a>
        <nav className="nav" aria-label={ui.navLabel}>
          {ui.sections.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
