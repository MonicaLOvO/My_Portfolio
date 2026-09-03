import Reveal from '../components/Reveal'
import { portfolio } from '../data/portfolio'

export default function Education() {
  return (
    <main>
      <Reveal>
        <p className="section-label">Background</p>
        <h1 className="page-title">Education</h1>
        <p className="page-lead">Academic background and training.</p>
      </Reveal>
      <div className="content-stack">
        {portfolio.education.map((entry, index) => (
          <Reveal key={entry.degree} delay={index * 80}>
            <article className="card education-card">
              <h2 className="card-title">{entry.school}</h2>
              <p className="education-degree">{entry.degree}</p>
              {entry.period && <p className="education-meta">{entry.period}</p>}
              {entry.details && <p className="content-text">{entry.details}</p>}
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  )
}
