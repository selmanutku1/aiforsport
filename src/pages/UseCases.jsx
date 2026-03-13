import React from 'react';
import { ArrowRight, CheckCircle2, Trophy, Activity, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './UseCases.css';

const UseCases = () => {
  const { t } = useTranslation();

  return (
    <div className="usecases-page">
      {/* Hero Header */}
      <section className="usecases-header">
        <div className="container relative z-10 text-center">
          <div className="badge neon-border mb-4 mx-auto">
            <span className="text-orange">{t('usecases.badge')}</span>
          </div>
          <h1 className="hero-title">{t('usecases.title1')} <span className="text-gradient">{t('usecases.title2')}</span></h1>
          <p className="hero-subtitle mx-auto">
            {t('usecases.sub')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="usecases-content py-section">
        <div className="container">
          
          {/* Football Analytics */}
          <div className="usecase-section glass-panel">
            <div className="usecase-image uc-football"></div>
            <div className="usecase-details">
              <div className="usecase-icon">
                <Trophy size={28} className="text-neon" />
              </div>
              <h2 className="usecase-title">{t('usecases.fbTitle')}</h2>
              <p className="usecase-desc">
                {t('usecases.fbDesc')}
              </p>
              
              <div className="problem-solution mt-6">
                <div className="ps-box">
                  <h4 className="ps-title">{t('usecases.prob')}</h4>
                  <p className="ps-text text-muted">{t('usecases.fbProbText')}</p>
                </div>
                <div className="ps-box ps-solution neon-border">
                  <h4 className="ps-title text-neon">{t('usecases.sol')}</h4>
                  <p className="ps-text">{t('usecases.fbSolText')}</p>
                </div>
              </div>
              
              <h4 className="mt-8 mb-4 font-semibold">{t('usecases.exApps')}</h4>
              <ul className="uc-list">
                <li><CheckCircle2 size={16} className="text-neon" /> {t('usecases.fbApp1')}</li>
                <li><CheckCircle2 size={16} className="text-neon" /> {t('usecases.fbApp2')}</li>
                <li><CheckCircle2 size={16} className="text-neon" /> {t('usecases.fbApp3')}</li>
              </ul>
              
              <Link to="/tools?category=football" className="btn btn-secondary mt-6">{t('usecases.expFb')} <ArrowRight size={16} /></Link>
            </div>
          </div>

          {/* Fitness & Training */}
          <div className="usecase-section glass-panel reverse-layout">
            <div className="usecase-image uc-fitness"></div>
            <div className="usecase-details">
              <div className="usecase-icon icon-orange">
                <Activity size={28} className="text-orange" />
              </div>
              <h2 className="usecase-title">{t('usecases.fitTitle')}</h2>
              <p className="usecase-desc">
                {t('usecases.fitDesc')}
              </p>
              
              <div className="problem-solution mt-6">
                <div className="ps-box">
                  <h4 className="ps-title">{t('usecases.prob')}</h4>
                  <p className="ps-text text-muted">{t('usecases.fitProbText')}</p>
                </div>
                <div className="ps-box ps-solution border-orange">
                  <h4 className="ps-title text-orange">{t('usecases.sol')}</h4>
                  <p className="ps-text">{t('usecases.fitSolText')}</p>
                </div>
              </div>
              
              <h4 className="mt-8 mb-4 font-semibold">{t('usecases.exApps')}</h4>
              <ul className="uc-list list-orange">
                <li><CheckCircle2 size={16} className="text-orange" /> {t('usecases.fitApp1')}</li>
                <li><CheckCircle2 size={16} className="text-orange" /> {t('usecases.fitApp2')}</li>
                <li><CheckCircle2 size={16} className="text-orange" /> {t('usecases.fitApp3')}</li>
              </ul>
              
              <Link to="/tools?category=fitness" className="btn btn-secondary mt-6">{t('usecases.expFit')} <ArrowRight size={16} /></Link>
            </div>
          </div>

          {/* Stadium & Fan Experience */}
          <div className="usecase-section glass-panel">
            <div className="usecase-image uc-stadium"></div>
            <div className="usecase-details">
              <div className="usecase-icon icon-purple">
                <TrendingUp size={28} className="text-purple" />
              </div>
              <h2 className="usecase-title">{t('usecases.stadTitle')}</h2>
              <p className="usecase-desc">
                {t('usecases.stadDesc')}
              </p>
              
              <div className="problem-solution mt-6">
                <div className="ps-box">
                  <h4 className="ps-title">{t('usecases.prob')}</h4>
                  <p className="ps-text text-muted">{t('usecases.stadProbText')}</p>
                </div>
                <div className="ps-box ps-solution border-purple">
                  <h4 className="ps-title text-purple">{t('usecases.sol')}</h4>
                  <p className="ps-text">{t('usecases.stadSolText')}</p>
                </div>
              </div>
              
              <h4 className="mt-8 mb-4 font-semibold">{t('usecases.exApps')}</h4>
              <ul className="uc-list list-purple">
                <li><CheckCircle2 size={16} className="text-purple" /> {t('usecases.stadApp1')}</li>
                <li><CheckCircle2 size={16} className="text-purple" /> {t('usecases.stadApp2')}</li>
                <li><CheckCircle2 size={16} className="text-purple" /> {t('usecases.stadApp3')}</li>
              </ul>
              
              <Link to="/tools?category=business" className="btn btn-secondary mt-6">{t('usecases.expStad')} <ArrowRight size={16} /></Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center py-section bg-dark-secondary">
        <div className="container">
          <h2 className="section-title">{t('usecases.ctaTitle')}</h2>
          <p className="section-subtitle mx-auto mb-8">
            {t('usecases.ctaSub')}
          </p>
          <Link to="/tools" className="btn btn-primary btn-lg">{t('usecases.ctaBtn')}</Link>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
