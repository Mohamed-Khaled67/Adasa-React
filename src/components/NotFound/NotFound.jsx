import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
return ( <main className="not-found-page">

```
  <div className="not-found-grid"></div>

  <div className="not-found-glows">
    <div className="not-found-glow not-found-glow-orange"></div>
    <div className="not-found-glow not-found-glow-yellow"></div>
  </div>

  <div className="not-found-content">

    {/* 404 */}
    <div className="not-found-number-wrapper">

      <h1 className="not-found-number">
        404
      </h1>

      <div className="not-found-number-shadow">
        404
      </div>

    </div>


    {/* Icon */}
    <div className="not-found-icon-wrapper">

      <div className="not-found-icon-bg"></div>

      <div className="not-found-icon">
        <i className="fa-regular fa-face-frown"></i>
      </div>

      <div className="not-found-square"></div>

      <div className="not-found-dot"></div>

    </div>


    {/* Text */}
    <h2 className="not-found-title">
      عفواً! الصفحة غير موجودة
    </h2>

    <p className="not-found-description">
      الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
      دعنا نعيدك إلى المسار الصحيح.
    </p>


    {/* Buttons */}
    <div className="not-found-buttons">

      <Link
        to="/"
        className="not-found-btn not-found-btn-primary"
      >
        <i className="fa-solid fa-house"></i>

        <span>
          الذهاب للرئيسية
        </span>
      </Link>


      <Link
        to="/blog"
        className="not-found-btn not-found-btn-secondary"
      >
        <i className="fa-solid fa-newspaper"></i>

        <span>
          تصفح المقالات
        </span>
      </Link>

    </div>


    {/* Useful Links */}
    <div className="not-found-links">

      <p>
        قد تجد هذه مفيدة:
      </p>

      <div>

        <Link to="/blog">
          المدونة
        </Link>

        <span>•</span>

        <Link to="/about">
          من نحن
        </Link>

        <span>•</span>

        <Link to="/privacy">
          الخصوصية
        </Link>

      </div>

    </div>

  </div>

</main>


);
}
