// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Blog.css";

// const categories = [
// "جميع المقالات",
// "إضاءة",
// "بورتريه",
// "مناظر طبيعية",
// "تقنيات",
// "معدات",
// ];

// const articles = [
// {
// id: 1,
// slug: "mastering-golden-hour-photography",
// title: "إتقان تصوير الساعة الذهبية: دليل شامل",
// description:
// "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
// category: "إضاءة",
// readTime: "8 دقائق للقراءة",
// date: "١٥ يناير ٢٠٢٦",
// image:
// "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
// author: "سالم أحمد",
// role: "مصور محترف",
// avatar:
// "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
// },
// {
// id: 2,
// slug: "portrait-photography-secrets",
// title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
// description:
// "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
// category: "بورتريه",
// readTime: "6 دقائق للقراءة",
// date: "١٢ يناير ٢٠٢٦",
// image:
// "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
// author: "محمد علي",
// role: "مصور بورتريه",
// avatar:
// "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
// },
// {
// id: 3,
// slug: "landscape-photography-guide",
// title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
// description:
// "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
// category: "مناظر طبيعية",
// readTime: "10 دقائق للقراءة",
// date: "١٠ يناير ٢٠٢٦",
// image:
// "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
// author: "إبراهيم حسن",
// role: "مصور طبيعة",
// avatar:
// "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
// },
// {
// id: 4,
// slug: "camera-settings-basics",
// title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
// description:
// "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",
// category: "تقنيات",
// readTime: "7 دقائق للقراءة",
// date: "٨ يناير ٢٠٢٦",
// image:
// "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",
// author: "داود خالد",
// role: "مدرب تصوير",
// avatar:
// "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
// },
// {
// id: 5,
// slug: "photo-composition-rules",
// title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
// description:
// "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
// category: "تقنيات",
// readTime: "9 دقائق للقراءة",
// date: "٥ يناير ٢٠٢٦",
// image:
// "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",
// author: "ليث محمود",
// role: "فنان بصري",
// avatar:
// "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
// },
// {
// id: 6,
// slug: "mobile-photography-tips",
// title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
// description:
// "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
// category: "معدات",
// readTime: "8 دقائق للقراءة",
// date: "٣ يناير ٢٠٢٦",
// image:
// "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
// author: "جمال عبدالله",
// role: "مصور ومراجع تقني",
// avatar:
// "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
// },
// ];

// export default function Blog() {
// const [activeCategory, setActiveCategory] =
// useState("جميع المقالات");

// const [search, setSearch] = useState("");

// const [viewMode, setViewMode] = useState("grid");

// const [currentPage, setCurrentPage] = useState(1);

// const filteredArticles = useMemo(() => {
// return articles.filter((article) => {
// const matchesCategory =
// activeCategory === "جميع المقالات" ||
// article.category === activeCategory;


//   const searchValue = search.trim().toLowerCase();

//   const matchesSearch =
//     !searchValue ||
//     article.title.toLowerCase().includes(searchValue) ||
//     article.description.toLowerCase().includes(searchValue) ||
//     article.category.toLowerCase().includes(searchValue);

//   return matchesCategory && matchesSearch;
// });


// }, [activeCategory, search]);

// const handleCategoryChange = (category) => {
// setActiveCategory(category);
// setCurrentPage(1);
// };

// const handleSearch = (event) => {
// setSearch(event.target.value);
// setCurrentPage(1);
// };

// return ( <main className="blog-page">

// ```
//   {/* =================================
//       Hero
//   ================================= */}

//   <section className="blog-hero">

//     <div className="blog-hero-bg"></div>

//     <div className="blog-grid"></div>

//     <div className="blog-glows">

//       <div className="blog-glow blog-glow-orange"></div>

//       <div className="blog-glow blog-glow-yellow"></div>

//     </div>


//     <div className="container position-relative">

//       <div className="blog-hero-content">

//         <span className="blog-section-label">

//           <i className="fa-solid fa-newspaper"></i>

//           مدونتنا

//         </span>


//         <h1>
//           استكشف{" "}
//           <span className="blog-gradient-text">
//             مقالاتنا
//           </span>
//         </h1>


//         <p>
//           اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
//         </p>

//       </div>

//     </div>

//   </section>


//   {/* =================================
//       Filters
//   ================================= */}

//   <section className="blog-filters">

//     <div className="container">

//       <div className="blog-filters-content">

