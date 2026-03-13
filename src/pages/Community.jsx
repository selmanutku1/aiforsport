import React from 'react';
import { MessageSquare, Users, Zap, TrendingUp, Handshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Community.css';

const Community = () => {
  const { t } = useTranslation();

  return (
    <div className="community-page">
      {/* Hero Header */}
      <section className="community-header">
        <div className="container relative z-10 text-center">
          <div className="badge neon-border mb-4 mx-auto">
            <span className="text-neon">{t('community.badge')}</span>
          </div>
          <h1 className="hero-title">{t('community.title1')} <span className="text-gradient">{t('community.title2')}</span></h1>
          <p className="hero-subtitle mx-auto">
            {t('community.sub')}
          </p>
          <button className="btn btn-primary btn-lg mt-6">{t('community.joinBtn')}</button>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="community-stats py-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card glass-panel">
              <Users size={32} className="text-neon mb-4" />
              <h3 className="stat-value">12,500+</h3>
              <p className="stat-label text-muted">{t('community.members')}</p>
            </div>
            <div className="stat-card glass-panel">
              <MessageSquare size={32} className="text-orange mb-4" />
              <h3 className="stat-value">50+</h3>
              <p className="stat-label text-muted">{t('community.discussions')}</p>
            </div>
            <div className="stat-card glass-panel">
              <Zap size={32} className="text-neon mb-4" />
              <h3 className="stat-value">150+</h3>
              <p className="stat-label text-muted">{t('community.startups')}</p>
            </div>
            <div className="stat-card glass-panel">
              <Handshake size={32} className="text-purple mb-4" />
              <h3 className="stat-value">24</h3>
              <p className="stat-label text-muted">{t('community.events')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discussion Boards Preview */}
      <section className="discussions-section py-section bg-dark-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-12">{t('community.trendTitle1')} <span className="text-gradient">{t('community.trendTitle2')}</span></h2>
          
          <div className="discussions-list">
            <div className="discussion-card glass-panel">
              <div className="discussion-votes">
                <button className="vote-btn">▲</button>
                <span className="vote-count">342</span>
                <button className="vote-btn">▼</button>
              </div>
              <div className="discussion-content">
                <span className="category-tag mb-2 inline-block">{t('community.d1Cat')}</span>
                <h3 className="discussion-title">{t('community.d1Title')}</h3>
                <div className="discussion-meta text-muted text-sm mt-3">
                  <span className="author">{t('community.d1Meta')}</span>
                </div>
              </div>
            </div>

            <div className="discussion-card glass-panel">
              <div className="discussion-votes">
                <button className="vote-btn">▲</button>
                <span className="vote-count">215</span>
                <button className="vote-btn">▼</button>
              </div>
              <div className="discussion-content">
                <span className="category-tag mb-2 inline-block">{t('community.d2Cat')}</span>
                <h3 className="discussion-title">{t('community.d2Title')}</h3>
                <div className="discussion-meta text-muted text-sm mt-3">
                  <span className="author">{t('community.d2Meta')}</span>
                </div>
              </div>
            </div>

            <div className="discussion-card glass-panel">
              <div className="discussion-votes">
                <button className="vote-btn">▲</button>
                <span className="vote-count">188</span>
                <button className="vote-btn">▼</button>
              </div>
              <div className="discussion-content">
                <span className="category-tag mb-2 inline-block">{t('community.d3Cat')}</span>
                <h3 className="discussion-title">{t('community.d3Title')}</h3>
                <div className="discussion-meta text-muted text-sm mt-3">
                  <span className="author">{t('community.d3Meta')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="btn btn-secondary">{t('community.viewAll')}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
