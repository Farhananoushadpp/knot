/**
 * ASP Global Marine Trading LLC - Authorization & Associated Partners Page
 *
 * Shows 6 partner cards with short information and Learn More buttons
 * linking to individual partner detail pages
 */

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import "../styles/pages/Authorization.css";

const Authorization = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Authorized Manufacturing Partners | ASP Global Marine";
  }, []);

  // Partner data - 6 cards with short information
  const partners = [
    {
      id: "guangzhou-hg-marine",
      name: "Guangzhou HG Marine Co., Ltd.",
      location: "Guangzhou, China",
      founded: "1998",
      logo: "/Authorisation/Guangzhou/logo.webp",
      category: "Marine Pumps & Equipment",
      shortDescription:
        "Leading manufacturer of marine pumps, valves, and shipboard equipment for global shipping industry.",
      specialties: [
        "Marine Pumps",
        "Hydraulic Systems",
        "Ship Valves",
        "Deck Machinery",
      ],
      features: [
        "ISO 9001 Certified",
        "Class Approved Products",
        "Global Distribution Network",
        "24/7 Technical Support",
      ],
      link: "/guangzhou-hg-marine",
    },
    {
      id: "hg-machinery-group",
      name: "HG Machinery Group",
      location: "Shanghai, China",
      founded: "2005",
      logo: "/Authorisation/Hg/logo.webp",
      category: "Marine Engines & Spares",
      shortDescription:
        "Premier supplier of marine engine components, turbochargers, and auxiliary machinery for vessels worldwide.",
      specialties: [
        "Engine Spares",
        "Turbochargers",
        "Fuel Systems",
        "Cooling Systems",
      ],
      features: [
        "OEM Quality Parts",
        "Engine Overhaul Services",
        "Technical Documentation",
        "Spare Parts Inventory",
      ],
      link: "/hg-machinery-group",
    },
    {
      id: "zhejiang-kintowe",
      name: "Zhejiang Kintowe Sealing Technology Co.",
      location: "Ningbo, China",
      founded: "2003",
      logo: "/Authorisation/Kintowe/logo.webp",
      category: "Sealing Solutions",
      shortDescription:
        "Specialized in high-performance sealing solutions including mechanical seals, gland packing, and O-rings for marine applications.",
      specialties: [
        "Mechanical Seals",
        "Gland Packing",
        "O-Rings",
        "Gasket Materials",
      ],
      features: [
        "Marine-Grade Materials",
        "Custom Seal Design",
        "Pressure Rated Products",
        "Corrosion Resistant",
      ],
      link: "/zhejiang-kintowe",
    },
    {
      id: "zhejiang-huayi",
      name: "Zhejiang Huayi Ship Equipment Manufacture Co., Ltd.",
      location: "Taizhou, China",
      founded: "1995",
      logo: "/Authorisation/Zhejiang/logo.webp",
      category: "Ship Equipment",
      shortDescription:
        "Comprehensive manufacturer of marine deck equipment, safety systems, and navigation instruments.",
      specialties: [
        "Deck Equipment",
        "Safety Systems",
        "Navigation",
        "Communication",
      ],
      features: [
        "SOLAS Compliant",
        "IMO Approved",
        "RINA Certified",
        "Custom Solutions",
      ],
      link: "/zhejiang-huayi",
    },
    {
      id: "beijing-zhonghanghua",
      name: "Beijing Zhonghanghua Safety Valve Sales Co., Ltd.",
      location: "Beijing, China",
      founded: "2002",
      logo: "/Authorisation/Beijing/logo.svg",
      category: "Safety Valves",
      shortDescription:
        "Expert manufacturer of marine safety valves, pressure relief systems, and industrial valve solutions.",
      specialties: [
        "Safety Valves",
        "Relief Valves",
        "Control Valves",
        "Pressure Gauges",
      ],
      features: [
        "Pressure Tested",
        "Marine Certification",
        "Precision Engineering",
        "Safety Compliant",
      ],
      link: "/beijing-zhonghanghua",
    },
    {
      id: "changzhou-qianmai",
      name: "Changzhou Qianmai Mechanical Eqpt. Tech. Co., Ltd.",
      location: "Changzhou, China",
      founded: "2008",
      logo: "/Authorisation/Changzhou/logo.webp",
      category: "Mechanical Equipment",
      shortDescription:
        "Advanced manufacturer of heat exchangers, HVAC systems, and thermal equipment for marine and industrial use.",
      specialties: [
        "Heat Exchangers",
        "HVAC Systems",
        "Cooling Equipment",
        "Thermal Solutions",
      ],
      features: [
        "High Efficiency",
        "Compact Design",
        "Stainless Steel",
        "Maintenance Support",
      ],
      link: "/changzhou-qianmai",
    },
  ];

  return (
    <div className="authorization-page">
      {/* Hero Section - Using PageHero Component */}
      <PageHero
        title="Trusted Authorizations"
        subtitle="Certified Manufacturing Partners"
        description="Partnering with industry-leading manufacturers who meet the highest international standards for marine equipment quality, safety, and reliability."
        icon={ShieldCheck}
        badges={[
          { icon: CheckCircle, text: "ISO Certified" },
          { icon: CheckCircle, text: "SOLAS Compliant" },
          { icon: CheckCircle, text: "Class Approved" },
        ]}
        backgroundImage="/author.jpg"
      />

      {/* Partners Grid Section */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Manufacturing Partners</h2>
            <p className="section-subtitle">
              Industry-leading manufacturers providing certified marine
              equipment and spare parts
            </p>
          </div>

          <div className="grid-responsive-partners">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-card-3d-wrapper">
                <div className="partner-card-3d">
                  <div className="card-3d-shine"></div>
                  {/* Heading First */}
                  <div className="partner-card-heading">
                    <h3 className="partner-name">{partner.name}</h3>
                  </div>

                  {/* Fitted Image */}
                  <div className="partner-image-container">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="partner-image"
                      onError={(e) => {
                        e.target.src = "/logo.webp";
                      }}
                    />
                  </div>

                  {/* Category */}
                  <div className="partner-category-section">
                    <span className="partner-category">{partner.category}</span>
                    <span className="partner-location">{partner.location}</span>
                  </div>

                  {/* Description */}
                  <div className="partner-description-section">
                    <p className="partner-description">
                      {partner.shortDescription}
                    </p>
                  </div>

                  {/* Go to the Page Link */}
                  <div className="partner-card-footer">
                    <Link to={partner.link} className="go-to-page-btn-3d">
                      Go to the Page
                      <ArrowRight size={16} className="arrow-icon" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Ready to Partner With Us?</h2>
            <p>
              Contact our team to learn more about our authorized products and
              partnership opportunities.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="cta-button primary">
              Contact Us
            </Link>
            <a
              href="https://wa.me/971525478137"
              className="cta-button secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Authorization;
