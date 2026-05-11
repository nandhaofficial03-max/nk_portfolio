import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import Home from './pages/Home.jsx';
import Resume from './pages/Resume.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

const routes = {
  home: Home,
  resume: Resume,
  projects: Projects,
  contact: Contact,
};

const getRouteFromHash = () => {
  const route = window.location.hash.replace('#/', '') || 'home';
  return routes[route] ? route : 'home';
};

export default function App() {
  const [activeRoute, setActiveRoute] = useState(getRouteFromHash);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1300);
    const handleHashChange = () => setActiveRoute(getRouteFromHash());

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const ActivePage = routes[activeRoute];

  return (
    <>
      <Loader isLoading={loading} />
      <div className="site-shell">
        <Header activeRoute={activeRoute} />
        <main className="page-transition" key={activeRoute}>
          <ActivePage />
        </main>
        <Footer />
      </div>
    </>
  );
}
