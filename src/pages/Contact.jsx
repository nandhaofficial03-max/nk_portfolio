import { Code2, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import ContactForm from '../components/ContactForm.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { profile } from '../data/resumeData.js';

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: ExternalLink, label: 'LinkedIn', value: 'nandha-kumar-u-a90a31250', href: profile.linkedin },
  { icon: Code2, label: 'GitHub', value: 'NandhakumarU', href: profile.github },
];

export default function Contact() {
  return (
    <div className="page-content">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s connect"
        text="Reach out for full stack development, React.js, Node.js, cloud, or AI integration opportunities."
      />
      <section className="contact-layout">
        <div className="contact-cards">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <article className="contact-card glass-panel" key={label}>
              <Icon size={22} />
              <div>
                <span>{label}</span>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {value}
                  </a>
                ) : (
                  <strong>{value}</strong>
                )}
              </div>
            </article>
          ))}
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
