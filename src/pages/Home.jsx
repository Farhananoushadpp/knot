/**
 * Knot & Sail - Home Page
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
} from "lucide-react";
import "../styles/pages/Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  // Card images for the carousel
  const cardImages = [
    { id: 1, src: "/1.webp", title: "Knot & Sail Excellence" },
    { id: 2, src: "/map.jpeg", title: "UAE Maritime Operations" },
    { id: 3, src: "/quality.jpg", title: "Marine Solutions" },
    { id: 4, src: "/safety.webp", title: "Safety Standards" },
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
    <div className="home-page">
      <Hero />

      {/* Who We Are Section - Same as About Page */}
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
              <p>
                At Knot & Sail, our mission is to set a benchmark for excellence
                in the UAE's maritime industry by combining innovation with a
                customer-centric approach. We continuously invest in advanced
                technology and industry best practices to ensure that we meet
                and exceed our clients' expectations. As a company that values
                long-term partnerships, we strive to be the preferred choice for
                ship owners and managers seeking reliable and comprehensive
                maritime solutions.
              </p>
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

      {/* Knot & Sail Services Section - Professional Design */}
      <section className="services-section-professional">
        <div className="container">
          <div className="services-header">
            <h2 className="services-title">Knot & Sail Services</h2>
            <p className="services-subtitle">
              Professional marine solutions across all UAE ports
            </p>
          </div>

          <div className="services-grid-professional">
            {/* 1. Hydro Blasting */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/knot and sail images/Asset 33.webp"
                  alt="Hydro Blasting"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">Hydro Blasting</h3>
                <p className="service-desc-professional">
                  Eco-friendly high-pressure water jet cleaning for rust, paint,
                  and contaminant removal. Ensures thorough surface preparation
                  without damage to vessel structure.
                </p>
              </div>
            </div>

            {/* 2. Tank Cleaning */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/knot and sail images/Asset 34.webp"
                  alt="Tank Cleaning Service"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">
                  Tank Cleaning Service
                </h3>
                <p className="service-desc-professional">
                  Professional cleaning of fuel tanks, ballast tanks, cargo
                  tanks, and water tanks using advanced techniques for safety,
                  efficiency, and regulatory compliance.
                </p>
              </div>
            </div>

            {/* 3. Antifouling Coating */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/knot and sail images/Asset 35.webp"
                  alt="Antifouling & Anticavitation Coating"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">
                  Antifouling & Anticavitation Coating
                </h3>
                <p className="service-desc-professional">
                  Advanced coating solutions to protect hull and propulsion
                  systems from marine growth, corrosion, and cavitation damage
                  for enhanced fuel efficiency.
                </p>
              </div>
            </div>

            {/* 4. Painting Works */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/knot and sail images/Asset 37.webp"
                  alt="Painting Works"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">Painting Works</h3>
                <p className="service-desc-professional">
                  Comprehensive painting solutions from surface preparation to
                  final coating using top-grade materials and latest application
                  techniques.
                </p>
              </div>
            </div>

            {/* 5. Steel Fabrication */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/knot and sail images/Asset 38.webp"
                  alt="Steel Fabrication & Pipe Welding"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">
                  Steel Fabrication & Pipe Welding
                </h3>
                <p className="service-desc-professional">
                  Specialized steel fabrication and pipe welding services using
                  TIG, MIG, and ARC welding techniques for hull repairs and
                  structural modifications.
                </p>
              </div>
            </div>

            {/* 6. Technical Manpower */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/knot and sail images/Asset 39.webp"
                  alt="Technical Manpower Supply"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">
                  Technical Manpower Supply
                </h3>
                <p className="service-desc-professional">
                  Certified marine professionals including mechanical fitters,
                  welders, electricians, and technicians for reliable workforce
                  solutions.
                </p>
              </div>
            </div>

            {/* 7. Riding Squad Services */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/knot and sail images/Asset 40.webp"
                  alt="Riding Squad Services"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">
                  Riding Squad Services
                </h3>
                <p className="service-desc-professional">
                  Global riding squad support for maintenance and repairs during
                  voyages to reduce downtime and maintain class and CAP
                  standards.
                </p>
              </div>
            </div>

            {/* 8. Quality Assurance */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/knot and sail images/Asset 41.webp"
                  alt="Quality & Safety Compliance"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">
                  Quality & Safety Compliance
                </h3>
                <p className="service-desc-professional">
                  Strict adherence to international maritime standards with
                  comprehensive safety protocols and continuous improvement
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Modern Redesign */}
      <section className="why-choose-modern">
        <div className="container">
          <div className="why-header-modern">
            <h2 className="why-title-modern">Why Choose Us</h2>
            <p className="why-subtitle-modern">
              Trusted partner for marine equipment solutions worldwide
            </p>
          </div>

          <div className="why-grid-modern">
            <div className="why-card-modern">
              <div className="why-icon-modern">
                <CheckCircle size={48} />
              </div>
              <div className="why-content-modern">
                <h3 className="why-title-card-modern">Quality Assured</h3>
                <p className="why-desc-modern">
                  ISO certified products meeting international maritime
                  standards
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="why-icon-modern">
                <Ship size={48} />
              </div>
              <div className="why-content-modern">
                <h3 className="why-title-card-modern">Global Network</h3>
                <p className="why-desc-modern">
                  Sourcing from leading manufacturers across 50+ countries
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="why-icon-modern">
                <Settings size={48} />
              </div>
              <div className="why-content-modern">
                <h3 className="why-title-card-modern">Expert Team</h3>
                <p className="why-desc-modern">
                  18+ years of maritime industry experience and technical
                  knowledge
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="why-icon-modern">
                <Anchor size={48} />
              </div>
              <div className="why-content-modern">
                <h3 className="why-title-card-modern">Fast Delivery</h3>
                <p className="why-desc-modern">
                  Efficient logistics ensuring timely delivery worldwide
                </p>
              </div>
            </div>

            <div className="why-card-modern">
              <div className="why-icon-modern">
                <Package size={48} />
              </div>
              <div className="why-content-modern">
                <h3 className="why-title-card-modern">Best Value</h3>
                <p className="why-desc-modern">
                  Competitive pricing without compromising on quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Authorizations Section - Professional Design */}
      <section className="authorizations-professional">
        <div className="container">
          <div className="authorizations-header-professional">
            <h2 className="authorizations-title-professional">
              Our Authorizations
            </h2>
            <p className="authorizations-subtitle-professional">
              Official partnerships and certifications with leading marine
              equipment manufacturers
            </p>
          </div>

          <div className="authorizations-grid-professional">
            <div className="authorization-item-professional">
              <div className="authorization-badge-professional">
                <Shield size={48} />
              </div>
              <div className="authorization-content-professional">
                <h3 className="authorization-title-professional">
                  Authorized Distributor
                </h3>
                <p className="authorization-desc-professional">
                  Official distributor for leading marine equipment
                  manufacturers
                </p>
              </div>
            </div>

            <div className="authorization-item-professional">
              <div className="authorization-badge-professional">
                <Award size={48} />
              </div>
              <div className="authorization-content-professional">
                <h3 className="authorization-title-professional">
                  Service Partner
                </h3>
                <p className="authorization-desc-professional">
                  Authorized service provider for marine equipment maintenance
                </p>
              </div>
            </div>

            <div className="authorization-item-professional">
              <div className="authorization-badge-professional">
                <CheckCircle size={48} />
              </div>
              <div className="authorization-content-professional">
                <h3 className="authorization-title-professional">
                  Technical Support
                </h3>
                <p className="authorization-desc-professional">
                  Authorized technical support and installation partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Valued Clients - Modern Design */}
      <section className="valued-clients-modern" id="client-logos">
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
