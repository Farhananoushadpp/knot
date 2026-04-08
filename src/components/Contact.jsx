/**
 * Ocean Infinity - Contact Section
 * Standard professional design with clean layout
 */

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Send,
  CreditCard,
  X,
  User,
  Building,
  AlertCircle,
  FileText,
  Upload,
  Paperclip,
} from "lucide-react";
import "../styles/components/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    urgencyLevel: "normal",
    tradingList: null,
    vatCertificate: null,
    enquiryAttachment: null,
  });
  const [showNFC, setShowNFC] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("company", formData.company || "Not provided");
      formDataObj.append("phone", formData.phone || "Not provided");
      formDataObj.append("subject", formData.subject);
      formDataObj.append("message", formData.message);
      formDataObj.append("urgency", formData.urgencyLevel);

      // Handle file uploads
      if (formData.tradingList) {
        formDataObj.append("tradingList", formData.tradingList);
      }
      if (formData.vatCertificate) {
        formDataObj.append("vatCertificate", formData.vatCertificate);
      }
      if (formData.enquiryAttachment) {
        formDataObj.append("enquiryAttachment", formData.enquiryAttachment);
      }

      // Netlify Forms - automatically handles submission
      // Netlify will send to info@knotandsail.com based on your Netlify dashboard settings
      const response = await fetch("/", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        alert(
          "Thank you for your inquiry. We will contact you within 24 hours.",
        );
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          urgencyLevel: "normal",
          tradingList: null,
          vatCertificate: null,
          enquiryAttachment: null,
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "Failed to send message. Please contact us directly at info@knotandsail.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      // Handle file inputs
      setFormData({
        ...formData,
        [name]: files[0] || null,
      });
    } else {
      // Handle regular inputs
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const showPersonNFC = (person) => {
    setSelectedPerson(person);
    setShowNFC(true);
  };

  const closeNFC = () => {
    setShowNFC(false);
    setSelectedPerson(null);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: [
        "Xavier Business Center, Office Suite No: A5 - 18",
        "Dubai - UAE",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+971 52 775 6765"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@oceaninfinitymarine.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Emergency: 24/7 Available",
      ],
    },
  ];

  const nfcCard = {
    company: {
      name: "Knot & Sail",
      title: "Marine Services & Technical Solutions",
      phone: "+971 52 775 6765",
      email: "info@knotandsail.com",
      website: "www.knotandsail.com",
      address: "Dubai - UAE",
    },
    arun: {
      name: "Arun V.V",
      title: "Senior Marine Consultant",
      phone: "+971 52 775 6765",
      email: "info@knotandsail.com",
      website: "www.knotandsail.com",
      address: "Dubai - UAE",
    },
  };

  return (
    <section
      id="contact"
      className="contact-std"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="std-container">
        {/* Section Header */}
        <div className="section-title-center">
          <h2>Contact Our Marine Experts</h2>
          <p>
            Connect with our team for comprehensive marine services and
            technical solutions
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Info Cards */}
          <div className="info-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">
                  <info.icon size={24} />
                </div>
                <div className="info-content">
                  <h4>{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* QR Codes Section */}
            <div className="qr-section">
              <h4>Scan to Connect</h4>
              <div className="qr-codes">
                <div className="qr-code-card">
                  <div className="qr-code-image">
                    <img
                      src="/qr-arun.svg"
                      alt="Arun V.V QR Code"
                      onError={(e) => {
                        // Fallback placeholder QR code
                        e.target.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23f0f0f0'/%3E%3Crect x='10' y='10' width='30' height='30' fill='%23000'/%3E%3Crect x='20' y='20' width='10' height='10' fill='%23f0f0f0'/%3E%3Crect x='80' y='10' width='30' height='30' fill='%23000'/%3E%3Crect x='90' y='20' width='10' height='10' fill='%23f0f0f0'/%3E%3Crect x='10' y='80' width='30' height='30' fill='%23000'/%3E%3Crect x='20' y='90' width='10' height='10' fill='%23f0f0f0'/%3E%3Crect x='50' y='50' width='20' height='20' fill='%23000'/%3E%3Ctext x='60' y='105' text-anchor='middle' font-family='Arial' font-size='10' fill='%23666'%3EArun V.V%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="qr-code-info">
                    <h5>Arun V.V</h5>
                    <p>Advisor-Technical & Commercial</p>
                    {/* <small>Scan for direct contact</small> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-card">
            <div className="form-header">
              <Send size={24} />
              <h3>Send us a Message</h3>
              <p>We&apos;ll respond within 24 hours</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="contact-form-std"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <div className="form-row-std">
                <div className="form-group-std">
                  <label>
                    <User size={16} /> Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group-std">
                  <label>
                    <Mail size={16} /> Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-row-std">
                <div className="form-group-std">
                  <label>
                    <Building size={16} /> Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>
                <div className="form-group-std">
                  <label>
                    <Phone size={16} /> Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
              </div>

              <div className="form-group-std">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Marine Equipment Inquiry"
                />
              </div>

              <div className="form-group-std">
                <label>Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your requirements..."
                />
              </div>

              <div className="form-group-std">
                <label>
                  <AlertCircle size={16} /> Urgency Level
                </label>
                <select
                  name="urgencyLevel"
                  value={formData.urgencyLevel}
                  onChange={handleChange}
                >
                  <option value="normal">Normal - 24 hours response</option>
                  <option value="urgent">Urgent - 6 hours response</option>
                  <option value="critical">
                    Critical - Immediate response
                  </option>
                </select>
              </div>

              {/* File Upload Fields */}
              <div className="form-row-std">
                <div className="form-group-std">
                  <label>
                    <FileText size={16} /> Trade License
                  </label>
                  <div className="file-upload-wrapper">
                    <input
                      type="file"
                      name="tradingList"
                      onChange={handleChange}
                      accept=".pdf,.doc,.docx,.xls,.xlsx"
                      className="file-input"
                      id="tradingList"
                    />
                    <label htmlFor="tradingList" className="file-input-label">
                      <Upload size={16} />
                      <span className="file-text">
                        {formData.tradingList
                          ? formData.tradingList.name
                          : "Choose file (PDF, DOC, XLS)"}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="form-group-std">
                  <label>
                    <FileText size={16} /> VAT Certificate
                  </label>
                  <div className="file-upload-wrapper">
                    <input
                      type="file"
                      name="vatCertificate"
                      onChange={handleChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="file-input"
                      id="vatCertificate"
                    />
                    <label
                      htmlFor="vatCertificate"
                      className="file-input-label"
                    >
                      <Upload size={16} />
                      <span className="file-text">
                        {formData.vatCertificate
                          ? formData.vatCertificate.name
                          : "Choose file (PDF, JPG, PNG)"}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group-std">
                <label>
                  <Paperclip size={16} /> Enquiry Attachment
                </label>
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    name="enquiryAttachment"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip,.rar"
                    className="file-input"
                    id="enquiryAttachment"
                  />
                  <label
                    htmlFor="enquiryAttachment"
                    className="file-input-label"
                  >
                    <Upload size={16} />
                    <span className="file-text">
                      {formData.enquiryAttachment
                        ? formData.enquiryAttachment.name
                        : "Choose file (PDF, DOC, Images, ZIP)"}
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn-std"
                disabled={isSubmitting}
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* NFC Modal */}
        {showNFC && (
          <div className="nfc-modal-overlay" onClick={closeNFC}>
            <div className="nfc-modal" onClick={(e) => e.stopPropagation()}>
              <div className="nfc-modal-header">
                <h3>Digital Business Card</h3>
                <button className="nfc-close-btn" onClick={closeNFC}>
                  <X size={20} />
                </button>
              </div>

              <div className="nfc-card">
                <div className="nfc-card-header">
                  <div className="nfc-logo">
                    <img src="/logo.webp" alt="ASP Logo" />
                  </div>
                  <div className="nfc-company-info">
                    <h4>{nfcCard[selectedPerson].name}</h4>
                    <p>{nfcCard[selectedPerson].title}</p>
                  </div>
                </div>

                <div className="nfc-card-body">
                  <div className="nfc-contact-item">
                    <Phone size={16} />
                    <span>{nfcCard[selectedPerson].phone}</span>
                  </div>
                  <div className="nfc-contact-item">
                    <Mail size={16} />
                    <span>{nfcCard[selectedPerson].email}</span>
                  </div>
                  <div className="nfc-contact-item">
                    <Globe size={16} />
                    <span>{nfcCard[selectedPerson].website}</span>
                  </div>
                  <div className="nfc-contact-item">
                    <MapPin size={16} />
                    <span>{nfcCard[selectedPerson].address}</span>
                  </div>
                </div>

                <div className="nfc-card-footer">
                  <div className="nfc-qr-section">
                    <div className="qr-code">
                      <img
                        src={`/qr-${selectedPerson}.png`}
                        alt={`${nfcCard[selectedPerson].name} QR Code`}
                        onError={(e) => {
                          // Fallback placeholder QR code
                          e.target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23f0f0f0'/%3E%3Ctext x='40' y='45' text-anchor='middle' font-family='Arial' font-size='8' fill='%23666'%3EQR CODE%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <span className="qr-label">Scan for Contact</span>
                    </div>
                  </div>
                  <div className="nfc-chip">
                    <div className="chip-lines"></div>
                  </div>
                  <div className="nfc-wifi-icon">
                    <div className="wifi-signal"></div>
                  </div>
                </div>
              </div>

              <div className="nfc-actions">
                <button className="nfc-action-btn primary">
                  <CreditCard size={16} />
                  Add to Contacts
                </button>
                <button className="nfc-action-btn secondary">
                  <Mail size={16} />
                  Share via Email
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
