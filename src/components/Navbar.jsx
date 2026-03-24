import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  const isActive = (path) => {
    if (path === "/products") {
      return (
        location.pathname === "/products" ||
        location.pathname.startsWith("/products/")
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
              alt="Knot & Sail"
              className="logo-image logo-first"
            />
          </Link>
          {/* <Link to="/" className="logo-link">
            <img
              src="/asp.webp"
              alt="Knot & Sail"
              className="logo-image logo-second"
            />
          </Link> */}
        </div>
        {/* <img src="/asplogo.svg" alt="ASP Global Marine Trading LLC" /> */}
        {/* <div className="nav-branding">
          <h1 className="nav-company-name">ASP GLOBAL MARINE TRADING LLC</h1>
          <p className="nav-group-name">Part of Ocean Serenity Group</p>
        </div> */}

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
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
            <li>
              <Link
                to="/services"
                className={`nav-link ${isActive("/services") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">Services</span>
              </Link>
            </li>
            {/* <li
              className={`nav-dropdown ${productsDropdownOpen ? "active" : ""}`}
            >
              <button
                className={`nav-link dropdown-toggle ${isActive("/products") ? "active" : ""}`}
                onClick={toggleProductsDropdown}
              >
                <span className="nav-text">Products</span>
              </button>
              <div className="dropdown-menu">
                <Link
                  to="/products"
                  className="dropdown-item dropdown-main"
                  onClick={closeMenu}
                >
                  View All Products
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  to="/products/engine-stores"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Engine Stores
                </Link>
                <Link
                  to="/products/deck-stores-general"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Deck Stores & General Marine Stores
                </Link>
                <Link
                  to="/products/engine-spares-2stroke"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Engine Spares - 2-Stroke
                </Link>
                <Link
                  to="/products/engine-spares-4stroke"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Engine Spares - 4-Stroke
                </Link>
                <Link
                  to="/products/turbochargers-auxiliary"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Turbochargers & Auxiliary Engine Products
                </Link>
                <Link
                  to="/products/purifiers"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Purifiers & Separators
                </Link>
                <Link
                  to="/products/air-compressor-spares"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Air Compressor Spares
                </Link>
                <Link
                  to="/products/hydraulic-systems"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Hydraulic Systems & Components
                </Link>
                <Link
                  to="/products/boilers-incinerators-heat-exchangers"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Boilers, Incinerators & Heat Exchangers
                </Link>
                <Link
                  to="/products/pumps-marine-industrial"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Pumps – Marine & Industrial
                </Link>
                <Link
                  to="/products/hvac-compressors"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  HVAC Compressors & Spares
                </Link>
                <Link
                  to="/products/lsa-ffa"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  LSA & FFA (Life-Saving & Fire-Fighting Equipment)
                </Link>
              </div>
            </li> */}
            {/* <li>
              <Link
                to="/authorizations"
                className={`nav-link ${isActive("/authorizations") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">Authorizations</span>
              </Link>
            </li> */}
            <li>
              {/* <Link
                to="/certifications"
                className={`nav-link ${isActive("/certifications") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">Certifications</span>
              </Link> */}
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
