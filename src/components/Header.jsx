import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Logo from './Logo.jsx';

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'resume', label: 'Resume' },
  { key: 'projects', label: 'Projects' },
  { key: 'contact', label: 'Contact' },
];

export default function Header({ activeRoute }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [activeRoute]);

  return (
    <header className="header">
      <nav className="nav glass-panel" aria-label="Main navigation">
        <Logo />
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${open ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.key} className={activeRoute === item.key ? 'active' : ''} href={`#/${item.key}`}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
