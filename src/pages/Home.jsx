import { Award, Boxes, Cloud, Code2 } from 'lucide-react';
import React from 'react';
import Hero from '../components/Hero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { certifications, experience, projects, skills } from '../data/resumeData.js';

const focusCards = [
  {
    icon: Boxes,
    title: 'SAP MM Operations',
    text: 'Procurement, inventory management, PR, PO, GR, and invoice verification workflows.',
  },
  {
    icon: Cloud,
    title: 'Cloud Mindset',
    text: 'AWS fundamentals with hands-on architecture project experience using EC2, RDS, and load balancing.',
  },
  {
    icon: Code2,
    title: 'Frontend Skills',
    text: 'React.js and JavaScript experience for building clean, responsive web interfaces.',
  },
  {
    icon: Award,
    title: 'Certified Learner',
    text: `${certifications.length} certifications across SAP, AWS, Python, and Excel.`,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="content-section">
        <SectionHeader
          eyebrow="Profile"
          title="Built for reliable supply-chain execution"
          text="A concise portfolio shaped from resume details, highlighting SAP MM process knowledge, technical adaptability, and project work."
        />
        <div className="focus-grid">
          {focusCards.map(({ icon: Icon, title, text }) => (
            <article className="focus-card glass-panel" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section split-section">
        <div className="glass-panel home-panel">
          <span className="eyebrow">Current Experience</span>
          <h2>{experience[0].role}</h2>
          <p>
            At {experience[0].company}, Nandha worked with procurement and inventory operations, maintaining
            material availability and supporting the purchase cycle from requisition through finance coordination.
          </p>
        </div>
        <div className="glass-panel home-panel">
          <span className="eyebrow">Skill Snapshot</span>
          <h2>{skills[0].group}</h2>
          <div className="chip-row">
            {skills[0].items.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section">
        <SectionHeader eyebrow="Featured Work" title="Resume projects" />
        <div className="mini-projects">
          {projects.map((project) => (
            <a className="mini-project glass-panel" href="#/projects" key={project.title}>
              <span>{project.technologies[0]}</span>
              <strong>{project.title}</strong>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
