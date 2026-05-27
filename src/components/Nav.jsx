import { useState, useEffect } from 'react';
import { couple, nav } from '../content';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="banner">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label="Back to top">
          <span className="script">{couple.combined}</span>
        </a>

        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
        </button>

        {/* Backdrop — click outside drawer to close */}
        {menuOpen && (
          <div
            className="nav-backdrop"
            aria-hidden="true"
            onClick={closeMenu}
          />
        )}

        <nav
          className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}
          aria-label="Main navigation"
        >
          {nav.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
