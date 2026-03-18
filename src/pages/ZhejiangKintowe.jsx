/**
 * Zhejiang Kintowe Sealing Technology Co. - Partner Detail Page
 * Comprehensive page with title, content, images, and product tables
 */

import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/pages/PartnerDetail.css";

const ZhejiangKintowe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Zhejiang Kintowe Sealing Technology | ASP Global Marine";
  }, []);

  const products = [
    {
      name: "Mechanical Seal",
      model: "KS-100",
      pressure: "2.5 MPa",
      temp: "-40°C to 200°C",
      material: "Carbon/SiC",
    },
    {
      name: "Gland Packing",
      model: "KP-200",
      pressure: "1.5 MPa",
      temp: "-50°C to 280°C",
      material: "PTFE/Graphite",
    },
    {
      name: "O-Ring",
      model: "KO-300",
      pressure: "20 MPa",
      temp: "-60°C to 230°C",
      material: "FKM/NBR",
    },
    {
      name: "Bearing Bushing",
      model: "KB-150",
      pressure: "5.0 MPa",
      temp: "-30°C to 150°C",
      material: "PFC Composite",
    },
    {
      name: "Gasket Sheet",
      model: "KG-400",
      pressure: "10 MPa",
      temp: "-100°C to 450°C",
      material: "Graphite/Metal",
    },
  ];

  return (
    <div className="partner-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/authorizations" className="breadcrumb-link">
          <ArrowLeft size={18} />
          Back to Authorizations
        </Link>
      </div>

      {/* Header Section */}
      <section className="partner-header-section">
        <div className="partner-header-content">
          <div className="partner-logo-section">
            <img
              src="/Authorisation/Kintowe/logo.webp"
              alt="Kintowe Sealing Technology Logo"
              className="partner-detail-logo"
              onError={(e) => {
                e.target.src = "/logo.webp";
              }}
            />
            <span className="partner-since">Est. 2003</span>
          </div>
          <div className="partner-title-section">
            <h1>Zhejiang Kintowe Sealing Technology Co.</h1>
            <p className="partner-location">
              <MapPin size={18} /> Ningbo, China
            </p>
            <p className="partner-category">Sealing Solutions</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="partner-content-section">
        <div className="container">
          <div className="content-grid">
            {/* Main Content */}
            <div className="main-content">
              <h2>Company Overview</h2>
              <p>
                Zhejiang Kintowe Sealing Technology Co. is a specialized
                manufacturer of high-performance sealing solutions. Founded in
                2003, the company provides mechanical seals, gland packing,
                O-rings, and composite bearing solutions for marine and
                industrial applications.
              </p>
              <p>
                The company is known for its advanced composite materials
                including PFC-6 and PFC-22 phenolic-based composite
                water-lubricated bearings, as well as polyurethane
                water-lubricated bearings that provide exceptional performance
                in harsh marine environments.
              </p>

              <h3>Key Strengths</h3>
              <ul className="strengths-list">
                <li>
                  <CheckCircle size={16} /> Marine-Grade Material Technology
                </li>
                <li>
                  <CheckCircle size={16} /> Custom Seal Design Services
                </li>
                <li>
                  <CheckCircle size={16} /> Pressure-Rated Products
                </li>
                <li>
                  <CheckCircle size={16} /> Corrosion Resistant Materials
                </li>
                <li>
                  <CheckCircle size={16} /> Self-Lubricating Properties
                </li>
              </ul>

              <h3>Product Categories</h3>
              <div className="product-categories">
                <div className="category-item">
                  <h4>Water Lubricated Stern Tube Bearings</h4>
                  <p>
                    Eco-friendly bearings designed for efficient stern tube and
                    rudder applications with superior wear resistance.
                  </p>
                </div>
                <div className="category-item">
                  <h4>Marine Bearing Series</h4>
                  <p>
                    Composite Rudder Bearings with self-lubricating properties
                    ensuring long service life in marine conditions.
                  </p>
                </div>
                <div className="category-item">
                  <h4>Rudder Pintle Bushes</h4>
                  <p>
                    Durable composite bushes with smooth performance,
                    specifically built for harsh marine conditions.
                  </p>
                </div>
              </div>

              <h3>Product Specifications</h3>
              <div className="table-container">
                <table className="product-table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Model</th>
                      <th>Max Pressure</th>
                      <th>Temperature Range</th>
                      <th>Material</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.model}</td>
                        <td>{product.pressure}</td>
                        <td>{product.temp}</td>
                        <td>{product.material}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Product Images */}
              <div className="product-images">
                <h3>Product Gallery</h3>
                <div className="product-images-grid">
                  <img
                    src="/Authorisation/Kintowe/1.webp"
                    alt="Mechanical Seal Products"
                    onError={(e) => {
                      e.target.src = "/1.webp";
                    }}
                  />
                  <img
                    src="/Authorisation/Kintowe/2.webp"
                    alt="Sealing Technology Solutions"
                    onError={(e) => {
                      e.target.src = "/2.webp";
                    }}
                  />
                  <img
                    src="/Authorisation/Kintowe/3.webp"
                    alt="Industrial Sealing Products"
                    onError={(e) => {
                      e.target.src = "/3.webp";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="partner-sidebar">
              <div className="certifications-card">
                <h3>Certifications</h3>
                <ul>
                  <li>✓ ISO 9001:2015</li>
                  <li>✓ ISO 14001:2015</li>
                  <li>✓ CCS Approved</li>
                  <li>✓ DNV GL Certified</li>
                  <li>✓ ABS Certified</li>
                </ul>
              </div>

              <div className="materials-card">
                <h3>Key Materials</h3>
                <ul>
                  <li>• PFC-6 Composite</li>
                  <li>• PFC-22 Composite</li>
                  <li>• Phenolic-Based Bearings</li>
                  <li>• Polyurethane Bearings</li>
                </ul>
              </div>

              <Link to="/contact" className="inquiry-btn">
                Send Inquiry
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZhejiangKintowe;
