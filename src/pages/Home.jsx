import { Link } from "react-router-dom";
import "./Home.css";

const featuredPosts = [
  {
    slug: "mastering-golden-hour-photography",
    title: "إتقان تصوير الساعة الذهبية: دليل شامل",
    category: "إضاءة",
    readTime: "8 دقائق للقراءة",
    date: "١٥ يناير ٢٠٢٦",
    excerpt:
      "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
    author: "سالم أحمد",
    role: "مصور محترف",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    slug: "portrait-photography-secrets",
    title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
    category: "بورتريه",
    readTime: "6 دقائق للقراءة",
    date: "١٢ يناير ٢٠٢٦",
    excerpt:
      "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    author: "محمد علي",
    role: "مصور بورتريه",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    slug: "landscape-photography-guide",
    title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
    category: "مناظر طبيعية",
    readTime: "10 دقائق للقراءة",
    date: "١٠ يناير ٢٠٢٦",
    excerpt:
      "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    author: "إبراهيم حسن",
    role: "مصور طبيعة",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const categories = [
  {
    name: "إضاءة",
    count: "3 مقالة",
    icon: "fa-sun",
    className: "category-orange",
  },
  {
    name: "بورتريه",
    count: "3 مقالة",
    icon: "fa-user",
    className: "category-orange-2",
  },
  {
    name: "مناظر طبيعية",
    count: "2 مقالة",
    icon: "fa-mountain-sun",
    className: "category-orange",
  },
  {
    name: "تقنيات",
    count: "5 مقالة",
    icon: "fa-sliders",
    className: "category-orange",
  },
  {
    name: "معدات",
    count: "3 مقالة",
    icon: "fa-camera",
    className: "category-orange",
  },
];

const latestPosts = [
  {
    slug: "camera-settings-basics",
    title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
    category: "تقنيات",
    readTime: "7 دقائق للقراءة",
    date: "٨ يناير ٢٠٢٦",
    excerpt:
      "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",
    author: "داود خالد",
    role: "مدرب تصوير",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
  },
  {
    slug: "photo-composition-rules",
    title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
    category: "تقنيات",
    readTime: "9 دقائق للقراءة",
    date: "٥ يناير ٢٠٢٦",
    excerpt:
      "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",
    author: "ليث محمود",
    role: "فنان بصري",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
  {
    slug: "mobile-photography-tips",
    title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
    category: "معدات",
    readTime: "8 دقائق للقراءة",
    date: "٣ يناير ٢٠٢٦",
    excerpt:
      "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    author: "جمال عبدالله",
    role: "مصور ومراجع تقني",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
  },
];

const newsletterAvatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
];

function ArrowIcon() {
  return (
    <i className="fa-solid fa-arrow-left home-arrow-icon"></i>
  );
}

function ClockIcon() {
  return <i className="fa-regular fa-clock"></i>;
}

function FeaturedCard({ post, index }) {
  return (
    <article
      className="featured-card"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <Link to={`/blog/${post.slug}`} className="featured-card-link">
        <div className="featured-card-grid">
          <div className="featured-image-wrapper">
            <img src={post.image} alt={post.title} />

            <div className="featured-image-overlay"></div>

            <div className="featured-badge">
              <i className="fa-solid fa-star"></i>
              <span>مميز</span>
            </div>
          </div>

          <div className="featured-content">
            <div className="featured-meta">
              <span className="category-badge">{post.category}</span>

              <span className="read-time">
                <ClockIcon />
                {post.readTime}
              </span>
            </div>

            <h2>{post.title}</h2>

            <p>{post.excerpt}</p>

            <div className="featured-bottom">
              <div className="author-info">
                <div className="author-avatar-wrapper">
                  <img src={post.avatar} alt={post.author} />
                  <span className="author-online"></span>
                </div>

                <div>
                  <p className="author-name">{post.author}</p>
                  <p className="author-date">{post.date}</p>
                </div>
              </div>

              <span className="read-more">
                اقرأ المقال
                <ArrowIcon />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

function LatestCard({ post, index }) {
  return (
    <article
      className="latest-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link to={`/blog/${post.slug}`} className="latest-card-link">
        <div className="latest-image-wrapper">
          <img src={post.image} alt={post.title} />

          <div className="latest-image-overlay"></div>

          <div className="latest-category">{post.category}</div>
        </div>

        <div className="latest-content">
          <div className="latest-meta">
            <span>
              <ClockIcon />
              {post.readTime}
            </span>

            <span className="meta-dot"></span>

            <span>{post.date}</span>
          </div>

          <h3>{post.title}</h3>

          <p>{post.excerpt}</p>

          <div className="latest-footer">
            <div className="latest-author">
              <img src={post.avatar} alt={post.author} />

              <div>
                <p>{post.author}</p>
                <span>{post.role}</span>
              </div>
            </div>

            <div className="latest-arrow">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="hero-grid"></div>

        <div className="hero-blob hero-blob-one"></div>

        <div className="hero-blob hero-blob-two"></div>

        <div className="hero-blob hero-blob-center"></div>

        <div className="home-container hero-container">
          <div className="hero-content">
           <div className="section-label">
  <span className="section-dot">
    <span className="section-dot-ping"></span>
    <span className="section-dot-main"></span>
  </span>

  <span className="section-label-text">
    مرحباً بك في عدسة
  </span>
</div>

            <h1>
              اكتشف <span>فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            <p className="hero-description">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="hero-buttons">
              <Link to="/blog" className="home-btn home-btn-primary">
                <span>استكشف المقالات</span>
                <ArrowIcon />
              </Link>

              <Link to="/about" className="home-btn home-btn-secondary">
                <i className="fa-solid fa-circle-info"></i>
                <span>اعرف المزيد</span>
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <i className="fa-solid fa-newspaper"></i>
                <strong>+50</strong>
                <span>مقالة</span>
              </div>

              <div className="stat-card">
                <i className="fa-solid fa-users"></i>
                <strong>+10ألف</strong>
                <span>قارئ</span>
              </div>

              <div className="stat-card">
                <i className="fa-solid fa-folder-open"></i>
                <strong>4</strong>
                <span>تصنيفات</span>
              </div>

              <div className="stat-card">
                <i className="fa-solid fa-pen-nib"></i>
                <strong>6</strong>
                <span>كاتب</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="featured-section">
        <div className="section-side-glow section-side-glow-right"></div>

        <div className="home-container">
          <div className="section-heading-row">
            <div>
                 <div className="section-label">
  <span className="section-dot">
    <span className="section-dot-ping"></span>
    <span className="section-dot-main"></span>
  </span>

  <span className="section-label-text">
  مميز
  </span>
</div>

              <h2 className="home-section-title">مقالات مختارة</h2>

              <p className="home-section-subtitle">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>

            <Link to="/blog" className="view-all-button">
              عرض الكل
              <ArrowIcon />
            </Link>
          </div>

          <div className="featured-list">
            {featuredPosts.map((post, index) => (
              <FeaturedCard
                key={post.slug}
                post={post}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="categories-section">
        <div className="home-container">
          <div className="center-section-heading">
               <div className="section-label">
  <span className="section-dot">
    <span className="section-dot-ping"></span>
    <span className="section-dot-main"></span>
  </span>

  <span className="section-label-text">
    التصنيفات
  </span>
</div>

            <h2 className="home-section-title">استكشف حسب الموضوع</h2>

            <p className="home-section-subtitle">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                className={`category-card ${category.className}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="category-hover-bg"></div>

                <div className="category-content">
                  <div className="category-icon">
                    <i className={`fa-solid ${category.icon}`}></i>
                  </div>

                  <h3>{category.name}</h3>

                  <p>{category.count}</p>

                  <div className="category-arrow">
                    <ArrowIcon />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LATEST ================= */}
      <section className="latest-section">
        <div className="section-side-glow section-side-glow-left"></div>

        <div className="home-container">
          <div className="section-heading-row">
            <div>
                <div className="section-label">
  <span className="section-dot">
    <span className="section-dot-ping"></span>
    <span className="section-dot-main"></span>
  </span>

  <span className="section-label-text">
   الاحداث
  </span>
</div>

              <h2 className="home-section-title">أحدث المقالات</h2>

              <p className="home-section-subtitle">
                محتوى جديد طازج من المطبعة
              </p>
            </div>

            <Link to="/blog" className="latest-view-all">
              عرض جميع المقالات
              <ArrowIcon />
            </Link>
          </div>

          <div className="latest-grid">
            {latestPosts.map((post, index) => (
              <LatestCard
                key={post.slug}
                post={post}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="newsletter-section">
        <div className="newsletter-glow"></div>

        <div className="newsletter-container">
          <div className="newsletter-box">
            <div className="newsletter-icon">
              <i className="fa-regular fa-envelope"></i>
            </div>

            <h2>
              اشترك في <span>نشرتنا الإخبارية</span>
            </h2>

            <p>
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
              />

              <button type="submit">اشترك الآن</button>
            </form>

            <div className="newsletter-details">
              <div className="newsletter-users">
                <div className="newsletter-avatars">
                  {newsletterAvatars.map((avatar) => (
                    <img key={avatar} src={avatar} alt="" />
                  ))}
                </div>

                <span>
                  انضم لـ <strong>+10,000</strong> مصور
                </span>
              </div>

              <span className="newsletter-separator">•</span>

              <span>بدون إزعاج</span>

              <span className="newsletter-separator">•</span>

              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}