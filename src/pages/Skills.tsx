import { portfolio } from '../data/portfolio'

export default function Skills() {
  return (
    <main>
      <p className="section-label">Capabilities</p>
      <h1 className="page-title">Skills</h1>
      <p className="page-lead">
        Technical and soft skills from my training and project work.
      </p>
      <div className="skills-grid">
        {portfolio.skills.map((group) => (
          <section key={group.category} className="card skill-card">
            <h2 className="card-title">{group.category}</h2>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <section className="card soft-skills-card">
        <h2 className="card-title">Soft Skills</h2>
        <ul className="tag-list">
          {portfolio.softSkills.map((skill) => (
            <li key={skill} className="tag">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
