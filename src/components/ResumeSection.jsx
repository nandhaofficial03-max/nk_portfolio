import React from 'react';

export default function ResumeSection({ title, children, action }) {
  return (
    <section className="resume-section glass-panel">
      <div className="resume-section-title">
        <h2>{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}
