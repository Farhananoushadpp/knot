/**
 * Knot & Sail - About Us Page (Single Page)
 *
 * Comprehensive About Us page with all sections
 * No sub-pages - single scrollable page design
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import {
  Anchor,
  Ship,
  Target,
  Eye,
  Award,
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle,
  Shield,
  Building2,
  Settings,
  Wrench,
  MessageSquare,
  Package,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/About.css";

const About = () => {
  // Hero slider data - 3 slides with background images
  const heroSlides = [
    {
      id: 1,
      image: "/ocean-infinity-hero-1.webp",
      heading: "Ocean Infinity - Pioneering Ocean Technology",
      description:
        "Leading the future of ocean operations with advanced robotics, autonomous systems, and data-driven solutions that transform how we explore and understand our oceans.",
    },
    {
      id: 2,
      image: "/ocean-infinity-hero-2.webp",
      heading: "Global Leader in Marine Innovation",
      description:
        "Delivering cutting-edge subsea robotics and offshore services worldwide, setting new standards for safety, efficiency, and environmental sustainability in maritime operations.",
    },
    {
      id: 3,
      image: "/ocean-infinity-hero-3.webp",
      heading: "Advanced Ocean Data Solutions",
      description:
        "Harnessing intelligent data acquisition and analysis to provide precise, actionable insights that optimize offshore operations and protect marine environments.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

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
    <div className="about-page">
      {/* Hero Slider Section */}
      <section className="about-hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            <div className="hero-slide-overlay"></div>
            <div className="hero-slide-content">
              <h1 className="hero-slide-heading">{slide.heading}</h1>
              <p className="hero-slide-description">{slide.description}</p>
            </div>
          </div>
        ))}

        {/* Slider Navigation Arrows */}
        <button
          className="slider-arrow slider-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          className="slider-arrow slider-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Slider Indicators */}
        <div className="slider-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      <section
        className="about-section"
        id="who-we-are"
        style={{ backgroundColor: "#ffffff" }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
            section.about-section#who-we-are {
              background: #ffffff !important;
              background-color: #ffffff !important;
            }
            html body section.about-section#who-we-are {
              background: #ffffff !important;
              background-color: #ffffff !important;
            }
          `,
          }}
        />
        <div>
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
      {/* Mission & Vision - Modern Design */}
      <section
        className="mission-vision-modern"
        id="mission-vision"
        style={{ backgroundColor: "#0c886314" }}
      >
        <div className="container">
          <div className="mission-vision-header-modern">
            <h2 className="mission-vision-title-modern">Mission & Vision</h2>
            <p className="mission-vision-subtitle-modern">
              Our guiding principles and future aspirations
            </p>
          </div>

          <div className="template-card-grid">
            <div className="template-card">
              <div className="template-card-icon">
                <Target size={24} />
              </div>
              <h3 className="template-card-title">Our Mission</h3>
              <div className="template-card-content">
                <p>
                  To advance ocean operations through innovative technology,
                  skilled expertise, and data-driven solutions that enhance
                  safety, efficiency, and sustainability across the maritime and
                  offshore sectors. We are committed to delivering reliable,
                  high-quality services that meet client objectives, uphold
                  international standards, and support responsible use of the
                  world’s oceans.
                </p>
              </div>
            </div>

            <div className="template-card">
              <div className="template-card-icon">
                <Eye size={24} />
              </div>
              <h3 className="template-card-title">Our Vision</h3>
              <div className="template-card-content">
                <p>
                  To be the world’s most trusted and innovative ocean technology
                  company, transforming how the oceans are understood, explored,
                  and sustainably utilized. Ocean Infinity envisions a future
                  where advanced robotics, intelligent data, and responsible
                  operations unlock new possibilities for maritime and offshore
                  industries while protecting the marine environment for
                  generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section
        className="why-choose-modern"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="why-header-modern">
            <h2 className="why-title-modern">Quality Policy</h2>
            <p className="why-subtitle-modern">
              Our dedication to excellence in every aspect of our operations
            </p>
          </div>

          <div
            className="template-card-grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            <div className="template-card">
              <div className="template-card-icon">
                <Users size={24} />
              </div>
              <h3 className="template-card-title">Customer Satisfaction</h3>
              <div className="template-card-content">
                <p>
                  We prioritize client needs by delivering tailored,
                  high-quality services that ensure operational efficiency and
                  vessel performance.
                </p>
              </div>
            </div>
            <div className="template-card">
              <div className="template-card-icon">
                <CheckCircle size={24} />
              </div>
              <h3 className="template-card-title">Compliance & Standards</h3>
              <div className="template-card-content">
                <p>
                  We adhere to local and international maritime regulations,
                  ensuring our services meet industry best practices.
                </p>
              </div>
            </div>

            <div className="template-card">
              <div className="template-card-icon">
                <Settings size={24} />
              </div>
              <h3 className="template-card-title">Skilled Workforce</h3>
              <div className="template-card-content">
                <p>
                  Our team consists of highly trained professionals who use
                  advanced technology and the latest techniques to maintain
                  excellence.
                </p>
              </div>
            </div>

            <div className="template-card">
              <div className="template-card-icon">
                <Anchor size={24} />
              </div>
              <h3 className="template-card-title">Continuous Improvement</h3>
              <div className="template-card-content">
                <p>
                  We constantly enhance our processes and services to stay ahead
                  of industry trends and exceed client expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Policy */}
      <section
        className="why-choose-modern"
        style={{ backgroundColor: "#0c886314" }}
      >
        <div className="container">
          <div className="why-header-modern">
            <h2 className="why-title-modern">Safety Policy</h2>
            <p className="why-subtitle-modern">
              Our unwavering commitment to safety in all operations
            </p>
          </div>

          <div
            className="template-card-grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            <div className="template-card">
              <div className="template-card-icon">
                <ShieldCheck size={24} />
              </div>
              <h3 className="template-card-title">
                Zero Tolerance for Safety Violations
              </h3>
              <div className="template-card-content">
                <p>
                  We uphold a strict zero-tolerance approach toward any actions
                  or practices that compromise safety standards.
                </p>
              </div>
            </div>

            <div className="template-card">
              <div className="template-card-icon">
                <Users size={24} />
              </div>
              <h3 className="template-card-title">
                Employee Training & Awareness
              </h3>
              <div className="template-card-content">
                <p>
                  We provide ongoing training and development to all employees,
                  ensuring they are equipped with the necessary skills and
                  knowledge to work safely.
                </p>
              </div>
            </div>

            <div className="template-card">
              <div className="template-card-icon">
                <Target size={24} />
              </div>
              <h3 className="template-card-title">
                Risk Assessment & Mitigation
              </h3>
              <div className="template-card-content">
                <p>
                  Before beginning any service, we conduct thorough risk
                  assessments to identify potential hazards and implement
                  effective mitigation measures.
                </p>
              </div>
            </div>

            <div className="template-card">
              <div className="template-card-icon">
                <CheckCircle size={24} />
              </div>
              <h3 className="template-card-title">Safety Compliance</h3>
              <div className="template-card-content">
                <p>
                  We strictly adhere to international maritime safety
                  regulations and maintain comprehensive safety management
                  systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}

      {/* Clients We Serve - Modern Design */}
      <section
        className="clients-modern"
        id="clients"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="clients-header-modern">
            <h2 className="clients-title-modern">Clients We Serve</h2>
            <p className="clients-subtitle-modern">
              Trusted by leading maritime companies worldwide
            </p>
          </div>

          <div
            className="template-card-grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            <div className="template-card">
              <div className="template-card-icon">
                <Ship size={24} />
              </div>
              <h3 className="template-card-title">Ship Owners</h3>
              <div className="template-card-content">
                <ul className="template-card-list">
                  <li>Bulk Carriers</li>
                  <li>Container Lines</li>
                  <li>Tankers</li>
                  <li>Ro-Ro Vessels</li>
                </ul>
              </div>
            </div>

            <div className="template-card">
              <div className="template-card-icon">
                <Settings size={24} />
              </div>
              <h3 className="template-card-title">Ship Managers</h3>
              <div className="template-card-content">
                <ul className="template-card-list">
                  <li>Third-Party Managers</li>
                  <li>Fleet Companies</li>
                  <li>Technical Services</li>
                </ul>
              </div>
            </div>

            <div className="template-card">
              <div className="template-card-icon">
                <Wrench size={24} />
              </div>
              <h3 className="template-card-title">Marine Services</h3>
              <div className="template-card-content">
                <ul className="template-card-list">
                  <li>Engineering Firms</li>
                  <li>Repair & Maintenance</li>
                  <li>Survey & Inspection</li>
                </ul>
              </div>
            </div>

            <div className="template-card">
              <div className="template-card-icon">
                <Anchor size={24} />
              </div>
              <h3 className="template-card-title">Offshore Operators</h3>
              <div className="template-card-content">
                <ul className="template-card-list">
                  <li>Platform Operators</li>
                  <li>Drilling Companies</li>
                  <li>FPSO Operators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Valued Clients - Modern Design */}
      {/* <section className="valued-clients-modern" id="client-logos">
        <div className="container">
          <div className="valued-clients-header-modern">
            <h2 className="valued-clients-title-modern">Our Valued Clients</h2>
            <p className="valued-clients-subtitle-modern">
              Trusted by leading maritime companies across the globe
            </p>
          </div>
        </div>
        <div className="container">
          <div className="client-logos-slider-modern">
            <div className="client-logos-track-modern">
              {/* Generate all numbered client logos dynamically */}
      {/* {Array.from({ length: 47 }, (_, i) => i + 1).map((num) => (
                <div key={num} className="client-logo-item-modern">
                  <img
                    src={`/Client%20Logo/Asset%20${num}.webp`}
                    alt={`Client Logo ${num}`}
                  />
                </div>
              ))} */}
      {/* Add the special logo */}
      {/* <div className="client-logo-item-modern">
                <img
                  src="/Client%20Logo/TovXkH.webp"
                  alt="Client Logo Special"
                />
              </div> */}
      {/* Duplicate set for seamless loop */}
      {/* {Array.from({ length: 47 }, (_, i) => i + 1).map((num) => (
                <div
                  key={`duplicate-${num}`}
                  className="client-logo-item-modern"
                >
                  <img
                    src={`/Client%20Logo/Asset%20${num}.webp`}
                    alt={`Client Logo ${num}`}
                  />
                </div>
              ))} */}
      {/* Duplicate the special logo */}
      {/* <div className="client-logo-item-modern">
                <img
                  src="/Client%20Logo/TovXkH.webp"
                  alt="Client Logo Special"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Message from Management */}
      {/* <section id="message">
        <div className="std-container">
          <div className="section-title-center">
            <MessageSquare size={32} />
            <h2>Message from Management</h2>
          </div>
          <div className="message-card">
            <div className="quote-icon">&ldquo;</div>
            <div className="message-body">
              <p>
                Welcome to ASP Global Marine Trading LLC. Since our
                establishment in 2005, we have been committed to excellence in
                the marine and offshore industry. Our journey has been guided by
                a simple yet powerful principle: delivering quality products and
                services that our clients can rely on, every time.
              </p>
              <p>
                As part of the Ocean Serenity Group, we benefit from shared
                expertise, resources, and a collective vision for excellence in
                maritime services. We look forward to serving you with the same
                dedication and excellence that has defined ASP Global Marine for
                nearly two decades.
              </p>
            </div>
            <div className="message-footer">
              <div className="signature-line"></div>
              <strong>The Management Team</strong>
              <span>ASP Global Marine Trading LLC</span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
