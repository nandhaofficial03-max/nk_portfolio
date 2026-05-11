import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/resumeData.js';

export default function Projects() {
  return (
    <div className="page-content">
      <SectionHeader
        eyebrow="Projects"
        title="Applied technical work"
        text="Projects from the resume, presented with technologies, responsibilities, and portfolio-ready summaries."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
