import { isExternal, profile } from '../content/profile'
import './Contact.css'

export function Contact() {
  return (
    <ul className="contact-list" data-reveal>
      {profile.links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            {...(isExternal(link.href)
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            <span className="contact-key">{link.label}</span>
            <span className="contact-value">{link.value}</span>
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
