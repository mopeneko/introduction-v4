import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { SiteHeader } from './components/SiteHeader'
import { Skills } from './components/Skills'
import { Works } from './components/Works'
import { profile, ui } from './content/profile'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  const [about, skills, works, contact] = ui.sections

  return (
    <>
      <a className="skip" href="#main">
        {ui.skip}
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Section id={about.id} num={about.num} title={about.title}>
          <div className="about" data-reveal>
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>
        <Section id={skills.id} num={skills.num} title={skills.title}>
          <Skills />
        </Section>
        <Section id={works.id} num={works.num} title={works.title}>
          <Works />
        </Section>
        <Section id={contact.id} num={contact.num} title={contact.title}>
          <Contact />
        </Section>
      </main>
      <footer className="site-foot">
        <div className="wrap foot-in">
          <p>{ui.footer.copyright}</p>
          <a href="#top">
            {ui.footer.toTop}
            <span aria-hidden="true"> ↑</span>
          </a>
        </div>
      </footer>
    </>
  )
}
