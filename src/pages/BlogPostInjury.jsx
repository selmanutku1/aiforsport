import React from 'react';
import { ArrowLeft, Calendar, User, Share2, Bookmark, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './BlogPost.css';

const BlogPostInjury = () => {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  const content = {
    en: {
      back: "Back to Insights",
      tag: "Analysis",
      read: "6 min read",
      title: "Predictive Injury Models: The Holy Grail of Sports Data",
      sub: "A deep dive into how wearable technology and machine learning algorithms are extending athletic careers by predicting soft tissue injuries before they happen.",
      author: "Elena Rodriguez",
      date: "Published Oct 01, 2023",
      caption: "Wearable GPS trackers and biometric sensors feed millions of data points into predictive engines.",
      p1: "In professional sports, the greatest ability is availability. A star player sidelined by a hamstring tear doesn't just hurt a team's championship chances; it represents millions of dollars in lost investment. For decades, managing injuries was a reactive science. Today, AI is making it proactive.",
      h2_1: "The Data Tsunami",
      p2: "The foundation of predictive injury modeling is the staggering amount of data now collected on athletes. GPS units worn between the shoulder blades track distance, high-speed running, accelerations, and decelerations. Sleep rings monitor HRV (Heart Rate Variability) and REM cycles. Force plates measure neuromuscular fatigue during morning jumps.",
      quote: "\"We are no longer guessing when a player is in the 'red zone.' The algorithm alerts the medical staff that Player X has a 74% higher probability of a soft tissue injury today based on their acute-to-chronic workload ratio.\"",
      qAuthor: "- Head of High Performance, Rugby Union Team",
      h2_2: "Training the Algorithm",
      p3: "Machine learning models excel at finding nonlinear relationships in massive datasets. A human sports scientist might look at a player's high-speed running distance and deem it normal. But an AI model analyzing that same player can recognize a dangerous pattern:",
      p4: "\"High-speed running is normal, BUT it was achieved with 12% lower peak acceleration, following a night of terrible sleep quality, and their ground contact time asymmetry has increased by 4% on their left leg.\"",
      p5: "That combination of subtle anomalies is the algorithm waving a red flag long before the hamstring actually tears.",
      h2_3: "The Ethical Dilemma",
      p6: "As these models become more accurate, they raise complicated questions regarding contract negotiations. If an AI model predicts a 28-year-old athlete's knees will precipitously decline in 18 months, who owns that data? Does the club use it to trade the player while their value is high? The intersection of predictive AI and athletics is creating an impending legal battleground over biological data rights.",
      enjoy: "Enjoying this post?",
      subText: "Subscribe to Sport AI Weekly for more deep dives.",
      email: "Your email",
      subBtn: "Subscribe"
    },
    tr: {
      back: "İçgörülere Dön",
      tag: "Analiz",
      read: "6 dk okuma",
      title: "Tahmine Dayalı Sakatlık Modelleri: Spor Verilerinin Kutsal Kasesi",
      sub: "Giyilebilir teknoloji ve makine öğrenimi algoritmalarının yumuşak doku yaralanmalarını olmadan önce tahmin ederek spor kariyerlerini nasıl uzattığına dair derinlemesine bir bakış.",
      author: "Elena Rodriguez",
      date: "Yayınlandı 01 Eki 2023",
      caption: "Giyilebilir GPS izleyiciler ve biyometrik sensörler, tahmin motorlarına milyonlarca veri noktası besliyor.",
      p1: "Profesyonel sporda en büyük yetenek sahada olabilmektir. Bağ yırtılması nedeniyle sahalardan uzak kalan yıldız bir oyuncu sadece bir takımın şampiyonluk şansına zarar vermekle kalmaz; kaybedilen milyonlarca dolarlık yatırımı temsil eder. On yıllar boyunca yaralanmaları yönetmek reaktif bir bilimdi. Bugün yapay zeka bunu proaktif hale getiriyor.",
      h2_1: "Veri Tsunamisi",
      p2: "Tahmine dayalı yaralanma modellemesinin temeli, şu anda sporcular üzerinde toplanan şaşırtıcı miktardaki veridir. Kürek kemikleri arasına takılan GPS birimleri mesafeyi, yüksek hızda koşuyu, hızlanmaları ve yavaşlamaları izler. Uyku yüzükleri HRV (Kalp Atış Hızı Değişkenliği) ve REM döngülerini izler. Kuvvet plakaları sabah atlamaları sırasında nöromüsküler yorgunluğu ölçer.",
      quote: "\"Artık bir oyuncunun ne zaman 'kırmızı bölgede' olduğunu tahmin etmiyoruz. Algoritma sağlık personelini X Oyuncusunun akut-kronik iş yükü oranına göre bugün yumuşak doku yaralanması yaşama olasılığının %74 daha yüksek olduğu konusunda uyarıyor.\"",
      qAuthor: "- Yüksek Performans Direktörü, Rugby Union Takımı",
      h2_2: "Algoritmayı Eğitmek",
      p3: "Makine öğrenimi modelleri, devasa veri setlerindeki doğrusal olmayan ilişkileri bulmada üstündür. İnsan bir spor bilimcisi bir oyuncunun yüksek hızda koşu mesafesine bakıp bunu normal görebilir. Ancak aynı oyuncuyu analiz eden bir YZ modeli tehlikeli bir örüntüyü fark edebilir:",
      p4: "\"Yüksek hızda koşmak normal, ANCAK kötü bir uyku kalitesi gecesinin ardından %12 daha düşük zirve ivmeyle elde edildi ve sol bacaklarındaki asimetri %4 arttı.\"",
      p5: "İnce anormalliklerin bu kombinasyonu, bağ gerçekte yırtılmadan çok önce kırmızı bir bayrak sallayan algoritmadır.",
      h2_3: "Etik İkilem",
      p6: "Bu modeller daha isabetli hale geldikçe sözleşme görüşmeleriyle ilgili karmaşık soruları gündeme getiriyorlar. Bir YZ modeli 28 yaşındaki bir sporcunun dizlerinin 18 ay içinde hızla bozulacağını tahmin ederse, bu verilere kim sahip olur? Kulüp bunu oyuncuyu değeri yüksekken takas etmek için kullanır mı? Tahmine dayalı YZ ile atletizmin kesişimi, biyolojik veri hakları konusunda yaklaşan bir yasal savaş alanı yaratıyor.",
      enjoy: "Bu yazıyı beğendiniz mi?",
      subText: "Daha fazla derin analiz için Haftalık Spor YZ bültenine abone olun.",
      email: "E-postanız",
      subBtn: "Abone Ol"
    }
  };

  const c = isTr ? content.tr : content.en;

  return (
    <div className="blog-post-page">
      <article className="blog-article">
        <header className="article-header container">
          <Link to="/insights" className="back-link mb-6">
            <ArrowLeft size={16} /> {c.back}
          </Link>
          
          <div className="article-meta-top mb-4">
            <span className="category-tag text-purple border-purple bg-purple-dim" style={{ borderColor: '#b388ff', color: '#b388ff' }}>{c.tag}</span>
            <span className="article-read-time"><Clock size={14} /> {c.read}</span>
          </div>
          
          <h1 className="article-main-title">{c.title}</h1>
          <p className="article-subtitle">{c.sub}</p>

          <div className="article-author-row mt-6">
            <div className="author-info">
              <div className="author-avatar mr-3" style={{ color: '#b388ff', borderColor: '#b388ff' }}>
                <User size={20} />
              </div>
              <div>
                <div className="author-name">{c.author}</div>
                <div className="article-date text-muted text-sm">{c.date}</div>
              </div>
            </div>
            
            <div className="article-actions">
              <button className="btn-icon-outline"><Bookmark size={18} /></button>
              <button className="btn-icon-outline"><Share2 size={18} /></button>
            </div>
          </div>
        </header>

        <div className="article-hero-image container mt-8">
          <div className="img-featured-large" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbf5ce0dcc?q=80&w=2000&auto=format&fit=crop')" }}></div>
          <p className="image-caption text-center text-sm text-muted mt-3">
            {c.caption}
          </p>
        </div>

        <div className="article-content-wrapper container py-section">
          <div className="article-layout">
            <div className="article-body-content">
              <p className="lead-paragraph">{c.p1}</p>
              
              <h2>{c.h2_1}</h2>
              <p>{c.p2}</p>
              
              <div className="pull-quote glass-panel my-8 neon-border" style={{ borderColor: 'rgba(179, 136, 255, 0.5)', borderLeftColor: '#b388ff', color: '#d1b3ff' }}>
                {c.quote}
                <span className="quote-author">{c.qAuthor}</span>
              </div>
              
              <h2>{c.h2_2}</h2>
              <p>{c.p3}</p>
              <p><em>{c.p4}</em></p>
              <p>{c.p5}</p>
              
              <h2>{c.h2_3}</h2>
              <p>{c.p6}</p>

              <div className="article-tags mt-12 pt-6 border-t border-color">
                <span className="pill">Sports Science</span>
                <span className="pill">Predictive AI</span>
                <span className="pill">Wearables</span>
                <span className="pill">Data Privacy</span>
              </div>
            </div>

            <aside className="article-sidebar">
              <div className="sticky-widget newsletter-widget neon-border mt-6" style={{ borderColor: 'rgba(179, 136, 255, 0.3)' }}>
                <h4 className="widget-title pb-2" style={{ color: '#b388ff' }}>{c.enjoy}</h4>
                <p className="text-sm text-muted mb-4">{c.subText}</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder={c.email} className="form-input w-full mb-3" />
                  <button type="submit" className="btn w-full" style={{ background: '#b388ff', color: '#000', fontWeight: 'bold' }}>{c.subBtn}</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostInjury;
