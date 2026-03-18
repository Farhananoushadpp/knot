/**
 * ASP Global Marine Trading LLC - Who We Are Page
 *
 * Company introduction and overview
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/About.css";

const WhoWeAre = () => {
  return (
    <div className="about-page">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">Who we are</h1>
          <p className="page-subtitle">
            Your trusted partner in marine and offshore solutions since 2005
          </p>
        </div>

        <section className="company-intro">
          <div className="content-with-icon">
            <div className="intro-content">
              <h2>ASP Global Marine Trading LLC</h2>
              <p>
                Founded in 2005 and part of Ocean Serenity Group, ASP Global
                Marine Trading LLC has established itself as a leading supplier
                of marine and offshore equipment. With strong sourcing networks
                across Europe and Asia, we understand the critical importance of
                quality, reliability, and timely delivery.
              </p>
              <p>
                Our commitment to excellence has earned us the trust of ship
                owners, operators, and offshore installations worldwide. We
                pride ourselves on our technical expertise, competitive pricing,
                and unwavering dedication to customer satisfaction.
              </p>
            </div>
            <div className="content-icon">
              <img
                src="/logo.svg"
                alt="ASP Global Marine Trading LLC"
                className="asp-global-icon"
              />
            </div>
          </div>
        </section>

        <section className="company-overview">
          <div className="overview-grid">
            <div className="overview-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z" />
                </svg>
              </div>
              <h3>Established 2005</h3>
              <p>Over 18 years of excellence in marine trading</p>
            </div>

            <div className="overview-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3>Global Reach</h3>
              <p>Serving clients in 50+ countries worldwide</p>
            </div>

            <div className="overview-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3>Quality Assured</h3>
              <p>SOLAS compliant and Class approved products</p>
            </div>
          </div>
        </section>

        <section className="group-companies">
          <h2>Part of Ocean Serenity Group</h2>
          <div className="companies-grid">
            <div className="company-item">
              <h4>Ocean Serenity FZ-LLC</h4>
              <p>Strategic management and operations</p>
            </div>
            <div className="company-item">
              <h4>Ocean Infinity Marine Service LLC</h4>
              <p>Marine services and technical support</p>
            </div>
            <div className="company-item">
              <h4>ANC Arabia Contracting Company</h4>
              <p>Contracting and project solutions</p>
            </div>
            <div className="company-item">
              <h4>Warmsol Marine & Industrial Company</h4>
              <p>Industrial and marine equipment</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhoWeAre;
