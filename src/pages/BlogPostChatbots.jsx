import React from 'react';
import { ArrowLeft, Calendar, User, Share2, Bookmark, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './BlogPost.css';

const BlogPostChatbots = () => {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  const content = {
    en: {
      back: "Back to Insights",
      tag: "Case Study",
      read: "7 min read",
      title: "Revolutionizing Fan Engagement with AI Chatbots in the NBA",
      sub: "Analyzing how top-tier NBA teams are delivering personalized fan experiences at scale without losing the human touch inside their stadium arenas.",
      author: "Marcus Johnson",
      date: "Published Oct 08, 2023",
      caption: "Digital fan experiences powered by AI are transforming massive arenas into personalized venues.",
      p1: "The modern sports fan wants more than just a hot dog and a good view. They want an experience tailored specifically to them. But how does a franchise personalize the experience for 20,000 different people simultaneously? The answer lies in conversational AI.",
      h2_1: "The Problem with Stadium Apps",
      p2: "Historically, teams spent millions developing complex stadium applications. Fans were expected to download an app, create an account, navigate complex menus to find the nearest bathroom, order food, or check stats. The reality? App retention rates plummeted after the final buzzer.",
      quote: "\"Fans don't want to learn a new user interface while trying to watch a live game. They just want to ask a question and get an immediate, accurate answer.\"",
      qAuthor: "- VP of Digital Strategy, NBA Franchise",
      h2_2: "The Conversational Shift",
      p3: "By integrating Large Language Models (LLMs) trained specifically on stadium telemetry, team rosters, and point-of-sale systems, teams have transformed their apps into AI concierges. Instead of navigating menus, fans simply text: Where's the shortest line for a craft beer near section 112?",
      li1Title: "Wayfinding & Routing: ",
      li1Desc: "AI predicts queue times at concessions and bathrooms using optical sensors, routing fans to the fastest lines.",
      li2Title: "In-Seat Ordering: ",
      li2Desc: "Natural language processing handles complex food orders, integrating directly with existing POS systems.",
      li3Title: "Live Stat Queries: ",
      li3Desc: "Fans can ask the bot highly specific statistical questions about the game currently happening on the floor.",
      h2_3: "Measurable ROI",
      p4: "The shift from manual navigation to conversational AI has yielded massive returns for early adopter franchises. Per-capita fan spending has increased by 14% on game nights where the AI assistant handles food ordering, simply because fans spend less time waiting in line and more time engaging with frictionless purchasing.",
      enjoy: "Enjoying this post?",
      subText: "Subscribe to Sport AI Weekly for more deep dives.",
      email: "Your email",
      subBtn: "Subscribe"
    },
    tr: {
      back: "İçgörülere Dön",
      tag: "Vaka Çalışması",
      read: "7 dk okuma",
      title: "NBA'de Yapay Zeka Sohbet Botlarıyla Taraftar Etkileşiminde Devrim",
      sub: "Önde gelen NBA takımlarının stadyum arenalarında insan dokunuşunu kaybetmeden büyük ölçekte kişiselleştirilmiş taraftar deneyimlerini nasıl sunduğunu analiz ediyoruz.",
      author: "Marcus Johnson",
      date: "Yayınlandı 08 Eki 2023",
      caption: "YZ tarafından desteklenen dijital taraftar deneyimleri, dev mekanları kişiselleştirilmiş alanlara dönüştürüyor.",
      p1: "Modern spor taraftarı sosisli sandviç ve güzel bir manzaradan daha fazlasını istiyor. Kendilerine özel bir deneyim istiyorlar. Peki bir franchise aynı anda 20.000 farklı kişi için deneyimi nasıl kişiselleştirir? Cevap, diyaloga dayalı yapay zekada yatmaktadır.",
      h2_1: "Stadyum Uygulamaları ile İlgili Sorun",
      p2: "Tarihsel olarak takımlar karmaşık stadyum uygulamaları geliştirmek için milyonlar harcadı. Taraftarlardan bir uygulama indirmeleri, bir hesap oluşturmaları, en yakın tuvaleti bulmak, yemek sipariş etmek veya istatistikleri kontrol etmek için karmaşık menülerde gezinmeleri bekleniyordu. Gerçek mi? Uygulamayı kullanma oranları son sesten sonra düştü.",
      quote: "\"Taraftarlar canlı bir maçı izlemeye çalışırken yeni bir kullanıcı arayüzü öğrenmek istemiyorlar. Sadece bir soru sormak ve anında, doğru bir yanıt almak istiyorlar.\"",
      qAuthor: "- Dijital Strateji Başkan Yardımcısı, NBA Kulübü",
      h2_2: "Diyaloğa Dayalı Geçiş",
      p3: "Özellikle stadyum telemetrisi, takım kadroları ve satış noktası sistemleri üzerinde eğitilmiş Büyük Dil Modellerini (LLM'ler) birleştirerek ekipler uygulamalarını YZ asistanlarına dönüştürdü. Menülerde gezinmek yerine taraftarlar mesaj atıyor: Bölüm 112'nin yakınında butik bira için en kısa sıra nerede?",
      li1Title: "Yol Bulma ve Yönlendirme: ",
      li1Desc: "YZ, optik sensörler kullanarak yiyecek içecek ve banyolardaki kuyruk sürelerini tahmin ederek taraftarları en hızlı hatlara yönlendirir.",
      li2Title: "Koltuk İçi Sipariş: ",
      li2Desc: "Doğal dil işleme, mevcut POS sistemleriyle doğrudan entegre olarak karmaşık yiyecek siparişlerini işler.",
      li3Title: "Canlı İstatistik Sorguları: ",
      li3Desc: "Taraftarlar bota şu anda oynanan oyun hakkında son derece spesifik istatistiksel sorular sorabilir.",
      h2_3: "Ölçülebilir Yatırım Getirisi",
      p4: "Manuel navigasyondan konuşkan yapay zekaya geçiş, bunu erken benimseyen kulüpler için muazzam getiriler sağladı. Taraftarlar sırada beklemek için daha az zaman harcadıkları ve sürtünmesiz satın alma işlemine daha fazla zaman ayırdıkları için YZ asistanının yiyecek siparişiyle ilgilendiği maç gecelerinde kişi başına taraftar harcaması %14 arttı.",
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
            <span className="category-tag text-orange border-orange bg-orange-dim">{c.tag}</span>
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
          <div className="img-featured-large" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop')" }}></div>
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

              <div className="pull-quote glass-panel my-8 neon-border border-orange">
                {c.quote}
                <span className="quote-author">{c.qAuthor}</span>
              </div>

              <h2>{c.h2_2}</h2>
              <p>{c.p3}</p>
              
              <ul className="article-list my-6">
                <li><strong className="text-orange">{c.li1Title}</strong>{c.li1Desc}</li>
                <li><strong className="text-orange">{c.li2Title}</strong>{c.li2Desc}</li>
                <li><strong className="text-orange">{c.li3Title}</strong>{c.li3Desc}</li>
              </ul>

              <h2>{c.h2_3}</h2>
              <p>{c.p4}</p>

              <div className="article-tags mt-12 pt-6 border-t border-color">
                <span className="pill">Fan Engagement</span>
                <span className="pill">Chatbots</span>
                <span className="pill">NBA</span>
                <span className="pill">Stadium Tech</span>
              </div>
            </div>

            <aside className="article-sidebar">
              <div className="sticky-widget newsletter-widget neon-border border-orange mt-6">
                <h4 className="widget-title text-orange pb-2">{c.enjoy}</h4>
                <p className="text-sm text-muted mb-4">{c.subText}</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder={c.email} className="form-input w-full mb-3" />
                  <button type="submit" className="btn btn-accent w-full">{c.subBtn}</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostChatbots;
