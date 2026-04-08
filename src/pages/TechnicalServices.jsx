/**
 * Ocean Infinity - Technical Services Page
 *
 * Comprehensive technical services including engineering support,
 * maintenance, and technical consulting
 */

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import { Settings, Wrench, Cpu, Zap, ChevronRight, X } from "lucide-react";
import "../styles/pages/Services.css";

const TechnicalServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const technicalServicesData = [
    {
      id: 1,
      title: "Fabrication Service",
      icon: Settings,
      image: "/knot and sail images/Asset 33.webp",
      shortDescription:
        "We undertake all repairs of Hull and inside tanks and Fabrication/ installation of outfitting...",
      fullDescription:
        "We undertake all repairs of Hull and inside tanks and Fabrication/ installation of outfitting for marine vessels and offshore structures. Our comprehensive fabrication services include structural repairs, tank renovations, and complete outfitting installations.",
      features: [
        "Hull repairs and maintenance",
        "Inside tank fabrication",
        "Outfitting installation",
        "Structural steel fabrication",
        "Marine welding services",
      ],
      images: [
        "/knot and sail images/Asset 33.webp",
        "/knot and sail images/Asset 34.webp",
        "/knot and sail images/Asset 35.webp",
      ],
    },
    {
      id: 2,
      title: "Mechanical Services",
      icon: Wrench,
      image: "/knot and sail images/Asset 37.webp",
      shortDescription:
        "With dedicated skilled Technicians stationed in India, the Middle East.",
      fullDescription:
        "With dedicated skilled Technicians stationed in India, the Middle East, we provide comprehensive mechanical services for marine vessels and industrial equipment. Our expert team ensures reliable maintenance and repair solutions.",
      features: [
        "Skilled technicians in multiple locations",
        "Marine mechanical maintenance",
        "Engine repair services",
        "Machinery overhauls",
        "Preventive maintenance programs",
      ],
      images: [
        "/knot and sail images/Asset 37.webp",
        "/knot and sail images/Asset 38.webp",
        "/knot and sail images/Asset 39.webp",
      ],
    },
    {
      id: 3,
      title: "Electrical Service",
      icon: Zap,
      image: "/knot and sail images/Asset 40.webp",
      shortDescription:
        "Samudhra provides electrical on-board equipment services as a component of the..",
      fullDescription:
        "Samudhra provides electrical on-board equipment services as a component of the comprehensive marine solutions. Our electrical services cover all aspects of vessel electrical systems and equipment maintenance.",
      features: [
        "On-board electrical equipment services",
        "Marine electrical system maintenance",
        "Control panel services",
        "Electrical troubleshooting",
        "System upgrades and installations",
      ],
      images: [
        "/knot and sail images/Asset 40.webp",
        "/knot and sail images/Asset 41.webp",
        "/knot and sail images/Asset 42.webp",
      ],
    },
    {
      id: 4,
      title: "Blasting and painting",
      icon: Cpu,
      image: "/knot and sail images/Asset 43.webp",
      shortDescription:
        "We Provide hydro blasting and painting services for Ocean Going to Offshore Support Services.",
      fullDescription:
        "We Provide hydro blasting and painting services for Ocean Going to Offshore Support Services. Our surface preparation and coating services ensure optimal protection and appearance for all types of marine vessels.",
      features: [
        "Hydro blasting services",
        "Marine painting applications",
        "Surface preparation",
        "Offshore support services",
        "Corrosion protection solutions",
      ],
      images: [
        "/knot and sail images/Asset 43.webp",
        "/knot and sail images/Asset 44.webp",
        "/knot and sail images/Asset 45.webp",
      ],
    },
    {
      id: 5,
      title: "Tank Cleaning",
      icon: Settings,
      image: "/knot and sail images/Asset 50.webp",
      shortDescription:
        "We offer tank cleaning services for offshore/ onshore and, industrial sectors.",
      fullDescription:
        "We offer tank cleaning services for offshore, onshore, and industrial sectors. Our specialized tank cleaning procedures ensure thorough cleaning and safety compliance for all types of storage and cargo tanks.",
      features: [
        "Offshore tank cleaning",
        "Onshore industrial tank services",
        "Gas-freeing procedures",
        "Advanced cleaning techniques",
        "Safety certification and compliance",
      ],
      images: [
        "/knot and sail images/Asset 50.webp",
        "/knot and sail images/Asset 51.webp",
        "/knot and sail images/Asset 59.webp",
      ],
    },
    {
      id: 6,
      title: "Refrigeration & Air Condition",
      icon: Wrench,
      image: "/knot and sail images/Asset 33.webp",
      shortDescription:
        "We have a strong in-house team with qualified technicians carrying out HVAC jobs...",
      fullDescription:
        "We have a strong in-house team with qualified technicians carrying out HVAC jobs for marine vessels and industrial facilities. Our refrigeration and air conditioning services ensure optimal climate control systems.",
      features: [
        "Qualified HVAC technicians",
        "Refrigeration system maintenance",
        "Marine air conditioning",
        "Cooling system repairs",
        "In-house technical team",
      ],
      images: [
        "/knot and sail images/Asset 33.webp",
        "/knot and sail images/Asset 34.webp",
        "/knot and sail images/Asset 35.webp",
      ],
    },
    {
      id: 7,
      title: "Hydraulic Services",
      icon: Zap,
      image: "/knot and sail images/Asset 37.webp",
      shortDescription:
        "Our team of Engineers and Hydraulic Technicians work with our clients offering..",
      fullDescription:
        "Our team of Engineers and Hydraulic Technicians work with our clients offering comprehensive hydraulic solutions for marine and industrial applications. We provide complete hydraulic system services from design to maintenance.",
      features: [
        "Expert hydraulic engineers",
        "Hydraulic system design",
        "Technician-led services",
        "System maintenance and repair",
        "Client-focused solutions",
      ],
      images: [
        "/knot and sail images/Asset 37.webp",
        "/knot and sail images/Asset 38.webp",
        "/knot and sail images/Asset 39.webp",
      ],
    },
    {
      id: 8,
      title: "Automation Services",
      icon: Cpu,
      image: "/knot and sail images/Asset 40.webp",
      shortDescription:
        "Our Automation division provides solutions for comprehensive repair and maintenance...",
      fullDescription:
        "Our Automation division provides solutions for comprehensive repair and maintenance of automated systems in marine and industrial environments. We specialize in control systems and automation technologies.",
      features: [
        "Automated system repair",
        "Control system maintenance",
        "PLC programming services",
        "SCADA system solutions",
        "Industrial automation expertise",
      ],
      images: [
        "/knot and sail images/Asset 40.webp",
        "/knot and sail images/Asset 41.webp",
        "/knot and sail images/Asset 42.webp",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Technical Services | Ocean Infinity</title>
        <meta
          name="description"
          content="Professional maritime technical services including blasting and painting, tank cleaning, refrigeration and air conditioning, hydraulic services, and automation services."
        />
        <meta
          name="keywords"
          content="maritime technical services, blasting painting, tank cleaning, HVAC services, hydraulic services, automation services, marine engineering, offshore services"
        />
        <meta
          property="og:title"
          content="Technical Services | Ocean Infinity"
        />
        <meta
          property="og:description"
          content="Comprehensive maritime technical services by Ocean Infinity including blasting, painting, tank cleaning, HVAC, hydraulic, and automation services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://oceaninfinity.com/technical-services"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Technical Services | Ocean Infinity"
        />
        <meta
          name="twitter:description"
          content="Professional maritime technical services including blasting and painting, tank cleaning, HVAC, hydraulic, and automation services."
        />
      </Helmet>

      <div className="services-page">
        {/* Page Hero */}
        <PageHero
          title="Technical Services"
          subtitle="Advanced Maritime Technical Solutions"
          description="At Ocean Infinity, we deliver comprehensive technical services including blasting and painting, tank cleaning, refrigeration and air conditioning, hydraulic services, and automation services to ensure optimal vessel performance and reliability."
          backgroundImage="/knot and sail images/Asset 40.webp"
        />

        {/* Technical Services Section */}
        <section className="services-section-professional">
          <div className="container">
            <div className="services-header">
              <h2 className="services-title">Maritime Technical Services</h2>
              <p className="services-subtitle">
                Professional technical solutions for offshore and marine
                operations
              </p>
            </div>

            <div className="template-card-grid">
              {technicalServicesData.map((service) => (
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
                    technical services
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

export default TechnicalServices;
