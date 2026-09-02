import { Link } from 'react-router-dom'
import { portfolio } from '../data/portfolio'

export default function Home() {
  return (
    <main className="hero">
      <p className="section-label">Portfolio</p>
      <h1 className="hero-name">{portfolio.name}</h1>
      <p className="hero-title">{portfolio.title}</p>
      <p className="hero-tagline">{portfolio.tagline}</p>
      <div className="hero-actions">
        <Link className="btn btn-primary" to="/projects">
          View Projects
        </Link>
        <Link className="btn btn-ghost" to="/contact">
          Contact
        </Link>
      </div>
    </main>
  )
}
