/**
 * ASP Global Marine Trading LLC - Engine Stores Page
 *
 * Comprehensive engine room supplies and equipment solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";
import { Wrench, CheckCircle, Shield, Truck, Globe } from "lucide-react";
import PageHero from "../components/PageHero.jsx";

const EngineStores = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const engineProducts = [
    {
      id: 1,
      name: "High Temp. Gaskets",
      image: "/products/enginestores/Asset%201.webp",
      category: "High Temp. Gaskets",
      description:
        "Premium heat-resistant seals for exhaust & high-pressure joints",
      whatsappMessage:
        "Hi, I'm interested in High Temp. Gaskets. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about High Temp. Gaskets\n\nDear ASP Global Marine Trading,\n\nI'm interested in High Temp. Gaskets. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 2,
      name: "Pipe Bender",
      image: "/products/enginestores/Asset%202.webp",
      category: "Pipe Bender",
      description:
        "Professional pipe bending tool for precise angle adjustments",
      whatsappMessage:
        "Hi, I'm interested in Pipe Bender. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Pipe Bender\n\nDear ASP Global Marine Trading,\n\nI'm interested in Pipe Bender. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 3,
      name: "Cargo Sling Bag",
      image: "/products/enginestores/Asset%203.webp",
      category: "Cargo Sling Bag",
      description: "Heavy-duty lifting sling for secure cargo operations",
      whatsappMessage:
        "Hi, I'm interested in Cargo Sling Bag. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Cargo Sling Bag\n\nDear ASP Global Marine Trading,\n\nI'm interested in Cargo Sling Bag. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 4,
      name: "Submersible Pumps",
      image: "/products/enginestores/Asset%204.webp",
      category: "Submersible Pumps",
      description:
        "Marine-grade submersible pumps for underwater liquid transfer",
      whatsappMessage:
        "Hi, I'm interested in Submersible Pumps. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Submersible Pumps\n\nDear ASP Global Marine Trading,\n\nI'm interested in Submersible Pumps. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 5,
      name: "Red Silicon",
      image: "/products/enginestores/Asset%205.webp",
      category: "Red Silicon",
      description:
        "High-temperature red silicone sealant for engine applications",
      whatsappMessage:
        "Hi, I'm interested in Red Silicon. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Red Silicon\n\nDear ASP Global Marine Trading,\n\nI'm interested in Red Silicon. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 6,
      name: "Rust Removers",
      image: "/products/enginestores/Asset%206.webp",
      category: "Rust Removers",
      description:
        "Industrial rust removal chemicals for metal surface treatment",
      whatsappMessage:
        "Hi, I'm interested in Rust Removers. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Rust Removers\n\nDear ASP Global Marine Trading,\n\nI'm interested in Rust Removers. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 7,
      name: "Insulation Test Kit",
      image: "/products/enginestores/Asset%207.webp",
      category: "Insulation Test Kit",
      description:
        "Professional megger for electrical insulation resistance testing",
      whatsappMessage:
        "Hi, I'm interested in Insulation Test Kit. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Insulation Test Kit\n\nDear ASP Global Marine Trading,\n\nI'm interested in Insulation Test Kit. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 8,
      name: "Clamp Meter",
      image: "/products/enginestores/Asset%208.webp",
      category: "Clamp Meter",
      description: "Digital clamp meter for non-contact current measurement",
      whatsappMessage:
        "Hi, I'm interested in Clamp Meter. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Clamp Meter\n\nDear ASP Global Marine Trading,\n\nI'm interested in Clamp Meter. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 9,
      name: "Gas/Smoke Detectors",
      image: "/products/enginestores/Asset%209.webp",
      category: "Gas/Smoke Detectors",
      description: "Marine gas & smoke detectors for hazardous area safety",
      whatsappMessage:
        "Hi, I'm interested in Gas/Smoke Detectors. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Gas/Smoke Detectors\n\nDear ASP Global Marine Trading,\n\nI'm interested in Gas/Smoke Detectors. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 10,
      name: "Magnetic Drilling Machine",
      image: "/products/enginestores/Asset%2010.webp",
      category: "Drilling Machine",
      description: "Portable magnetic drill for steel surface drilling",
      whatsappMessage:
        "Hi, I'm interested in Magnetic Drilling Machine. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Magnetic Drilling Machine\n\nDear ASP Global Marine Trading,\n\nI'm interested in Magnetic Drilling Machine. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 11,
      name: "Adhesives",
      image: "/products/enginestores/Asset%2011.webp",
      category: "Adhesives",
      description:
        "Industrial adhesives for sealing, repairing & joining materials",
      whatsappMessage:
        "Hi, I'm interested in Adhesives. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Adhesives\n\nDear ASP Global Marine Trading,\n\nI'm interested in Adhesives. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 12,
      name: "CRC",
      image: "/products/enginestores/Asset%2012.webp",
      category: "CRC",
      description:
        "Multi-purpose lubricant spray with corrosion inhibitor properties",
      whatsappMessage:
        "Hi, I'm interested in CRC. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about CRC\n\nDear ASP Global Marine Trading,\n\nI'm interested in CRC. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 13,
      name: "Explosion Proof Hand Lamp",
      image: "/products/enginestores/Asset%2013.webp",
      category: "Explossion Proof Hand Lamp",
      description:
        "Intrinsically safe portable lamp for hazardous area lighting",
      whatsappMessage:
        "Hi, I'm interested in Explossion Proof Hand Lamp. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Explossion Proof Hand Lamp\n\nDear ASP Global Marine Trading,\n\nI'm interested in Explossion Proof Hand Lamp. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 14,
      name: "Bearing Puller",
      image: "/products/enginestores/Asset%2014.webp",
      category: "Bearing Puller",
      description: "Professional bearing puller for shaft & housing removal",
      whatsappMessage:
        "Hi, I'm interested in Bearing Puller. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Bearing Puller\n\nDear ASP Global Marine Trading,\n\nI'm interested in Bearing Puller. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 15,
      name: "Emery Tape",
      image: "/products/enginestores/Asset%2015.webp",
      category: "Emery Tape",
      description: "Premium emery cloth for metal cleaning & polishing",
      whatsappMessage:
        "Hi, I'm interested in Emery Tape. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Emery Tape\n\nDear ASP Global Marine Trading,\n\nI'm interested in Emery Tape. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 16,
      name: "Diaphragm Pump",
      image: "/products/enginestores/Asset%2016.webp",
      category: "Diaphragm Pump",
      description: "Chemical-resistant diaphragm pump for fluid transfer",
      whatsappMessage:
        "Hi, I'm interested in Diaphragm Pump. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Diaphragm Pump\n\nDear ASP Global Marine Trading,\n\nI'm interested in Diaphragm Pump. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 17,
      name: "Mechanical Seal",
      image: "/products/enginestores/Asset%2017.webp",
      category: "Mechanical Seal",
      description:
        "High-performance mechanical seal for pumps & rotating equipment",
      whatsappMessage:
        "Hi, I'm interested in Mechanical Seal. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Mechanical Seal\n\nDear ASP Global Marine Trading,\n\nI'm interested in Mechanical Seal. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 18,
      name: "O Rings",
      image: "/products/enginestores/Asset%2018.webp",
      category: "O Rings",
      description: "Precision rubber O-rings for leak-proof joint sealing",
      whatsappMessage:
        "Hi, I'm interested in O Rings. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about O Rings\n\nDear ASP Global Marine Trading,\n\nI'm interested in O Rings. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 19,
      name: "Gland Packing",
      image: "/products/enginestores/Asset%2019.webp",
      category: "Gland Packing",
      description: "Durable gland packing for pump & valve shaft sealing",
      whatsappMessage:
        "Hi, I'm interested in Gland Packing. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Gland Packing\n\nDear ASP Global Marine Trading,\n\nI'm interested in Gland Packing. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 20,
      name: "Chain Block",
      image: "/products/enginestores/Asset%2020.webp",
      category: "Chain Block",
      description: "Heavy-duty chain block for industrial lifting operations",
      whatsappMessage:
        "Hi, I'm interested in Chain Block. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Chain Block\n\nDear ASP Global Marine Trading,\n\nI'm interested in Chain Block. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 21,
      name: "Vacuum Pump",
      image: "/products/enginestores/Asset%2021.webp",
      category: "Vacuum Pump",
      description:
        "High-efficiency vacuum pump for system evacuation & air removal",
      whatsappMessage:
        "Hi, I'm interested in Vacuum Pump. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Vacuum Pump\n\nDear ASP Global Marine Trading,\n\nI'm interested in Vacuum Pump. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 22,
      name: "RHIB-Boat Repair Kit",
      image: "/products/enginestores/Asset%2022.webp",
      category: "RHIB-Boat Repair Kit",
      description:
        "Complete RHIB boat puncture repair kit for emergency maintenance",
      whatsappMessage:
        "Hi, I'm interested in RHIB-Boat Repair Kit. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about RHIB-Boat Repair Kit\n\nDear ASP Global Marine Trading,\n\nI'm interested in RHIB-Boat Repair Kit. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 23,
      name: "Bearings",
      image: "/products/enginestores/Asset%2023.webp",
      category: "Bearings",
      description:
        "High-precision bearings for rotating shafts & friction reduction",
      whatsappMessage:
        "Hi, I'm interested in Bearings. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Bearings\n\nDear ASP Global Marine Trading,\n\nI'm interested in Bearings. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 24,
      name: "A/C Split & Tower",
      image: "/products/enginestores/Asset%2024.webp",
      category: "A/C Split & Tower",
      description: "Marine AC split & tower units for accommodation cooling",
      whatsappMessage:
        "Hi, I'm interested in A/C Split & Tower. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about A/C Split & Tower\n\nDear ASP Global Marine Trading,\n\nI'm interested in A/C Split & Tower. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 25,
      name: "Water Filters",
      image: "/products/enginestores/Asset%2025.webp",
      category: "Water Filters",
      description:
        "Advanced water filters for cooling & feed water purification",
      whatsappMessage:
        "Hi, I'm interested in Water Filters. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Water Filters\n\nDear ASP Global Marine Trading,\n\nI'm interested in Water Filters. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 26,
      name: "Switches",
      image: "/products/enginestores/Asset%2026.webp",
      category: "Switches",
      description:
        "Marine-grade electrical switches for circuit control applications",
      whatsappMessage:
        "Hi, I'm interested in Switches. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Switches\n\nDear ASP Global Marine Trading,\n\nI'm interested in Switches. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 27,
      name: "Thermo Meters",
      image: "/products/enginestores/Asset%2027.webp",
      category: "Thermo Meters",
      description:
        "Precision thermometers for temperature monitoring & control",
      whatsappMessage:
        "Hi, I'm interested in Thermo Meters. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Thermo Meters\n\nDear ASP Global Marine Trading,\n\nI'm interested in Thermo Meters. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 28,
      name: "Coolants",
      image: "/products/enginestores/Asset%2028.webp",
      category: "Coolants",
      description:
        "Marine engine coolants for optimal heat transfer performance",
      whatsappMessage:
        "Hi, I'm interested in Coolants. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Coolants\n\nDear ASP Global Marine Trading,\n\nI'm interested in Coolants. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 29,
      name: "Battery/Charger",
      image: "/products/enginestores/Asset%2029.webp",
      category: "Battery/Charger",
      description:
        "Marine batteries & chargers for emergency & starting systems",
      whatsappMessage:
        "Hi, I'm interested in Battery/Charger. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Battery/Charger\n\nDear ASP Global Marine Trading,\n\nI'm interested in Battery/Charger. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 30,
      name: "Transformers",
      image: "/products/enginestores/Asset%2030.webp",
      category: "Transformers",
      description: "Electrical transformers for voltage conversion & isolation",
      whatsappMessage:
        "Hi, I'm interested in Transformers. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Transformers\n\nDear ASP Global Marine Trading,\n\nI'm interested in Transformers. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 31,
      name: "Flood / Tube Lights",
      image: "/products/enginestores/Asset%2031.webp",
      category: "Flood / Tube Lights",
      description: "Marine flood & tube lights for engine room illumination",
      whatsappMessage:
        "Hi, I'm interested in Flood / Tube Lights. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Flood / Tube Lights\n\nDear ASP Global Marine Trading,\n\nI'm interested in Flood / Tube Lights. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 32,
      name: "Junction Box",
      image: "/products/enginestores/Asset%2032.webp",
      category: "Junction Box",
      description: "Electrical junction box for wire connection & protection",
      whatsappMessage:
        "Hi, I'm interested in Junction Box. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Junction Box\n\nDear ASP Global Marine Trading,\n\nI'm interested in Junction Box. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 33,
      name: "Carbon Brushes",
      image: "/products/enginestores/NeEeih.webp",
      category: "Carbon Brushes",
      description: "Carbon brushes for electric motor commutator contact",
      whatsappMessage:
        "Hi, I'm interested in Carbon Brushes. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Carbon Brushes\n\nDear ASP Global Marine Trading,\n\nI'm interested in Carbon Brushes. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 34,
      name: "Relays",
      image: "/products/enginestores/Asset%2034.webp",
      category: "Relays",
      description: "Electromagnetic relays for control circuit automation",
      whatsappMessage:
        "Hi, I'm interested in Relays. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Relays\n\nDear ASP Global Marine Trading,\n\nI'm interested in Relays. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 35,
      name: "Blower",
      image: "/products/enginestores/Asset%2035.webp",
      category: "Blower",
      description: "Industrial blower for engine space ventilation & cooling",
      whatsappMessage:
        "Hi, I'm interested in Blower. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Blower\n\nDear ASP Global Marine Trading,\n\nI'm interested in Blower. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 36,
      name: "Engine Log Book",
      image: "/products/enginestores/Asset%2036.webp",
      category: "Log Book",
      description: "Marine engine log book for parameter & maintenance records",
      whatsappMessage:
        "Hi, I'm interested in Engine Log Book. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Engine Log Book\n\nDear ASP Global Marine Trading,\n\nI'm interested in Engine Log Book. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 37,
      name: "Refregerant",
      image: "/products/enginestores/Asset%2037.webp",
      category: "Refregerant",
      description: "Marine refrigerant for AC & refrigeration system cooling",
      whatsappMessage:
        "Hi, I'm interested in Refregerant. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Refregerant\n\nDear ASP Global Marine Trading,\n\nI'm interested in Refregerant. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 38,
      name: "Welding Consumables",
      image: "/products/enginestores/Asset%2038.webp",
      category: "Welding Consumables",
      description: "Professional welding consumables for repair & maintenance",
      whatsappMessage:
        "Hi, I'm interested in Welding Consumables. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Welding Consumables\n\nDear ASP Global Marine Trading,\n\nI'm interested in Welding Consumables. Please provide more information and pricing.\n\nThank you.",
    },
  ];

  const filteredProducts = engineProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Group products into rows of 4
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const productRows = chunkArray(filteredProducts, 4);

  return (
    <div className="product-page">
      <div className="container" style={{ paddingTop: "40px" }}>
        {/* Page Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">ENGINE STORES</h1>
        </div>
      </div>
      <div className="container">
        {/* Product Grid Layout - 5 Products Per Row */}
        <section className="product-grid-layout-six section-spacing-top section-spacing-bottom">
          <div className="grid-responsive-5">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card-3d-wrapper">
                <div className="product-card-six product-card-3d">
                  <div className="card-3d-shine"></div>
                  <div className="product-image-six">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info-six">
                    <h3 className="product-name-six">{product.name}</h3>
                    <p className="product-category-six">{product.category}</p>
                    <p className="product-description-six">
                      {product.description}
                    </p>
                    <div className="product-actions-six">
                      <a
                        href={`https://wa.me/971525478137?text=${encodeURIComponent(
                          product.whatsappMessage,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn"
                        title="Contact on WhatsApp"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </a>
                      <a
                        href={`mailto:info@aspglobalmarine.com?subject=${encodeURIComponent(
                          product.emailMessage
                            ? product.emailMessage
                                .split("\n")[0]
                                .replace("Subject: ", "")
                            : "Inquiry about " + product.name,
                        )}&body=${encodeURIComponent(
                          product.emailMessage
                            ? product.emailMessage
                                .split("\n")
                                .slice(2)
                                .join("\n")
                                .trim()
                            : "Dear ASP Global Marine Trading,\n\nI'm interested in " +
                                product.name +
                                ". Please provide more information and pricing.\n\nThank you.",
                        )}`}
                        className="email-btn"
                        title="Contact via Email"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EngineStores;
