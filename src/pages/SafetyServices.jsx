/**
 * Ocean Infinity - Safety Services Page
 *
 * Comprehensive safety services including safety audits,
 * training programs, and compliance management
 */

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import {
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  Settings,
  ChevronRight,
  X,
} from "lucide-react";
import "../styles/pages/Services.css";

const SafetyServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const safetyServicesData = [
    {
      id: 1,
      title: "Life Rafts",
      icon: Shield,
      image: "/safety/safe2.webp",
      shortDescription:
        "Commercial ships' life rafts need to be serviced once a year. Samudhra Marine..",
      fullDescription:
        "Commercial ships' life rafts need to be serviced once a year. Samudhra Marine provides comprehensive life raft servicing, inspection, and certification to ensure compliance with maritime safety regulations and operational readiness.",
      features: [
        "Annual life raft servicing and certification",
        "Life raft inspection and maintenance",
        "SOLAS compliance verification",
        "Emergency equipment readiness checks",
        "Professional servicing by certified technicians",
      ],
      images: [
        "/safety/safe2.webp",
        "/safety/safe8.webp",
        "/safety/safe2.webp",
      ],
    },
    {
      id: 2,
      title: "Lifeboats & Davits",
      icon: Users,
      image: "/safety/safe8.webp",
      shortDescription:
        "As service providers, we have been granted multi-brand certification for lifeboats..",
      fullDescription:
        "As service providers, we have been granted multi-brand certification for lifeboats and davit systems. We offer comprehensive inspection, maintenance, and certification services for all types of lifeboats and launching appliances.",
      features: [
        "Multi-brand lifeboat certification",
        "Lifeboat engine maintenance and testing",
        "Davit system inspection and certification",
        "Launching appliance testing",
        "SOLAS and regulatory compliance",
      ],
      images: [
        "/safety/safe8.webp",
        "/safety/safe8.webp",
        "/safety/safe8.webp",
      ],
    },
    {
      id: 3,
      title: "Breathing Apparatus",
      icon: AlertTriangle,
      image: "/safety/safe4.webp",
      shortDescription:
        "Breathing apparatus servicing is essential for ensuring the safety..",
      fullDescription:
        "Breathing apparatus servicing is essential for ensuring the safety of crew members in emergency situations. We provide comprehensive inspection, testing, and certification services for all types of marine respiratory protection equipment.",
      features: [
        "SCBA inspection and certification",
        "Air cylinder testing and refilling",
        "EEBD maintenance and testing",
        "Breathing apparatus calibration",
        "Emergency equipment readiness verification",
      ],
      images: [
        "/safety/safe4.webp",
        "/safety/safe4.webp",
        "/safety/safe4.webp",
      ],
    },
    {
      id: 4,
      title: "Marine Deck Equipment",
      icon: CheckCircle,
      image: "/safety/safe5.webp",
      shortDescription:
        "Samudhra Marine provides a variety of marine deck equipment supply and...",
      fullDescription:
        "Samudhra Marine provides a variety of marine deck equipment supply and services including inspection, maintenance, and certification of all deck machinery and safety equipment to ensure safe vessel operations.",
      features: [
        "Deck equipment supply and installation",
        "Mooring equipment maintenance",
        "Cargo gear inspection and testing",
        "Access equipment servicing",
        "Operational safety checks and certification",
      ],
      images: [
        "/safety/safe5.webp",
        "/safety/safe5.webp",
        "/safety/safe5.webp",
      ],
    },
    {
      id: 5,
      title: "Exchange / rental services",
      icon: Settings,
      image: "/safety/safe9.webp",
      shortDescription:
        "Our esteemed clients can rent or trade vital marine safety supplies like life..",
      fullDescription:
        "Our esteemed clients can rent or trade vital marine safety supplies like life rafts, breathing apparatus, fire extinguishers, and other safety equipment through our flexible exchange and rental programs.",
      features: [
        "Life raft exchange programs",
        "Safety equipment rental services",
        "Cost-effective equipment solutions",
        "Flexible rental terms",
        "Quick equipment replacement services",
      ],
      images: [
        "/safety/safe9.webp",
        "/safety/safe9.webp",
        "/safety/safe9.webp",
      ],
    },
    {
      id: 6,
      title: "New Installation and Modification",
      icon: Shield,
      image: "/safety/safe3.webp",
      shortDescription:
        "With the assistance of renowned manufacturers and developers and the..",
      fullDescription:
        "With the assistance of renowned manufacturers and developers and the latest technology, we provide expert new installation and modification services for marine safety systems and equipment.",
      features: [
        "Safety system design and installation",
        "Equipment modification and upgrades",
        "System integration and testing",
        "Project management and supervision",
        "Certification and commissioning",
      ],
      images: [
        "/safety/safe3.webp",
        "/safety/safe3.webp",
        "/safety/safe3.webp",
      ],
    },
    {
      id: 7,
      title: "Instrumentation & Calibration",
      icon: Users,
      image: "/safety/safe1.webp",
      shortDescription:
        "Samudhra Marine provides instrumentation and calibration services in the UAE onboard..",
      fullDescription:
        "Samudhra Marine provides instrumentation and calibration services in the UAE onboard vessels for all types of marine navigation and safety equipment to ensure accuracy and compliance with international standards.",
      features: [
        "Navigation instrument calibration",
        "Safety equipment testing and certification",
        "Gas detector calibration",
        "Pressure gauge certification",
        "Onboard calibration services",
      ],
      images: [
        "/safety/safe1.webp",
        "/safety/safe1.webp",
        "/safety/safe1.webp",
      ],
    },
    {
      id: 8,
      title: "Fire Fighting Equipment",
      icon: AlertTriangle,
      image: "/safety/safe6.webp",
      shortDescription:
        "We at Samudhra marine conduct a thorough inspection of each unit to ensure..",
      fullDescription:
        "We at Samudhra marine conduct a thorough inspection of each unit to ensure optimal performance and compliance with fire safety regulations for all types of marine fire fighting equipment.",
      features: [
        "Fire extinguisher inspection and servicing",
        "Fire detection system maintenance",
        "Fire pump and hydrant testing",
        "Fixed fire suppression systems",
        "Fire safety compliance certification",
      ],
      images: [
        "/safety/safe6.webp",
        "/safety/safe6.webp",
        "/safety/safe6.webp",
      ],
    },
    {
      id: 9,
      title: "Life saving Equipment",
      icon: CheckCircle,
      image: "/safety/safe7.webp",
      shortDescription:
        "We at Samudhra Marine provide our clients with quality servicing of marine..",
      fullDescription:
        "We at Samudhra Marine provide our clients with quality servicing of marine life saving equipment including life jackets, immersion suits, lifebuoys, and other essential safety appliances.",
      features: [
        "Life jacket inspection and maintenance",
        "Immersion suit servicing",
        "Lifebuoy and rescue equipment testing",
        "Emergency equipment readiness checks",
        "SOLAS compliance certification",
      ],
      images: [
        "/safety/safe7.webp",
        "/safety/safe7.webp",
        "/safety/safe7.webp",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Safety Services | Ocean Infinity</title>
        <meta
          name="description"
          content="Professional maritime safety equipment services including life rafts, lifeboats, breathing apparatus, deck equipment, fire fighting equipment, and life saving appliances."
        />
        <meta
          name="keywords"
          content="maritime safety equipment, life rafts, lifeboats, davits, breathing apparatus, SCBA, marine deck equipment, fire fighting equipment, life saving equipment, calibration services"
        />
        <meta property="og:title" content="Safety Services | Ocean Infinity" />
        <meta
          property="og:description"
          content="Comprehensive maritime safety equipment services by Ocean Infinity including life rafts, lifeboats, breathing apparatus, and fire fighting equipment."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://oceaninfinity.com/safety-services"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Safety Services | Ocean Infinity" />
        <meta
          name="twitter:description"
          content="Professional maritime safety equipment services including life rafts, lifeboats, breathing apparatus, and life saving appliances."
        />
      </Helmet>

      <div className="services-page">
        {/* Page Hero */}
        <PageHero
          title="Safety Services"
          subtitle="Comprehensive Maritime Safety Equipment Solutions"
          description="At Ocean Infinity, we provide comprehensive safety equipment services including life rafts, lifeboats, breathing apparatus, fire fighting equipment, and life saving appliances to ensure the highest standards of maritime safety and regulatory compliance."
          backgroundImage="/knot and sail images/Asset 39.webp"
        />

        {/* Safety Services Section */}
        <section className="services-section-professional">
          <div className="container">
            <div className="services-header">
              <h2 className="services-title">
                Maritime Safety Equipment Services
              </h2>
              <p className="services-subtitle">
                Professional safety equipment solutions for maritime operations
              </p>
            </div>

            <div className="template-card-grid">
              {safetyServicesData.map((service) => (
                <div key={service.id} className="service-card-template">
                  <div className="service-card-image-container">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-card-image"
                    />
                  </div>
                  <h3 className="service-card-title-large">{service.title}</h3>
                  <div className="template-card-content">
                    <p>{service.shortDescription}</p>
                  </div>
                  <button
                    className="service-card-see-more"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More
                    <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Detail Modal */}
        {selectedService && (
          <div
            className="service-detail-modal-overlay"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="service-detail-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="service-detail-header">
                <div className="service-detail-icon">
                  <selectedService.icon size={32} />
                </div>
                <h2 className="service-detail-title">
                  {selectedService.title}
                </h2>
                <button
                  className="service-detail-close"
                  onClick={() => setSelectedService(null)}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="service-detail-content">
                <div className="service-detail-images">
                  {selectedService.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedService.title} ${index + 1}`}
                      className="service-detail-image"
                    />
                  ))}
                </div>

                <div className="service-detail-info">
                  <p className="service-detail-description">
                    {selectedService.fullDescription}
                  </p>

                  <div className="service-detail-features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedService.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-detail-actions">
                    <a
                      href="https://wa.me/971123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Contact on WhatsApp
                    </a>
                    <a href="/contact" className="btn btn-primary">
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SafetyServices;
