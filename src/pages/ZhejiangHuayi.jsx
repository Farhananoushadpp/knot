/**
 * Zhejiang Huayi Ship Equipment Manufacture Co., Ltd. - Partner Detail Page
 * Comprehensive page with title, content, images, and product tables
 */

import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/pages/PartnerDetail.css";

const ZhejiangHuayi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Zhejiang Huayi Ship Equipment | ASP Global Marine";
  }, []);

  const separators = [
    {
      model: "S-TYPE 10",
      capacity: "1,000 L/h",
      density: "1,100 kg/m³",
      viscosity: "700 cSt",
      power: "3.0 kW",
    },
    {
      model: "S-TYPE 20",
      capacity: "2,500 L/h",
      density: "1,100 kg/m³",
      viscosity: "700 cSt",
      power: "5.5 kW",
    },
    {
      model: "S-TYPE 30",
      capacity: "4,000 L/h",
      density: "1,100 kg/m³",
      viscosity: "700 cSt",
      power: "7.5 kW",
    },
    {
      model: "P-TYPE 15",
      capacity: "1,500 L/h",
      density: "991 kg/m³",
      viscosity: "380 cSt",
      power: "4.0 kW",
    },
    {
      model: "P-TYPE 25",
      capacity: "3,000 L/h",
      density: "991 kg/m³",
      viscosity: "380 cSt",
      power: "6.0 kW",
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
              src="/Authorisation/Beijing/Asset 20.webp"
              alt="Huayi Ship Equipment Logo"
              className="partner-detail-logo"
              onError={(e) => {
                e.target.src = "/logo.webp";
              }}
            />
            <span className="partner-since">Est. 1995</span>
          </div>
          <div className="partner-title-section">
            <h1>Zhejiang Huayi Ship Equipment Manufacture Co., Ltd.</h1>
            <p className="partner-location">
              <MapPin size={18} /> Taizhou, China
            </p>
            <p className="partner-category">Ship Equipment</p>
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
                Zhejiang Huayi Ship Equipment Manufacture Co., Ltd. specializes
                in marine oil treatment equipment, including heavy fuel and
                lubricating oil separators, oil supply units, sewage treatment
                units, and self-cleaning oil filters. Founded in 1995, the
                company has established itself as a comprehensive manufacturer
                of marine deck equipment and safety systems.
              </p>
              <p>
                The company provides SOLAS compliant and IMO approved equipment,
                with RINA certification and the ability to deliver custom
                solutions for specific marine requirements.
              </p>

              <h3>Key Strengths</h3>
              <ul className="strengths-list">
                <li>
                  <CheckCircle size={16} /> SOLAS Compliant Equipment
                </li>
                <li>
                  <CheckCircle size={16} /> IMO Approved Products
                </li>
                <li>
                  <CheckCircle size={16} /> RINA Certified Manufacturing
                </li>
                <li>
                  <CheckCircle size={16} /> Custom Engineering Solutions
                </li>
                <li>
                  <CheckCircle size={16} /> PLC-Controlled Systems
                </li>
              </ul>

              <h3>Product Range</h3>
              <div className="product-categories">
                <div className="category-item">
                  <h4>S-TYPE Separator</h4>
                  <p>
                    A separator without a gravity ring, suitable for
                    high-density fuel oils up to 1,100 kg/m³ and viscosities up
                    to 700 cSt at 50°C.
                  </p>
                </div>
                <div className="category-item">
                  <h4>S-TYPE Separator Module</h4>
                  <p>
                    An integrated, PLC-controlled unit with automatic operation,
                    alarms, monitoring, touch-screen display, and remote control
                    room connectivity.
                  </p>
                </div>
                <div className="category-item">
                  <h4>P-TYPE Separator</h4>
                  <p>
                    A separator that uses an adjustable gravity ring to
                    effectively separate oil and water for oil purification.
                  </p>
                </div>
                <div className="category-item">
                  <h4>P-TYPE Separator Module</h4>
                  <p>
                    A compact, PLC-controlled system with touch-screen
                    monitoring, fault analysis, data storage, and remote
                    monitoring capability.
                  </p>
                </div>
              </div>

              <h3>Separator Specifications</h3>
              <div className="table-container">
                <table className="product-table">
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>Capacity</th>
                      <th>Max Density</th>
                      <th>Max Viscosity</th>
                      <th>Motor Power</th>
                    </tr>
                  </thead>
                  <tbody>
                    {separators.map((sep, index) => (
                      <tr key={index}>
                        <td>{sep.model}</td>
                        <td>{sep.capacity}</td>
                        <td>{sep.density}</td>
                        <td>{sep.viscosity}</td>
                        <td>{sep.power}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Product Images */}
              <div className="product-images">
                <h3>Separator Gallery</h3>
                <div className="product-images-grid">
                  <img
                    src="/Authorisation/Zhejiang/1.webp"
                    alt="Marine Separator Equipment"
                    onError={(e) => {
                      e.target.src = "/1.webp";
                    }}
                  />
                  <img
                    src="/Authorisation/Zhejiang/2.webp"
                    alt="Oil Water Separator"
                    onError={(e) => {
                      e.target.src = "/2.webp";
                    }}
                  />
                  <img
                    src="/Authorisation/Zhejiang/3.webp"
                    alt="Fuel Purification System"
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
                  <li>✓ SOLAS Compliant</li>
                  <li>✓ IMO Approved</li>
                  <li>✓ RINA Certified</li>
                  <li>✓ ISO 9001:2015</li>
                  <li>✓ CCS Approved</li>
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

export default ZhejiangHuayi;
