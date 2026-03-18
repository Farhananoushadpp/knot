/**
 * ASP Global Marine Trading LLC - About Section
 *
 * Enhanced company introduction with comprehensive content
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/components/About.css";
const About = () => {
  const capabilities = [
    {
      icon: "shield",
      title: "Operational Reliability",
      description:
        "Strong focus on ensuring consistent delivery of quality products and services",
    },
    {
      icon: "certificate",
      title: "Compliance Requirements",
      description:
        "Full adherence to maritime industry standards and regulatory compliance",
    },
    {
      icon: "globe",
      title: "Extensive Sourcing Capabilities",
      description:
        "Global procurement network with technical product knowledge",
    },
    {
      icon: "anchor",
      title: "Marine Sector Expertise",
      description: "Deep knowledge in marine equipment and mechanical systems",
    },
  ];

  const solutions = [
    {
      category: "Equipment/Mechanical Systems",
      icon: "settings",
      description: "Comprehensive solutions for vessel mechanical systems",
    },
    {
      category: "Safety Items",
      icon: "shield",
      description: "Life-saving appliances and safety equipment",
    },
    {
      category: "Deck/Engine Stores",
      icon: "warehouse",
      description: "Complete range of deck and engine room supplies",
    },
    {
      category: "Engine Spares",
      icon: "engine",
      description: "High-quality engine components and spare parts",
    },
  ];

  const clients = [
    { icon: "ship", label: "Shipowners" },
    { icon: "manager", label: "Ship Managers" },
    { icon: "operator", label: "Operators" },
    { icon: "service", label: "Marine Service Companies" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          {/* Section Label */}
          <span className="section-label">COMPANY INTRODUCTION</span>

          {/* Headline */}
          <h2 className="about-headline">About ASP Global Marine</h2>

          {/* Main Description */}
          <div className="about-main-description">
            <p className="about-description">
              ASP Global Marine is a specialized marine and offshore product
              solution provider delivering high-quality equipment, spare parts,
              and consumables to vessels and offshore installations worldwide.
              With a strong focus on operational reliability and compliance
              requirements of the maritime industry, ASP Global offers product
              solutions for equipment/mechanical systems, safety items,
              deck/engine stores and engine spares.
            </p>
            <p className="about-description">
              This is backed by extensive sourcing capabilities and technical
              product knowledge, which enables ASP Global Marine to serve
              shipowners, ship managers, operators, and marine service companies
              throughout the maritime sector.
            </p>
          </div>

          {/* Product Solutions */}
          <div className="product-solutions">
            <h3 className="solutions-title">Product Solutions</h3>
            <div className="solutions-grid">
              {solutions.map((solution, index) => (
                <div key={index} className="solution-card">
                  <div className="solution-icon">
                    {solution.icon === "settings" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 12 3.5 3.5 0 0 1 12 15.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.65-.07-.97l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.32-.07.64-.07.97 0 .33.03.65.07.97l-2.11 1.63c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.13-.22.07-.49-.12-.64l-2.11-1.63Z" />
                      </svg>
                    )}
                    {solution.icon === "shield" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                      </svg>
                    )}
                    {solution.icon === "warehouse" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 4.5L17.5 12H6.5L12 7.5zM7 13h2v7H7v-7zm4 0h2v7h-2v-7zm4 0h2v7h-2v-7z" />
                      </svg>
                    )}
                    {solution.icon === "engine" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7M9 3V4H15V3H9M7 6V19H17V6H7M8 8H16V10H8V8M8 12H16V14H8V12M8 16H13V18H8V16Z" />
                      </svg>
                    )}
                  </div>
                  <h4 className="solution-category">{solution.category}</h4>
                  <p className="solution-description">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="capabilities-section">
            <h3 className="capabilities-title">Core Capabilities</h3>
            <div className="capabilities-grid">
              {capabilities.map((capability, index) => (
                <div key={index} className="capability-card">
                  <div className="capability-icon">
                    {capability.icon === "shield" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                      </svg>
                    )}
                    {capability.icon === "certificate" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM12 19L10 17L8 19V11H12V19ZM12 9V4L17 9H12Z" />
                      </svg>
                    )}
                    {capability.icon === "globe" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.78 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.77 20 8.64 20 12C20 14.08 19.2 15.97 17.9 17.39Z" />
                      </svg>
                    )}
                    {capability.icon === "anchor" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM12 18C8.1 18 5 14.9 5 11C5 9.5 5.5 8.1 6.3 7H9V5H6.3C6.1 4.7 6 4.4 6 4C6 2.3 7.3 1 9 1H15C16.7 1 18 2.3 18 4C18 4.4 17.9 4.7 17.7 5H15V7H17.7C18.5 8.1 19 9.5 19 11C19 14.9 15.9 18 12 18ZM12 20C12 20 12 20 12 20C12 20 12 20 12 20C12 20 12 20 12 20C12 20 12 20 12 20C16.4 20 20 16.4 20 12H22C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12H4C4 16.4 7.6 20 12 20Z" />
                      </svg>
                    )}
                  </div>
                  <h4 className="capability-title">{capability.title}</h4>
                  <p className="capability-description">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Types */}
          <div className="client-types">
            <h3 className="clients-title">Who We Serve</h3>
            <div className="client-grid">
              {clients.map((client, index) => (
                <div key={index} className="client-item">
                  <div className="client-icon">
                    {client.icon === "ship" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.85-5.56 1.85-8 0C6.78 20.53 5.39 21 4 21H2v-2h2c1.11 0 2.08-.45 3.06-1.19C5.68 16.54 5.35 15.03 5.35 13.5c0-1.53.33-3.04.71-4.31C6.08 8.45 5.11 8 4 8H2V6h2c1.39 0 2.78.47 4 1.32 2.44-1.85 5.56-1.85 8 0 1.22-.85 2.61-1.32 4-1.32h2v2h-2c-1.11 0-2.08.45-3.06 1.19.38 1.27.71 2.78.71 4.31 0 1.53-.33 3.04-.71 4.31.98.74 1.95 1.19 3.06 1.19h2v2h-2z" />
                      </svg>
                    )}
                    {client.icon === "manager" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                      </svg>
                    )}
                    {client.icon === "operator" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9l-5.46 4.73L17.82 21 12 17.27 6.18 21l1.28-7.27L2 9l6.91-.74L12 2z" />
                      </svg>
                    )}
                    {client.icon === "service" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    )}
                  </div>
                  <span className="client-label">{client.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
