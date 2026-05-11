import React from 'react';
import Logo from './Logo.jsx';

export default function Loader({ isLoading }) {
  return (
    <div className={`loader ${isLoading ? '' : 'loader-hidden'}`} aria-hidden={!isLoading}>
      <div className="loader-glass">
        <Logo compact />
        <div className="loader-ring" />
      </div>
    </div>
  );
}
