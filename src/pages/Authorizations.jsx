/**
 * ASP Global Marine Trading LLC - Authorizations Page
 *
 * Company authorizations and certifications
 * Modern design with hero section and document request
 */

import "../styles/pages/About.css";
import { useState } from "react";
import {
  Shield,
  Award,
  FileText,
  CheckCircle,
  Download,
  Mail,
} from "lucide-react";

const Authorizations = () => {
  const [requestForm, setRequestForm] = useState({
    name: "",
    email: "",
    company: "",
    documentType: "",
  });

  const authorizations = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System Certification",
      authority: "International Organization for Standardization",
      scope: "Marine equipment supply and technical services",
      icon: Award,
    },
    {
      name: "SOLAS Compliance",
      description: "Safety of Life at Sea Convention Compliance",
      authority: "International Maritime Organization",
      scope: "Life-saving appliances and safety equipment",
      icon: Shield,
    },
    {
      name: "MARPOL Compliance",
      description: "Marine Pollution Prevention Convention",
      authority: "International Maritime Organization",
      scope: "Environmental protection equipment",
      icon: Shield,
    },
    {
      name: "Classification Society Authorizations",
      description: "Major Classification Society Approvals",
      authority: "DNV, ABS, Lloyd's Register, Bureau Veritas",
      scope: "Marine equipment and components",
      icon: Award,
    },
    {
      name: "OEM Authorizations",
      description: "Original Equipment Manufacturer Authorizations",
      authority: "Leading Marine Equipment Manufacturers",
      scope: "Authorized distributor and service partner",
      icon: CheckCircle,
    },
    {
      name: "Export Licenses",
      description: "International Trade and Export Authorizations",
      authority: "UAE Ministry of Economy",
      scope: "Global marine equipment export",
      icon: FileText,
    },
  ];

  const guangzhouProducts = [
    {
      id: 1,
      src: "/Authorisation/Guangzhou/1.webp",
      alt: "Guangzhou HG Marine Product 1",
    },
    {
      id: 2,
      src: "/Authorisation/Guangzhou/2.webp",
      alt: "Guangzhou HG Marine Product 2",
    },
    {
      id: 3,
      src: "/Authorisation/Guangzhou/3.webp",
      alt: "Guangzhou HG Marine Product 3",
    },
  ];

  const handleInputChange = (e) => {
    setRequestForm({
      ...requestForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your request. We will send the authorization documents to your email shortly.",
    );
    setRequestForm({ name: "", email: "", company: "", documentType: "" });
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <span className="section-label">Certifications & Compliance</span>
            <h1 className="about-hero-title">Authorizations</h1>
            <p className="about-hero-subtitle">
              Our official authorizations and certifications demonstrate our
              commitment to quality, compliance, and excellence in the maritime
              industry.
            </p>
          </div>
          <div className="about-hero-icon">
            <Shield className="asp-global-icon" size={120} />
          </div>
        </div>
      </section>

      <div className="container">
        {/* Authorizations Grid */}
        <section className="about-section">
          <div className="section-header">
            <span className="section-label">Our Credentials</span>
            <h2>Certifications & Authorizations</h2>
          </div>
          <div className="grid-responsive-3">
            {authorizations.map((auth, index) => (
              <div key={index} className="auth-card">
                <div className="auth-icon">
                  <auth.icon size={24} />
                </div>
                <h3>{auth.name}</h3>
                <p className="auth-description">{auth.description}</p>
                <p className="auth-authority">
                  <strong>Authority:</strong> {auth.authority}
                </p>
                <p className="auth-scope">
                  <strong>Scope:</strong> {auth.scope}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Guangzhou HG Marine Co. Ltd. Authorization */}
        <section className="about-section guangzhou-auth-section">
          <div className="section-header">
            <span className="section-label">Authorized Partner</span>
            <h2>Guangzhou HG Marine Co. Ltd.</h2>
          </div>
          <div className="guangzhou-auth-card">
            <div className="guangzhou-header">
              <img
                src="/Authorisation/Guangzhou/logo.webp"
                alt="Guangzhou HG Marine Co. Ltd. Logo"
                className="guangzhou-logo"
              />
              <div className="guangzhou-info">
                <h3>Guangzhou HG Marine Co. Ltd.</h3>
                <p className="guangzhou-description">
                  Authorized distributor for marine equipment and spare parts.
                  Premium quality products for the maritime industry.
                </p>
                <span className="guangzhou-badge">Authorized Partner</span>
              </div>
            </div>
            <div className="guangzhou-products">
              <h4>Product Range</h4>
              {guangzhouProducts.map((product) => (
                <img
                  key={product.id}
                  src={product.src}
                  alt={product.alt}
                  className="guangzhou-product-image"
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "auto",
                    marginBottom: "20px",
                    display: "block",
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Certification Process */}
        <section className="about-section certification-process">
          <div className="section-header">
            <span className="section-label">Our Standards</span>
            <h2>Certification Process</h2>
          </div>
          <div className="process-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Rigorous Assessment</h3>
              <p>Comprehensive evaluation of our quality management systems</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Regular Audits</h3>
              <p>Periodic audits to maintain certification standards</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Continuous Improvement</h3>
              <p>Ongoing enhancement of processes and systems</p>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3>Compliance Monitoring</h3>
              <p>Regular monitoring of regulatory compliance</p>
            </div>
          </div>
        </section>

        {/* Partnership Authorizations */}
        <section className="about-section partnership-authorizations">
          <div className="section-header">
            <span className="section-label">Our Partners</span>
            <h2>Partnership Authorizations</h2>
          </div>
          <div className="partners-grid">
            <div className="partner-card">
              <h3>Authorized Distributor</h3>
              <p>
                Official distributor for leading marine equipment manufacturers
              </p>
            </div>
            <div className="partner-card">
              <h3>Service Partner</h3>
              <p>
                Authorized service provider for marine equipment maintenance
              </p>
            </div>
            <div className="partner-card">
              <h3>Technical Support</h3>
              <p>Authorized technical support and installation partner</p>
            </div>
          </div>
        </section>

        {/* Request Authorization Documents Section */}
        <section className="about-section request-documents-section">
          <div className="section-header">
            <span className="section-label">Get Documents</span>
            <h2>Request Authorization Documents</h2>
          </div>
          <div className="request-documents-container">
            <div className="request-documents-content">
              <div className="request-info">
                <div className="request-icon">
                  <Download size={48} />
                </div>
                <h3>Need Our Authorization Documents?</h3>
                <p>
                  Request official copies of our certifications, compliance
                  documents, and authorization certificates. We will send them
                  to your email within 24 hours.
                </p>
                <ul className="document-types">
                  <li>
                    <CheckCircle size={16} /> ISO 9001:2015 Certificate
                  </li>
                  <li>
                    <CheckCircle size={16} /> SOLAS Compliance Certificate
                  </li>
                  <li>
                    <CheckCircle size={16} /> MARPOL Compliance Certificate
                  </li>
                  <li>
                    <CheckCircle size={16} /> Classification Society Approvals
                  </li>
                  <li>
                    <CheckCircle size={16} /> OEM Authorization Letters
                  </li>
                  <li>
                    <CheckCircle size={16} /> Export License Documentation
                  </li>
                </ul>
              </div>
              <form className="request-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={requestForm.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={requestForm.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={requestForm.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="documentType">Document Type *</label>
                  <select
                    id="documentType"
                    name="documentType"
                    value={requestForm.documentType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select document type</option>
                    <option value="iso9001">ISO 9001:2015 Certificate</option>
                    <option value="solas">SOLAS Compliance Certificate</option>
                    <option value="marpol">
                      MARPOL Compliance Certificate
                    </option>
                    <option value="classification">
                      Classification Society Approvals
                    </option>
                    <option value="oem">OEM Authorization Letters</option>
                    <option value="export">Export License Documentation</option>
                    <option value="all">All Documents</option>
                  </select>
                </div>
                <button type="submit" className="submit-btn">
                  <Mail size={18} />
                  Request Documents
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Global Compliance */}
        <section className="about-section global-compliance">
          <div className="section-header">
            <span className="section-label">Worldwide Standards</span>
            <h2>Global Compliance</h2>
          </div>
          <div className="compliance-grid">
            <div className="compliance-item">
              <h3>International Standards</h3>
              <p>
                Compliance with international maritime standards and regulations
              </p>
            </div>
            <div className="compliance-item">
              <h3>Regional Requirements</h3>
              <p>Meeting specific regional and national requirements</p>
            </div>
            <div className="compliance-item">
              <h3>Industry Best Practices</h3>
              <p>Adherence to maritime industry best practices</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Authorizations;
