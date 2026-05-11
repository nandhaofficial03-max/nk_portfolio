import { ArrowRight, BriefcaseBusiness, Download, Mail } from 'lucide-react';
import React from 'react';
import { profile, stats } from '../data/resumeData.js';

export default function Hero() {
  return (
    <section className="hero section-pad">
      <div className="hero-copy">
        <span className="eyebrow">Procurement • Inventory • SAP MM</span>
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href="#/resume">
            View Resume <ArrowRight size={18} />
          </a>
          <a className="button secondary" href="#/projects">
            <BriefcaseBusiness size={18} /> View Projects
          </a>
          <a className="button ghost" href="#/contact">
            <Mail size={18} /> Contact Me
          </a>
        </div>
        <a className="download-link" href={profile.resumePdf} download>
          <Download size={17} /> Download Resume
        </a>
      </div>
      <div className="hero-visual glass-panel">
        <img src={profile.profileImage} alt={`${profile.name} professional profile`} />
        <div className="profile-badge">
          <span>Available for SAP MM roles</span>
        </div>
      </div>
      <div className="stats-strip glass-panel">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
