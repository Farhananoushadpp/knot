/**
 * ASP Global Marine Trading LLC - Certifications Page
 *
 * Dedicated page for company certifications and compliance
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import { Link } from "react-router-dom";
import "../styles/pages/Certifications.css";

const Certifications = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="certifications-hero">
        <div className="container">
          <div className="certifications-hero-content">
            <h1 className="certifications-hero-title">Certifications & Compliance</h1>
            <p className="certifications-hero-subtitle">
              Internationally recognized certifications ensuring quality and compliance
              with global maritime standards
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="certifications-main">
        <div className="container">
          <div className="certifications-grid-modern">
            <div className="certification-item-modern">
              <div className="certification-badge-modern">
                <span className="certification-text-modern">ISO</span>
              </div>
              <div className="certification-content-modern">
                <h3 className="certification-name-modern">ISO 9001:2015</h3>
                <p className="certification-desc-modern">
                  Quality Management Systems certification ensuring consistent
                  quality and operational excellence
                </p>
              </div>
            </div>

            <div className="certification-item-modern">
              <div className="certification-badge-modern">
                <span className="certification-text-modern">SOLAS</span>
              </div>
              <div className="certification-content-modern">
                <h3 className="certification-name-modern">SOLAS</h3>
                <p className="certification-desc-modern">
                  Safety of Life at Sea compliance for maritime safety equipment
                  and operational standards
                </p>
              </div>
            </div>

            <div className="certification-item-modern">
              <div className="certification-badge-modern">
                <span className="certification-text-modern">IMO</span>
              </div>
              <div className="certification-content-modern">
                <h3 className="certification-name-modern">IMO Certified</h3>
                <p className="certification-desc-modern">
                  International Maritime Organization certification for global
                  maritime compliance
                </p>
              </div>
            </div>

            <div className="certification-item-modern">
              <div className="certification-badge-modern">
                <span className="certification-text-modern">CLASS</span>
              </div>
              <div className="certification-content-modern">
                <h3 className="certification-name-modern">Class Approved</h3>
                <p className="certification-desc-modern">
                  Approved by leading classification societies including DNV,
                  ABS, and Lloyd's Register
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to About Link */}
      <section className="certifications-cta">
        <div className="container">
          <div className="certifications-cta-content">
            <p>Learn more about our company</p>
            <Link to="/about" className="btn btn-primary">
              Back to About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
