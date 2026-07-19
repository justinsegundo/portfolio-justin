import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import "../styles/navbar.css";

const NAV_LINKS = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'skills' },
  { href: '#contact', label: 'Contact' },
];

const SunIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.16, ease: 'easeIn' } },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 },
  }),
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('#');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveHref(href);

    if (href === '#' || href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar-root ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner max-w-6xl mx-auto">

        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="navbar-logo"
        >
          Justin<span className="navbar-logo-dot">.</span>
        </a>

        <div className="navbar-right">
          <ul className="navbar-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`navbar-link ${activeHref === href ? 'navbar-link--active' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="navbar-icon-btn"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="navbar-icon-btn navbar-menu-btn"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.svg
                    key="close"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.18 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="open"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.18 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="navbar-mobile"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="navbar-mobile-list">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  custom={i}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`navbar-mobile-link ${activeHref === href ? 'navbar-mobile-link--active' : ''}`}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;