import Reveal from '../components/Reveal'
import { portfolio } from '../data/portfolio'

export default function Skills() {
  return (
    <main>
      <Reveal>
        <p className="section-label">Capabilities</p>
        <h1 className="page-title">Skills</h1>
        <p className="page-lead">
          Technical and soft skills from my training and project work.
        </p>
      </Reveal>

      <div className="skills-layout">
        <Reveal delay={80}>
          <section className="card skills-panel">
            <h2 className="skills-panel-title">Technical</h2>
            <p className="skills-panel-lead">
              Languages, frameworks, and tools I use in coursework and projects.
            </p>
            <div className="skills-categories">
              {portfolio.skills.map((group) => (
                <div key={group.category} className="skill-category">
                  <h3 className="skill-category-name">{group.category}</h3>
                  <ul className="tag-list">
                    {group.items.map((item) => (
                      <li key={item} className="tag">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={160}>
          <section className="card skills-panel skills-panel--soft">
            <h2 className="skills-panel-title">Soft Skills</h2>
            <p className="skills-panel-lead">
              How I collaborate, learn, and stay organized on a team.
            </p>
            <ul className="soft-skill-list">
              {portfolio.softSkills.map((skill) => (
                <li key={skill} className="soft-skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
    </main>
  )
}
