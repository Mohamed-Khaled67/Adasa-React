import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import blogData from "../data/blogData.json";
import "./BlogDetails.css";

const { posts } = blogData;

function formatArabicDate(date) {
  return new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function formatArabicShortDate(date) {
  return new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
  }).format(new Date(date));
}

function cleanMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .trim();
}

export default function BlogDetails() {
  const { slug } = useParams();

  const post = posts.find((item) => item.slug === slug);

  const relatedPosts = useMemo(() => {
    if (!post) return [];

    return posts
      .filter(
        (item) =>
          item.id !== post.id &&
          (item.category === post.category ||
            item.tags?.some((tag) => post.tags?.includes(tag)))
      )
      .slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <main className="blog-details-page">
        <div className="blog-not-found">
          <div className="blog-not-found-icon">
            <i className="fa-solid fa-file-circle-xmark"></i>
          </div>

          <h1>المقال غير موجود</h1>

          <p>
            عذراً، لم نتمكن من العثور على المقال الذي تبحث عنه.
          </p>

          <Link to="/blog" className="blog-back-button">
            <i className="fa-solid fa-arrow-right"></i>
            العودة إلى المدونة
          </Link>
        </div>
      </main>
    );
  }

  const contentLines = post.content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const sections = [];
  let currentSection = null;

  contentLines.forEach((line) => {
    if (line.startsWith("## ")) {
      if (currentSection) {
        sections.push(currentSection);
      }

      currentSection = {
        title: line.replace("## ", ""),
        paragraphs: [],
      };
    } else {
      if (!currentSection) {
        currentSection = {
          title: null,
          paragraphs: [],
        };
      }

      currentSection.paragraphs.push(cleanMarkdown(line));
    }
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  const intro =
    sections.find((section) => section.title === null)?.paragraphs?.[0] ||
    post.excerpt;

  const articleSections = sections.filter(
    (section) => section.title !== null
  );

  const authorDescription =
    post.author?.bio ||
    "مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.";

  const currentUrl = window.location.href;

  const shareOnX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        post.title
      )}&url=${encodeURIComponent(currentUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(
        `${post.title} ${currentUrl}`
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
    } catch {
      // Ignore clipboard errors.
    }
  };

  return (
    <main className="blog-details-page">
      <article className="blog-details-article">

        {/* HERO */}
        <section className="blog-details-hero">
          <img
            src={`${post.image}?w=1600&h=900&fit=crop`}
            alt={post.title}
            className="blog-details-hero-image"
          />

          <div className="blog-details-hero-gradient"></div>
          <div className="blog-details-hero-side-gradient"></div>

          {/* Breadcrumb */}
          <div className="blog-details-breadcrumb-wrapper">
            <nav className="blog-details-breadcrumb">
              <Link to="/">
                <i className="fa-solid fa-home"></i>
              </Link>

              <i className="fa-solid fa-chevron-left breadcrumb-chevron"></i>

              <Link to="/blog">
                المدونة
              </Link>

              <i className="fa-solid fa-chevron-left breadcrumb-chevron"></i>

              <span>{post.category}</span>
            </nav>
          </div>

          {/* Hero Content */}
          <div className="blog-details-hero-content-wrapper">
            <div className="blog-details-hero-content">

              <div className="blog-details-meta-row">
                <Link
                  to={`/blog?category=${encodeURIComponent(
                    post.category
                  )}`}
                  className="blog-details-category"
                >
                  {post.category}
                </Link>

                <div className="blog-details-meta-info">
                  <span>
                    <i className="fa-regular fa-calendar"></i>
                    {formatArabicDate(post.date)}
                  </span>

                  <span>
                    <i className="fa-regular fa-clock"></i>
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h1>{post.title}</h1>

              <div className="blog-details-author-mini">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                />

                <div>
                  <p>{post.author.name}</p>
                  <span>{post.author.role}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="blog-details-container">

          <div className="blog-details-layout">

            {/* ARTICLE */}
            <div className="blog-details-main">

              {/* Intro */}
              <div className="blog-details-intro">
                <p>
                  "{intro}"
                </p>
              </div>

              {/* Content */}
              <div className="blog-prose">

                {articleSections.map((section, index) => (
                  <section
                    key={`${section.title}-${index}`}
                    className="blog-content-section"
                    id={`section-${index}`}
                  >
                    <h2>
                      <span>
                        <i className="fa-solid fa-camera"></i>
                      </span>

                      {section.title}
                    </h2>

                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}

              </div>

              {/* Tags */}
              <div className="blog-details-box blog-tags-box">
                <div className="blog-box-heading">
                  <div>
                    <i className="fa-solid fa-tags"></i>
                  </div>

                  <h3>الوسوم</h3>
                </div>

                <div className="blog-tags">
                  {post.tags?.map((tag) => (
                    <span key={tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="blog-details-box blog-share-box">
                <div className="blog-share-content">

                  <div className="blog-box-heading">
                    <div>
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>

                    <h3>شارك المقال</h3>
                  </div>

                  <div className="blog-share-buttons">

                    <button onClick={shareOnX}>
                      <i className="fa-brands fa-x-twitter"></i>
                    </button>

                    <button onClick={shareOnLinkedIn}>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </button>

                    <button onClick={shareOnWhatsApp}>
                      <i className="fa-brands fa-whatsapp"></i>
                    </button>

                    <button onClick={copyLink}>
                      <i className="fa-solid fa-link"></i>
                    </button>

                  </div>

                </div>
              </div>

              {/* Author */}
              <div className="blog-details-author-box">

                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                />

                <div>
                  <span>كاتب المقال</span>

                  <h3>{post.author.name}</h3>

                  <p className="author-role">
                    {post.author.role}
                  </p>

                  <p className="author-description">
                    {authorDescription}
                  </p>
                </div>

              </div>

            </div>

            {/* SIDEBAR */}
            <aside className="blog-details-sidebar">

              <div className="blog-sidebar-sticky">

                {/* TOC */}
                <div className="blog-sidebar-box">

                  <div className="blog-sidebar-heading">
                    <div>
                      <i className="fa-solid fa-list"></i>
                    </div>

                    <h3>محتويات المقال</h3>
                  </div>

                  <nav className="blog-toc">

                    {articleSections.map((section, index) => (
                      <a
                        key={section.title}
                        href={`#section-${index}`}
                      >
                        <span>{index + 1}</span>

                        <span>
                          {section.title}
                        </span>
                      </a>
                    ))}

                  </nav>

                </div>

                {/* Info */}
                <div className="blog-sidebar-box">

                  <div className="blog-info-grid">

                    <div>
                      <i className="fa-regular fa-clock"></i>

                      <p>{post.readTime}</p>

                      <span>وقت القراءة</span>
                    </div>

                    <div>
                      <i className="fa-regular fa-calendar"></i>

                      <p>
                        {formatArabicShortDate(post.date)}
                      </p>

                      <span>تاريخ النشر</span>
                    </div>

                  </div>

                </div>

                {/* More */}
                <div className="blog-sidebar-subscribe">

                  <div>
                    <i className="fa-solid fa-envelope"></i>
                  </div>

                  <h3>لا تفوّت جديدنا</h3>

                  <p>
                    اشترك للحصول على أحدث المقالات
                  </p>

                  <Link to="/blog">
                    تصفح المزيد
                  </Link>

                </div>

              </div>

            </aside>

          </div>

          {/* RELATED */}
          <section className="blog-related">

            <div className="blog-related-header">

              <div className="blog-related-title">

                <span>
                  <i className="fa-solid fa-images"></i>
                </span>

                <div>
                  <h2>مقالات قد تعجبك</h2>

                  <p>
                    استكشف المزيد من المحتوى المميز
                  </p>
                </div>

              </div>

              <Link to="/blog">
                عرض الكل
                <i className="fa-solid fa-arrow-left"></i>
              </Link>

            </div>

            <div className="blog-related-grid">

              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="related-card"
                >
                  <div className="related-card-image">

                    <img
                      src={`${relatedPost.image}?w=800&h=400&fit=crop`}
                      alt={relatedPost.title}
                    />

                    <div className="related-card-gradient"></div>

                    <span>
                      {relatedPost.category}
                    </span>

                  </div>

                  <div className="related-card-content">

                    <h3>
                      {relatedPost.title}
                    </h3>

                    <div className="related-card-meta">

                      <span>
                        <img
                          src={relatedPost.author.avatar}
                          alt={relatedPost.author.name}
                        />

                        {relatedPost.author.name}
                      </span>

                      <span>
                        {relatedPost.readTime}
                      </span>

                    </div>

                  </div>
                </Link>
              ))}

            </div>

          </section>

        </div>
      </article>
    </main>
  );
}