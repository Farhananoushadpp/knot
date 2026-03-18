/**
 * Guangzhou HG Marine Co., Ltd. - Partner Detail Page
 * Comprehensive page with title, content, images, and product tables
 */

import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/pages/PartnerDetail.css";

const GuangzhouHGMarine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Guangzhou HG Marine Co., Ltd. | ASP Global Marine";
  }, []);

  const products = [
    {
      name: "Rim Thruster RT-100",
      model: "RT-100",
      power: "100 kW",
      thrust: "15 kN",
      application: "Vessel Propulsion",
    },
    {
      name: "Rim Thruster RT-150",
      model: "RT-150",
      power: "150 kW",
      thrust: "22 kN",
      application: "Vessel Propulsion",
    },
    {
      name: "Rim Thruster RT-200",
      model: "RT-200",
      power: "200 kW",
      thrust: "30 kN",
      application: "Vessel Propulsion",
    },
    {
      name: "Steering Gear SG-50",
      model: "SG-50",
      torque: "50 kNm",
      pressure: "25 MPa",
      application: "Vessel Steering",
    },
    {
      name: "Steering Gear SG-100",
      model: "SG-100",
      torque: "100 kNm",
      pressure: "35 MPa",
      application: "Vessel Steering",
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
              src="/Authorisation/Guangzhou/logo.webp"
              alt="Guangzhou HG Marine Co., Ltd. Logo"
              className="partner-detail-logo"
              onError={(e) => {
                e.target.src = "/logo.webp";
              }}
            />
            <span className="partner-since">Est. 1998</span>
          </div>
          <div className="partner-title-section">
            <h1>Guangzhou HG Marine Co., Ltd.</h1>
            <p className="partner-location">
              <MapPin size={18} /> Guangzhou, China
            </p>
            <p className="partner-category">Marine Pumps & Equipment</p>
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
                Guangzhou HG Marine Co., Ltd. is a leading manufacturer of
                marine pumps, valves, and shipboard equipment for the global
                shipping industry. Established in 1998, the company has
                developed innovative marine steering gear and rim thrusters,
                backed by over 100 patents in steering and electric propulsion
                technology.
              </p>
              <p>
                The company specializes in advanced propulsion systems including
                rim thrusters, steering gear systems, marine pumps, and
                hydraulic equipment. With nearly two decades of experience,
                Guangzhou HG Marine has established itself as a pioneer in
                electric propulsion technology.
              </p>

              <h3>Key Strengths</h3>
              <ul className="strengths-list">
                <li>
                  <CheckCircle size={16} /> 100+ Patents in Marine Technology
                </li>
                <li>
                  <CheckCircle size={16} /> ISO 9001:2015 Certified
                </li>
                <li>
                  <CheckCircle size={16} /> Class Approved Products
                </li>
                <li>
                  <CheckCircle size={16} /> Advanced R&D Capabilities
                </li>
                <li>
                  <CheckCircle size={16} /> Global Distribution Network
                </li>
              </ul>

              <h3>Product Gallery</h3>
              <div className="product-images-grid">
                <img
                  src="/Authorisation/Guangzhou/1.webp"
                  alt="Marine Propulsion Systems"
                  onError={(e) => {
                    e.target.src = "/1.webp";
                  }}
                />
                <img
                  src="/Authorisation/Guangzhou/2.webp"
                  alt="Marine Gearboxes"
                  onError={(e) => {
                    e.target.src = "/2.webp";
                  }}
                />
                <img
                  src="/Authorisation/Guangzhou/3.webp"
                  alt="Marine Engine Equipment"
                  onError={(e) => {
                    e.target.src = "/3.webp";
                  }}
                />
              </div>

              <h3>Product Specifications</h3>
              <div className="table-container">
                <table className="product-table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Model</th>
                      <th>Power/Torque</th>
                      <th>Thrust/Pressure</th>
                      <th>Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.model}</td>
                        <td>{product.power || product.torque}</td>
                        <td>{product.thrust || product.pressure}</td>
                        <td>{product.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="partner-sidebar">
              <div className="certifications-card">
                <h3>Certifications</h3>
                <ul>
                  <li>✓ ISO 9001:2015</li>
                  <li>✓ 100+ Technology Patents</li>
                  <li>✓ CCS, BV, ABS Approved</li>
                  <li>✓ SOLAS Compliant</li>
                  <li>✓ IMO Certified</li>
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

export default GuangzhouHGMarine;
