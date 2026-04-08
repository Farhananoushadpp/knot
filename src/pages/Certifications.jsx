/**
 * ASP Global Marine Trading LLC - Certifications Page
 *
 * Dedicated page for company certifications and compliance
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import "../styles/pages/Certifications.css";

const Certifications = () => {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Certifications & Compliance"
        subtitle="Internationally Recognized Standards"
        description="At Ocean Infinity, we maintain internationally recognized certifications ensuring quality and compliance with global maritime standards, demonstrating our commitment to excellence and operational safety."
        backgroundImage="/knot and sail images/Asset 37.webp"
      />

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

      {/* Professional CTA Section */}
      <section className="certifications-cta-professional">
        <div>
          <div className="certifications-cta-content-professional">
            <h2 className="certifications-cta-title">
              Discover Our Commitment to Excellence
            </h2>
            <p className="certifications-cta-description">
              Our certifications reflect our dedication to quality, safety, and
              environmental responsibility. Learn more about how Ocean Infinity
              maintains the highest standards in maritime services.
            </p>
            <Link to="/about" className="btn btn-primary-certifications">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
