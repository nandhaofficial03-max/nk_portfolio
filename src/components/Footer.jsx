import { Code2, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import Logo from './Logo.jsx';
import { profile } from '../data/resumeData.js';

const links = [
  ['Home', '#/home'],
  ['Resume', '#/resume'],
  ['Projects', '#/projects'],
  ['Contact', '#/contact'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Logo />
          <p>{profile.summary}</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div className="footer-links">
            {links.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li>
              <Mail size={16} /> <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Phone size={16} /> <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <MapPin size={16} /> {profile.location}
            </li>
          </ul>
        </div>
        <div>
          <h3>Social</h3>
          <div className="social-links">
            <a
              href={profile.linkedin || undefined}
              target={profile.linkedin ? '_blank' : undefined}
              rel={profile.linkedin ? 'noreferrer' : undefined}
              aria-label="LinkedIn"
              aria-disabled={!profile.linkedin}
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={profile.github || undefined}
              target={profile.github ? '_blank' : undefined}
              rel={profile.github ? 'noreferrer' : undefined}
              aria-label="GitHub"
              aria-disabled={!profile.github}
            >
              <Code2 size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
    </footer>
  );
}
