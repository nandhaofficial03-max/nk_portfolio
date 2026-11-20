import { Download } from 'lucide-react';
import React from 'react';
import ResumeSection from '../components/ResumeSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { certifications, education, experience, profile, skills } from '../data/resumeData.js';

export default function Resume() {
  return (
    <div className="page-content">
      <SectionHeader
        eyebrow="Resume"
        title="Experience and credentials"
        text="A clear view of full stack experience, education, skills, tools, and certifications from the resume."
      />

      <ResumeSection
        title="Profile Summary"
        action={
          <a className="button primary small" href={profile.resumePdf} download>
            <Download size={16} /> Download Resume
          </a>
        }
      >
        <p className="lead">{profile.summary}</p>
      </ResumeSection>

      <ResumeSection title="Skills">
        <div className="skill-grid">
          {skills.map((skillGroup) => (
            <div className="skill-card" key={skillGroup.group}>
              <h3>{skillGroup.group}</h3>
              <div className="chip-row">
                {skillGroup.items.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Experience">
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <div>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p>
                  {item.company} • {item.location}
                </p>
              </div>
              <ul className="feature-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.degree}>
              <span>{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <strong>{item.detail}</strong>
            </article>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Certifications">
        {certifications.length > 0 ? (
          <ul className="cert-list">
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        ) : (
          <p className="lead">No certifications listed currently.</p>
        )}
      </ResumeSection>
    </div>
  );
}
