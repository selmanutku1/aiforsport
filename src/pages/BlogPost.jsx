import React from 'react';
import { ArrowLeft, Calendar, User, Share2, Bookmark, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './BlogPost.css';

const BlogPost = () => {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  const content = {
    en: {
      back: "Back to Insights",
      tag: "Industry Analysis",
      read: "8 min read",
      title: "The Moneyball 2.0 Era: How Machine Learning is Redefining Player Valuation",
      sub: "Two decades after Moneyball revolutionized baseball, a new wave of predictive models powered by deep learning is sweeping across global sports. We analyze how top European football clubs and NBA franchises use AI to find undervalued talent.",
      author: "Dr. Sarah Chen",
      date: "Published Oct 15, 2023 • Updated Oct 16, 2023",
      caption: "AI data visualizations overlaying live match footage in modern scouting platforms.",
      p1: "When Billy Beane pioneered the use of sabermetrics with the Oakland Athletics in the early 2000s, the sports world was forever changed. But today's data revolution makes early Moneyball look like simple arithmetic. We are now entering 'Moneyball 2.0,' an era defined not just by statistical analysis, but by complex machine learning algorithms and computer vision.",
      h2_1: "Beyond the Spreadsheet: The Evolution of Data",
      p2: "The fundamental flaw in traditional scouting is cognitive bias. Human scouts, no matter how experienced, are susceptible to recency bias, halo effects, and simple fatigue. Early data analytics attempted to solve this by aggregating box-score statistics (goals, assists, rebounds, running distance).",
      p3: "However, box-score data lacks context. A completed pass in the defensive third when leading 3-0 is worth significantly less than a completed pass breaking lines in the final third when trailing 0-1.",
      quote: "\"We no longer ask 'how many passes did he make?' We ask our neural networks 'how much did this player's actions increase our probability of scoring over the next 10 seconds?'\"",
      qAuthor: "- Director of Analytics, Premier League Club",
      h2_2: "Ghosting: The Hidden Value of Off-Ball Movement",
      p4: "In sports like football (soccer) and basketball, players spend the vast majority of the game without the ball. Traditional metrics completely ignore off-ball movement.",
      p5: "Enter 'Ghosting' — a machine learning technique originally developed for the NBA. Using optical tracking cameras, models learn where a player should be defensively based on the positions of the other 9 players. By comparing the real player's position to the 'ghost' (optimal) position, analysts can grade defensive IQ objectively for the first time in history.",
      h3: "Key AI Technologies Redefining Valuation",
      li1Title: "Optic Tracking & Pose Estimation: ",
      li1Desc: "Automatically converting broadcast video into 3D skeletal data to analyze biomechanics and shooting form.",
      li2Title: "Expected Threat (xT) & Pitch Control: ",
      li2Desc: "Moving beyond 'xG' to value every single action on the pitch by how much it increases the probability of a goal.",
      li3Title: "Predictive Aging Curves: ",
      li3Desc: "Using historical data to predict exactly when a player's physical attributes will begin to decline, preventing expensive long-term contract mistakes.",
      h2_3: "The Future is Generative",
      p6: "The next frontier is generative AI for tactical planning. Coaches will soon be able to input opposing team lineups into Large Language Models trained entirely on tactical data, asking questions like: 'What is the optimal pressing trigger against Manchester City's build-up play if De Bruyne is playing deep?'",
      p7: "The Moneyball 2.0 era is no longer just about finding cheap talent; it's about fundamentally understanding the game at a level invisible to the naked eye.",
      toc: "Table of Contents",
      enjoy: "Enjoying this post?",
      subText: "Subscribe to Sport AI Weekly for more deep dives.",
      email: "Your email",
      subBtn: "Subscribe",
      related: "Related Insights"
    },
    tr: {
      back: "İçgörülere Dön",
      tag: "Sektör Analizi",
      read: "8 dk okuma",
      title: "Moneyball 2.0 Dönemi: Makine Öğrenimi Oyuncu Değerlemesini Nasıl Yeniden Tanımlıyor",
      sub: "Moneyball'un beyzbolda devrim yaratmasından yirmi yıl sonra, derin öğrenmeyle desteklenen yeni bir tahmine dayalı modelleme dalgası küresel sporları kasıp kavuruyor. Avrupa'nın önde gelen futbol kulüplerinin ve NBA ekiplerinin değerli yetenekleri bulmak için YZ'yi nasıl kullandığını inceliyoruz.",
      author: "Dr. Sarah Chen",
      date: "Yayınlandı 15 Eki 2023 • Güncellendi 16 Eki 2023",
      caption: "Modern gözlemci platformlarında canlı maç görüntüleri üzerine bindirilmiş YZ veri görselleştirmeleri.",
      p1: "Billy Beane 2000'lerin başında Oakland Athletics ile sabermetrik kullanımına öncülük ettiğinde, spor dünyası sonsuza dek değişti. Ancak günümüzün veri devrimi, eski Moneyball'u basit bir aritmetik gibi gösteriyor. Şimdi, sadece istatistiksel analizle değil, karmaşık makine öğrenimi algoritmaları ve bilgisayarlı görü ile tanımlanan bir çağ olan 'Moneyball 2.0'a giriyoruz.",
      h2_1: "E-Tablonun Ötesinde: Verilerin Evrimi",
      p2: "Geleneksel gözlemciliğin temel kusuru bilişsel önyargıdır. İnsan gözlemciler, ne kadar deneyimli olurlarsa olsunlar önyargıya ve basit yorgunluğa karşı hassastır. Erken veri analitiği bunu kutu skoru istatistiklerini toplayarak çözmeye çalıştı.",
      p3: "Ancak kutu skoru verileri bağlamdan yoksundur. Savunma bölgesinde 3-0 öndeyken tamamlanan bir pas, 0-1 gerideyken üçüncü bölgede savunmayı kıran bir pastan çok daha az değerlidir.",
      quote: "\"Artık 'kaç pas yaptı?' diye sormuyoruz. Yapay sinir ağlarımıza 'bu oyuncunun eylemleri önümüzdeki 10 saniye boyunca gol atma olasılığımızı ne kadar artırdı?' diye soruyoruz.\"",
      qAuthor: "- Analitik Direktörü, Premier Lig Kulübü",
      h2_2: "Ghosting: Topsuz Hareketin Gizli Değeri",
      p4: "Futbol (soccer) ve basketbol gibi sporlarda oyuncular oyunun büyük çoğunluğunu topsuz geçirir. Geleneksel metrikler topsuz hareketleri tamamen görmezden gelir.",
      p5: "Orijinal olarak NBA için geliştirilen bir makine öğrenimi tekniği olan 'Ghosting'i (Hayalet Oyuncu) düşünün. Optik izleme kameralarını kullanarak modeller, diğer 9 oyuncunun pozisyonuna dayanarak bir oyuncunun savunmada nerede 'olması' gerektiğini öğrenir. Analistler, gerçek oyuncunun pozisyonunu 'hayalet' (optimum) pozisyonla karşılaştırarak tarihte ilk kez savunma zekasına nesnel olarak not verebilirler.",
      h3: "Değerlemeyi Yeniden Tanımlayan Temel YZ Teknolojileri",
      li1Title: "Optik İzleme ve Poz Kestirimi: ",
      li1Desc: "Biyomekaniği ve şut formunu analiz etmek için yayın videolarını otomatik olarak 3D iskelet verisine dönüştürme.",
      li2Title: "Beklenen Tehlike (xT) ve Saha Kontrolü: ",
      li2Desc: "Sahadaki her bir eylemi, gol atma olasılığını ne kadar artırdığına göre değerlendirmek için 'xG'nin ötesine geçmek.",
      li3Title: "Tahmini Yaşlanma Eğrileri: ",
      li3Desc: "Bir oyuncunun fiziksel özelliklerinin tam olarak ne zaman zayıflamaya başlayacağını tahmin etmek için tarihsel verileri kullanarak pahalı uzun vadeli sözleşme hatalarını önlemek.",
      h2_3: "Gelecek Üretkendir",
      p6: "Sıradaki sınır taktik planlama için üretken yapay zeka. Kısa bir süre sonra koçlar, rakip takım kadrolarını tamamen taktiksel verilerle eğitilmiş Büyük Dil Modellerine girerek şu gibi sorular sorabilecekler: 'De Bruyne derinde oynuyorsa Manchester City'nin oyun kurmasına karşı en uygun pres tetikleyicisi nedir?'",
      p7: "Moneyball 2.0 çağı artık sadece ucuz yetenekler bulmakla ilgili değil; oyunu temelden çıplak gözle görülemeyecek bir düzeyde anlamakla ilgilidir.",
      toc: "İçindekiler",
      enjoy: "Bu yazıyı beğendiniz mi?",
      subText: "Daha fazla derin analiz için Haftalık Spor YZ bültenine abone olun.",
      email: "E-postanız",
      subBtn: "Abone Ol",
      related: "İlgili İçgörüler"
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
            <span className="category-tag">{c.tag}</span>
            <span className="article-read-time"><Clock size={14} /> {c.read}</span>
          </div>
          
          <h1 className="article-main-title">{c.title}</h1>
          
          <p className="article-subtitle">{c.sub}</p>

          <div className="article-author-row mt-6">
            <div className="author-info">
              <div className="author-avatar mr-3">
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
          <div className="img-featured-large"></div>
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
              <p>{c.p3}</p>
              <div className="pull-quote glass-panel my-8 neon-border">
                {c.quote}
                <span className="quote-author">{c.qAuthor}</span>
              </div>
              <h2>{c.h2_2}</h2>
              <p>{c.p4}</p>
              <p>{c.p5}</p>
              <h3>{c.h3}</h3>
              <ul className="article-list my-6">
                <li><strong className="text-neon">{c.li1Title}</strong>{c.li1Desc}</li>
                <li><strong className="text-neon">{c.li2Title}</strong>{c.li2Desc}</li>
                <li><strong className="text-neon">{c.li3Title}</strong>{c.li3Desc}</li>
              </ul>
              <h2>{c.h2_3}</h2>
              <p>{c.p6}</p>
              <p>{c.p7}</p>

              <div className="article-tags mt-12 pt-6 border-t border-color">
                <span className="pill">Football AI</span>
                <span className="pill">Machine Learning</span>
                <span className="pill">Scouting</span>
                <span className="pill">Data Analytics</span>
              </div>
            </div>

            <aside className="article-sidebar">
              <div className="sticky-widget glass-panel">
                <h4 className="widget-title pb-2">{c.toc}</h4>
                <ul className="toc-list">
                  <li><a href="#" className="active">{c.h2_1}</a></li>
                  <li><a href="#">{c.h2_2}</a></li>
                  <li><a href="#">{c.h3}</a></li>
                  <li><a href="#">{c.h2_3}</a></li>
                </ul>
              </div>

              <div className="sticky-widget newsletter-widget neon-border mt-6">
                <h4 className="widget-title text-neon pb-2">{c.enjoy}</h4>
                <p className="text-sm text-muted mb-4">{c.subText}</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder={c.email} className="form-input w-full mb-3" />
                  <button type="submit" className="btn btn-primary w-full">{c.subBtn}</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Suggested Articles */}
      <section className="suggested-articles py-section bg-dark-secondary">
        <div className="container">
          <h2 className="section-title mb-8"><span className="text-gradient">{c.related}</span></h2>
          <div className="insights-grid">
            <div className="insight-card glass-panel">
              <div className="insight-image img-1"></div>
              <div className="insight-content">
                <span className="category-tag">{t('home.p1Cat')}</span>
                <h3 className="insight-title">{t('home.p1Title')}</h3>
                <span className="insight-date">Oct 12, 2023 • 5 min read</span>
              </div>
            </div>
            <div className="insight-card glass-panel">
              <div className="insight-image img-3"></div>
              <div className="insight-content">
                <span className="category-tag">{t('home.p3Cat')}</span>
                <h3 className="insight-title">{t('home.p3Title')}</h3>
                <span className="insight-date">Oct 01, 2023 • 6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
