import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
return ( <footer className="footer-custom">

```
  {/* Background Decorations */}
  <div className="footer-glow footer-glow-left"></div>
  <div className="footer-glow footer-glow-right"></div>

  {/* Main Footer */}
  <div className="container footer-container">

    <div className="row g-5">

      {/* Brand */}
      <div className="col-12 col-md-6 col-lg-3">

        <Link to="/" className="footer-brand">

          <div className="footer-logo">
            <i className="fa-solid fa-camera"></i>
          </div>

          <span>عدسة</span>

        </Link>

        <p className="footer-description">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم
          أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
        </p>

        {/* Social Media */}
        <div className="footer-social">

          <a
            href="https://twitter.com/adasah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a
            href="https://github.com/adasah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://linkedin.com/company/adasah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href="https://youtube.com/@adasah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>

        </div>

      </div>


      {/* Explore */}
      <div className="col-12 col-md-6 col-lg-3">

        <FooterTitle title="استكشف" />

        <ul className="footer-links">

          <li>
            <Link to="/">
              <i className="fa-solid fa-chevron-left"></i>
              <span>الرئيسية</span>
            </Link>
          </li>

          <li>
            <Link to="/blog">
              <i className="fa-solid fa-chevron-left"></i>
              <span>المدونة</span>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <i className="fa-solid fa-chevron-left"></i>
              <span>من نحن</span>
            </Link>
          </li>

        </ul>

      </div>


      {/* Categories */}
      <div className="col-12 col-md-6 col-lg-3">

        <FooterTitle title="التصنيفات" />

        <ul className="footer-links">

          <li>
            <Link to="/blog?category=إضاءة">
              <i className="fa-solid fa-chevron-left"></i>
              <span>إضاءة</span>
            </Link>
          </li>

          <li>
            <Link to="/blog?category=بورتريه">
              <i className="fa-solid fa-chevron-left"></i>
              <span>بورتريه</span>
            </Link>
          </li>

          <li>
            <Link to="/blog?category=مناظر طبيعية">
              <i className="fa-solid fa-chevron-left"></i>
              <span>مناظر طبيعية</span>
            </Link>
          </li>

          <li>
            <Link to="/blog?category=تقنيات">
              <i className="fa-solid fa-chevron-left"></i>
              <span>تقنيات</span>
            </Link>
          </li>

        </ul>

      </div>


      {/* Newsletter */}
      <div className="col-12 col-md-6 col-lg-3">

        <FooterTitle title="ابقى على اطلاع" />

        <p className="footer-description newsletter-description">
          اشترك للحصول على أحدث المقالات والتحديثات.
        </p>

        <form className="footer-newsletter-form">

          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
          />

          <button type="submit">
            اشترك
          </button>

        </form>

      </div>

    </div>

  </div>


  {/* Bottom Footer */}
  <div className="footer-bottom">

    <div className="container">

      <div className="footer-bottom-content">

        <p>
          © 2026 عدسة. صنع بكل{" "}
          <i className="fa-solid fa-heart"></i>{" "}
          جميع الحقوق محفوظة.
        </p>

        <div className="footer-legal">

          <Link to="/privacy">
            سياسة الخصوصية
          </Link>

          <Link to="/terms">
            شروط الخدمة
          </Link>

        </div>

      </div>

    </div>

  </div>

</footer>


);
}

function FooterTitle({ title }) {
return ( <h3 className="footer-title">


  <span></span>

  {title}

</h3>


);
}
