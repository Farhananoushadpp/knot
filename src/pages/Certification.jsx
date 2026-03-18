/**
 * ASP Global Marine Trading LLC - Certification Page
 *
 * Company certifications and compliance
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/About.css";

const Certification = () => {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      authority: "International Organization for Standardization",
    },
    {
      name: "SOLAS Compliance",
      description: "Safety of Life at Sea Convention",
      authority: "International Maritime Organization",
    },
    {
      name: "IMO Certified",
      description: "International Maritime Organization Standards",
      authority: "International Maritime Organization",
    },
    {
      name: "Class Approved",
      description: "Classification Society Certification",
      authority: "DNV, ABS, Lloyd's Register",
    },
    {
      name: "Marine Equipment Directive (MED)",
      description: "European Union Marine Equipment Standards",
      authority: "European Commission",
    },
    {
      name: "ISM Code Compliance",
      description: "International Safety Management Code",
      authority: "International Maritime Organization",
    },
  ];

  return (
    <div className="about-page">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">Certifications</h1>
          <p className="page-subtitle">
            Our commitment to quality and compliance excellence
          </p>
        </div>

        <section className="certification-intro">
          <p>
            At ASP Global Marine Trading LLC, we maintain the highest standards
            of quality and compliance in all our operations. Our certifications
            demonstrate our commitment to international maritime standards and
            our dedication to providing safe, reliable products and services.
          </p>
        </section>

        <section className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <h3>{cert.name}</h3>
              <p className="cert-description">{cert.description}</p>
              <p className="cert-authority">Authority: {cert.authority}</p>
            </div>
          ))}
        </section>

        <section className="quality-commitment">
          <h2>Quality & Compliance Commitment</h2>
          <div className="commitment-points">
            <div className="commitment-item">
              <h4>Rigorous Quality Control</h4>
              <p>
                Comprehensive inspection and testing procedures for all products
              </p>
            </div>
            <div className="commitment-item">
              <h4>Continuous Improvement</h4>
              <p>
                Regular audits and process enhancements to maintain excellence
              </p>
            </div>
            <div className="commitment-item">
              <h4>Regulatory Compliance</h4>
              <p>Strict adherence to international maritime regulations</p>
            </div>
            <div className="commitment-item">
              <h4>Documentation Excellence</h4>
              <p>
                Complete certification and traceability for all supplied
                products
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certification;
