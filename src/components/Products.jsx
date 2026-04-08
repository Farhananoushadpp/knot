/**
 * ASP Global Marine Trading LLC - Product Gallery
 * Clean product cards with image, name, description, and contact icons
 */

import { MessageCircle, Mail } from "lucide-react";
import "../styles/components/Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Engine Stores",
      description:
        "Seals & Gaskets (High Temp, O-rings, Mechanical Seals, Gland Packing), Pumps (Submersible, Diaphragm, Vacuum), Tools (Pipe Bender, Bearing Puller, Magnetic Drill, Chain Block), Testing Equipment (Megger, Clamp Meter, Thermometers), Safety Gear (Gas Detectors, Explosion Proof Lamps), Electrical (Batteries, Transformers, Relays, Carbon Brushes), HVAC (A/C Units, Blowers, Refrigerant), and Maintenance Supplies (Rust Removers, Adhesives, CRC, Welding, Emery Tape).",
      image: "/products/enginestores/1.webp",
    },
    {
      id: 2,
      name: "Deck Equipment",
      description:
        "Navigation & Lighting (Navigation Lights, Search Lights, Waterproof Flashlights), Ropes & Chains (PP Rope, Wire Rope, Chain, Shackles, Fenders), Deck Tools (Needle Gun, Chipping Hammer, Wire Cup Brush, Angle/Paint Brushes, High Pressure Washer), Safety & Protection (Scupper Plugs, Tarpaulin, Grease Tape, Cotton Gloves), Communication (Walkie Talkies, Marine Communication Equipment, Explosion Proof Mobiles), Maintenance (Rust Removers, Paint, Cotton Rags, Dusting Mops), Operations (Charts, Gauging Tapes, Oil/Water Level Paste, Garbage Bins, Incinerators), and Environmental Systems.",
      image: "/products/deck/Asset 49.webp",
    },
    {
      id: 3,
      name: "2-Stroke Engine Parts",
      description:
        "Pistons, Piston Rings, Cylinder Liners, Fuel Pumps, Injection Nozzles, Camshafts, Crankshafts, Oil Pumps, Exhaust Valves, Turbocharger Components, and Control Systems for YANMAR, WARTSILA, MAN B&W, SULZER, WINGD, and MITSUBISHI UEC engines.",
      image: "/1.webp",
    },
    {
      id: 4,
      name: "4-Stroke Engine Parts",
      description:
        "Cylinder Covers, Piston Crowns, Cooling Jackets, Fuel Pump Housings, Air Starting Motors, Heat Exchangers, Plate Coolers, Sea Water Pumps, Turbocharger Spares, Fuel Injection Systems, and Governor Components for auxiliary and main engines.",
      image: "/2.webp",
    },
    {
      id: 5,
      name: "Turbochargers & HVAC",
      description:
        "Turbocharger Components (Bearings, Impellers, Seal Plates, Repair Kits, Shafts, Gaskets) for ABB, KBB, Mitsubishi. HVAC Systems (Compressors, Condensers, Evaporators, Refrigerant, Controls) from Sabroe, Bitzer, Daikin for accommodation and cargo spaces.",
      image: "/3.webp",
    },
    {
      id: 6,
      name: "Marine Pumps",
      description:
        "Deep Well Pumps, Twin Screw Pumps, Centrifugal Pumps, Vacuum Pumps, Emergency Fire Pumps, Ballast Pumps, Bilge Pumps, Fuel Transfer Pumps, and Pump Spares (Impellers, Seals, Bearings) from Desmi, Allweiler, Grundfos, Jabsco.",
      image: "/4.webp",
    },
    {
      id: 7,
      name: "Boilers & Compressors",
      description:
        "Boiler Components (Burner Nozzles, Control PCBs, Temperature Sensors, Safety Valves, Flame Detectors) and Air Compressor Spares (Piston Rings, Cylinder Liners, LP/HP Valves, Intercoolers, Air Filters) for Tanabe, JP Sauer & Sohn, Sperre, Hatlapa.",
      image: "/5.webp",
    },
    {
      id: 8,
      name: "Hydraulic Systems",
      description:
        "Hatch Cover Systems, Steering Gear Pumps, Hydraulic Motors, Control Blocks, Gearboxes, Power Packs, Hydraulic Cylinders, Valves, Hoses, Fittings, and Hydraulic Oil Filtration Systems for deck machinery and cargo operations.",
      image: "/6.webp",
    },
    {
      id: 9,
      name: "Purifiers & Separators",
      description:
        "Oil Separators, Fuel Oil Purifiers, Lube Oil Purifiers, Disc Separators, Separator Modules, Gravity Ring Systems, Bowl Assemblies, Sealing Rings, and Control Units for GEA Westfalia and Alfa Laval systems.",
      image: "/products/lsa&ffa/1.webp",
    },
    {
      id: 10,
      name: "LSA & FFA Equipment",
      description:
        "Life-Saving Appliances (Life Rafts, Life Buoys, Life Jackets, Immersion Suits, Rescue Boats), Fire-Fighting Apparatus (Fire Hoses, Fire Extinguishers, Fire Suits, SCBA, EEBD, Fire Blankets), Emergency Equipment (Emergency Lights, Pyrotechnics, Line Throwing Apparatus), and Safety Gear (Gas Detectors, Safety Helmets, Safety Harnesses) - All SOLAS and IMO compliant.",
      image: "/products/lsa&ffa/1.webp",
    },
    {
      id: 11,
      name: "Navigation Equipment",
      description:
        "Radar Systems, GPS/GNSS, ECDIS, AIS, VHF/UHF Radios, GMDSS Equipment, Gyro Compasses, Magnetic Compasses, Echo Sounders, Speed Logs, Autopilot Systems, and Navigation Charts for safe vessel operations.",
      image: "/1.webp",
    },
    {
      id: 12,
      name: "Electrical Components",
      description:
        "Relays, Transformers, Carbon Brushes, Contactors, Circuit Breakers, Fuses, Terminal Blocks, Cable Glands, Switches, Indicators, Motor Starters, Control Panels, and Electrical Cables for marine power distribution and control systems.",
      image: "/2.webp",
    },
  ];

  const handleWhatsApp = (productName) => {
    const message = `Hi, I'm interested in ${productName}. Can you provide more information?`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleEmail = (productName) => {
    const subject = `Inquiry about ${productName}`;
    const body = `Hi,\n\nI'm interested in ${productName}. Please provide more details.\n\nThank you.`;
    window.open(
      `mailto:info@oceaninfinity.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
    );
  };

  return (
    <section id="products" className="products-gallery">
      <div className="container">
        <div className="section-header-gallery">
          <span className="section-label">OUR PRODUCTS</span>
          <h2>Product Solutions</h2>
          <p>
            Comprehensive range of marine equipment and spare parts for all
            vessel types
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-actions">
                  <button
                    className="contact-btn whatsapp"
                    onClick={() => handleWhatsApp(product.name)}
                    aria-label="Contact via WhatsApp"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    className="contact-btn email"
                    onClick={() => handleEmail(product.name)}
                    aria-label="Contact via Email"
                  >
                    <Mail size={18} />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
