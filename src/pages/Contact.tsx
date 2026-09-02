import { portfolio } from '../data/portfolio'

export default function Contact() {
  const { phone, location, email, github, linkedin } = portfolio.contact

  return (
    <main>
      <p className="section-label">Connect</p>
      <h1 className="page-title">Contact</h1>
      <p className="page-lead">
        Reach out for opportunities, collaborations, or questions.
      </p>
      <ul className="contact-list">
        {phone && (
          <li>
            <span className="contact-label">Phone</span>
            <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
          </li>
        )}
        {location && (
          <li>
            <span className="contact-label">Location</span>
            <span className="contact-value">{location}</span>
          </li>
        )}
        {email && (
          <li>
            <span className="contact-label">Email</span>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        )}
        {github && (
          <li>
            <span className="contact-label">GitHub</span>
            <a href={github} target="_blank" rel="noreferrer">
              {github.replace(/^https?:\/\//, '')}
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <span className="contact-label">LinkedIn</span>
            <a href={linkedin} target="_blank" rel="noreferrer">
              {linkedin.replace(/^https?:\/\//, '')}
            </a>
          </li>
        )}
      </ul>
    </main>
  )
}
