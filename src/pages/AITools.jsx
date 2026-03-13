import React, { useState } from 'react';
import { Search, Filter, ExternalLink, Activity, Users, Shield, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './AITools.css';

const AITools = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Performance Analysis', 'Training', 'Video Analysis', 'Scouting', 'Fan Engagement', 'Stadium'];

  const tools = [
    {
      id: 1,
      name: t('home.t1Name', "OptiTrain Pro"),
      category: "Training",
      desc: t('home.t1Desc', "AI systems that generate personalized training programs for professional athletes based on biometric data."),
      icon: <Activity size={24} />,
      iconClass: "training-icon"
    },
    {
      id: 2,
      name: t('home.t2Name', "KineVision"),
      category: "Video Analysis",
      desc: t('home.t2Desc', "Computer vision AI that analyzes athlete performance and biomechanical movement data in real-time."),
      icon: <Shield size={24} />,
      iconClass: "performance-icon"
    },
    {
      id: 3,
      name: t('home.t3Name', "StadiaPredict"),
      category: "Stadium",
      desc: t('home.t3Desc', "AI tools for managing sports clubs, predicting ticket sales, and optimizing sports facilities operations."),
      icon: <Users size={24} />,
      iconClass: "club-icon"
    },
    {
      id: 4,
      name: "ScoutGPT",
      category: "Scouting",
      desc: t('home.p1Desc', "How top-tier clubs are using LLMs and computer vision to discover hidden talent globally."),
      icon: <Search size={24} />,
      iconClass: "training-icon"
    },
    {
      id: 5,
      name: "FanInteract",
      category: "Fan Engagement",
      desc: t('home.p2Desc', "Analyzing how NBA teams are delivering personalized fan experiences at scale without losing the human touch."),
      icon: <Users size={24} />,
      iconClass: "performance-icon"
    },
    {
      id: 6,
      name: "BioMetric X",
      category: "Performance Analysis",
      desc: t('home.p3Desc', "A deep dive into how wearable technology and machine learning algorithms are extending athletic careers."),
      icon: <Activity size={24} />,
      iconClass: "club-icon"
    }
  ];

  const filteredTools = activeTab === 'All' ? tools : tools.filter(t => t.category === activeTab);

  return (
    <div className="tools-page">
      {/* Header */}
      <section className="tools-header">
        <div className="container relative z-10 text-center">
          <div className="badge neon-border mb-4 mx-auto">
            <span className="text-neon">{t('tools.badge')}</span>
          </div>
          <h1 className="hero-title">{t('tools.title1')} <span className="text-gradient">{t('tools.title2')}</span></h1>
          <p className="hero-subtitle mx-auto mb-8">
            {t('tools.sub')}
          </p>

          <div className="search-bar-container mx-auto">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder={t('tools.placeholder')} className="main-search-input" />
            <button className="btn btn-primary search-btn">{t('tools.searchBtn')}</button>
          </div>
        </div>
      </section>

      {/* Main Directory */}
      <section className="directory-content py-section">
        <div className="container">
          
          <div className="directory-layout">
            
            {/* Filters Sidebar */}
            <aside className="filters-sidebar glass-panel">
              <div className="filter-header">
                <h3>{t('tools.filters')}</h3>
                <Filter size={18} className="text-muted" />
              </div>
              
              <div className="filter-group">
                <h4 className="filter-title">{t('tools.categories')}</h4>
                <ul className="category-list">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        className={`cat-btn ${activeTab === cat ? 'active' : ''}`}
                        onClick={() => setActiveTab(cat)}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="filter-group mt-6">
                <h4 className="filter-title">{t('tools.pricing')}</h4>
                <label className="checkbox-label">
                  <input type="checkbox" /> <span className="custom-checkbox"></span> {t('tools.free')}
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" /> <span className="custom-checkbox"></span> {t('tools.subsc')}
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" /> <span className="custom-checkbox"></span> {t('tools.ent')}
                </label>
              </div>
            </aside>

            {/* Tools Grid */}
            <div className="tools-feed">
              <div className="results-header">
                <p className="text-muted">{t('tools.showing')} {filteredTools.length} {t('tools.resultsFor')} <strong className="text-main">"{activeTab}"</strong></p>
                <div className="sort-dropdown">
                  <select className="form-select text-sm">
                    <option>{t('tools.sortRec')}</option>
                    <option>{t('tools.sortNew')}</option>
                    <option>{t('tools.sortPop')}</option>
                  </select>
                </div>
              </div>

              <div className="tools-grid directory-grid">
                {filteredTools.map(tool => (
                  <div key={tool.id} className="tool-card glass-panel">
                    <div className="card-header">
                      <div className={`tool-icon ${tool.iconClass}`}>
                        {tool.icon}
                      </div>
                      <span className="category-tag">{tool.category}</span>
                    </div>
                    <h3 className="tool-name">{tool.name}</h3>
                    <p className="tool-desc">{tool.desc}</p>
                    <div className="card-footer directory-footer">
                      <Link to="#" className="btn-text">{t('tools.viewDet')}</Link>
                      <a href="#" className="btn btn-primary btn-sm btn-icon">
                        {t('tools.visSite')} <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {filteredTools.length === 0 && (
                <div className="empty-state text-center py-section">
                  <h3 className="text-xl mb-2">{t('tools.noTools')}</h3>
                  <p className="text-muted">{t('tools.adjFilters')}</p>
                  <button onClick={() => setActiveTab('All')} className="btn btn-secondary mt-4">{t('tools.clearFilters')}</button>
                </div>
              )}
              
              {filteredTools.length > 0 && (
                <div className="pagination text-center mt-12">
                  <button className="btn btn-secondary">{t('tools.loadMore')}</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Submit CTA */}
      <section className="submit-cta bg-dark-secondary py-section text-center">
        <div className="container">
          <div className="submit-box glass-panel neon-border mx-auto">
            <h2 className="section-title">{t('tools.subTitle1')}</h2>
            <p className="section-subtitle mx-auto mb-6">
              {t('tools.subTitle2')}
            </p>
            <button className="btn btn-primary btn-lg">{t('tools.subBtn')}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITools;
