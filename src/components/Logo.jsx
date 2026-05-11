import React from 'react';

export default function Logo({ compact = false }) {
  return (
    <a className={`logo ${compact ? 'logo-compact' : ''}`} href="#/home" aria-label="Nandha Kumar home">
      <span>NK</span>
    </a>
  );
}
