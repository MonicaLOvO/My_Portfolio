import Reveal from '../components/Reveal'
import TuxEasterEgg from '../components/TuxEasterEgg'
import { portfolio } from '../data/portfolio'

export default function About() {
  return (
    <main>
      <Reveal>
        <p className="section-label">About</p>
        <h1 className="page-title">About Me</h1>
        <p className="page-lead">{portfolio.tagline}</p>
      </Reveal>
      <div className="content-stack">
        {portfolio.about.map((paragraph, index) => (
          <Reveal key={paragraph} delay={index * 80}>
            <p className="content-text">{paragraph}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={portfolio.about.length * 80 + 40}>
        <div className="about-tux">
          <p className="about-tux-hint">Something else about me?</p>
          <TuxEasterEgg />
        </div>
      </Reveal>
    </main>
  )
}
