/**
 * ASP Global Marine Trading LLC - Quality Policy Page
 *
 * Company quality policy and standards
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/About.css";

const QualityPolicy = () => {
  const qualityPrinciples = [
    {
      title: "Customer Focus",
      description:
        "Understanding and exceeding customer expectations through quality products and services",
    },
    {
      title: "Continuous Improvement",
      description:
        "Regular review and enhancement of processes to achieve operational excellence",
    },
    {
      title: "Compliance Excellence",
      description:
        "Strict adherence to international maritime standards and regulations",
    },
    {
      title: "Supplier Partnership",
      description:
        "Working with certified suppliers to ensure consistent quality",
    },
    {
      title: "Technical Expertise",
      description:
        "Maintaining deep knowledge of marine equipment and industry requirements",
    },
    {
      title: "Reliability Assurance",
      description:
        "Delivering products that meet or exceed specified performance standards",
    },
  ];

  return (
    <div className="about-page">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">Quality Policy</h1>
          <p className="page-subtitle">
            Our commitment to excellence in every aspect of our operations
          </p>
        </div>

        <section className="quality-statement">
          <div className="policy-content">
            <h2>Our Quality Commitment</h2>
            <p>
              ASP Global Marine Trading LLC is committed to delivering accurate,
              reliable, and compliant marine solutions at the right time, every
              time. We focus on operational reliability, technical compliance,
              maritime industry standards, and long-term client partnerships.
            </p>
            <p>
              Our quality management system is designed to ensure that all
              products and services meet the highest standards of safety,
              reliability, and performance expected by the maritime industry.
            </p>
          </div>
        </section>

        <section className="quality-objectives">
          <h2>Quality Objectives</h2>
          <div className="objectives-list">
            <div className="objective-item">
              <h3>Maintain 100% Compliance</h3>
              <p>
                Ensure all products meet SOLAS, IMO, and classification society
                requirements
              </p>
            </div>
            <div className="objective-item">
              <h3>Zero Defect Delivery</h3>
              <p>
                Implement rigorous quality control to eliminate product defects
              </p>
            </div>
            <div className="objective-item">
              <h3>On-Time Delivery</h3>
              <p>
                Achieve 98%+ on-time delivery performance for all customer
                orders
              </p>
            </div>
            <div className="objective-item">
              <h3>Customer Satisfaction</h3>
              <p>
                Maintain 95%+ customer satisfaction through exceptional service
              </p>
            </div>
          </div>
        </section>

        <section className="quality-principles">
          <h2>Quality Principles</h2>
          <div className="principles-grid">
            {qualityPrinciples.map((principle, index) => (
              <div key={index} className="principle-card">
                <div className="principle-number">{index + 1}</div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="quality-process">
          <h2>Our Quality Process</h2>
          <div className="process-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Supplier Verification</h3>
              <p>Rigorous vetting and certification of all suppliers</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Product Inspection</h3>
              <p>Comprehensive quality checks before shipment</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Documentation Review</h3>
              <p>Verification of all certificates and compliance documents</p>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3>Customer Feedback</h3>
              <p>Continuous improvement based on customer input</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QualityPolicy;
