import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Typewriter from '../components/Typewriter'
import { portfolio } from '../data/portfolio'

export default function Home() {
  return (
    <main className="hero">
      <Reveal>
        <p className="section-label">Portfolio</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="hero-name">{portfolio.name}</h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="hero-title">
          <Typewriter text={portfolio.title} />
        </p>
      </Reveal>
      <Reveal delay={240}>
        <p className="hero-tagline">{portfolio.tagline}</p>
      </Reveal>
      <Reveal delay={320}>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/projects">
            View Projects
          </Link>
          <Link className="btn btn-ghost" to="/contact">
            Contact
          </Link>
        </div>
      </Reveal>
    </main>
  )
}
