/**
 * HG Machinery Group - Partner Detail Page
 * Comprehensive page with title, content, images, and product tables
 */

import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/pages/PartnerDetail.css";

const HGMachineryGroup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "HG Machinery Group | ASP Global Marine";
  }, []);

  const products = [
    {
      name: "Twin Screw Pump",
      model: "TSP-150",
      flow: "150 m³/h",
      pressure: "1.0 MPa",
      application: "Cargo Oil",
    },
    {
      name: "Three Screw Pump",
      model: "THSP-80",
      flow: "80 m³/h",
      pressure: "1.5 MPa",
      application: "Lube Oil",
    },
    {
      name: "Gear Pump",
      model: "GP-60",
      flow: "60 m³/h",
      pressure: "2.5 MPa",
      application: "Fuel Oil",
    },
    {
      name: "Deep Well Pump",
      model: "DWP-200",
      flow: "200 m³/h",
      pressure: "0.6 MPa",
      application: "Ballast",
    },
    {
      name: "Vacuum Pump",
      model: "VP-40",
      flow: "40 m³/h",
      pressure: "0.08 MPa",
      application: "Bilge",
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
              src="/Authorisation/Hg/logo.webp"
              alt="HG Machinery Group Logo"
              className="partner-detail-logo"
              onError={(e) => {
                e.target.src = "/logo.webp";
              }}
            />
            <span className="partner-since">Est. 2005</span>
          </div>
          <div className="partner-title-section">
            <h1>HG Machinery Group</h1>
            <p className="partner-location">
              <MapPin size={18} /> Shanghai, China
            </p>
            <p className="partner-category">Marine Engines & Spares</p>
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
                HG Machinery Group is a premier supplier of marine engine
                components, turbochargers, and auxiliary machinery. Established
                in 2005, the group has become a leading manufacturer
                specializing in twin screw, three screw, gear, vacuum,
                centrifugal, and deep well cargo pumps, along with hydraulic and
                electric pumps and various valves.
              </p>
              <p>
                The group is certified with CE, ISO9001, ISO14001, and
                OHSAS18001, and its marine products are approved by major
                classification societies including CCS, BV, KR, ABS, NK, RINA,
                and RMRS.
              </p>

              <h3>Key Strengths</h3>
              <ul className="strengths-list">
                <li>
                  <CheckCircle size={16} /> OEM Quality Parts Manufacturing
                </li>
                <li>
                  <CheckCircle size={16} /> Complete Engine Overhaul Services
                </li>
                <li>
                  <CheckCircle size={16} /> Extensive Spare Parts Inventory
                </li>
                <li>
                  <CheckCircle size={16} /> Technical Documentation Support
                </li>
                <li>
                  <CheckCircle size={16} /> Global After-Sales Network
                </li>
              </ul>

              <h3>Product Gallery</h3>
              <div className="product-images-grid">
                <img
                  src="/Authorisation/Hg/1.jpg"
                  alt="Marine Pump Systems"
                  onError={(e) => {
                    e.target.src = "/1.webp";
                  }}
                />
                <img
                  src="/Authorisation/Hg/2.webp"
                  alt="Industrial Machinery Equipment"
                  onError={(e) => {
                    e.target.src = "/2.webp";
                  }}
                />
                <img
                  src="/Authorisation/Hg/3.webp"
                  alt="Marine Engineering Solutions"
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
                      <th>Flow Rate</th>
                      <th>Pressure</th>
                      <th>Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.model}</td>
                        <td>{product.flow}</td>
                        <td>{product.pressure}</td>
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
                  <li>✓ CE Certified</li>
                  <li>✓ ISO 9001:2015</li>
                  <li>✓ ISO 14001:2015</li>
                  <li>✓ OHSAS 18001</li>
                  <li>✓ CCS, BV, ABS Approved</li>
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

export default HGMachineryGroup;
