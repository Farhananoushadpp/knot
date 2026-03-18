/**
 * Beijing Zhonghanghua Safety Valve Sales Co., Ltd. - Partner Detail Page
 * Comprehensive page with title, content, images, and product tables
 */

import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/pages/PartnerDetail.css";

const BeijingZhonghanghua = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Beijing Zhonghanghua Safety Valve | ASP Global Marine";
  }, []);

  const valves = [
    {
      type: "Safety Valve",
      model: "BZA-10",
      size: "DN15-DN400",
      pressure: "0.1-32 MPa",
      temp: "-196°C to 550°C",
    },
    {
      type: "Pilot Operated Valve",
      model: "BZA-P20",
      size: "DN50-DN600",
      pressure: "0.1-16 MPa",
      temp: "-196°C to 400°C",
    },
    {
      type: "Pressure Relief Valve",
      model: "BZP-15",
      size: "DN25-DN300",
      pressure: "0.1-42 MPa",
      temp: "-60°C to 450°C",
    },
    {
      type: "Change Over Valve",
      model: "BZC-25",
      size: "DN80-DN400",
      pressure: "0.1-10 MPa",
      temp: "-20°C to 350°C",
    },
    {
      type: "Pressure Vacuum Valve",
      model: "BZV-30",
      size: "DN50-DN500",
      pressure: "-0.1 to 0.1 MPa",
      temp: "-40°C to 200°C",
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
              src="/authorisation/beijing/logo.webp"
              alt="Beijing Zhonghanghua Logo"
              className="partner-detail-logo"
            />
            <span className="partner-since">Est. 2002</span>
          </div>
          <div className="partner-title-section">
            <h1>Beijing Zhonghanghua Safety Valve Sales Co., Ltd.</h1>
            <p className="partner-location">
              <MapPin size={18} /> Beijing, China
            </p>
            <p className="partner-category">Safety Valves</p>
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
                Beijing Zhonghanghua Safety Valve Sales Co., Ltd. is the sales
                entity for safety valves and specialty valves designed and
                manufactured by Beijing Aerospace Propulsion Institute Pressure
                Relief Branch. Established in 2002, the company specializes in
                marine safety valves, pressure relief systems, and industrial
                valve solutions.
              </p>
              <p>
                With expertise in precision engineering and safety compliance,
                Zhonghanghua provides pressure-tested, marine-certified valve
                solutions that meet the highest international safety standards
                for maritime applications.
              </p>

              <h3>Key Strengths</h3>
              <ul className="strengths-list">
                <li>
                  <CheckCircle size={16} /> Pressure Tested Products
                </li>
                <li>
                  <CheckCircle size={16} /> Marine Certification Standards
                </li>
                <li>
                  <CheckCircle size={16} /> Precision Engineering
                </li>
                <li>
                  <CheckCircle size={16} /> Safety Compliant Design
                </li>
                <li>
                  <CheckCircle size={16} /> Aerospace Technology Heritage
                </li>
              </ul>

              <h3>Product Range</h3>
              <div className="product-list">
                <ul>
                  <li>Safety Valves</li>
                  <li>Pilot Operated Safety Valves</li>
                  <li>Pressure Relief Valves</li>
                  <li>Change Over Safety Valves</li>
                  <li>Pressure Vacuum Valves</li>
                  <li>Gas Blanket Pressure Vacuum Valves</li>
                  <li>Emergency Pressure Vacuum Valves</li>
                  <li>Automatic Recirculation Valves</li>
                </ul>
              </div>

              <h3>Valve Specifications</h3>
              <div className="table-container">
                <table className="product-table">
                  <thead>
                    <tr>
                      <th>Valve Type</th>
                      <th>Model</th>
                      <th>Size Range</th>
                      <th>Pressure Range</th>
                      <th>Temperature</th>
                    </tr>
                  </thead>
                  <tbody>
                    {valves.map((valve, index) => (
                      <tr key={index}>
                        <td>{valve.type}</td>
                        <td>{valve.model}</td>
                        <td>{valve.size}</td>
                        <td>{valve.pressure}</td>
                        <td>{valve.temp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Product Images */}
              <div className="product-images">
                <h3>Valve Gallery</h3>
                <div className="product-images-grid">
                  <img
                    src="/Authorisation/Beijing/1.webp"
                    alt="Safety Valve Systems"
                    onError={(e) => {
                      e.target.src = "/1.webp";
                    }}
                  />
                  <img
                    src="/Authorisation/Beijing/2.webp"
                    alt="Pressure Relief Valves"
                    onError={(e) => {
                      e.target.src = "/2.webp";
                    }}
                  />
                  <img
                    src="/Authorisation/Beijing/3.webp"
                    alt="Marine Safety Equipment"
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
                  <li>✓ ASME Certified</li>
                  <li>✓ API Standards</li>
                  <li>✓ ISO 9001:2015</li>
                  <li>✓ CCS Approved</li>
                  <li>✓ CE Marking</li>
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

export default BeijingZhonghanghua;
