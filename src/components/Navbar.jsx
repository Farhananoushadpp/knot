import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Add/remove body class for overlay
    if (!isMenuOpen) {
      document.body.classList.add("nav-menu-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("nav-menu-open");
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    // Remove body class and restore scroll
    document.body.classList.remove("nav-menu-open");
    document.body.style.overflow = "";
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".navbar")) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove("nav-menu-open");
      document.body.style.overflow = "";
    };
  }, []);

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const isActive = (path) => {
    if (path === "/products") {
      return (
        location.pathname === "/products" ||
        location.pathname.startsWith("/products/")
      );
    }
    if (path === "/services") {
      return (
        location.pathname === "/services" ||
        location.pathname.startsWith("/services/")
      );
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img
              src="/logo.webp"
              alt="Ocean Infinity"
              className="logo-image logo-first"
            />
          </Link>
          {/* <Link to="/" className="logo-link">
            <img
              src="/asp.webp"
              alt="Ocean Infinity"
              className="logo-image logo-second"
            />
          </Link> */}
        </div>
        {/* <img src="/asplogo.svg" alt="ASP Global Marine Trading LLC" /> */}
        {/* <div className="nav-branding">
          <h1 className="nav-company-name">ASP GLOBAL MARINE TRADING LLC</h1>
          <p className="nav-group-name">Part of Ocean Serenity Group</p>
        </div> */}
        <div
          className={`nav-menu ${isMenuOpen ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">About Us</span>
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <button
                className={`nav-link dropdown-toggle ${
                  isActive("/services") ? "active" : ""
                }`}
                onClick={toggleServicesDropdown}
              >
                <span className="nav-text">Services</span>
                <ChevronDown
                  size={16}
                  className={`dropdown-arrow ${servicesDropdownOpen ? "open" : ""}`}
                />
              </button>
              <div
                className={`dropdown-menu ${servicesDropdownOpen ? "show" : ""}`}
              >
                {/* <Link
                  to="/services"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  All Services
                </Link> */}
                <Link
                  to="/services/safety-services"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Safety Services
                </Link>
                <Link
                  to="/services/technical-services"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Technical Services
                </Link>
                <Link
                  to="/services/dry-docking-services"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Dry Docking Services
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/products/lsa-ffa"
                className={`nav-link ${isActive("/products/lsa-ffa") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">Products</span>
              </Link>
            </li>
            <li>
              <Link
                to="/certifications"
                className={`nav-link ${isActive("/certifications") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">Certifications</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="nav-actions">
          <a href="mailto:info@aspglobalmarine.com" className="btn-contact">
            Get Quote
          </a>
        </div> */}

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
