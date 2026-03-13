import React from 'react';
import { ArrowLeft, Calendar, User, Share2, Bookmark, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './BlogPost.css';
import blogsData from '../data/blogs.json';

const BlogPost = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const slug = searchParams.get('slug');

  // Find the requested blog or default to the first one
  const blog = blogsData.find(b => b.slug === slug) || blogsData[0];

  return (
    <div className="blog-post-page">
      <div className="container py-section">
        
        <header className="article-main-header">
          <Link to="/insights" className="back-link mb-6 inline-flex items-center text-muted text-sm hover:text-neon transition-colors">
            <ArrowLeft size={16} className="mr-2" /> {t('insights.back') || 'Geri Dön'}
          </Link>
          
          <div className="article-meta mb-4 flex items-center gap-4 text-sm">
            <span className="category-tag text-neon uppercase tracking-wider">{blog.category}</span>
            <span className="flex items-center text-muted"><Clock size={14} className="mr-1" /> {blog.readTime}</span>
          </div>

          <h1 className="article-main-title text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="article-subtitle text-xl text-muted mb-8">{blog.excerpt}</p>

          <div className="article-author-row flex items-center justify-between py-6 border-y border-color">
            <div className="author-info flex items-center">
              <div className="author-avatar w-10 h-10 rounded-full bg-neon flex items-center justify-center mr-3 text-dark">
                <User size={20} />
              </div>
              <div>
                <div className="author-name font-medium">AiForSport Editör</div>
                <div className="article-date text-muted text-sm">{blog.date}</div>
              </div>
            </div>
            
            <div className="article-actions flex gap-2">
              <button className="btn-icon-outline p-2 rounded border border-color hover:border-neon transition-colors"><Bookmark size={18} /></button>
              <button className="btn-icon-outline p-2 rounded border border-color hover:border-neon transition-colors"><Share2 size={18} /></button>
            </div>
          </div>
        </header>

        <div className="article-hero-image container mt-8 mb-12">
          <div className={`img-featured-large rounded-xl h-96 bg-cover bg-center ${blog.imageClass || 'img-1'}`}></div>
        </div>

        <div className="article-content-wrapper max-w-3xl mx-auto">
          <div className="article-body-content text-lg leading-relaxed text-gray-300" dangerouslySetInnerHTML={{ __html: blog.content }}>
          </div>

          <div className="article-newsletter-cta mt-16 p-8 glass-panel neon-border rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-2">Bu yazıyı beğendiniz mi?</h3>
            <p className="text-muted mb-6">Daha fazla derinlemesine analiz için Sport AI Weekly bültenine abone olun.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-md mx-auto">
              <input type="email" placeholder="E-posta adresiniz" className="form-input flex-1 px-4 py-2 rounded bg-dark border border-color focus:border-neon outline-none" />
              <button type="submit" className="btn btn-primary px-6 py-2 rounded bg-neon text-dark font-medium">Abone Ol</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
