import { useState } from 'react'
import { portfolio } from '../data/portfolio'

type Project = (typeof portfolio.projects)[number]

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const previewHighlights = project.highlights.slice(0, 2)
  const previewTechs = project.technologies.slice(0, 4)
  const hasLinks = Boolean(
    project.githubUrl || project.liveUrl || project.linkedinUrl,
  )

  return (
    <article
      className={`card project-card${open ? ' is-open' : ''}`}
      onClick={() => setOpen((current) => !current)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setOpen((current) => !current)
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={open}
    >
      <div className="project-card-top">
        <h2 className="card-title">{project.title}</h2>
        <span className="project-hint">{open ? 'Hide details' : 'View details'}</span>
      </div>

      <p className="project-summary">{project.description}</p>

      {!open && (
        <div className="project-preview">
          <ul className="tag-list">
            {previewTechs.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
            {project.technologies.length > previewTechs.length && (
              <li className="tag tag-more">
                +{project.technologies.length - previewTechs.length}
              </li>
            )}
          </ul>
          <ul className="bullet-list project-preview-list">
            {previewHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="project-preview-cta">Click for full details</p>
        </div>
      )}

      {open && (
        <div className="project-details">
          <div className="project-section">
            <h3>My contribution</h3>
            <ul className="bullet-list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="project-section">
            <h3>Technologies</h3>
            <ul className="tag-list">
              {project.technologies.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          {hasLinks && (
            <div
              className="project-links"
              onClick={(event) => event.stopPropagation()}
              onKeyDown={(event) => event.stopPropagation()}
            >
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.linkedinUrl && (
                <a href={project.linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <main>
      <p className="section-label">Work</p>
      <h1 className="page-title">Projects</h1>
      <p className="page-lead">
        Hover a project for a quick peek, then click to open full details.
      </p>
      <div className="content-stack">
        {portfolio.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  )
}
