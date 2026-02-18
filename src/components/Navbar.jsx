import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = ( ) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Experience' },
    { href: '#personal-projects', label: 'Projects' },
    { href: '#tech', label: 'Skills & Expertise' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#' || href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    return; 
    }
    
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 z-50 transition-all ${
        isScrolled ? 'shadow-sm' : ''
      }`}
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
   
        <a href="#" className="relative group" onClick={(e) => handleNavClick(e, '#')}>
          <span className="text-lg font-semibold text-gray-900 dark:text-slate-100 tracking-tight transition-opacity group-hover:opacity-70">
            justin segundo
          </span>
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900 dark:bg-slate-100 transition-all group-hover:w-full"></div>
        </a>

        <div className="flex items-center gap-4">
     
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 text-sm transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

      
          <button
            onClick={toggleTheme}
            className="w-12 h-6 bg-gray-300 dark:bg-slate-600 rounded-full relative transition-colors"
            aria-label="Toggle dark mode"
          >
            <div
              className={`w-[18px] h-[18px] bg-white rounded-full absolute top-[3px] transition-transform ${
                isDark ? 'translate-x-6' : 'translate-x-[3px]'
              }`}
            />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-900 dark:text-slate-100"
            aria-label="Toggle menu"
          >
            {!isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

  
      <div
        className={`md:hidden border-t border-gray-200 dark:border-slate-700 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 text-sm transition py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 px-3 -mx-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;