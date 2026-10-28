import { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { CATEGORIES, CATEGORY_IDS } from '../config/tiers';
import { SITE } from '../config/site';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <Link to="/" className="wordmark">{SITE.name}</Link>
        <nav aria-label="Main">
          <NavLink to="/" end>Home</NavLink>
          {CATEGORY_IDS.map((id) => (
            <NavLink key={id} to={`/${id}`}>{CATEGORIES[id].label}</NavLink>
          ))}
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main id="main" className="wrap">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <p>{SITE.aboutBlurb}</p>
          {SITE.socials.length > 0 && (
            <ul className="socials">
              {SITE.socials.map((s) => (
                <li key={s.url}><a href={s.url} rel="noopener noreferrer">{s.label}</a></li>
              ))}
            </ul>
          )}
        </div>
      </footer>
    </>
  );
}
