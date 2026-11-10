import { profile, ui, yearsLabel } from '../content/profile'
import './Skills.css'

export function Skills() {
  const practical = profile.skills.filter((skill) => skill.level === 'practical')
  const personal = profile.skills.filter((skill) => skill.level === 'personal')

  return (
    <div data-reveal>
      <h3 className="skills-group">{ui.skills.practical}</h3>
      <table className="spec">
        <caption className="sr-only">{ui.skills.caption}</caption>
        <thead>
          <tr>
            <th scope="col">{ui.skills.nameColumn}</th>
            <th scope="col">{ui.skills.detailColumn}</th>
          </tr>
        </thead>
        <tbody>
          {practical.map((skill) => (
            <tr key={skill.name}>
              <th scope="row">{skill.name}</th>
              <td>
                <span className="spec-meta">{yearsLabel(skill.years)}</span>
                <span className="spec-desc">{skill.detail}</span>
                <ul className="tags spec-tools">
                  {skill.tools.map((tool) => (
                    <li className="tag" key={tool}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="skills-group">{ui.skills.personal}</h3>
      <ul className="tags">
        {personal.map((skill) =>
          'href' in skill ? (
            <li key={skill.name}>
              <a
                className="tag tag-link"
                href={skill.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ui.skills.storeLabel(skill.name)}
              >
                {skill.name}
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ) : (
            <li className="tag" key={skill.name}>
              {skill.name}
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
