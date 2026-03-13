import React from 'react';
import { Target, Zap, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Hero Header */}
      <section className="about-header text-center">
        <div className="container relative z-10">
          <h1 className="hero-title">{t('about.title1')}<span className="text-gradient">{t('about.title2')}</span></h1>
          <p className="hero-subtitle mx-auto">
            {t('about.sub')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text">
              <h2 className="section-title mb-6">{t('about.revTitle')}</h2>
              <p className="lead-text mb-4">
                {t('about.p1')}
              </p>
              <p className="text-muted mb-4">
                {t('about.p2')}
              </p>
              <p className="text-muted">
                {t('about.p3')}
              </p>
            </div>
            
            <div className="mission-boxes">
              <div className="glass-panel p-6 mb-4 neon-border rounded">
                <Target size={32} className="text-neon mb-4" />
                <h3 className="text-xl mb-2">{t('about.vTitle')}</h3>
                <p className="text-muted">{t('about.vDesc')}</p>
              </div>
              <div className="glass-panel p-6 border-orange rounded">
                <Globe size={32} className="text-orange mb-4" />
                <h3 className="text-xl mb-2">{t('about.cTitle')}</h3>
                <p className="text-muted">{t('about.cDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-section bg-dark-secondary">
        <div className="container text-center max-w-2xl">
          <Zap size={48} className="text-neon mx-auto mb-6 drop-shadow-neon" />
          <h2 className="section-title">{t('about.getTouch')}</h2>
          <p className="section-subtitle mx-auto">
            {t('about.touchSub')}
          </p>
          <a href="mailto:hello@aiforsport.com" className="btn btn-primary btn-lg mt-4">{t('about.contactBtn')}</a>
        </div>
      </section>
    </div>
  );
};

export default About;
