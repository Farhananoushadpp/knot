/**
 * ASP Global Marine Trading LLC - About Page
 *
 * Main About page with navigation to sub-sections
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import { Link } from "react-router-dom";
import "../styles/pages/About.css";

const About = () => {
  const sections = [
    {
      title: "Who We Are",
      description: "Learn about our company history and background",
      path: "/about/who-we-are",
      icon: "🏢",
    },
    {
      title: "Certification",
      description: "Our certifications and compliance standards",
      path: "/about/certification",
      icon: "📜",
    },
    {
      title: "Quality Policy",
      description: "Our commitment to quality and excellence",
      path: "/about/quality-policy",
      icon: "⭐",
    },
    {
      title: "Clients",
      description: "Our valued clients and partnerships",
      path: "/about/clients",
      icon: "🤝",
    },
    {
      title: "Mission & Vision",
      description: "Our guiding principles and future aspirations",
      path: "/about/mission-vision",
      icon: "🎯",
    },
    {
      title: "Message",
      description: "Message from our management team",
      path: "/about/message",
      icon: "📧",
    },
  ];

  return (
    <div className="about-page">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Discover ASP Global Marine Trading LLC - Your trusted partner in
            marine solutions
          </p>
        </div>

        <section className="about-intro">
          <div className="intro-content">
            <p>
              Welcome to ASP Global Marine Trading LLC, a leading supplier of
              marine and offshore equipment since 2005. As part of Ocean
              Serenity Group, we have established ourselves as a trusted partner
              for shipowners, operators, and offshore companies worldwide.
            </p>
            <p>
              Explore our comprehensive sections to learn more about our
              company, certifications, quality standards, clients, mission, and
              management message.
            </p>
          </div>
        </section>

        <section className="about-sections-grid">
          {sections.map((section, index) => (
            <Link key={index} to={section.path} className="section-card">
              <div className="card-icon">
                <span className="icon-emoji">{section.icon}</span>
              </div>
              <div className="card-content">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <div className="card-link">
                  <span>Explore</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="about-highlights">
          <h2>Why Choose ASP Global Marine?</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-number">18+</div>
              <div className="highlight-label">Years of Excellence</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">500+</div>
              <div className="highlight-label">Global Clients</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">50+</div>
              <div className="highlight-label">Countries Served</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">9500+</div>
              <div className="highlight-label">Products Available</div>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="cta-content">
            <h2>Ready to Partner With Us?</h2>
            <p>
              Discover how ASP Global Marine Trading LLC can support your
              maritime operations with quality products, reliable service, and
              technical expertise.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/products" className="btn btn-secondary">
                View Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
