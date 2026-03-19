/**
 * ASP Global Marine Trading LLC - Products Main Page
 *
 * Professional Product Catalog with Modern Design
 * Enhanced layout with attractive visuals and user experience
 */

import { Link } from "react-router-dom";
import { Package, Award, Users, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import "../styles/pages/Products.css";

const ProductsPage = () => {
  const productCategories = [
    {
      id: "engine-stores",
      title: "Engine Stores",
      description:
        "Complete engine stores including gaskets, seals, filters, and maintenance supplies for marine engines.",
      image: "/spare.jpg",
      brands: ["FREUDENBERG", "ELASTOL", "DANFOSS", "SKF"],
    },
    {
      id: "deck-stores-general",
      title: "Deck Stores & General",
      description:
        "Comprehensive deck stores, safety equipment, and general marine supplies for vessel operations.",
      image: "/deckstore.webp",
      brands: ["VIKING", "SURVITEC", "WILHELMSEN", "SMIT"],
    },
    {
      id: "engine-spares-2stroke",
      title: "Engine Spares - 2 Stroke",
      description:
        "Complete range of 2-stroke engine spare parts for marine applications including pistons, liners, and fuel pumps.",
      image: "/cate1.webp",
      brands: ["YANMAR", "HIMSEN", "WARTSILA", "MAN", "SULZER", "WINGD"],
      featured: true,
    },
    {
      id: "engine-spares-4stroke",
      title: "Engine Spares - 4 Stroke",
      description:
        "Comprehensive 4-stroke engine components and spare parts for marine vessels including valves and bearings.",
      image: "/cate2.webp",
      brands: ["YANMAR", "WARTSILA", "MAN", "CUMMINS", "CATERPILLAR"],
    },
    {
      id: "turbochargers-auxiliary",
      title: "Turbochargers & Auxiliary",
      description:
        "High-performance turbochargers, superchargers, and auxiliary engine systems for enhanced vessel operations.",
      image: "/cate3.jpg",
      brands: ["ABB", "MAN", "IHI", "MHI", "KBB"],
    },
    {
      id: "purifiers",
      title: "Purifiers & Separators",
      description:
        "Marine purifiers, separators, and filtration systems for fuel oil, lube oil, and water treatment.",
      image: "/cate9.jpg",
      brands: ["ALFA LAVAL", "WARTSILA", "GEA", "WESTFALIA"],
    },
    {
      id: "air-compressor-spares",
      title: "Air Compressor Spares",
      description:
        "Air compressors and spare parts for marine applications including starting air and control air systems.",
      image: "/cate7.jpg",
      brands: ["ATLAS COPCO", "KAESER", "INGERSOLL RAND"],
    },
    {
      id: "hydraulic-systems",
      title: "Hydraulic Systems",
      description:
        "Complete hydraulic systems, components, and spare parts for steering, deck machinery, and cargo handling.",
      image: "/cate8.jpg",
      brands: ["PARKER", "REXROTH", "DANFOSS", "EATON"],
    },
    {
      id: "boilers-incinerators-heat-exchangers",
      title: "Boilers & Heat Exchangers",
      description:
        "Marine boilers, incinerators, and heat exchange systems for thermal management and waste handling.",
      image: "/cate6.webp",
      brands: ["ALFA LAVAL", "AALBORG", "KAWASAKI"],
    },
    {
      id: "pumps-marine-industrial",
      title: "Pumps - Marine & Industrial",
      description:
        "Complete range of marine and industrial pumping systems including centrifugal, gear, and screw pumps.",
      image: "/cate4.jpg",
      brands: ["ALFA LAVAL", "WARTSILA", "KSB", "GRUNDFOS"],
    },
    {
      id: "hvac-compressors",
      title: "HVAC Compressors",
      description:
        "Marine HVAC systems, compressors, and climate control solutions for comfortable vessel environments.",
      image: "/cate5.webp",
      brands: ["CARRIER", "TRANE", "DAIKIN", "MITSUBISHI"],
    },
    {
      id: "lsa-ffa",
      title: "LSA & FFA Equipment",
      description:
        "Life-saving appliances and firefighting equipment meeting SOLAS and international maritime standards.",
      image: "/lsa.jpg",
      brands: ["VIKING", "SURVITEC", "HONEYWELL", "KIDDE"],
    },
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <PageHero
        title="Marine Equipment Catalog"
        subtitle="Complete Solutions for Maritime Industry"
        description="Explore our comprehensive range of high-quality marine equipment, spare parts, and solutions. From engine stores to safety equipment, we provide everything you need for optimal vessel operations."
        icon={Package}
        badges={[
          { icon: Award, text: "Quality Assured" },
          { icon: Users, text: "Global Supply" },
          { icon: Package, text: "Wide Range" },
        ]}
        backgroundImage="/catalog.jpg"
      />

      {/* All Categories */}
      <section className="all-categories section-spacing-top">
        <div className="container">
          <div className="section-header">
            <h2>Product Categories</h2>
            <p>Complete range of marine equipment and solutions</p>
          </div>

          <div className="grid-responsive-5">
            {productCategories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-image">
                  <img
                    src={category.image}
                    alt={category.title}
                    onError={(e) => {
                      e.target.src = `/1.webp`; // Fallback image
                    }}
                  />
                </div>
                <div className="category-content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <Link
                    to={`/products/${category.id}`}
                    className="category-link"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
