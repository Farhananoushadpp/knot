/**
 * ASP Global Marine Trading LLC - Boilers, Incinerators & Heat Exchangers Page
 *
 * Product Portfolio with Brand Logos
 */

import "../styles/pages/Products.css";

const BoilersIncineratorsHeatExchangers = () => {
  return (
    <div className="product-page" style={{ paddingBottom: "60px" }}>
      <div className="container" style={{ paddingTop: "40px" }}>
        {/* Page Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">
            BOILERS, INCINERATORS & HEAT EXCHANGERS
          </h1>
        </div>

        {/* Supported Brands Section */}
        <div className="brands-section">
          <div className="supported-brands-label">Brands Supported</div>
          <div className="brand-logos">
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 22.webp"
                alt="KANGRIM"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 23.webp"
                alt="Mitsubishi Motors"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 21.webp"
                alt="ALFA LAVAL"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
          </div>
        </div>

        {/* Product Display Grid */}
        <section className="product-display-grid">
          <div className="product-display-row">
            {/* Left Product - Boiler Components */}
            <div className="product-display-item">
              <div className="blue-text-box">
                <ul>
                  <li>Boiler Feed Pump</li>
                  <li>Boiler Tubes</li>
                  <li>Mud Box Cover & Gasket</li>
                  <li>Burner nozzle/Atomizer</li>
                  <li>Safety Valve</li>
                  <li>Pressure Gauge</li>
                  <li>Main Steam Stop Valve</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/Engine/engine-19.webp"
                  alt="Boiler Feed Pump, Boiler Tubes, Mud Box Cover & Gasket, Burner nozzle/Atomizer, Safety Valve, Pressure Gauge, Main Steam Stop Valve"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/1.webp";
                  }}
                />
              </div>
            </div>

            {/* Right Product - Control Components */}
            <div className="product-display-item">
              <div className="blue-text-box">
                <ul>
                  <li>Level Controller</li>
                  <li>Boiler Control PCB</li>
                  <li>Temperature Sensors</li>
                  <li>Pressure Switch</li>
                  <li>Burner Gaskets</li>
                  <li>Alarm Unit</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/Engine/engine-20.webp"
                  alt="Level Controller, Boiler Control PCB, Temperature Sensors, Pressure Switch, Burner Gaskets, Alarm Unit"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/2.webp";
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BoilersIncineratorsHeatExchangers;
