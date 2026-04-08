/**
 * Ocean Infinity - Home Page
 *
 * Comprehensive home page with multiple sections
 * Technology: React functional component with JSX
 */

import Hero from "../components/Hero.jsx";
import { Link } from "react-router-dom";
import {
  Ship,
  Shield,
  Globe,
  Award,
  Anchor,
  Package,
  Users,
  CheckCircle,
  Settings,
  Clock,
  Droplets,
  Palette,
  Wrench,
  Zap,
  Wind,
  Cpu,
} from "lucide-react";
import "../styles/pages/Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  // Card images for the carousel
  const cardImages = [
    { id: 1, src: "/1.webp", title: "Ocean Infinity Excellence" },
    { id: 2, src: "/map.jpeg", title: "Global Maritime Operations" },
    { id: 3, src: "/quality.jpg", title: "Ocean Technology Solutions" },
    { id: 4, src: "/safety.webp", title: "Ocean Safety Standards" },
    { id: 5, src: "/5.webp", title: "Advanced Ocean Technology" },
    { id: 6, src: "/products/deck/1.webp", title: "Ocean Services" },
    {
      id: 7,
      src: "/products/enginestores/1.webp",
      title: "Ocean Technical Support",
    },
    { id: 8, src: "/products/lsa&ffa/1.webp", title: "Ocean Safety Equipment" },
  ];

  const [activeCard, setActiveCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate cards every 3 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cardImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, cardImages.length]);

  const handleCardClick = () => {
    setActiveCard((prev) => (prev + 1) % cardImages.length);
  };

  return (
    <div className="home-page">
      <Hero />

      {/* Who We Are Section - Same as About Page */}
      <section
        className="about-section"
        id="who-we-are"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="section-header">
            {/* <span className="section-label">Company Overview</span> */}
            <h2>Who We Are</h2>
            {/* <p>
              Your trusted partner in marine and offshore solutions since 2001
            </p> */}
          </div>

          <div className="about-split-layout">
            <div className="about-image-carousel">
              <div className="carousel-container">
                {cardImages.slice(0, 4).map((card, index) => (
                  <div
                    key={card.id}
                    className={`about-carousel-slide ${index === activeCard % 4 ? "active" : ""}`}
                  >
                    <img src={card.src} alt={card.title} />
                    <div className="slide-overlay">
                      <span className="slide-title">{card.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Carousel Indicators */}
              <div className="carousel-dots">
                {cardImages.slice(0, 4).map((_, index) => (
                  <span
                    key={index}
                    className={`carousel-dot ${index === activeCard % 4 ? "active" : ""}`}
                    onClick={() => setActiveCard(index)}
                  />
                ))}
              </div>
              <p>
                <b>Ocean Infinity</b> is a global leader in ocean technology and
                marine operations, delivering innovative, data-driven solutions
                that advance safety, efficiency, and sustainability across the
                maritime and offshore sectors. Our commitment to operational
                excellence and continuous innovation positions us at the
                forefront of modern ocean services.
              </p>
            </div>
            <div className="about-content-text">
              <h3 className="about-subtitle">
                Your Trusted Partner in the UAE Marine Industry
              </h3>
              <div className="ocean-group-text-birds">
                Part of Ocean Serenity Group
              </div>
              <p>
                We operate in accordance with internationally recognized quality
                and safety standards, ensuring every project meets rigorous
                regulatory and operational requirements. Through strategic
                collaboration with leading classification societies and industry
                partners, we provide dependable, compliant solutions across
                complex marine environments.
              </p>
              <p>
                Our core capabilities include subsea robotics, autonomous and
                remotely operated survey operations, offshore support services,
                and advanced data acquisition and analysis. Powered by
                cutting-edge technology and a multidisciplinary team of
                specialists, we deliver precise, reliable results that optimize
                performance and reduce operational risk.
              </p>
              <p>
                At Ocean Infinity, we partner with clients to unlock deeper
                insights from the ocean environment delivering intelligent
                solutions that keep operations safe, efficient, and
                future-ready.
              </p>

              <div className="about-cta">
                <Link to="/services" className="btn btn-primary">
                  Explore our services
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ocean Infinity Services Section */}
      <section
        className="services-section-professional"
        style={{ backgroundColor: "#0c886314" }}
      >
        <div className="container">
          <div className="services-header">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">
              Comprehensive marine solutions and technical services
            </p>
          </div>

          <div className="template-card-grid">
            {/* First Row: Fabrication, Mechanical, Electrical */}
            {/* 1. Fabrication */}
            <div className="service-card-template">
              <div className="service-card-icon-large">
                <Wrench size={32} />
              </div>
              <h3 className="service-card-title-large">Fabrication</h3>
              <div className="template-card-content">
                <p>
                  We undertake all repairs of Hull and inside tanks and
                  Fabrication/ installation of outfitting structures.
                </p>
              </div>
            </div>

            {/* 2. Mechanical */}
            <div className="service-card-template">
              <div className="service-card-icon-large">
                <Settings size={32} />
              </div>
              <h3 className="service-card-title-large">Mechanical</h3>
              <div className="template-card-content">
                <p>
                  With dedicated skilled Technicians stationed in India, the
                  Middle East.
                </p>
              </div>
            </div>

            {/* 3. Electrical */}
            <div className="service-card-template">
              <div className="service-card-icon-large">
                <Zap size={32} />
              </div>
              <h3 className="service-card-title-large">Electrical</h3>
              <div className="template-card-content">
                <p>
                  Samudhra provides electrical on-board equipment services as a
                  component of the turnkey services package for the maritime
                  industry.
                </p>
              </div>
            </div>

            {/* Second Row: Blasting and Painting, Tank Cleaning, Refrigeration & Air Condition */}
            {/* 4. Blasting and Painting */}
            <div className="service-card-template">
              <div className="service-card-icon-large">
                <Palette size={32} />
              </div>
              <h3 className="service-card-title-large">
                Blasting and Painting
              </h3>
              <div className="template-card-content">
                <p>
                  We Provide hydro blasting and painting services for Ocean
                  Going to Offshore Support Services.
                </p>
              </div>
            </div>

            {/* 5. Tank Cleaning */}
            <div className="service-card-template">
              <div className="service-card-icon-large">
                <Droplets size={32} />
              </div>
              <h3 className="service-card-title-large">Tank Cleaning</h3>
              <div className="template-card-content">
                <p>
                  We offer tank cleaning services for offshore/ onshore and,
                  industrial sectors.
                </p>
              </div>
            </div>

            {/* 6. Refrigeration & Air Condition */}
            <div className="service-card-template">
              <div className="service-card-icon-large">
                <Wind size={32} />
              </div>
              <h3 className="service-card-title-large">
                Refrigeration & Air Condition
              </h3>
              <div className="template-card-content">
                <p>
                  We have a strong in-house team with qualified technicians
                  carrying out HVAC jobs for Vessels of all sizes.
                </p>
              </div>
            </div>

            {/* Third Row: Hydraulic Services, Automation */}
            {/* 7. Hydraulic Services */}
            <div className="service-card-template">
              <div className="service-card-icon-large">
                <Droplets size={32} />
              </div>
              <h3 className="service-card-title-large">Hydraulic Services</h3>
              <div className="template-card-content">
                <p>
                  Our team of Engineers and Hydraulic Technicians work with our
                  clients offering offering them various solutions for new
                  installation /repair and maintenance jobs of Hydraulic system
                  in various ports in UAE.
                </p>
              </div>
            </div>

            {/* 8. Automation */}
            <div className="service-card-template">
              <div className="service-card-icon-large">
                <Cpu size={32} />
              </div>
              <h3 className="service-card-title-large">Automation</h3>
              <div className="template-card-content">
                <p>
                  Our Automation division provides solutions for comprehensive
                  repair and maintenance of marine automation systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Responsive Design */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-header">
            <h2 className="section-title">why choose us</h2>
            <p className="section-subtitle">
              Delivering excellence in marine equipment solutions with unmatched
              quality and reliability
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <CheckCircle size={35} />
              </div>
              <div className="why-choose-content">
                <h3 className="why-choose-title">Quality Assured</h3>
                <p className="why-choose-description">
                  ISO certified products meeting international maritime
                  standards
                </p>
                <ul className="why-choose-features">
                  <li>Certified Quality Management</li>
                  <li>International Standards Compliance</li>
                  <li>Rigorous Testing Protocols</li>
                </ul>
              </div>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Ship size={35} />
              </div>
              <div className="why-choose-content">
                <h3 className="why-choose-title">Global Network</h3>
                <p className="why-choose-description">
                  Sourcing from leading manufacturers across 50+ countries
                </p>
                <ul className="why-choose-features">
                  <li>Worldwide Supplier Network</li>
                  <li>Strategic Partnerships</li>
                  <li>Global Logistics Support</li>
                </ul>
              </div>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Settings size={35} />
              </div>
              <div className="why-choose-content">
                <h3 className="why-choose-title">Expert Team</h3>
                <p className="why-choose-description">
                  18+ years of maritime industry experience and technical
                  knowledge
                </p>
                <ul className="why-choose-features">
                  <li>Industry Veterans</li>
                  <li>Technical Expertise</li>
                  <li>24/7 Support Available</li>
                </ul>
              </div>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Anchor size={35} />
              </div>
              <div className="why-choose-content">
                <h3 className="why-choose-title">Fast Delivery</h3>
                <p className="why-choose-description">
                  Efficient logistics ensuring timely delivery worldwide
                </p>
                <ul className="why-choose-features">
                  <li>Express Shipping Options</li>
                  <li>Real-time Tracking</li>
                  <li>Customs Clearance Support</li>
                </ul>
              </div>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Package size={35} />
              </div>
              <div className="why-choose-content">
                <h3 className="why-choose-title">Best Value</h3>
                <p className="why-choose-description">
                  Competitive pricing without compromising on quality
                </p>
                <ul className="why-choose-features">
                  <li>Competitive Pricing</li>
                  <li>Quality Guarantee</li>
                  <li>Flexible Payment Terms</li>
                </ul>
              </div>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Shield size={35} />
              </div>
              <div className="why-choose-content">
                <h3 className="why-choose-title">Warranty Support</h3>
                <p className="why-choose-description">
                  Comprehensive warranty and after-sales support for all
                  products
                </p>
                <ul className="why-choose-features">
                  <li>Extended Warranty Options</li>
                  <li>After-sales Service</li>
                  <li>Spare Parts Availability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Valued Clients - Modern Design */}
      <section
        className="valued-clients-modern"
        id="client-logos"
        style={{ backgroundColor: "#0c886314" }}
      >
        <div className="container">
          <div className="valued-clients-header-modern">
            <h2 className="valued-clients-title-modern">Our Valued Clients</h2>
            <p className="valued-clients-subtitle-modern">
              Trusted by leading maritime companies across the globe
            </p>
          </div>

          <div className="client-logos-slider-modern">
            <div className="client-logos-track-modern">
              {/* Generate all numbered client logos dynamically */}
              {Array.from({ length: 47 }, (_, i) => i + 1).map((num) => (
                <div key={num} className="client-logo-item-modern">
                  <img
                    src={`/Client%20Logo/Asset%20${num}.webp`}
                    alt={`Client Logo ${num}`}
                  />
                </div>
              ))}
              {/* Add the special logo */}
              <div className="client-logo-item-modern">
                <img
                  src="/Client%20Logo/TovXkH.webp"
                  alt="Client Logo Special"
                />
              </div>
              {/* Duplicate set for seamless loop */}
              {Array.from({ length: 47 }, (_, i) => i + 1).map((num) => (
                <div
                  key={`duplicate-${num}`}
                  className="client-logo-item-modern"
                >
                  <img
                    src={`/Client%20Logo/Asset%20${num}.webp`}
                    alt={`Client Logo ${num}`}
                  />
                </div>
              ))}
              {/* Duplicate the special logo */}
              <div className="client-logo-item-modern">
                <img
                  src="/Client%20Logo/TovXkH.webp"
                  alt="Client Logo Special"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
