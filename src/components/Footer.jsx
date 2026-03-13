import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer border-t border-color mt-auto">
      <div className="container py-section">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <Zap className="brand-icon" />
              <span className="brand-text">AiFor<span className="text-gradient">Sport</span></span>
            </Link>
            <p className="footer-desc mt-4">
              {t('footer.description')}
            </p>
            <div className="social-links mt-6">
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Github size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.platform')}</h4>
            <ul>
              <li><Link to="/tools">{t('nav.tools')}</Link></li>
              <li><Link to="/usecases">{t('nav.usecases')}</Link></li>
              <li><Link to="/insights">{t('nav.insights')}</Link></li>
              <li><Link to="/community">{t('nav.community')}</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.resources')}</h4>
            <ul>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><a href="#">{t('nav.submit')}</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <h4 className="footer-heading">{t('footer.newsletter')}</h4>
            <p className="text-sm text-muted mb-4">
              {t('footer.newsletterDesc')}
            </p>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="form-input" />
              <button type="submit" className="btn btn-primary mt-3 w-full">{t('footer.subscribe')}</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom mt-12">
          <p>&copy; {new Date().getFullYear()} AiForSport. {t('footer.rights')}</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
