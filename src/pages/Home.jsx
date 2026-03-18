/**
 * ASP Global Marine Trading LLC - Home Page
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
    { id: 1, src: "/1.webp", title: "Marine Excellence" },
    { id: 2, src: "/map.jpeg", title: "Global Operations" },
    { id: 3, src: "/quality.jpg", title: "Quality Equipment" },
    { id: 4, src: "/safety.webp", title: "Safety Standards" },
    { id: 5, src: "/5.webp", title: "Technical Support" },
    { id: 6, src: "/products/deck/1.webp", title: "Deck Solutions" },
    { id: 7, src: "/products/enginestores/1.webp", title: "Engine Parts" },
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
        <div className="container-full">
          <div className="section-header">
            {/* <span className="section-label">Company Overview</span> */}
            <h2>Who We Are</h2>
            {/* <p>
              Your trusted partner in marine and offshore solutions since 2006
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
            </div>
            <div className="about-content-text">
              <h3 className="about-subtitle">Marine Excellence Since 2021</h3>
              <div className="ocean-group-text-birds">
                Part of Ocean Serenity Group
              </div>
              <p>
                ASP Global Marine is a specialized marine and offshore product
                solution provider delivering high-quality equipment, spare
                parts, and consumables to vessels and offshore installations
                worldwide. With a strong focus on operational reliability and
                compliance requirements of the maritime industry, ASP Global
                offers product solutions for equipment/mechanical systems,
                safety items, deck/engine stores and engine spares.
              </p>
              <p>
                This is backed by extensive sourcing capabilities and technical
                product knowledge, which enables ASP Global marine to serve
                shipowners, ship managers, operators, and marine service
                companies throughout the maritime sector.
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
        </div>
      </section>

      {/* Our Services Section - Professional Design */}
      <section className="services-section-professional">
        <div className="container">
          <div className="services-header">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">
              Comprehensive marine solutions for the global maritime industry
            </p>
          </div>

          <div className="services-grid-professional">
            {/* 1. Engine Stores */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/spare.jpg"
                  alt="Engine Stores"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">Engine Stores</h3>
                <p className="service-desc-professional">
                  Seals, Gaskets, Pumps, Tools, Testing Equipment, Safety Gear,
                  Electrical, HVAC, and Maintenance Supplies.
                </p>
              </div>
            </div>

            {/* 2. Deck Stores */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/deckstore.webp"
                  alt="Deck Stores"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">Deck Stores</h3>
                <p className="service-desc-professional">
                  Navigation & Lighting, Ropes & Chains, Deck Tools, Safety &
                  Protection, Communication, Maintenance, Operations, and
                  Environmental Systems.
                </p>
              </div>
            </div>

            {/* 3. Engine Spares */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/enginespare.jpg"
                  alt="Engine Spares"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">Engine Spares</h3>
                <p className="service-desc-professional">
                  Comprehensive range of engine spare parts for marine vessels
                </p>
              </div>
            </div>

            {/* 4. Turbo Charger */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/spare.jpg"
                  alt="Turbo Charger"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">Turbo Charger</h3>
                <p className="service-desc-professional">
                  Marine turbocharger parts and complete units for optimal
                  engine performance
                </p>
              </div>
            </div>

            {/* 5. Purifiers Parts */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/spare.jpg"
                  alt="Purifiers Parts"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">Purifiers Parts</h3>
                <p className="service-desc-professional">
                  Oil and fuel purifier spare parts for Alfa Laval, Westfalia,
                  and Mitsubishi
                </p>
              </div>
            </div>

            {/* 6. Air Compressor Parts */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/spare.jpg"
                  alt="Air Compressor Parts"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">
                  Air Compressor Parts
                </h3>
                <p className="service-desc-professional">
                  Marine air compressor spare parts and complete unit supplies
                </p>
              </div>
            </div>

            {/* 7. Hydraulic Spares */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/spare.jpg"
                  alt="Hydraulic Spares"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">Hydraulic Spares</h3>
                <p className="service-desc-professional">
                  Hydraulic pumps, motors, valves, and complete system spares
                </p>
              </div>
            </div>

            {/* 8. Boilers, Incinerators & Heat Exchangers */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/spare.jpg"
                  alt="Boilers, Incinerators & Heat Exchangers"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">
                  Boilers, Incinerators & Heat Exchangers
                </h3>
                <p className="service-desc-professional">
                  Complete units and spare parts for marine boilers,
                  incinerators, and heat exchangers
                </p>
              </div>
            </div>

            {/* 9. Heat Exchanger Parts */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/spare.jpg"
                  alt="Heat Exchanger Parts"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">
                  Heat Exchanger Parts
                </h3>
                <p className="service-desc-professional">
                  Plates, gaskets, and complete heat exchanger unit supplies
                </p>
              </div>
            </div>

            {/* 10. Pump Spares */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/spare.jpg"
                  alt="Pump Spares"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">Pump Spares</h3>
                <p className="service-desc-professional">
                  Centrifugal, gear, and bilge pump spare parts for all marine
                  applications
                </p>
              </div>
            </div>

            {/* 11. HVAC Compressor */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/spare.jpg"
                  alt="HVAC Compressor"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">HVAC Compressor</h3>
                <p className="service-desc-professional">
                  Marine HVAC compressor parts and complete refrigeration unit
                  supplies
                </p>
              </div>
            </div>

            {/* 12. LSA/FFA Products */}
            <div className="service-card-professional">
              <div className="service-image-professional">
                <img
                  src="/lsa.jpg"
                  alt="LSA/FFA Products"
                  className="service-image-img"
                />
              </div>
              <div className="service-content-professional">
                <h3 className="service-title-professional">LSA/FFA Products</h3>
                <p className="service-desc-professional">
                  Life Saving Appliances, Fire Fighting Equipment, Safety
                  Signage, EEBD, PPE, Pyrotechnic Equipment, and Marine Safety
                  Training.
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