//         {/* Search */}

//         <div className="blog-search">

//           <input
//             type="text"
//             value={search}
//             onChange={handleSearch}
//             placeholder="ابحث في المقالات..."
//           />

//           <i className="fa-solid fa-magnifying-glass"></i>

//         </div>


//         {/* Categories */}

//         <div className="blog-categories">

//           {categories.map((category) => (

//             <button
//               key={category}
//               type="button"
//               onClick={() => handleCategoryChange(category)}
//               className={
//                 activeCategory === category
//                   ? "active"
//                   : ""
//               }
//             >
//               {category}
//             </button>

//           ))}

//         </div>

//       </div>

//     </div>

//   </section>


//   {/* =================================
//       Articles
//   ================================= */}

//   <section className="blog-content">

//     <div className="container">

//       {/* Top Bar */}

//       <div className="blog-content-header">

//         <p>
//           عرض{" "}
//           <span>
//             {filteredArticles.length}
//           </span>{" "}
//           مقالات
//         </p>


//         <div className="blog-view-switcher">

//           <button
//             type="button"
//             title="عرض شبكي"
//             className={
//               viewMode === "grid"
//                 ? "active"
//                 : ""
//             }
//             onClick={() => setViewMode("grid")}
//           >
//             <i className="fa-solid fa-grip"></i>
//           </button>


//           <button
//             type="button"
//             title="عرض قائمة"
//             className={
//               viewMode === "list"
//                 ? "active"
//                 : ""
//             }
//             onClick={() => setViewMode("list")}
//           >
//             <i className="fa-solid fa-bars"></i>
//           </button>

//         </div>

//       </div>


//       {/* Articles */}

//       {filteredArticles.length > 0 ? (

//         <div
//           className={
//             viewMode === "grid"
//               ? "blog-articles-grid"
//               : "blog-articles-list"
//           }
//         >

//           {filteredArticles.map((article, index) => (

//             <BlogCard
//               key={article.id}
//               article={article}
//               index={index}
//               viewMode={viewMode}
//             />

//           ))}

//         </div>

//       ) : (

//         <div className="blog-empty">

//           <i className="fa-solid fa-magnifying-glass"></i>

//           <h3>
//             لا توجد مقالات
//           </h3>

//           <p>
//             لم نجد مقالات تطابق بحثك.
//           </p>

//         </div>

//       )}


//       {/* Pagination */}

//       <div className="blog-pagination">

//         <button
//           type="button"
//           disabled={currentPage === 1}
//           onClick={() =>
//             setCurrentPage((page) => page - 1)
//           }
//           className="pagination-arrow"
//         >
//           <i className="fa-solid fa-chevron-right"></i>
//         </button>


//         <div className="pagination-numbers">

//           {[1, 2, 3, 4, 5].map((page) => (

//             <button
//               key={page}
//               type="button"
//               onClick={() => setCurrentPage(page)}
//               className={
//                 currentPage === page
//                   ? "active"
//                   : ""
//               }
//             >
//               {page}
//             </button>

//           ))}

//         </div>


//         <button
//           type="button"
//           disabled={currentPage === 5}
//           onClick={() =>
//             setCurrentPage((page) => page + 1)
//           }
//           className="pagination-arrow"
//         >
//           <i className="fa-solid fa-chevron-left"></i>
//         </button>

//       </div>


//       <p className="pagination-info">
//         صفحة {currentPage} من 5
//       </p>

//     </div>

//   </section>

// </main>


// );
// }

// /* =================================
// Blog Card
// ================================= */

// function BlogCard({ article, index, viewMode }) {
// return (
// <article
// className={`blog-card ${
//         viewMode === "list"
//           ? "blog-card-list"
//           : ""
//       }`}
// style={{
// animationDelay: `${index * 100}ms`,
// }}
// >

//   <Link
//     to={`/blog/${article.slug}`}
//     className="blog-card-link"
//   >

//     {/* Image */}

//     <div className="blog-card-image">

//       <img
//         src={article.image}
//         alt={article.title}
//       />

//       <div className="blog-card-overlay"></div>


//       <div className="blog-card-category">
//         {article.category}
//       </div>

//     </div>


//     {/* Content */}

//     <div className="blog-card-body">

//       <div className="blog-card-meta">

//         <span>

//           <i className="fa-regular fa-clock"></i>

//           {article.readTime}

//         </span>

//         <span className="blog-meta-dot"></span>

