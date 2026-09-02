import { portfolio } from '../data/portfolio'

export default function Education() {
  return (
    <main>
      <p className="section-label">Background</p>
      <h1 className="page-title">Education</h1>
      <p className="page-lead">Academic background and training.</p>
      <div className="content-stack">
        {portfolio.education.map((entry) => (
          <article key={entry.degree} className="card education-card">
            <h2 className="card-title">{entry.school}</h2>
            <p className="education-degree">{entry.degree}</p>
            {entry.period && <p className="education-meta">{entry.period}</p>}
            {entry.details && <p className="content-text">{entry.details}</p>}
          </article>
        ))}
      </div>
    </main>
  )
}
