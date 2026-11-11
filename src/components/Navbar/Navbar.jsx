import { useEffect, useState } from 'react';
import { siteConfig } from '../../config/siteConfig.js';
import './Navbar.css';

const navigationItems = [
  { id: 'services', label: siteConfig.navigation.servicesLabel },
  { id: 'about', label: siteConfig.navigation.aboutLabel },
  { id: 'faq', label: siteConfig.navigation.faqLabel },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bookingUrl = siteConfig.booking.enabled

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsMenuOpen(false);
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="nav-container">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label={`${siteConfig.brand.name} home`}
        >
          {siteConfig.brand.name}
          <span>.</span>
        </a>

        <button
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={
            isMenuOpen
              ? siteConfig.navigation.menuCloseLabel
              : siteConfig.navigation.menuOpenLabel
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((previousState) => !previousState)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          {bookingUrl ? (
            <a
              className="nav-cta"
              href={bookingUrl}
              target={siteConfig.booking.openInNewTab ? '_blank' : undefined}
              rel={
                siteConfig.booking.openInNewTab
                  ? 'noopener noreferrer'
                  : undefined
              }
              onClick={closeMenu}
            >
              {siteConfig.booking.buttonText}
            </a>
          ) : (
            <span className="nav-cta" aria-disabled="true">
              {siteConfig.booking.buttonText}
            </span>
          )}
        </nav>
      </div>
    </header>
  );
}
