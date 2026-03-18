/**
 * Changzhou Qianmai Mechanical Equipment Tech. Co., Ltd. - Partner Detail Page
 * Comprehensive page with title, content, images, and product tables
 */

import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/pages/PartnerDetail.css";

const ChangzhouQianmai = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Changzhou Qianmai Mechanical Equipment | ASP Global Marine";
  }, []);

  const separators = [
    {
      model: "QM-50",
      bowl: "200 mm",
      capacity: "1,000 L/h",
      motor: "2.2 kW",
      weight: "180 kg",
    },
    {
      model: "QM-100",
      bowl: "300 mm",
      capacity: "3,000 L/h",
      motor: "4.0 kW",
      weight: "320 kg",
    },
    {
      model: "QM-200",
      bowl: "400 mm",
      capacity: "6,000 L/h",
      motor: "7.5 kW",
      weight: "580 kg",
    },
    {
      model: "QM-300",
      bowl: "500 mm",
      capacity: "10,000 L/h",
      motor: "11 kW",
      weight: "850 kg",
    },
    {
      model: "QM-500",
      bowl: "600 mm",
      capacity: "15,000 L/h",
      motor: "15 kW",
      weight: "1,200 kg",
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
              src="/Authorisation/Changzhou/Asset 22.webp"
              alt="Changzhou Qianmai Logo"
              className="partner-detail-logo"
              onError={(e) => {
                e.target.src = "/logo.webp";
              }}
            />
            <span className="partner-since">Est. 2008</span>
          </div>
          <div className="partner-title-section">
            <h1>Changzhou Qianmai Mechanical Eqpt. Tech. Co., Ltd.</h1>
            <p className="partner-location">
              <MapPin size={18} /> Changzhou, China
            </p>
            <p className="partner-category">Mechanical Equipment</p>
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
                Changzhou Qianmai Mechanical Equipment Technology Co., Ltd. is a
                professional company dedicated to the research and development,
                production, sales, and after-sales of disc separators. Founded
                in 2008, the company accurately serves industries such as
                equipment manufacturing, industrial environmental protection,
                oils, chemicals, pharmaceuticals, food, beverages,
                biopharmaceuticals, and shipbuilding.
              </p>
              <p>
                The company specializes in high-efficiency, compact design
                thermal equipment including heat exchangers, HVAC systems, and
                cooling equipment for marine and industrial applications. All
                products feature stainless steel construction with comprehensive
                maintenance support.
              </p>

              <h3>Key Strengths</h3>
              <ul className="strengths-list">
                <li>
                  <CheckCircle size={16} /> High Efficiency Design
                </li>
                <li>
                  <CheckCircle size={16} /> Compact Space-Saving Solutions
                </li>
                <li>
                  <CheckCircle size={16} /> Stainless Steel Construction
                </li>
                <li>
                  <CheckCircle size={16} /> Comprehensive Maintenance Support
                </li>
                <li>
                  <CheckCircle size={16} /> R&D Focus on Innovation
                </li>
              </ul>

              <h3>Product Range</h3>
              <div className="product-list">
                <ul>
                  <li>Coal Tar Oil Centrifuge Disc Separator</li>
                  <li>Marine Oil Separator</li>
                  <li>Liquid Solid Separation Centrifuge Separator</li>
                  <li>Industrial Liquid Solid Separation Equipment</li>
                  <li>Heat Exchangers</li>
                  <li>HVAC Systems</li>
                  <li>Cooling Equipment</li>
                </ul>
              </div>

              <h3>Product Gallery</h3>
              <div className="product-images-grid">
                <img
                  src="/Authorisation/Changzhou/1.webp"
                  alt="Coal Tar Oil Centrifuge"
                  onError={(e) => {
                    e.target.src = "/1.webp";
                  }}
                />
                <img
                  src="/Authorisation/Changzhou/2.webp"
                  alt="Marine Oil Separator"
                  onError={(e) => {
                    e.target.src = "/2.webp";
                  }}
                />
                <img
                  src="/Authorisation/Changzhou/3.webp"
                  alt="Industrial Centrifuge Equipment"
                  onError={(e) => {
                    e.target.src = "/3.webp";
                  }}
                />
              </div>

              <h3>Disc Separator Specifications</h3>
              <div className="table-container">
                <table className="product-table">
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>Bowl Diameter</th>
                      <th>Capacity</th>
                      <th>Motor Power</th>
                      <th>Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {separators.map((sep, index) => (
                      <tr key={index}>
                        <td>{sep.model}</td>
                        <td>{sep.bowl}</td>
                        <td>{sep.capacity}</td>
                        <td>{sep.motor}</td>
                        <td>{sep.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="partner-sidebar">
              <div className="certifications-card">
                <h3>Industries Served</h3>
                <ul>
                  <li>• Shipbuilding</li>
                  <li>• Marine Equipment</li>
                  <li>• Oil & Gas</li>
                  <li>• Chemical Processing</li>
                  <li>• Food & Beverage</li>
                </ul>
              </div>

              <div className="features-card">
                <h3>Key Features</h3>
                <ul>
                  <li>✓ Self-Cleaning Design</li>
                  <li>✓ PLC Control Systems</li>
                  <li>✓ Remote Monitoring</li>
                  <li>✓ High Separation Efficiency</li>
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

export default ChangzhouQianmai;
