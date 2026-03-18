/**
 * ASP Global Marine Trading LLC - Clients Page
 *
 * Our valued clients and partnerships
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/About.css";

const Clients = () => {
  const clientCategories = [
    {
      category: "Ship Owners",
      description: "Fleet operators and vessel management companies",
      clients: [
        "Bulk Carrier Operators",
        "Container Shipping Lines",
        "Tanker Operators",
        "Ro-Ro Vessel Owners",
      ],
    },
    {
      category: "Ship Managers",
      description: "Technical management and operational services",
      clients: [
        "Third-Party Ship Managers",
        "Fleet Management Companies",
        "Technical Service Providers",
      ],
    },
    {
      category: "Marine Service Companies",
      description: "Service and maintenance providers",
      clients: [
        "Marine Engineering Firms",
        "Repair & Maintenance Companies",
        "Survey & Inspection Services",
      ],
    },
    {
      category: "Offshore Operators",
      description: "Oil & gas and offshore installation operators",
      clients: [
        "Offshore Platform Operators",
        "Drilling Companies",
        "FPSO Operators",
        "Support Vessel Companies",
      ],
    },
  ];

  return (
    <div className="about-page">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">Our Clients</h1>
          <p className="page-subtitle">
            Trusted by leading maritime companies worldwide
          </p>
        </div>

        <section className="clients-intro">
          <p>
            ASP Global Marine Trading LLC serves a diverse portfolio of clients
            across the maritime industry. Our reputation for quality,
            reliability, and exceptional service has earned us the trust of ship
            owners, operators, and service companies globally.
          </p>
        </section>

        <section className="client-categories">
          {clientCategories.map((category, index) => (
            <div key={index} className="client-category">
              <h2>{category.category}</h2>
              <p className="category-description">{category.description}</p>
              <div className="client-list">
                {category.clients.map((client, clientIndex) => (
                  <div key={clientIndex} className="client-item">
                    <div className="client-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <span>{client}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="client-testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  &ldquo;ASP Global Marine has been our trusted supplier for
                  over 10 years. Their quality products and exceptional service
                  have consistently exceeded our expectations.&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                <h4>Fleet Manager</h4>
                <p>Leading Container Shipping Line</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  &ldquo;The technical expertise and prompt delivery from ASP
                  Global Marine have been crucial for our offshore operations.
                  They understand our requirements perfectly.&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                <h4>Procurement Director</h4>
                <p>Offshore Platform Operator</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  &ldquo;We rely on ASP Global Marine for critical marine
                  spares. Their compliance documentation and quality assurance
                  give us complete confidence in their products.&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                <h4>Technical Superintendent</h4>
                <p>Ship Management Company</p>
              </div>
            </div>
          </div>
        </section>

        <section className="partnership-approach">
          <h2>Our Partnership Approach</h2>
          <div className="approach-points">
            <div className="approach-item">
              <h3>Understanding Needs</h3>
              <p>
                We take time to understand each client&apos;s specific
                requirements and operational context
              </p>
            </div>
            <div className="approach-item">
              <h3>Quality Assurance</h3>
              <p>
                Every product is thoroughly inspected and documented before
                delivery
              </p>
            </div>
            <div className="approach-item">
              <h3>Technical Support</h3>
              <p>
                Our expert team provides guidance and support throughout the
                procurement process
              </p>
            </div>
            <div className="approach-item">
              <h3>Long-term Relationships</h3>
              <p>
                We build lasting partnerships based on trust, reliability, and
                mutual success
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Clients;