//         <span>
//           {article.date}
//         </span>

//       </div>


//       <h3>
//         {article.title}
//       </h3>


//       <p>
//         {article.description}
//       </p>


//       {/* Author */}

//       <div className="blog-card-footer">

//         <div className="blog-author">

//           <img
//             src={article.avatar}
//             alt={article.author}
//           />

//           <div>

//             <strong>
//               {article.author}
//             </strong>

//             <small>
//               {article.role}
//             </small>

//           </div>

//         </div>


//         <div className="blog-card-arrow">

//           <i className="fa-solid fa-chevron-left"></i>

//         </div>

//       </div>

//     </div>

//   </Link>

// </article>


// );
// }









import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const posts = [
  {
    id: 1,
    slug: "mastering-golden-hour-photography",
    title: "إتقان تصوير الساعة الذهبية: دليل شامل",
    excerpt:
      "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
    category: "إضاءة",
    author: {
      name: "سالم أحمد",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "مصور محترف",
    },
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
    date: "2026-01-15",
    readTime: "8 دقائق للقراءة",
  },
  {
    id: 2,
    slug: "portrait-photography-secrets",
    title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
    excerpt:
      "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
    category: "بورتريه",
    author: {
      name: "محمد علي",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      role: "مصور بورتريه",
    },
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    date: "2026-01-12",
    readTime: "6 دقائق للقراءة",
  },
  {
    id: 3,
    slug: "landscape-photography-guide",
    title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
    excerpt:
      "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
    category: "مناظر طبيعية",
    author: {
      name: "إبراهيم حسن",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "مصور طبيعة",
    },
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    date: "2026-01-10",
    readTime: "10 دقائق للقراءة",
  },
  {
    id: 4,
    slug: "camera-settings-basics",
    title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
    excerpt:
      "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",
    category: "تقنيات",
    author: {
      name: "داود خالد",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      role: "مدرب تصوير",
    },
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",
    date: "2026-01-08",
    readTime: "7 دقائق للقراءة",
  },
  {
    id: 5,
    slug: "photo-composition-rules",
    title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
    excerpt:
      "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
    category: "تقنيات",
    author: {
      name: "ليث محمود",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      role: "فنان بصري",
    },
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",
    date: "2026-01-05",
    readTime: "9 دقائق للقراءة",
  },
  {
    id: 6,
    slug: "mobile-photography-tips",
    title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
    excerpt:
      "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
    category: "معدات",
    author: {
      name: "جمال عبدالله",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
      role: "مصور ومراجع تقني",
    },
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    date: "2026-01-03",
    readTime: "8 دقائق للقراءة",
  },

  {
    id: 7,
    slug: "night-photography-techniques",
    title: "تصوير الليل والنجوم: دليلك لالتقاط سماء الليل",
    excerpt:
      "تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة.",
    category: "إضاءة",
    author: {
      name: "خالد الفيصل",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      role: "مصور فلكي",
    },
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop",
    date: "2026-01-01",
    readTime: "11 دقائق للقراءة",
  },
  {
    id: 8,
    slug: "street-photography-guide",
    title: "تصوير الشارع: فن التقاط الحياة اليومية",
    excerpt:
      "اكتشف أسرار تصوير الشارع وكيفية توثيق اللحظات العفوية في الحياة اليومية.",
    category: "بورتريه",
    author: {
      name: "نادر سعيد",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face",
      role: "مصور شوارع",
    },
    image:
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&h=400&fit=crop",
    date: "2025-12-28",
    readTime: "7 دقائق للقراءة",
  },
  {
    id: 9,
    slug: "food-photography-basics",
    title: "تصوير الطعام: كيف تجعل أطباقك تبدو شهية",
    excerpt:
      "تعلم تقنيات تصوير الطعام الاحترافية لإنشاء صور تثير الشهية وتجذب العيون.",
    category: "تقنيات",
    author: {
      name: "هاني الشمري",
      avatar:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",
      role: "مصور طعام",
    },
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop",
    date: "2025-12-25",
    readTime: "8 دقائق للقراءة",
  },
  {
    id: 10,
    slug: "wildlife-photography-tips",
    title: "تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة",
    excerpt:
      "دليل شامل لتصوير الحيوانات في بيئتها الطبيعية مع نصائح للمعدات والتقنيات.",
    category: "مناظر طبيعية",
    author: {
      name: "عمر الراشد",
      avatar:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
      role: "مصور حياة برية",
    },
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=400&fit=crop",
    date: "2025-12-22",
    readTime: "10 دقائق للقراءة",
  },
  {
    id: 11,
    slug: "black-white-photography",
    title: "التصوير بالأبيض والأسود: فن الضوء والظل",
    excerpt:
      "اكتشف جمال التصوير أحادي اللون وكيفية إنشاء صور قوية بدون ألوان.",
    category: "تقنيات",
    author: {
      name: "فارس العلي",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
      role: "فنان فوتوغرافي",
    },
    image:
      "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&h=400&fit=crop",
    date: "2025-12-20",
    readTime: "9 دقائق للقراءة",
  },
  {
    id: 12,
    slug: "photo-editing-lightroom",
    title: "أساسيات تعديل الصور في Lightroom",
    excerpt:
      "تعلم كيفية استخدام Adobe Lightroom لتحسين صورك وإنشاء أسلوب بصري مميز.",
    category: "معدات",
    author: {
      name: "سامي الحربي",
      avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",
      role: "خبير تعديل صور",
    },
    image:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=400&fit=crop",
    date: "2025-12-18",
    readTime: "12 دقائق للقراءة",
  },
  {
    id: 13,
    slug: "macro-photography-world",
    title: "عالم التصوير الماكرو: اكتشف التفاصيل الخفية",
    excerpt:
      "انغمس في عالم التصوير المقرب واكتشف جمال التفاصيل الصغيرة التي تفوتنا بالعين المجردة.",
    category: "تقنيات",
    author: {
      name: "رامي الخطيب",
      avatar:
        "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face",
      role: "مصور ماكرو",
    },
    image:
      "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=800&h=400&fit=crop",
    date: "2025-12-15",
    readTime: "10 دقائق للقراءة",
  },
  {
    id: 14,
    slug: "long-exposure-photography",
    title: "التعريض الطويل: كيف تصور الحركة والزمن",
    excerpt:
      "تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة.",
    category: "إضاءة",
    author: {
      name: "باسم المصري",
      avatar:
        "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face",
      role: "مصور فني",
    },
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop",
    date: "2025-12-12",
    readTime: "8 دقائق للقراءة",
  },
  {
    id: 15,
    slug: "wedding-photography-guide",
    title: "تصوير حفلات الزفاف: دليل المصور المحترف",
    excerpt:
      "تعلم أساسيات تصوير حفلات الزفاف من التحضير إلى تسليم الصور النهائية.",
    category: "بورتريه",
    author: {
      name: "منصور الزهراني",
      avatar:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face",
      role: "مصور زفاف",
    },
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop",
    date: "2025-12-10",
    readTime: "11 دقائق للقراءة",
  },
  {
    id: 16,
    slug: "drone-photography-basics",
    title: "التصوير بالدرون: منظور جديد للعالم",
    excerpt:
      "اكتشف عالم التصوير الجوي وتعلم أساسيات استخدام الدرون لالتقاط صور من زوايا فريدة.",
    category: "معدات",
    author: {
      name: "فيصل الدوسري",
      avatar:
        "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face",
      role: "مصور جوي",
    },
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",
    date: "2025-12-08",
    readTime: "9 دقائق للقراءة",
  },
  {
    id: 17,
    slug: "product-photography-essentials",
    title: "تصوير المنتجات: أساسيات التصوير التجاري",
    excerpt:
      "تعلم كيفية تصوير المنتجات بشكل احترافي لمتجرك الإلكتروني أو عملائك التجاريين.",
    category: "تقنيات",
    author: {
      name: "لؤي الصالح",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
      role: "مصور تجاري",
    },
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop",
    date: "2025-12-05",
    readTime: "8 دقائق للقراءة",
  },
  {
    id: 18,
    slug: "architecture-photography",
    title: "تصوير العمارة: كيف تلتقط روح المباني",
    excerpt:
      "اكتشف تقنيات تصوير المباني والهندسة المعمارية بطريقة فنية تبرز جمالها وتفاصيلها.",
    category: "مناظر طبيعية",
    author: {
      name: "طارق النعيمي",
      avatar:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face",
      role: "مصور معماري",
    },
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop",
    date: "2025-12-02",
    readTime: "9 دقائق للقراءة",
  },
  {
    id: 19,
    slug: "sports-action-photography",
    title: "تصوير الرياضة والحركة: تجميد اللحظة الحاسمة",
    excerpt:
      "تعلم تقنيات تصوير الأحداث الرياضية والحركة السريعة بوضوح ودقة احترافية.",
    category: "بورتريه",
    author: {
      name: "أحمد الشهري",
      avatar:
        "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face",
      role: "مصور رياضي",
    },
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    date: "2025-11-28",
    readTime: "10 دقائق للقراءة",
  },
  {
    id: 20,
    slug: "flash-photography-basics",
    title: "أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة",
    excerpt:
      "افهم كيفية استخدام الفلاش الخارجي لإنشاء إضاءة احترافية في أي موقف.",
    category: "إضاءة",
    author: {
      name: "ماجد القحطاني",
      avatar:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face",
      role: "مصور استوديو",
    },
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=400&fit=crop",
    date: "2025-11-25",
    readTime: "8 دقائق للقراءة",
  },
  {
    id: 21,
    slug: "travel-photography-tips",
    title: "تصوير السفر: كيف توثق رحلاتك بصور لا تُنسى",
    excerpt:
      "نصائح عملية لتصوير السفر تساعدك على التقاط جوهر كل مكان تزوره.",
    category: "مناظر طبيعية",
    author: {
      name: "ياسر العتيبي",
      avatar:
        "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face",
      role: "مصور رحالة",
    },
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",
    date: "2025-11-22",
    readTime: "9 دقائق للقراءة",
  },
  {
    id: 22,
    slug: "color-theory-photography",
    title: "نظرية الألوان في التصوير: كيف تستخدم الألوان بذكاء",
    excerpt:
      "افهم كيف تؤثر الألوان على مشاعر المشاهد وكيف تستخدمها لتعزيز صورك.",
    category: "تقنيات",
    author: {
      name: "دحام الحسيني",
      avatar:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face",
      role: "فنان بصري",
    },
    image:
      "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800&h=400&fit=crop",
    date: "2025-11-18",
    readTime: "7 دقائق للقراءة",
  },
  {
    id: 23,
    slug: "newborn-baby-photography",
    title: "تصوير المواليد: فن التقاط البراءة",
    excerpt:
      "تعلم تقنيات تصوير الأطفال حديثي الولادة بأمان واحترافية.",
    category: "بورتريه",
    author: {
      name: "نايف المطيري",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
      role: "مصور مواليد",
    },
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&h=400&fit=crop",
    date: "2025-11-15",
    readTime: "10 دقائق للقراءة",
  },
  {
    id: 24,
    slug: "real-estate-photography",
    title: "تصوير العقارات: كيف تجعل المنزل يبيع نفسه",
    excerpt:
      "تعلم تقنيات تصوير العقارات التي تجعل المنازل تبدو أفضل ما يمكن.",
    category: "تقنيات",
    author: {
      name: "عبدالله الغامدي",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
      role: "مصور عقارات",
    },
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",
    date: "2025-11-12",
    readTime: "8 دقائق للقراءة",
  },
  {
    id: 25,
    slug: "raw-vs-jpeg-explained",
    title: "RAW مقابل JPEG: متى تستخدم كلاً منهما",
    excerpt:
      "افهم الفرق بين صيغتي الصور الأكثر شيوعاً واختر الأنسب لاحتياجاتك.",
    category: "معدات",
    author: {
      name: "كريم الفهد",
      avatar:
        "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face",
      role: "خبير تقني",
    },
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    date: "2025-11-08",
    readTime: "6 دقائق للقراءة",
  },
  {
    id: 26,
    slug: "self-portrait-photography",
    title: "تصوير البورتريه الذاتي: كن موضوعك الخاص",
    excerpt:
      "تعلم كيف تصور نفسك بشكل احترافي وإبداعي دون الحاجة لمساعد.",
    category: "بورتريه",
    author: {
      name: "سلطان الراجحي",
      avatar:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",
      role: "فنان تصوير",
    },
    image:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=400&fit=crop",
    date: "2025-11-05",
    readTime: "7 دقائق للقراءة",
  },
  {
    id: 27,
    slug: "lens-guide-beginners",
    title: "دليل العدسات للمبتدئين: كيف تختار عدستك الأولى",
    excerpt:
      "افهم أنواع العدسات المختلفة واختر الأنسب لأسلوب تصويرك واحتياجاتك.",
    category: "معدات",
    author: {
      name: "فهد السبيعي",
      avatar:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face",
      role: "مراجع معدات",
    },
    image:
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&h=100&fit=crop",
    date: "2025-11-02",
    readTime: "9 دقائق للقراءة",
  },
  {
    id: 28,
    slug: "minimalist-photography",
    title: "التصوير البسيط (Minimalist): قوة الفراغ",
    excerpt:
      "اكتشف جمال البساطة في التصوير وكيف تخلق صوراً قوية بعناصر قليلة.",
    category: "تقنيات",
    author: {
      name: "راشد الجاسر",
      avatar:
        "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face",
      role: "فنان بصري",
    },
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=400&fit=crop",
    date: "2025-10-28",
    readTime: "6 دقائق للقراءة",
  },
];

