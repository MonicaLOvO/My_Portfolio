import Reveal from '../components/Reveal'
import { portfolio } from '../data/portfolio'

type ContactItem = {
  label: string
  display: string
  href?: string
  external?: boolean
}

export default function Contact() {
  const { location, email, github, linkedin } = portfolio.contact
  const items: ContactItem[] = [
    location && {
      label: 'Location',
      display: location,
    },
    email && {
      label: 'Email',
      display: email,
      href: `mailto:${email}`,
    },
    github && {
      label: 'GitHub',
      display: github.replace(/^https?:\/\//, ''),
      href: github,
      external: true,
    },
    linkedin && {
      label: 'LinkedIn',
      display: linkedin.replace(/^https?:\/\//, ''),
      href: linkedin,
      external: true,
    },
  ].filter(Boolean) as ContactItem[]

  return (
    <main>
      <Reveal>
        <p className="section-label">Connect</p>
        <h1 className="page-title">Contact</h1>
        <p className="page-lead">
          Reach out for opportunities, collaborations, or questions.
        </p>
      </Reveal>
      <ul className="contact-list">
        {items.map((item, index) => (
          <Reveal key={item.label} as="li" delay={index * 70}>
            {item.href ? (
              <a
                href={item.href}
                className="card contact-item contact-item--link"
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                <span className="contact-label">{item.label}</span>
                <span className="contact-value contact-link-text">
                  {item.display}
                </span>
              </a>
            ) : (
              <div className="card contact-item">
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.display}</span>
              </div>
            )}
          </Reveal>
        ))}
      </ul>
    </main>
  )
}
