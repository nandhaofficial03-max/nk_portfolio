import { Boxes, Cloud, Code2, Sparkles } from 'lucide-react';
import React from 'react';
import Hero from '../components/Hero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { experience, projects, skills } from '../data/resumeData.js';

const focusCards = [
  {
    icon: Boxes,
    title: 'Full Stack Development',
    text: 'End-to-end web applications with React.js, Next.js, Node.js, and Express.js.',
  },
  {
    icon: Cloud,
    title: 'AWS & Deployment',
    text: 'Hands-on AWS experience with EC2, RDS, load balancing, Linux, and three-tier architecture.',
  },
  {
    icon: Code2,
    title: 'Frontend Engineering',
    text: 'Reusable React.js components, responsive interfaces, and REST API integration.',
  },
  {
    icon: Sparkles,
    title: 'AI & LLM Integration',
    text: 'RAG pipelines with vector retrieval, OpenAI, and OpenRouter for context-aware responses.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="content-section">
        <SectionHeader
          eyebrow="Profile"
          title="Full stack development with an AI edge"
          text="A concise portfolio built from my resume, highlighting full stack development, cloud fundamentals, and hands-on AI integration work."
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
            At {experience[0].company}, Nandha builds responsive web applications with React.js and Node.js,
            develops RESTful APIs backed by MongoDB and MySQL, and implements RAG pipelines using OpenAI and OpenRouter.
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
