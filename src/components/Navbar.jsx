
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/imgi_1_logo-GdqARQRt.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-custom">
      <div className="container">
        <div className="navbar-inner">

          {/* Logo */}
          <Link to="/" className="brand" onClick={closeMenu}>
             <div className="brand-logo">
    <img
      src={logo}
      alt="Photography Logo"
    />
  </div>

            <div className="brand-text">
              <span className="brand-title">عدسة</span>
              <span className="brand-subtitle">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <div className="nav-pill">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                الرئيسية
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                المدونة
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                من نحن
              </NavLink>

            </div>
          </div>

          {/* Desktop Actions */}
          <div className="desktop-actions">

            <button className="search-btn" aria-label="بحث">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>

            <Link to="/blog" className="btn-primary-custom">
              ابدأ القراءة
            </Link>

          </div>

          {/* Mobile Toggle */}
          <button
            className={`mobile-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="فتح القائمة"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 6l12 12M18 6 6 18"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <div className="mobile-menu-inner">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
            >
              الرئيسية
            </NavLink>

            <NavLink
              to="/blog"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
            >
              المدونة
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
            >
              من نحن
            </NavLink>

            <Link
              to="/blog"
              onClick={closeMenu}
              className="btn-primary-custom mobile-read-btn"
            >
              ابدأ القراءة
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}



