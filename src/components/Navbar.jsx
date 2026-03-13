import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.tools', 'AI Tools'), path: '/tools' },
    { name: t('nav.insights', 'Insights'), path: '/insights' },
    { name: t('nav.usecases', 'Use Cases'), path: '/usecases' },
    { name: t('nav.community', 'Community'), path: '/community' },
    { name: t('nav.about', 'About'), path: '/about' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <Zap className="brand-icon" />
          <span className="brand-text">AiFor<span className="text-gradient">Sport</span></span>
        </Link>

        {/* Desktop Menu */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleLanguage} className="lang-switcher">
            <Globe size={16} /> <span>{i18n.language === 'tr' ? 'TR' : 'EN'}</span>
          </button>
          <Link to="/tools" className="btn btn-primary desktop-only">
            {t('nav.submit', 'Submit Tool')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-only flex items-center gap-4">
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu glass-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/tools" className="btn btn-primary w-full text-center" onClick={closeMenu}>
              {t('nav.submit', 'Submit Tool')}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
