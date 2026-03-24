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
      image: "/about1.webp",
      heading: "Knot & Sail Maritime Excellence",
      description:
        "Your premier partner in the UAE's maritime industry, delivering comprehensive marine solutions with unmatched expertise and commitment to operational excellence.",
    },
    {
      id: 2,
      image: "/about2.webp",
      heading: "Trusted Maritime Solutions Provider",
      description:
        "Setting the benchmark for excellence in the UAE's maritime industry through innovation, customer-centric approach, and long-term partnerships with ship owners and managers.",
    },
    {
      id: 3,
      image: "/about3.webp",
      heading: "Comprehensive Marine Services",
      description:
        "From technical manpower supply to specialized marine services, we provide reliable solutions that enhance operational performance and minimize downtime for your vessels.",
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
    { id: 1, src: "/1.webp", title: "Knot & Sail Excellence" },
    { id: 2, src: "/2.webp", title: "UAE Maritime Operations" },
    { id: 3, src: "/3.webp", title: "Marine Solutions" },
    { id: 4, src: "/4.webp", title: "Safety Standards" },
    { id: 5, src: "/5.webp", title: "Technical Expertise" },
    { id: 6, src: "/products/deck/1.webp", title: "Marine Services" },
    { id: 7, src: "/products/enginestores/1.webp", title: "Technical Support" },
    { id: 8, src: "/products/lsa&ffa/1.webp", title: "Safety Equipment" },
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

      <section className="about-section" id="who-we-are">
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
              <div>
                <p>
                  At Knot & Sail, our mission is to set a benchmark for
                  excellence in the UAE's maritime industry by combining
                  innovation with a customer-centric approach. We continuously
                  invest in advanced technology and industry best practices to
                  ensure that we meet and exceed our clients' expectations. As a
                  company that values long-term partnerships, we strive to be
                  the preferred choice for ship owners and managers seeking
                  reliable and comprehensive maritime solutions.
                </p>
              </div>
            </div>

            <div className="about-content-text">
              <h3 className="about-subtitle">
                Your Trusted Partner in the UAE Marine Industry
              </h3>
              <div className="ocean-group-text-birds">
                Premier Marine Service Provider
              </div>
              <p>
                Knot & Sail is a premier service provider in the UAE marine
                market, offering a complete range of reliable and high-quality
                solutions for ship owners and ship management companies. With a
                strong presence across all UAE ports, we are committed to
                delivering excellence in maritime services, ensuring vessels
                operate smoothly, efficiently, and in compliance with
                international standards. Our expertise spans across various
                aspects of ship support, from maintenance and repairs to
                logistics and technical assistance, making us a trusted partner
                in the industry.
              </p>
              <p>
                Our company takes pride in its ability to provide tailored
                solutions that cater to the unique needs of both local and
                international clients. Backed by a team of experienced
                professionals, we prioritize efficiency, safety, and
                sustainability in every service we offer. Whether it's vessel
                supply, engineering support, or regulatory compliance
                assistance, Knot & Sail is dedicated to enhancing operational
                performance and minimizing downtime for our clients.
              </p>

              <div className="about-cta">
                <Link to="/products" className="btn btn-primary">
                  Explore our Products
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="stats-section-modern">
            <div className="stats-item-modern">
              <div className="stats-number-modern">5+</div>
              <div className="stats-label-modern">Years Experience</div>
            </div>
            <div className="stats-item-modern">
              <div className="stats-number-modern">200+</div>
              <div className="stats-label-modern">Global Clients</div>
            </div>
            <div className="stats-item-modern">
              <div className="stats-number-modern">10+</div>
              <div className="stats-label-modern">Countries Served</div>
            </div>
            <div className="stats-item-modern">
              <div className="stats-number-modern">4200+</div>
              <div className="stats-label-modern">Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Modern Design */}
      <section className="mission-vision-modern" id="mission-vision">
        <div className="container">
          <div className="mission-vision-header-modern">
            <h2 className="mission-vision-title-modern">Mission & Vision</h2>
            <p className="mission-vision-subtitle-modern">
              Our guiding principles and future aspirations
            </p>
          </div>

          <div className="mission-vision-grid-modern">
            <div className="mission-card-modern">
              <div className="mission-icon-modern">
                <Target size={32} />
              </div>
              <div className="mission-content-modern">
                <h3 className="mission-title-modern">Our Mission</h3>
                <p className="mission-desc-modern">
                  At Knot & Sail, our mission is to provide reliable,
                  high-quality, and cost-effective marine solutions to ship
                  owners and management companies across all UAE ports. We are
                  committed to ensuring seamless operations through expert
                  services, innovative technology, and round-the-clock support,
                  delivering excellence in every aspect of the maritime
                  industry.
                </p>
              </div>
            </div>

            <div className="vision-card-modern">
              <div className="vision-icon-modern">
                <Eye size={32} />
              </div>
              <div className="vision-content-modern">
                <h3 className="vision-title-modern">Our Vision</h3>
                <p className="vision-desc-modern">
                  Our vision is to be the leading marine service provider in the
                  UAE, setting the benchmark for quality, efficiency, and
                  customer satisfaction. We aim to build long-term partnerships
                  with local and international clients by continuously enhancing
                  our capabilities, adopting sustainable practices, and staying
                  ahead in the ever-evolving maritime industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="why-choose-modern">
        <div className="container">
          <div className="why-header-modern">
            <h2 className="why-title-modern">Quality Policy</h2>
            <p className="why-subtitle-modern">
              Our dedication to excellence in every aspect of our operations
            </p>
          </div>

          <div className="why-grid-modern">
            <div className="why-card-modern">
              <div className="quality-icon">
                <Users size={36} />
              </div>
              <div className="why-content-modern">
                <h3>Customer Satisfaction</h3>
                <p>
                  We prioritize client needs by delivering tailored,
                  high-quality services that ensure operational efficiency and
                  vessel performance.
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="quality-icon">
                <CheckCircle size={36} />
              </div>
              <div className="why-content-modern">
                <h3>Compliance & Standards</h3>
                <p>
                  We adhere to local and international maritime regulations,
                  ensuring our services meet industry best practices.
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="why-icon-modern">
                <Settings size={48} />
              </div>
              <div className="why-content-modern">
                <h3>Skilled Workforce</h3>
                <p>
                  Our team consists of highly trained professionals who use
                  advanced technology and the latest techniques to maintain
                  excellence.
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="why-icon-modern">
                <Anchor size={48} />
              </div>
              <div className="why-content-modern">
                <h3>Continuous Improvement</h3>
                <p>
                  We regularly evaluate and enhance our processes to improve
                  service quality, efficiency, and environmental responsibility.
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="why-icon-modern">
                <Package size={48} />
              </div>
              <div className="why-content-modern">
                <h3>Safety & Sustainability</h3>
                <p>
                  We implement strict safety protocols and use eco-friendly
                  solutions to minimize our environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Policy */}
      <section className="why-choose-modern">
        <div className="container">
          <div className="why-header-modern">
            <h2 className="why-title-modern">Safety Policy</h2>
            <p className="why-subtitle-modern">
              Our unwavering commitment to safety in all operations
            </p>
          </div>

          <div className="why-grid-modern">
            <div className="why-card-modern">
              <div className="quality-icon">
                <ShieldCheck size={36} />
              </div>
              <div className="why-content-modern">
                <h3>Zero Tolerance for Safety Violations</h3>
                <p>
                  We uphold a strict zero-tolerance approach toward any actions
                  or practices that compromise safety standards.
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="quality-icon">
                <Users size={36} />
              </div>
              <div className="why-content-modern">
                <h3>Employee Training & Awareness</h3>
                <p>
                  We provide ongoing training and development to all employees,
                  ensuring they are equipped with the necessary skills and
                  knowledge to work safely.
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="quality-icon">
                <Target size={36} />
              </div>
              <div className="why-content-modern">
                <h3>Risk Assessment & Mitigation</h3>
                <p>
                  Before beginning any service, we conduct thorough risk
                  assessments to identify potential hazards and implement
                  effective mitigation measures.
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="quality-icon">
                <CheckCircle size={36} />
              </div>
              <div className="why-content-modern">
                <h3>Compliance with Regulations</h3>
                <p>
                  Our services are fully compliant with local and international
                  safety regulations, ensuring that we meet or exceed all legal
                  requirements.
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="quality-icon">
                <TrendingUp size={36} />
              </div>
              <div className="why-content-modern">
                <h3>Continuous Safety Improvement</h3>
                <p>
                  We continuously review and enhance our safety procedures to
                  stay ahead of potential risks and maintain a proactive safety
                  culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients We Serve - Modern Design */}
      <section className="clients-modern" id="clients">
        <div className="container">
          <div className="clients-header-modern">
            <h2 className="clients-title-modern">Clients We Serve</h2>
            <p className="clients-subtitle-modern">
              Trusted by leading maritime companies worldwide
            </p>
          </div>

          <div className="clients-grid-modern">
            <div className="client-item-modern">
              <div className="client-icon-modern">
                <Ship size={32} />
              </div>
              <div className="client-content-modern">
                <h3 className="client-title-modern">Ship Owners</h3>
                <ul className="client-list-modern">
                  <li>Bulk Carriers</li>
                  <li>Container Lines</li>
                  <li>Tankers</li>
                  <li>Ro-Ro Vessels</li>
                </ul>
              </div>
            </div>

            <div className="client-item-modern">
              <div className="client-icon-modern">
                <Settings size={32} />
              </div>
              <div className="client-content-modern">
                <h3 className="client-title-modern">Ship Managers</h3>
                <ul className="client-list-modern">
                  <li>Third-Party Managers</li>
                  <li>Fleet Companies</li>
                  <li>Technical Services</li>
                </ul>
              </div>
            </div>

            <div className="client-item-modern">
              <div className="client-icon-modern">
                <Wrench size={32} />
              </div>
              <div className="client-content-modern">
                <h3 className="client-title-modern">Marine Services</h3>
                <ul className="client-list-modern">
                  <li>Engineering Firms</li>
                  <li>Repair & Maintenance</li>
                  <li>Survey & Inspection</li>
                </ul>
              </div>
            </div>

            <div className="client-item-modern">
              <div className="client-icon-modern">
                <Anchor size={32} />
              </div>
              <div className="client-content-modern">
                <h3 className="client-title-modern">Offshore Operators</h3>
                <ul className="client-list-modern">
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
