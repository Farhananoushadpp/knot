/**
 * Ocean Infinity - Dry Docking Services Page
 *
 * Comprehensive dry docking services including planning, supervision,
 * and project management for vessel repairs and maintenance
 */

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import { Anchor, Wrench, Shield, Clock, ChevronRight, X } from "lucide-react";
import "../styles/pages/Services.css";

const DryDockingServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const dryDockingServicesData = [
    {
      id: 1,
      title: "Inside Fujairah Port",
      icon: Clock,
      image: "/knot and sail images/Asset 33.webp",
      shortDescription:
        "We offer drydock repair at Fujairah for the repair of smaller boats -max. LOA 40 m and max. weight 200 tons on its designated dry berth area.",
      fullDescription:
        "We offer drydock repair at Fujairah for the repair of smaller boats with maximum LOA 40 m and maximum weight 200 tons on its designated dry berth area. Our Fujairah Port facility provides specialized dry docking services for smaller vessels with expert technical support and efficient repair solutions.",
      features: [
        "Drydock repair for smaller boats",
        "Maximum LOA 40 meters",
        "Maximum weight 200 tons",
        "Designated dry berth area",
        "Expert technical support",
      ],
      images: [
        "/knot and sail images/Asset 33.webp",
        "/knot and sail images/Asset 34.webp",
        "/knot and sail images/Asset 35.webp",
      ],
    },
    {
      id: 2,
      title: "Dubai Maritime City",
      icon: Wrench,
      image: "/knot and sail images/Asset 37.webp",
      shortDescription:
        "We offer vessel docking services in Dubai Maritime City and provide state of art repair facilities and technicians",
      fullDescription:
        "We offer vessel docking services in Dubai Maritime City and provide state-of-the-art repair facilities and technicians for comprehensive vessel maintenance and repair solutions. Our Dubai Maritime City location ensures premium service quality with advanced technical capabilities.",
      features: [
        "Vessel docking services",
        "State-of-the-art repair facilities",
        "Expert technicians",
        "Comprehensive maintenance solutions",
        "Advanced technical capabilities",
      ],
      images: [
        "/knot and sail images/Asset 37.webp",
        "/knot and sail images/Asset 38.webp",
        "/knot and sail images/Asset 39.webp",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dry Docking Services | Ocean Infinity</title>
        <meta
          name="description"
          content="Professional dry docking services at Fujairah Port and Dubai Maritime City with world-class facilities and comprehensive marine support."
        />
        <meta
          name="keywords"
          content="dry docking services, Fujairah Port, Dubai Maritime City, marine services, vessel repairs, ship maintenance, dry dock facilities"
        />
        <meta
          property="og:title"
          content="Dry Docking Services | Ocean Infinity"
        />
        <meta
          property="og:description"
          content="Comprehensive dry docking services by Ocean Infinity at Fujairah Port and Dubai Maritime City with world-class facilities."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://oceaninfinity.com/dry-docking-services"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dry Docking Services | Ocean Infinity"
        />
        <meta
          name="twitter:description"
          content="Professional dry docking services at Fujairah Port and Dubai Maritime City with world-class facilities."
        />
      </Helmet>

      <div className="services-page">
        {/* Page Hero */}
        <PageHero
          title="Dry Docking Services"
          subtitle="Premium Dry Dock Solutions"
          description="At Ocean Infinity, we provide comprehensive dry docking services at Fujairah Port and Dubai Maritime City with world-class facilities, expert technical support, and complete project management for vessel repairs and maintenance."
          backgroundImage="/knot and sail images/Asset 41.webp"
        />

        {/* Dry Docking Services Section */}
        <section className="services-section-professional">
          <div className="container">
            <div className="services-header">
              <h2 className="services-title">Premium Port Dry Dock Services</h2>
              <p className="services-subtitle">
                World-class dry docking solutions at strategic UAE ports
              </p>
            </div>

            <div className="template-card-grid">
              {dryDockingServicesData.map((service) => (
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
                    dry docking services
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

export default DryDockingServices;
