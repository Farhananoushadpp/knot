/**
 * ASP Global Marine Trading LLC - Compliance Bar
 *
 * Enhanced certification and authority section
 * Senior Level: Builds psychological authority and trust
 */

import "../styles/components/ComplianceBar.css";

const ComplianceBar = () => {
  const certifications = [
    {
      label: "SOLAS",
      icon: "shield",
      description: "Safety of Life at Sea Convention compliance",
      color: "#1FAF8F",
    },
    {
      label: "IMO",
      icon: "certificate",
      description: "International Maritime Organization standards",
      color: "#E8F5E8",
    },
    {
      label: "ISO 9001",
      icon: "check",
      description: "Quality Management System certification",
      color: "#FFF3E0",
    },
    {
      label: "Class Approved",
      icon: "anchor",
      description: "Classification society certified equipment",
      color: "#E3F2FD",
    },
    {
      label: "Global Sourcing",
      icon: "globe",
      description: "Worldwide procurement network",
      color: "#F3E5F5",
    },
  ];

  return (
    <section className="compliance-bar">
      <div className="container">
        <div className="compliance-header">
          <h2 className="compliance-title">Certifications & Compliance</h2>
          <p className="compliance-subtitle">
            Internationally recognized standards and global quality assurance
          </p>
        </div>

        <div className="compliance-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div
                className="certification-icon"
                style={{ backgroundColor: cert.color }}
              >
                {cert.icon === "shield" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                  </svg>
                )}
                {cert.icon === "certificate" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM12 19L10 17L8 19V11H12V19ZM12 9V4L17 9H12Z" />
                  </svg>
                )}
                {cert.icon === "check" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                )}
                {cert.icon === "anchor" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM12 18C8.1 18 5 14.9 5 11C5 9.5 5.5 8.1 6.3 7H9V5H6.3C6.1 4.7 6 4.4 6 4C6 2.3 7.3 1 9 1H15C16.7 1 18 2.3 18 4C18 4.4 17.9 4.7 17.7 5H15V7H17.7C18.5 8.1 19 9.5 19 11C19 14.9 15.9 18 12 18ZM12 20C12 20 12 20 12 20C12 20 12 20 12 20C12 20 12 20 12 20C12 20 12 20 12 20C16.4 20 20 16.4 20 12H22C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12H4C4 16.4 7.6 20 12 20Z" />
                  </svg>
                )}
                {cert.icon === "globe" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.78 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.77 20 8.64 20 12C20 14.08 19.2 15.97 17.9 17.39Z" />
                  </svg>
                )}
              </div>
              <div className="certification-content">
                <h3 className="certification-label">{cert.label}</h3>
                <p className="certification-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="compliance-footer"></div>
      </div>
    </section>
  );
};

export default ComplianceBar;
