import { portfolio } from '../data/portfolio'

export default function About() {
  return (
    <main>
      <p className="section-label">About</p>
      <h1 className="page-title">About Me</h1>
      <p className="page-lead">{portfolio.tagline}</p>
      <div className="content-stack">
        {portfolio.about.map((paragraph) => (
          <p key={paragraph} className="content-text">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  )
}
