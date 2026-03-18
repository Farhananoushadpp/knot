/**
 * ASP Global Marine Trading LLC - Footer Section
 *
 * Modern footer design with ocean wave SVG
 * Newsletter subscription and maritime theme
 * ASP Ocean Blue Theme
 */

import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "../styles/components/Footer.css";

const Footer = () => {
  useEffect(() => {
    // Use Font Loading API for better font loading detection
    const loadFont = async () => {
      try {
        const font = new FontFace(
          "Amsterdam Signature",
          "url(./amsterdam-signature.otf)",
        );
        await font.load();
        document.fonts.add(font);

        // Add font-loaded class to headline
        const headline = document.querySelector(".footer-headline");
        if (headline) {
          headline.classList.add("font-loaded");
        }
      } catch (error) {
        console.log("Font loading failed, using fallback");
        const headline = document.querySelector(".footer-headline");
        if (headline) {
          headline.classList.add("font-loaded");
        }
      }
    };

    loadFont();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section - Main Content */}
        <div className="footer-main">
          {/* Company Branding */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/logo.webp"
                alt="ASP Global Marine Trading LLC"
                className="footer-logo-image footer-logo-first"
              />
              <img
                src="/asp.webp"
                alt="ASP Global Marine Trading LLC"
                className="footer-logo-image footer-logo-second"
              />
            </div>
            <p className="footer-description">
              Specialized marine and offshore product solution provider
              delivering high-quality equipment and spare parts worldwide.
            </p>
            <p className="footer-headline">
              &quot;Driven by Quality. Propelled by Trust.&quot;
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="footer-links-section">
            {/* Quick Links */}
            <div className="footer-links-group">
              <h4 className="footer-links-title">Quick Links</h4>
              <nav className="footer-nav">
                <a href="#about" className="footer-link">
                  About Us
                </a>
                <a href="#products" className="footer-link">
                  Products
                </a>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </nav>
            </div>

            {/* Group Companies */}
            <div className="footer-links-group">
              <h4 className="footer-links-title">Group Companies</h4>
              <div className="footer-companies">
                <span>Ocean Serenity FZ-LLC</span>
                <span>Ocean Infinity Marine Service</span>
                <span>Warmsol Marine & Industrial</span>
                <span>ANC Arabia Contracting</span>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-links-group">
              <h4 className="footer-links-title">Contact</h4>
              <div className="footer-contact-info">
                <address>
                  Xavier Business Center
                  <br />
                  Office Suite A5-18
                  <br />
                  Dubai, UAE
                </address>
                <div className="footer-contact-details">
                  <a href="tel:+97145724542" className="footer-contact-link">
                    +971 4 572 4542
                  </a>
                  <a
                    href="mailto:info@aspglobalmarine.com"
                    className="footer-contact-link"
                  >
                    info@aspglobalmarine.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Social */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              Copyright © asp | Designed by{" "}
              <a
                href="https://tarah.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-design-link"
              >
                tarah.ae
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