const categories = [
  "جميع المقالات",
  "إضاءة",
  "بورتريه",
  "مناظر طبيعية",
  "تقنيات",
  "معدات",
];

const formatDate = (date) => {
  return new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

function BlogCard({ post, viewMode }) {
  return (
    <article className={`blog-card ${viewMode === "list" ? "list-card" : ""}`}>
      <Link to={`/blog/${post.slug}`} className="blog-card-image">
        <img src={post.image} alt={post.title} />

        <div className="blog-image-overlay" />

        <span className="blog-category-badge">
          {post.category}
        </span>
      </Link>

      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span>
            <i className="fa-regular fa-clock" />
            {post.readTime}
          </span>

          <span className="meta-dot" />

          <span>{formatDate(post.date)}</span>
        </div>

        <Link to={`/blog/${post.slug}`} className="blog-card-title">
          {post.title}
        </Link>

        <p className="blog-card-excerpt">{post.excerpt}</p>

        <div className="blog-card-footer">
          <div className="blog-author">
            <img src={post.author.avatar} alt={post.author.name} />

            <div>
              <strong>{post.author.name}</strong>
              <small>{post.author.role}</small>
            </div>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="blog-read-more"
            aria-label={`قراءة ${post.title}`}
          >
            <i className="fa-solid fa-arrow-left" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("جميع المقالات");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "جميع المقالات" ||
        post.category === selectedCategory;

      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / postsPerPage)
  );

  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const changeCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="blog-page" dir="rtl">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-grid-bg" />

        <div className="blog-glow blog-glow-orange" />
        <div className="blog-glow blog-glow-yellow" />

        <div className="container blog-container">
          <div className="blog-hero-content">
            <div className="section-label">
              <i className="fa-solid fa-newspaper" />
              <span>مدونتنا</span>
            </div>

            <h1>
              استكشف <span>مقالاتنا</span>
            </h1>

            <p>
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="blog-filter-bar">
        <div className="container blog-container">
          <div className="blog-filters">
            <div className="blog-search">
              <i className="fa-solid fa-magnifying-glass" />

              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <div className="blog-categories">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    selectedCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() => changeCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="blog-content">
        <div className="container blog-container">
          <div className="blog-toolbar">
            <div className="blog-result">
              عرض <strong>{filteredPosts.length}</strong> مقالات
            </div>

            <div className="blog-view-toggle">
              <button
                type="button"
                className={viewMode === "grid" ? "active" : ""}
                onClick={() => setViewMode("grid")}
                aria-label="عرض شبكي"
              >
                <i className="fa-solid fa-grip" />
              </button>

              <button
                type="button"
                className={viewMode === "list" ? "active" : ""}
                onClick={() => setViewMode("list")}
                aria-label="عرض قائمة"
              >
                <i className="fa-solid fa-list" />
              </button>
            </div>
          </div>

          {visiblePosts.length > 0 ? (
            <div className={`blog-grid ${viewMode === "list" ? "list-mode" : ""}`}>
              {visiblePosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <i className="fa-solid fa-magnifying-glass" />

              <h3>لم نجد مقالات</h3>

              <p>
                جرب البحث بكلمات مختلفة أو اختر تصنيفاً آخر.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="blog-pagination">
              <button
                type="button"
                className="pagination-arrow"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
              >
                <i className="fa-solid fa-chevron-right" />
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                  <button
                    type="button"
                    key={page}
                    className={
                      currentPage === page
                        ? "pagination-number active"
                        : "pagination-number"
                    }
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                type="button"
                className="pagination-arrow"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
            </div>
          )}

          {filteredPosts.length > 0 && (
            <div className="pagination-info">
              صفحة {currentPage} من {totalPages}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}