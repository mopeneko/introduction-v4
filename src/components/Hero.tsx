import { isExternal, profile, ui } from '../content/profile'
import { Icon } from './icons'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.location}</p>
          <h1 id="hero-title" aria-label={`${profile.name}（${profile.handle}）`}>
            {profile.name}
            <span className="name-en" aria-hidden="true">
              {profile.handle}
            </span>
          </h1>
          <p className="role">{profile.role}</p>
          <p className="tagline">{profile.tagline}</p>
          <ul className="hero-links">
            {profile.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(isExternal(link.href)
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <Icon name={link.icon} />
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-art">
          <figure className="portrait">
            <img
              src={profile.avatar}
              width="460"
              height="460"
              alt={ui.avatarAlt}
              loading="eager"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
