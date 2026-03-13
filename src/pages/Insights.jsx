import React from 'react';
import { ArrowRight, Calendar, User, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Insights.css';

const Insights = () => {
  const { t } = useTranslation();

  return (
    <div className="insights-page">
      {/* Hero Header */}
      <section className="insights-header">
        <div className="container relative z-10 text-center">
          <div className="badge neon-border mb-4 mx-auto">
            <span className="text-neon">{t('insights.badge')}</span>
          </div>
          <h1 className="hero-title">{t('insights.title1')} <span className="text-gradient">{t('insights.title2')}</span></h1>
          <p className="hero-subtitle mx-auto">
            {t('insights.sub')}
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-article-section container mt-8">
        <div className="featured-card glass-panel neon-border">
          <div className="featured-image img-featured"></div>
          <div className="featured-content">
            <div className="article-meta">
              <span className="category-tag">{t('insights.fTag')}</span>
              <span className="article-date"><Calendar size={14} /> Oct 15, 2023</span>
              <span className="article-author"><User size={14} /> Dr. Sarah Chen</span>
            </div>
            <h2 className="featured-title">{t('insights.fTitle')}</h2>
            <p className="featured-excerpt">
              {t('insights.fDesc')}
            </p>
            <Link to="/post" className="btn btn-primary mt-6">
              {t('insights.readFull')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="main-content-section container py-section">
        <div className="insights-layout">
          {/* Main Feed */}
          <div className="articles-feed">
            <div className="feed-header">
              <h2>{t('insights.latestTitle1')} <span className="text-gradient">{t('insights.latestTitle2')}</span></h2>
              <div className="feed-filters">
                <button className="filter-btn active">{t('insights.fAll')}</button>
                <button className="filter-btn">{t('insights.fExp')}</button>
                <button className="filter-btn">{t('insights.fCase')}</button>
                <button className="filter-btn">{t('insights.fInt')}</button>
              </div>
            </div>

            <div className="articles-list">
              {/* Article 1 */}
              <article className="article-card glass-panel">
                <div className="article-image img-1"></div>
                <div className="article-body">
                  <div className="article-meta text-muted text-sm mb-2">
                    <span className="text-neon">{t('home.p1Cat')}</span> • Oct 12, 2023 • 5 min read
                  </div>
                  <h3 className="article-title text-xl mb-3">{t('home.p1Title')}</h3>
                  <p className="article-excerpt text-muted mb-4">
                    {t('home.p1Desc')}
                  </p>
                  <Link to="/post" className="read-more-link">{t('insights.readArt')} <ArrowRight size={16} /></Link>
                </div>
              </article>

              {/* Article 2 */}
              <article className="article-card glass-panel">
                <div className="article-image img-2"></div>
                <div className="article-body">
                  <div className="article-meta text-muted text-sm mb-2">
                    <span className="text-orange">{t('home.p2Cat')}</span> • Oct 08, 2023 • 7 min read
                  </div>
                  <h3 className="article-title text-xl mb-3">{t('home.p2Title')}</h3>
                  <p className="article-excerpt text-muted mb-4">
                    {t('home.p2Desc')}
                  </p>
                  <Link to="/post-chatbots" className="read-more-link text-orange-hover">{t('insights.readArt')} <ArrowRight size={16} /></Link>
                </div>
              </article>

              {/* Article 3 */}
              <article className="article-card glass-panel">
                <div className="article-image img-3"></div>
                <div className="article-body">
                  <div className="article-meta text-muted text-sm mb-2">
                    <span className="text-neon">{t('home.p3Cat')}</span> • Oct 01, 2023 • 6 min read
                  </div>
                  <h3 className="article-title text-xl mb-3">{t('home.p3Title')}</h3>
                  <p className="article-excerpt text-muted mb-4">
                    {t('home.p3Desc')}
                  </p>
                  <Link to="/post-injury" className="read-more-link">{t('insights.readArt')} <ArrowRight size={16} /></Link>
                </div>
              </article>

              {/* Article 4 */}
              <article className="article-card glass-panel">
                <div className="article-image img-4"></div>
                <div className="article-body">
                  <div className="article-meta text-muted text-sm mb-2">
                    <span className="text-neon">{t('insights.p4Cat')}</span> • Sep 28, 2023 • 10 min read
                  </div>
                  <h3 className="article-title text-xl mb-3">{t('insights.p4Title')}</h3>
                  <p className="article-excerpt text-muted mb-4">
                    {t('insights.p4Desc')}
                  </p>
                  <Link to="/post" className="read-more-link">{t('insights.readArt')} <ArrowRight size={16} /></Link>
                </div>
              </article>
            </div>
            
            <div className="pagination mt-8">
              <button className="btn btn-secondary">{t('insights.loadMore')}</button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="insights-sidebar">
            {/* Search Box */}
            <div className="sidebar-widget glass-panel">
              <h4 className="widget-title">{t('insights.sTitle')}</h4>
              <div className="search-box">
                <Search className="search-icon" size={18} />
                <input type="text" placeholder={t('insights.sPlace')} className="form-input w-full" />
              </div>
            </div>

            {/* Popular Topics */}
            <div className="sidebar-widget glass-panel">
              <h4 className="widget-title">{t('insights.popTitle')}</h4>
              <ul className="topic-list">
                <li><Link to="#">AI in Football <span className="topic-count">24</span></Link></li>
                <li><Link to="#">Performance Analytics <span className="topic-count">18</span></Link></li>
                <li><Link to="#">Computer Vision <span className="topic-count">15</span></Link></li>
                <li><Link to="#">Fan Engagement <span className="topic-count">12</span></Link></li>
                <li><Link to="#">Sports Betting AI <span className="topic-count">9</span></Link></li>
                <li><Link to="#">Wearable Tech <span className="topic-count">7</span></Link></li>
              </ul>
            </div>

            {/* Newsletter CTA */}
            <div className="sidebar-widget newsletter-widget neon-border">
              <h4 className="widget-title text-neon">{t('insights.nlTitle')}</h4>
              <p className="text-sm text-muted mb-4">{t('insights.nlSub')}</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder={t('insights.nlEmail')} className="form-input w-full mb-3" />
                <button type="submit" className="btn btn-primary w-full">{t('insights.nlBtn')}</button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Insights;
