/**
 * Knot & Sail - Services Page
 *
 * Comprehensive marine services including hydro blasting,
 * tank cleaning, painting works, and technical manpower
 */

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import {
  Ship,
  Droplets,
  Palette,
  Users,
  Settings,
  Shield,
  ChevronRight,
  X,
} from "lucide-react";
import "../styles/pages/Services.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Services data based on Samudhra Marine Engineering offerings
  const servicesData = [
    {
      id: 1,
      title: "Deck Machinery Services",
      icon: Ship,
      image: "/knot and sail images/Asset 33.webp",
      shortDescription:
        "Comprehensive deck machinery services including winches, cranes, and anchoring systems with expert maintenance and repairs.",
      fullDescription:
        "We provide complete deck machinery solutions covering all types of winches, cranes, anchoring systems, and cargo handling equipment. Our services include installation, maintenance, overhaul, and repairs of deck machinery to ensure optimal performance and compliance with maritime standards. With certified technicians and advanced equipment, we deliver reliable solutions across all vessel types.",
      features: [
        "Winch and crane overhaul",
        "Anchor and chain renewal",
        "Cargo gear maintenance",
        "Hydraulic system repairs",
        "Class certification support",
      ],
      images: [
        "/knot and sail images/Asset 33.webp",
        "/knot and sail images/Asset 34.webp",
        "/knot and sail images/Asset 35.webp",
      ],
    },
    {
      id: 2,
      title: "Main & Auxiliary Engine Overhaul",
      icon: Settings,
      image: "/knot and sail images/Asset 37.webp",
      shortDescription:
        "Complete engine overhaul services for main propulsion and auxiliary engines ensuring optimal performance and reliability.",
      fullDescription:
        "Our engine overhaul services cover both main propulsion engines and auxiliary engines, including complete disassembly, inspection, reconditioning, and reassembly. We specialize in 2-stroke and 4-stroke engines, turbochargers, and related components to restore engines to manufacturer specifications and extend their operational life.",
      features: [
        "Complete engine disassembly",
        "Precision reconditioning",
        "Manufacturer specifications",
        "Performance testing",
        "Extended engine life",
      ],
      images: [
        "/knot and sail images/Asset 37.webp",
        "/knot and sail images/Asset 38.webp",
        "/knot and sail images/Asset 39.webp",
      ],
    },
    {
      id: 3,
      title: "Automation & Control Systems",
      icon: Shield,
      image: "/knot and sail images/Asset 40.webp",
      shortDescription:
        "Advanced automation and control system services including PLC, SCADA, and marine electronics for vessel modernization.",
      fullDescription:
        "We specialize in automation and control systems for modern vessels, including PLC programming, SCADA systems, bridge electronics, and control panel manufacturing. Our services cover installation, troubleshooting, maintenance, and upgrades of automated systems to enhance operational efficiency and safety.",
      features: [
        "PLC and SCADA systems",
        "Bridge electronics",
        "Control panel manufacturing",
        "System integration",
        "24/7 technical support",
      ],
      images: [
        "/knot and sail images/Asset 40.webp",
        "/knot and sail images/Asset 41.webp",
        "/knot and sail images/Asset 42.webp",
      ],
    },
    {
      id: 4,
      title: "Ship Repair & Maintenance",
      icon: Ship,
      image: "/knot and sail images/Asset 43.webp",
      shortDescription:
        "Comprehensive ship repair and maintenance services including hull repairs, piping systems, and structural works.",
      fullDescription:
        "Our ship repair services cover everything from minor maintenance to major repairs and conversions. We handle hull repairs, steel fabrication, pipe welding, mechanical repairs, and electrical works. With class-approved procedures and certified welders, we ensure all repairs meet international maritime standards.",
      features: [
        "Hull and structural repairs",
        "Pipe welding and fabrication",
        "Mechanical and electrical works",
        "Class-approved procedures",
        "Emergency repair services",
      ],
      images: [
        "/knot and sail images/Asset 43.webp",
        "/knot and sail images/Asset 44.webp",
        "/knot and sail images/Asset 45.webp",
      ],
    },
    {
      id: 5,
      title: "Logistics & Agency Services",
      icon: Users,
      image: "/knot and sail images/Asset 50.webp",
      shortDescription:
        "Complete logistics and ship agency services including port coordination, customs clearance, and supply chain management.",
      fullDescription:
        "We provide comprehensive logistics and ship agency services to ensure smooth vessel operations. Our services include port coordination, customs clearance, crew changes, spares delivery, and supply chain management. With extensive port network and experienced staff, we handle all operational requirements efficiently.",
      features: [
        "Port agency services",
        "Customs clearance",
        "Crew change management",
        "Spares and provisions",
        "Supply chain solutions",
      ],
      images: [
        "/knot and sail images/Asset 50.webp",
        "/knot and sail images/Asset 51.webp",
        "/knot and sail images/Asset 59.webp",
      ],
    },
    {
      id: 6,
      title: "Workshop Services",
      icon: Settings,
      image: "/knot and sail images/Bh8OVy.webp",
      shortDescription:
        "Fully equipped workshop services for component reconditioning, fabrication, and precision engineering works.",
      fullDescription:
        "Our modern workshop facilities provide comprehensive reconditioning and fabrication services. We handle component machining, shaft reconditioning, pump overhauls, valve servicing, and custom fabrication. With precision equipment and skilled technicians, we deliver high-quality workmanship for all marine components.",
      features: [
        "Component reconditioning",
        "Precision machining",
        "Pump and valve overhauls",
        "Custom fabrication",
        "Quality assurance testing",
      ],
      images: [
        "/knot and sail images/Bh8OVy.webp",
        "/knot and sail images/F0F5Nv.webp",
        "/knot and sail images/cU5Gqw.webp",
      ],
    },
    {
      id: 7,
      title: "Hydraulic Systems",
      icon: Droplets,
      image: "/knot and sail images/Asset 52.webp",
      shortDescription:
        "Specialized hydraulic system services including design, installation, maintenance, and overhaul of marine hydraulic equipment.",
      fullDescription:
        "We provide comprehensive hydraulic system solutions for marine applications. Our services include hydraulic system design, installation, maintenance, and overhaul of deck machinery, steering systems, and hydraulic pumps. With specialized equipment and experienced technicians, we ensure optimal hydraulic performance.",
      features: [
        "Hydraulic system design",
        "Installation and commissioning",
        "Preventive maintenance",
        "System overhauls",
        "Troubleshooting and repair",
      ],
      images: [
        "/knot and sail images/Asset 52.webp",
        "/knot and sail images/Asset 53.webp",
        "/knot and sail images/ekc1je.webp",
      ],
    },
    {
      id: 8,
      title: "Turbocharger Services",
      icon: Palette,
      image: "/knot and sail images/fNVNPj.webp",
      shortDescription:
        "Complete turbocharger services including overhaul, repair, and balancing for marine and industrial applications.",
      fullDescription:
        "Our turbocharger services cover complete overhaul, repair, and precision balancing of marine and industrial turbochargers. We handle all major brands and models, providing rotor balancing, nozzle ring replacement, bearing upgrades, and performance testing to restore optimal turbocharger efficiency.",
      features: [
        "Complete turbocharger overhaul",
        "Precision balancing",
        "Rotor and nozzle repairs",
        "Performance testing",
        "All major brands supported",
      ],
      images: [
        "/knot and sail images/fNVNPj.webp",
        "/knot and sail images/gSQA4n.webp",
        "/knot and sail images/iV1ZQg.webp",
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <title>Marine Engineering Services | Ocean Infinity</title>
        <meta
          name="description"
          content="Professional marine engineering services including deck machinery, engine overhaul, automation systems, ship repair, logistics, workshop services, hydraulic systems, and turbocharger services."
        />
        <meta
          name="keywords"
          content="marine engineering services, deck machinery, engine overhaul, automation systems, ship repair, marine logistics, workshop services, hydraulic systems, turbocharger services"
        />
        <meta
          property="og:title"
          content="Marine Engineering Services | Ocean Infinity"
        />
        <meta
          property="og:description"
          content="Comprehensive marine engineering services by Ocean Infinity including deck machinery, engine overhaul, automation systems, ship repair, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oceaninfinity.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Marine Engineering Services | Ocean Infinity"
        />
        <meta
          name="twitter:description"
          content="Professional marine engineering services including deck machinery, engine overhaul, automation systems, and more by Ocean Infinity."
        />
      </Helmet>

      <div className="services-page">
        {/* Page Hero */}
        <PageHero
          title="Marine Engineering Services"
          subtitle="Comprehensive Marine Engineering Solutions"
          description="At Ocean Infinity, we deliver a full spectrum of marine engineering services tailored to the needs of ship owners and ship management companies, specializing in deck machinery, engine overhaul, automation systems, and comprehensive ship repair solutions."
          backgroundImage="/knot and sail images/Asset 33.webp"
        />

        {/* Ocean Infinity Services Section - Professional Design */}
        <section
          className="services-section-professional"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="container">
            <div className="services-header">
              <h2 className="services-title">Marine Engineering Services</h2>
              <p className="services-subtitle">
                Professional marine engineering solutions worldwide
              </p>
            </div>

            <div className="template-card-grid">
              {servicesData.map((service) => (
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
                    See More
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
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.709-.501l-.607-.009c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 2.16 3.998c2.782 2.543 4.596 3.375 5.448 3.726.565.218 1.004.188 1.38-.116.376-.305.996-.996.996-1.611 0-.198-.025-.396-.149-.545z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.195 3.637-3.3c.16-.141-.036-.223-.253-.084l-4.5 2.821-1.937-.606c-.418-.134-.43-.418.087-.619l7.558-2.912c.35-.133.656.088.548.613z" />
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="mailto:info@knotandsail.com"
                      className="btn btn-email"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-10 5L2 7" />
                      </svg>
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <section
          className="services-cta"
          style={{ backgroundColor: "#0c886314" }}
        >
          <div>
            <div className="cta-content text-center">
              <h2 className="cta-title">
                Ready to Experience Our Marine Services?
              </h2>
              <p className="cta-subtitle">
                Contact Knot & Sail today to discuss your marine service needs
                and discover how our expertise can benefit your operations.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">
                  Contact Us
                </a>
                <a href="tel:+971527756765" className="btn btn-secondary">
                  Call +971 52 775 6765
                </a>
                <a href="tel:+971581464580" className="btn btn-secondary">
                  Call +971 58 146 4580
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
