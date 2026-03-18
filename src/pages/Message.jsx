/**
 * ASP Global Marine Trading LLC - Message Page
 *
 * Management message and company philosophy
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/About.css";

const Message = () => {
  return (
    <div className="about-page">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">Management Message</h1>
          <p className="page-subtitle">
            From our leadership team to our valued partners
          </p>
        </div>

        <section className="management-message">
          <div className="message-content">
            <div className="message-header">
              <h2>A Message from Our Management</h2>
              <div className="signature-line"></div>
            </div>

            <div className="message-body">
              <p className="message-opening">
                Dear Valued Partners and Clients,
              </p>

              <p>
                Welcome to ASP Global Marine Trading LLC. Since our
                establishment in 2005, we have been committed to excellence in
                the marine and offshore industry. Our journey has been guided by
                a simple yet powerful principle: delivering quality products and
                services that our clients can rely on, every time.
              </p>

              <p>
                The maritime industry operates in one of the most challenging
                environments on earth, where reliability, safety, and compliance
                are not just requirements—they are imperatives. We understand
                this responsibility deeply, and it reflects in every aspect of
                our operations, from supplier selection to final delivery.
              </p>

              <p>
                Our success is built on three fundamental pillars: technical
                expertise, global sourcing capabilities, and unwavering
                commitment to customer satisfaction. We have invested in
                building strong relationships with certified manufacturers and
                suppliers across Europe and Asia, ensuring that we can provide
                our clients with genuine, high-quality marine equipment and
                spares.
              </p>

              <p>
                As part of the Ocean Serenity Group, we benefit from shared
                expertise, resources, and a collective vision for excellence in
                maritime services. This enables us to offer comprehensive
                solutions that address the diverse needs of ship owners,
                operators, and offshore installations worldwide.
              </p>

              <p>
                Looking ahead, we remain focused on innovation, sustainability,
                and continuous improvement. We are committed to expanding our
                product range, enhancing our service capabilities, and
                strengthening our position as a trusted partner in the global
                maritime community.
              </p>

              <p className="message-closing">
                Thank you for your trust and partnership. We look forward to
                serving you with the same dedication and excellence that has
                defined ASP Global Marine for nearly two decades.
              </p>

              <div className="signature-section">
                <p className="signature-salutation">Sincerely,</p>
                <p className="signature-name">The Management Team</p>
                <p className="signature-title">ASP Global Marine Trading LLC</p>
                <p className="signature-group">Part of Ocean Serenity Group</p>
              </div>
            </div>
          </div>
        </section>

        <section className="company-philosophy">
          <h2>Our Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3>Quality First</h3>
              <p>
                We never compromise on quality, ensuring every product meets
                international standards
              </p>
            </div>

            <div className="philosophy-item">
              <div className="philosophy-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3>Trust & Integrity</h3>
              <p>
                Building lasting relationships through honest and transparent
                business practices
              </p>
            </div>

            <div className="philosophy-item">
              <div className="philosophy-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3>Customer Success</h3>
              <p>
                Your success is our success—we measure our achievements by your
                satisfaction
              </p>
            </div>

            <div className="philosophy-item">
              <div className="philosophy-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
              </div>
              <h3>Timely Delivery</h3>
              <p>
                Understanding the critical importance of timely delivery in
                maritime operations
              </p>
            </div>
          </div>
        </section>

        <section className="commitment-statement">
          <h2>Our Commitment</h2>
          <div className="commitment-content">
            <p>
              At ASP Global Marine Trading LLC, we are committed to being more
              than just a supplier—we strive to be a trusted partner in your
              maritime operations. Our team of experienced professionals works
              tirelessly to ensure that every interaction with us exceeds your
              expectations.
            </p>
            <p>
              We invite you to experience the ASP difference—where quality meets
              reliability, and service meets excellence. Together, let&apos;s
              navigate the seas of opportunity and success.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Message;
