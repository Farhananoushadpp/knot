/**
 * ASP Global Marine Trading LLC - HVAC Compressors & Spares Page
 *
 * Product Portfolio with Brand Logos and Manufacturer Tables
 */

import "../styles/pages/Products.css";

const HVACCompressors = () => {
  const manufacturers = [
    {
      name: "Sabroe",
      models: [
        "CMO18",
        "CMO24",
        "CMO26",
        "CMO36",
        "SMC 104",
        "SMC108",
        "SMC112",
        "",
        "",
        "",
      ],
    },
    {
      name: "Bitzer",
      models: ["2EES - 2Y TO 8FC-70.2Y...", "", "", "", "", "", "", "", "", ""],
    },
    {
      name: "Daikin",
      models: ["ZESTIA", "LXE", "", "", "", "", "", "", "", ""],
    },
  ];

  return (
    <div className="product-page" style={{ paddingBottom: "60px" }}>
      <div className="container" style={{ paddingTop: "40px" }}>
        {/* Page Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">HVAC COMPRESSORS & SPARES</h1>
        </div>

        {/* Supported Brands Section */}
        <div className="brands-section">
          <div className="supported-brands-label">
            Supported Brands & Series
          </div>
          <div className="brand-logos">
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 28.webp"
                alt="Sabroe"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 27.webp"
                alt="Bitzer"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 26.webp"
                alt="Daikin"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
          </div>
        </div>

        {/* Manufacturer Table */}
        <section className="manufacturer-table-section">
          <table className="manufacturer-table">
            <thead>
              <tr>
                <th className="col-manufacturer">Manufacturer</th>
                <th className="col-type">Model</th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
              </tr>
            </thead>
            <tbody>
              {manufacturers.map((manufacturer, index) => (
                <tr key={index}>
                  <td className="manufacturer-name">{manufacturer.name}</td>
                  <td className="sub-type">-</td>
                  {manufacturer.models.map((model, idx) => (
                    <td
                      key={idx}
                      className={model ? "model-value" : "empty-model"}
                    >
                      {model}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Product Display Grid */}
        <section className="product-display-grid">
          <div className="product-display-row">
            {/* Left Product */}
            <div className="product-display-item">
              <div className="blue-text-box">
                <ul>
                  <li>Piston Cylinders</li>
                  <li>Oil Rings</li>
                  <li>Gaskets & Seals</li>
                  <li>Valve & Bearings</li>
                  <li>Filters</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/Engine/engine-12.webp"
                  alt="Piston Cylinders, Oil Rings, Gaskets & Seals, Valve & Bearings, Filters"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/1.webp";
                  }}
                />
              </div>
            </div>

            {/* Right Product */}
            <div className="product-display-item">
              <div className="blue-text-box">
                <ul>
                  <li>Shaft Seal</li>
                  <li>Crank Shaft</li>
                  <li>Crank</li>
                  <li>Liner</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/Engine/engine-13.webp"
                  alt="Shaft Seal, Crank Shaft, Crank, Liner"
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

export default HVACCompressors;
