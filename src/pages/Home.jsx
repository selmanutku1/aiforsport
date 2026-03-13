import React, { useState } from 'react';
import { ArrowRight, Sparkles, Activity, Users, Shield, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import blogsData from '../data/blogs.json';

const Home = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      // Using Web3Forms for simplicity: it only requires an Access Key tied to an email address.
      // The user just needs to register their email at web3forms.com and paste the key here.
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '4b45c120-16b1-4490-ab80-7dad8e24a866', // Registered to aiforsportstr@gmail.com
          from_name: 'AiForSport',
          subject: 'Yeni Bülten Aboneliği - AiForSport',
          email: email,
          message: `${email} e-posta adresi AiForSport bültenine abone oldu.`,
          autoresponse: `AiForSport ailesine hoş geldin! 🎉\n\nSpor dünyasının geleceğini yapay zeka ile şekillendiriyoruz. En güncel yapay zeka araçları, ilham verici kullanım örnekleri ve spor teknolojisi trendleri hakkında detaylı keşifler için Blog (İçgörüler) sayfamızı hemen ziyaret edebilirsin:\n\n👉 İçgörüler Sayfamıza Göz At: https://aiforsport.com/insights\n\nİlerleyen haftalarda yeni araçlar ve trendlerle görüşmek üzere,\nAiForSport Ekibi`
        })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container relative z-10">
          <div className="hero-content">
            <div className="badge neon-border mb-6">
              <Sparkles size={16} className="text-neon" />
              <span>{t('home.heroBadge')}</span>
            </div>
            
            <h1 className="hero-title">
              {t('home.heroTitle1')}<br />
              <span className="text-gradient">{t('home.heroTitle2')}</span>
            </h1>
            
            <p className="hero-subtitle">
              {t('home.heroSubtitle')}
            </p>
            
            <div className="hero-actions">
              <Link to="/tools" className="btn btn-primary btn-lg">
                {t('home.btnExplore')} <ArrowRight size={18} />
              </Link>
              <Link to="/insights" className="btn btn-secondary btn-lg">
                {t('home.btnInsights')}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Data Elements */}
        <div className="hero-visuals">
          <div className="float-card card-1 glass-panel neon-border">
            <Activity className="text-neon" size={24} />
            <div className="card-data">
              <span className="data-label">{t('home.perfLabel')}</span>
              <span className="data-value">+24%</span>
            </div>
          </div>
          <div className="float-card card-2 glass-panel neon-border">
            <Users className="text-orange" size={24} />
            <div className="card-data">
              <span className="data-label">{t('home.fanLabel')}</span>
              <span className="data-value text-orange">High</span>
            </div>
          </div>
          <div className="float-card card-3 glass-panel neon-border">
            <Shield className="text-neon" size={24} />
            <div className="card-data">
              <span className="data-label">{t('home.injLabel')}</span>
              <span className="data-value">-18%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured AI Tools Section */}
      <section className="featured-tools py-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">{t('home.trendTitle1')} <span className="text-gradient">{t('home.trendTitle2')}</span></h2>
              <p className="text-muted">{t('home.trendSub')}</p>
            </div>
            <Link to="/tools" className="btn btn-secondary view-all-btn">
              {t('home.viewDir')} <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="tools-grid">
            {/* Tool Card 1 */}
            <div className="tool-card glass-panel">
              <div className="card-header">
                <div className="tool-icon training-icon">
                  <Activity size={24} />
                </div>
                <span className="category-tag">Training AI</span>
              </div>
              <h3 className="tool-name">{t('home.t1Name')}</h3>
              <p className="tool-desc">
                {t('home.t1Desc')}
              </p>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm w-full">{t('home.exploreTool')}</button>
              </div>
            </div>

            {/* Tool Card 2 */}
            <div className="tool-card glass-panel">
              <div className="card-header">
                <div className="tool-icon performance-icon">
                  <Shield size={24} />
                </div>
                <span className="category-tag">Performance AI</span>
              </div>
              <h3 className="tool-name">{t('home.t2Name')}</h3>
              <p className="tool-desc">
                {t('home.t2Desc')}
              </p>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm w-full">{t('home.exploreTool')}</button>
              </div>
            </div>

            {/* Tool Card 3 */}
            <div className="tool-card glass-panel">
              <div className="card-header">
                <div className="tool-icon club-icon">
                  <Users size={24} />
                </div>
                <span className="category-tag">Club AI</span>
              </div>
              <h3 className="tool-name">{t('home.t3Name')}</h3>
              <p className="tool-desc">
                {t('home.t3Desc')}
              </p>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm w-full">{t('home.exploreTool')}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Preview Section */}
      <section className="directory-preview-section py-section">
        <div className="container text-center">
          <h2 className="section-title">{t('home.dirTitle1')} <span className="text-gradient">{t('home.dirTitle2')}</span></h2>
          <p className="section-subtitle mx-auto">
            {t('home.dirSub')}
          </p>
          
          <div className="category-pills">
            <span className="pill">Performance Analysis</span>
            <span className="pill">Video Analytics</span>
            <span className="pill">Fan Engagement</span>
            <span className="pill">Scouting AI</span>
            <span className="pill">Stadium Analytics</span>
            <span className="pill">Fitness Tech</span>
            <span className="pill">Sports Business</span>
          </div>
          
          <Link to="/tools" className="btn btn-primary btn-lg mt-8">
            {t('home.searchDir')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Sport AI Insights Preview */}
      <section className="insights-preview-section py-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">{t('home.insTitle1')} <span className="text-gradient">{t('home.insTitle2')}</span></h2>
              <p className="text-muted">{t('home.insSub')}</p>
            </div>
            <Link to="/insights" className="btn btn-secondary view-all-btn">
              {t('home.viewAllIns')} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="insights-grid">
            {blogsData.slice(0, 3).map((blog, index) => (
              <Link key={blog.slug + index} to={`/post?slug=${blog.slug}`} className="insight-card glass-panel">
                <div className={`insight-image ${blog.imageClass || 'img-1'}`}></div>
                <div className="insight-content">
                  <span className="category-tag">{blog.category}</span>
                  <h3 className="insight-title">{blog.title}</h3>
                  <p className="insight-excerpt">{blog.excerpt}</p>
                  <span className="insight-date">{blog.date} • {blog.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-section">
        <div className="container">
          <div className="newsletter-box glass-panel neon-border">
            <div className="newsletter-content">
              <h2 className="section-title">{t('home.nlTitle1')} <span className="text-gradient">{t('home.nlTitle2')}</span></h2>
              <p className="section-subtitle">
                {t('home.nlSub')}
              </p>
              
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder={t('home.nlEmail')} 
                  className="form-input form-input-lg" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
                  required
                />
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg"
                  disabled={status === 'loading' || status === 'success'}
                >
                  {status === 'loading' ? '...' : status === 'success' ? <CheckCircle size={20} /> : t('home.nlSubBtn')}
                </button>
              </form>
              
              {status === 'success' && (
                <p className="text-neon mt-4" style={{ fontSize: '0.9rem' }}>
                  {t('home.nlSuccess', 'Successfully subscribed!')}
                </p>
              )}
              {status === 'error' && (
                <p className="text-orange mt-4" style={{ fontSize: '0.9rem' }}>
                  {t('home.nlError', 'Something went wrong. Please try again.')}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
