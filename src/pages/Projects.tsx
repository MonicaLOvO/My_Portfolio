import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal'
import { portfolio } from '../data/portfolio'

type Project = (typeof portfolio.projects)[number]
type ProjectType = Project['type']

function ProjectCard({
  project,
  activeType,
  onFilterByType,
}: {
  project: Project
  activeType: ProjectType | null
  onFilterByType: (type: ProjectType) => void
}) {
  const [open, setOpen] = useState(false)
  const previewHighlights = project.highlights.slice(0, 2)
  const previewTechs = project.technologies.slice(0, 4)
  const hasLinks = Boolean(
    project.githubUrl ||
      ('githubUrlAlt' in project && project.githubUrlAlt) ||
      project.liveUrl ||
      project.linkedinUrl,
  )
  const typeActive = activeType === project.type

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
        <div className="project-card-heading">
          <h2 className="card-title">{project.title}</h2>
          <button
            type="button"
            className={`tag project-type-tag project-type-tag--${project.type} project-filter-btn${typeActive ? ' is-active' : ''}`}
            onClick={(event) => {
              event.stopPropagation()
              onFilterByType(project.type)
            }}
            aria-pressed={typeActive}
          >
            {project.type === 'school' ? 'School' : 'Self project'}
          </button>
        </div>
        <span className="project-year">{project.year}</span>
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
              {'githubUrlAlt' in project && project.githubUrlAlt && (
                <a
                  href={project.githubUrlAlt}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.githubAltLabel ?? 'GitHub (alt)'}
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
  const [typeFilter, setTypeFilter] = useState<ProjectType | null>(null)

  const filteredProjects = useMemo(
    () =>
      typeFilter
        ? portfolio.projects.filter((project) => project.type === typeFilter)
        : portfolio.projects,
    [typeFilter],
  )

  function toggleType(type: ProjectType) {
    setTypeFilter((current) => (current === type ? null : type))
  }

  return (
    <main>
      <Reveal>
        <p className="section-label">Work</p>
        <h1 className="page-title">Projects</h1>
        <p className="page-lead">
          Hover a project for a quick peek, then click to open full details.
          Filter by school or self project using the tags.
        </p>
      </Reveal>

      <Reveal delay={60}>
        <div className="project-filters">
          <span className="project-filters-label">Filter</span>
          <div className="project-filters-group">
            <button
              type="button"
              className={`project-filter-chip${typeFilter === null ? ' is-active' : ''}`}
              onClick={() => setTypeFilter(null)}
              aria-pressed={typeFilter === null}
            >
              All
            </button>
            <button
              type="button"
              className={`project-filter-chip project-filter-chip--school${typeFilter === 'school' ? ' is-active' : ''}`}
              onClick={() => toggleType('school')}
              aria-pressed={typeFilter === 'school'}
            >
              School
            </button>
            <button
              type="button"
              className={`project-filter-chip project-filter-chip--self${typeFilter === 'self' ? ' is-active' : ''}`}
              onClick={() => toggleType('self')}
              aria-pressed={typeFilter === 'self'}
            >
              Self project
            </button>
          </div>
          {typeFilter && (
            <button
              type="button"
              className="project-filters-clear"
              onClick={() => setTypeFilter(null)}
            >
              Clear filter
            </button>
          )}
        </div>
      </Reveal>

      <div className="content-stack">
        {filteredProjects.length === 0 ? (
          <Reveal delay={90}>
            <p className="project-empty">No projects match this filter.</p>
          </Reveal>
        ) : (
          filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={90 + index * 90}>
              <ProjectCard
                project={project}
                activeType={typeFilter}
                onFilterByType={toggleType}
              />
            </Reveal>
          ))
        )}
      </div>
    </main>
  )
}
