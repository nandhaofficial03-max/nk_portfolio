import { ExternalLink } from 'lucide-react';
import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card glass-panel">
      <div>
        <span className="project-kicker">{project.technologies[0]}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="chip-row">
        {project.technologies.map((tech) => (
          <span className="chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>
      <ul className="feature-list">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      {project.link ? (
        <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
          Open Project <ExternalLink size={16} />
        </a>
      ) : (
        <span className="project-link muted">Link not listed in resume</span>
      )}
    </article>
  );
}
