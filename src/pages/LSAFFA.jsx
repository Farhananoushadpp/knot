/**
 * ASP Global Marine Trading LLC - LSA & FFA (Life-Saving & Fire-Fighting Equipment) Page
 *
 * Comprehensive life-saving appliances and fire-fighting equipment solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import { useState } from "react";
import { CheckCircle, Shield, LifeBuoy } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import "../styles/pages/Products.css";

const LSAFFA = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const lsaProducts = [
    {
      id: 1,
      name: "Sea Sickness Tablet",
      image: "/products/lsa&ffa/Asset%2045.webp",
      category: "Sea Sickness Tablet",
      description: "Marine sea sickness tablets for motion sickness prevention",
      whatsappMessage:
        "Hi, I'm interested in Sea Sickness Tablet. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Ration",
      image: "/products/lsa&ffa/Asset%2046.webp",
      category: "Ration",
      description: "Emergency compressed rations for lifeboat survival kits",
      whatsappMessage:
        "Hi, I'm interested in Ration. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Fire Nose Couplings",
      image: "/products/lsa&ffa/Asset%2047.webp",
      category: "Fire Coupling Seal",
      description: "Watertight fire coupling seals for hose connections",
      whatsappMessage:
        "Hi, I'm interested in Fire Coupling Seal. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Oil Absorbent Boom",
      image: "/products/lsa&ffa/Asset%2048.webp",
      category: "Oil Absorbent Boom",
      description: "Marine oil absorbent booms for spill containment",
      whatsappMessage:
        "Hi, I'm interested in Oil Absorbent Boom. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Oil Absorbent Spill Kit",
      image: "/products/lsa&ffa/Asset%2049.webp",
      category: "Oil Absorbent Spill Kit",
      description: "Oil spill response kit for emergency cleaning operations",
      whatsappMessage:
        "Hi, I'm interested in Oil Absorbent Spill Kit. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Line Throwing Apparatus",
      image: "/products/lsa&ffa/Asset%2050.webp",
      category: "Line Throwing Apparatus",
      description: "Line throwing apparatus for inter-vessel connections",
      whatsappMessage:
        "Hi, I'm interested in Line Throwing Apparatus.information and pricing.",
    },
    {
      id: 7,
      name: "MOB",
      image: "/products/lsa&ffa/Asset%2051.webp",
      category: "MOB",
      description: "Man overboard recovery equipment for emergency response",
      whatsappMessage:
        "Hi, I'm interested in MOB.Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Scramble Net",
      image: "/products/lsa&ffa/Asset%2052.webp",
      category: "Scramble Net",
      description: "Emergency scramble net for vessel evacuation operations",
      whatsappMessage:
        "Hi, I'm interested in Scramble Net.Please provide more information and pricing.",
    },
    {
      id: 9,
      name: "Aluminum Gangway",
      image: "/products/lsa&ffa/Asset%2053.webp",
      category: "Aluminum Gangway",
      description: "Portable aluminum gangway for ship-to-shore transfers",
      whatsappMessage:
        "Hi, I'm interested in Aluminum Gangway. Please provide more information and pricing.",
    },
    {
      id: 10,
      name: "Pilot Ladder",
      image: "/products/lsa&ffa/Asset%2054.webp",
      category: "Pilot Ladder",
      description: "Marine pilot ladder for safe boarding operations",
      whatsappMessage:
        "Hi, I'm interested in Pilot Ladder. Please provide more information and pricing.",
    },
    {
      id: 11,
      name: "Breathing Apparatus",
      image: "/products/lsa&ffa/Asset%2055.webp",
      category: "Safety Equipment",
      description: "Professional respiratory protection equipment for safety",
      whatsappMessage:
        "Hi, I'm interested in Breathing Apparatus. Please provide more information and pricing.",
    },
    {
      id: 12,
      name: "Oxygen Resuscitator",
      image: "/products/lsa&ffa/Asset%2056.webp",
      category: "Fire Safety",
      description:
        "Portable oxygen resuscitator for emergency breathing support",
      whatsappMessage:
        "Hi, I'm interested in Oxygen Resuscitator. Please provide more information and pricing.",
    },
    {
      id: 13,
      name: "Water Proof Torch",
      image: "/products/lsa&ffa/Asset%2058.webp",
      category: "Water Proof Torch",
      description: "Marine waterproof torch for wet environment operations",
      whatsappMessage:
        "Hi, I'm interested in Water Proof Torch. Please provide more information and pricing.",
    },
    {
      id: 14,
      name: "Binoculars",
      image: "/products/lsa&ffa/Asset%2059.webp",
      category: "Binoculars",
      description: "7x50 marine binoculars for navigation & lookout duties",
      whatsappMessage:
        "Hi, I'm interested in Binoculars. Please provide more information and pricing.",
    },
    {
      id: 15,
      name: "Fire Axe",
      image: "/products/lsa&ffa/Asset%2061.webp",
      category: "Fire Axe",
      description: "Insulated fire axe for emergency forcible entry operations",
      whatsappMessage:
        "Hi, I'm interested in Fire Axe. Please provide more information and pricing.",
    },
    {
      id: 16,
      name: "Safety Helmet",
      image: "/products/lsa&ffa/Asset%2062.webp",
      category: "Safety Helmet",
      description: "Impact-resistant safety helmet for worker protection",
      whatsappMessage:
        "Hi, I'm interested in Safety Helmet. Please provide more information and pricing.",
    },
    {
      id: 17,
      name: "Towing Stretcher",
      image: "/products/lsa&ffa/Asset%2063.webp",
      category: "Towing Stretcher",
      description: "Collapsible towing stretcher for casualty transport",
      whatsappMessage:
        "Hi, I'm interested in Towing Stretcher. Please provide more information and pricing.",
    },
    {
      id: 18,
      name: "Pyrotechnics",
      image: "/products/lsa&ffa/Asset%2064.webp",
      category: "Pyrotechnics",
      description: "Marine pyrotechnics for visual distress signaling",
      whatsappMessage:
        "Hi, I'm interested in Pyrotechnics. Please provide more information and pricing.",
    },
    {
      id: 19,
      name: "HRU",
      image: "/products/lsa&ffa/Asset%2065.webp",
      category: "HRU",
      description:
        "Hydrostatic release unit for automatic life raft deployment",
      whatsappMessage:
        "Hi, I'm interested in HRU. Please provide more information and pricing.",
    },
    {
      id: 20,
      name: "Fire Extinguisher",
      image: "/products/lsa&ffa/Asset%2066.webp",
      category: "Fire Extinguisher",
      description:
        "Portable fire extinguisher (CO2/Foam/Powder) for fire suppression",
      whatsappMessage:
        "Hi, I'm interested in Fire Extinguisher.  Please provide more information and pricing.",
    },
    {
      id: 21,
      name: "PPE Kit",
      image: "/products/lsa&ffa/Asset%2067.webp",
      category: "PPE Kit",
      description: "Complete PPE kit for shipboard safety operations",
      whatsappMessage:
        "Hi, I'm interested in PPE Kit. Please provide more information and pricing.",
    },
    {
      id: 22,
      name: "IMO Stickers",
      image: "/products/lsa&ffa/Asset%2068.webp",
      category: "IMO Stickers",
      description: "IMO-compliant safety stickers for maritime regulations",
      whatsappMessage:
        "Hi, I'm interested in IMO Stickers.provide more information and pricing.",
    },
    {
      id: 23,
      name: "Nozzles",
      image: "/products/lsa&ffa/Asset%2069.webp",
      category: "Nozzles",
      description: "Adjustable fire hose nozzles for spray/jet applications",
      whatsappMessage:
        "Hi, I'm interested in Nozzles. Please provide more information and pricing.",
    },
    {
      id: 24,
      name: "Fire Hose Box",
      image: "/products/lsa&ffa/Asset%2070.webp",
      category: "Fire Safety",
      description: "Weather-resistant fire hose box for equipment storage",
      whatsappMessage:
        "Hi, I'm interested in Fire Hose Box. Please provide more information and pricing.",
    },
    {
      id: 25,
      name: "Lifebuoy Light",
      image: "/products/lsa&ffa/Asset%2071.webp",
      category: "Lifebuoy Light",
      description: "Self-igniting lifebuoy light for emergency signaling",
      whatsappMessage:
        "Hi, I'm interested in Lifebuoy Light. Please provide more information and pricing.",
    },
    {
      id: 26,
      name: "Work West",
      image: "/products/lsa&ffa/Asset%2072.webp",
      category: "Work West",
      description: "Lightweight work vest for deck operations safety",
      whatsappMessage:
        "Hi, I'm interested in Work West. Please provide more information and pricing.",
    },
    {
      id: 27,
      name: "CO2  Cartridge",
      image: "/products/lsa&ffa/Asset%2073.webp",
      category: "CO2  Cartridge",
      description: "CO2 cartridge for safety equipment inflation",
      whatsappMessage:
        "Hi, I'm interested in CO2  Cartridge. Please provide more information and pricing.",
    },
    {
      id: 28,
      name: "Life Jacket Light",
      image: "/products/lsa&ffa/Asset%2075.webp",
      category: "Life Jacket Light",
      description: "Water-activated life jacket light for visibility",
      whatsappMessage:
        "Hi, I'm interested in Life Jacket Light. Please provide more information and pricing.",
    },
    {
      id: 29,
      name: "Inflatable Life Jacket",
      image: "/products/lsa&ffa/Asset%2076.webp",
      category: "Inflatable Life Jacket",
      description: "Auto-inflating life jacket for personal flotation",
      whatsappMessage:
        "Hi, I'm interested in Inflatable Life Jacket. Please provide more information and pricing.",
    },
    {
      id: 30,
      name: "Lockout Tag Kit",
      image: "/products/lsa&ffa/Asset%2078.webp",
      category: "Lockout Tag Kit",
      description: "Lockout tag kit for energy isolation safety",
      whatsappMessage:
        "Hi, I'm interested in Lockout Tag Kit. Please provide more information and pricing.",
    },
    {
      id: 31,
      name: " Fire Hose Adapters Male/Female",
      image: "/products/lsa&ffa/Asset%2079.webp",
      category: "Fire Hose Adapters Male/Female",
      description: "Fire hose adapters for male/female connections",
      whatsappMessage:
        "Hi, I'm interested in Fire Hose Adapters Male/Female. Please provide more information and pricing.",
    },
    {
      id: 32,
      name: "Fire Hose Cupplings",
      image: "/products/lsa&ffa/Asset%2080.webp",
      category: "Fire Hose Cupplings",
      description: "Quick-connect fire hose couplings for secure joining",
      whatsappMessage:
        "Hi, I'm interested in Fire Hose Cupplings. Please provide more information and pricing.",
    },
    {
      id: 33,
      name: "Lifebuoy 2.5Kg & 4.5Kg",
      image: "/products/lsa&ffa/Asset%2081.webp",
      category: "Lifebuoy 2.5Kg & 4.5Kg",
      description: "Marine lifebuoy 2.5Kg & 4.5Kg for overboard rescue",
      whatsappMessage:
        "Hi, I'm interested in Lifebuoy 2.5Kg & 4.5Kg. Please provide more information and pricing.",
    },
    {
      id: 34,
      name: "SCBA",
      image: "/products/lsa&ffa/Asset%2082.webp",
      category: "SCBA",
      description: "Self-contained breathing apparatus with air cylinder",
      whatsappMessage:
        "Hi, I'm interested in SCBA. Please provide more information and pricing.",
    },
    {
      id: 35,
      name: "EEBD",
      image: "/products/lsa&ffa/Asset%2083.webp",
      category: "EEBD",
      description: "Emergency escape breathing device (10-15 min)",
      whatsappMessage:
        "Hi, I'm interested in EEBD. Please provide more information and pricing.",
    },
    {
      id: 36,
      name: "Immersion Suits",
      image: "/products/lsa&ffa/Asset%2084.webp",
      category: "Immersion Suits",
      description: "Insulated immersion suits for cold water survival",
      whatsappMessage:
        "Hi, I'm interested in Immersion Suits. Please provide more information and pricing.",
    },
    {
      id: 37,
      name: "Fireman Suits",
      image: "/products/lsa&ffa/Asset%2085.webp",
      category: "Fireman Suits",
      description: "Fire-resistant protective suits for firefighting",
      whatsappMessage:
        "Hi, I'm interested in Fireman Suits. Please provide more information and pricing.",
    },
    {
      id: 38,
      name: "Chemical Suits",
      image: "/products/lsa&ffa/Asset%2086.webp",
      category: "Chemical Suits",
      description: "Chemical protection suits for hazardous materials",
      whatsappMessage:
        "Hi, I'm interested in Chemical Suits. Please provide more information and pricing.",
    },
    {
      id: 39,
      name: "Hydrant Valves",
      image: "/products/lsa&ffa/Asset%2087.webp",
      category: "Hydrant Valves",
      description: "Fire hydrant valves for water flow control",
      whatsappMessage:
        "Hi, I'm interested in Hydrant Valves. Please provide more information and pricing.",
    },
    {
      id: 40,
      name: "Life Raft",
      image: "/products/lsa&ffa/Asset%2088.webp",
      category: "Life Raft",
      description: "Inflatable emergency life raft for ship abandonment",
      whatsappMessage:
        "Hi, I'm interested in Life Raft. Please provide more information and pricing.",
    },
  ];

  const filteredProducts = lsaProducts.filter(
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
          <h1 className="portfolio-title">LSA & FFA EQUIPMENT</h1>
        </div>
      </div>

      <div className="container">
        {/* Product Grid Layout - Using Global Grid */}
        <section className="product-gallery section-spacing-top section-spacing-bottom">
          <div className="grid-responsive-5">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card-3d-wrapper">
                <div className="gallery-item product-card-3d">
                  <div className="card-3d-shine"></div>
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-desc">{product.description}</p>
                    <div className="product-buttons">
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
                        href="mailto:info@aspglobalmarine.com"
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

export default LSAFFA;
