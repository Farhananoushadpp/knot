import React from "react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import "../styles/pages/Careers.css";

const Careers = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Careers - Knot & Sail",
    description:
      "Join our team at Knot & Sail. Explore career opportunities in marine services industry.",
    url: "https://knotandsail.com/careers",
    mainEntity: {
      "@type": "Organization",
      name: "Knot & Sail",
      url: "https://knotandsail.com",
      logo: "https://knotandsail.com/logo.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Xavier Business Center, Office Suite No: A5 - 18",
        addressLocality: "Dubai",
        addressCountry: "UAE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971 52 775 6765",
        contactType: "careers",
        email: "info@knotandsail.com",
      },
    },
  };

  return (
    <>
      <SEO
        title="Careers - Join Our Team | Knot & Sail"
        description="Explore career opportunities at Knot & Sail. Join our team of marine services experts in Dubai UAE. Technical, operations, and administrative positions available."
        keywords="marine services careers, dubai marine jobs, marine technician jobs, hydro blasting jobs, tank cleaning jobs, marine painting jobs, Knot & Sail careers, marine industry jobs UAE"
        canonicalUrl="https://knotandsail.com/careers"
        structuredData={structuredData}
      />

      {/* Page Hero */}
      <PageHero
        title="Join Our Team"
        subtitle="Build Your Career in Marine Industry"
        badge="Career Opportunities"
        backgroundImage="/ocean.webp"
      />

      {/* Careers Introduction */}
      <section className="careers-intro">
        <div className="container">
          <div className="careers-intro-content">
            <h2>Shape the Future of Marine Industry</h2>
            <p>
              At ASP Global Marine Trading LLC, we're always looking for
              talented individuals who share our passion for excellence in the
              marine industry. As part of the Ocean Serenity Group, we offer
              exciting career opportunities for professionals who want to make a
              difference in global marine equipment supply.
            </p>
            <p>
              Join our dynamic team in Dubai and contribute to supplying
              high-quality marine equipment and spare parts to customers
              worldwide. We believe in nurturing talent, fostering growth, and
              providing a supportive work environment.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="std-section">
        <div className="std-container">
          <h2 className="std-title">Why Join ASP Global Marine?</h2>
          <div className="careers-why-join">
            <div className="careers-why-content">
              <p>
                At ASP Global Marine Trading LLC, we offer a dynamic work
                environment where you can grow your career in the marine
                equipment industry. As part of the Ocean Serenity Group, we
                provide competitive compensation, comprehensive benefits, and
                opportunities for professional development.
              </p>
              <p>
                Join our team of experts in Dubai and contribute to supplying
                high-quality marine equipment and spare parts to customers
                worldwide. We value talent, innovation, and dedication to
                excellence.
              </p>
              {/* <ul>
                <li>Competitive salary and benefits package</li>
                <li>Health insurance coverage</li>
                <li>Annual performance bonuses</li>
                <li>Professional development opportunities</li>
                <li>International exposure and travel opportunities</li>
                <li>Supportive work environment</li>
                <li>Career growth prospects</li>
                <li>Company-sponsored training programs</li>
              </ul> */}
            </div>
            <div className="careers-why-image">
              <img
                src="/home.jpg"
                alt="ASP Global Marine Team"
                className="careers-team-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="careers-contact-section">
        <div className="std-container">
          <div className="std-content-centered">
            <h2 className="std-title">Ready to Join Our Team?</h2>
            <p className="std-subtitle">
              If you don't see a suitable position but believe you would be a
              great addition to our team, we'd love to hear from you. Send us
              your resume and a brief introduction about yourself.
            </p>

            <div className="careers-contact-info">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:careers@oceanserenitygroup.com">
                  careers@oceanserenitygroup.com
                </a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <a href="tel:+97145724542">+971 4 572 4542</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                Xavier Business Center, Office Suite A5-18, Dubai, UAE
              </div>
            </div>

            <div className="careers-cta-button">
              <a
                href="mailto:careers@oceanserenitygroup.com?subject=Career Inquiry - ASP Global Marine Trading LLC&body=Dear Hiring Manager,%0D%0A%0D%0AI am interested in exploring career opportunities at ASP Global Marine Trading LLC.%0D%0A%0D%0APlease find my resume attached for your consideration.%0D%0A%0D%0AThank you for your time and consideration.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]%0D%0A[Your Phone Number]%0D%0A[Your Current Position/Experience]"
                className="std-btn std-btn-primary"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
