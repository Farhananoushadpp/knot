/**
 * ASP Global Marine Trading LLC - Pumps Marine & Industrial Page
 *
 * Product Portfolio with Brand Logos and Manufacturer Tables
 */

import "../styles/pages/Products.css";

const PumpsMarineIndustrial = () => {
  const manufacturers = [
    {
      name: "DESMI",
      models: ["", "", "", "", "", "", "", "", "", ""],
    },
    {
      name: "ALLWEILER",
      models: ["", "", "", "", "", "", "", "", "", ""],
    },
    {
      name: "GRUNDFOS",
      models: ["", "", "", "", "", "", "", "", "", ""],
    },
  ];

  return (
    <div className="product-page" style={{ paddingBottom: "60px" }}>
      <div className="container" style={{ paddingTop: "40px" }}>
        {/* Page Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">PUMPS - MARINE & INDUSTRIAL</h1>
        </div>

        {/* Supported Brands Section */}
        <div className="brands-section">
          <div className="supported-brands-label">
            Supported Brands & Series
          </div>
          <div className="brand-logos">
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 36.webp"
                alt="DESMI"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 35.webp"
                alt="ALLWEILER"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 34.webp"
                alt="GRUNDFOS"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
          </div>
        </div>

        {/* Manufacturer Table */}
        {/* <section className="manufacturer-table-section">
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
        </section> */}

        {/* Product Display Grid */}
        <section className="product-display-grid">
          <div className="product-display-row">
            {/* Left Product */}
            <div className="product-display-item">
              <div className="blue-text-box">
                <ul>
                  <li>Bearing</li>
                  <li>Shaft</li>
                  <li>Impeller</li>
                  <li>Mechanical Seal</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/Engine/engine-11.webp"
                  alt="Bearing, Shaft, Impeller, Mechanical Seal"
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
                  <li>Wear Ring</li>
                  <li>Shaft Sleeve</li>
                  <li>Coupling</li>
                  <li>Gasket</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/Engine/engine-10.webp"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/2.webp";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pump Models Table Section */}
        <section className="pump-models-section">
          <div className="pump-models-table-container">
            <table className="pump-models-table">
              <thead>
                <tr>
                  <th className="pump-col-manufacturer">Manufacturer</th>
                  <th className="pump-col-model-header">Model</th>
                </tr>
              </thead>
              <tbody>
                <tr className="pump-model-row">
                  <td className="pump-manufacturer-name">Desmi</td>
                  <td className="pump-models-list">
                    <span className="pump-model-badge">NSL 80</span>
                    <span className="pump-model-badge">NSL 100</span>
                    <span className="pump-model-badge">NSL 125</span>
                    <span className="pump-model-badge">NSL 150</span>
                    <span className="pump-model-badge">NSL 200</span>
                    <span className="pump-model-badge">NSL 250</span>
                    <span className="pump-model-badge">NSL 300</span>
                    <span className="pump-model-badge">NSL 500</span>
                  </td>
                </tr>
                <tr className="pump-model-row">
                  <td className="pump-manufacturer-name">Allweiler</td>
                  <td className="pump-models-list">
                    <span className="pump-model-badge">NB25-200</span>
                    <span className="pump-model-badge">NA65-300</span>
                    <span className="pump-model-badge">
                      NISM 50-120, 150-160, 50-200, 65-120
                    </span>
                    <span className="pump-model-badge">
                      NISM 65-200, 80-90, 100-315, 125-250
                    </span>
                    <span className="pump-model-badge">
                      SPF 20R-56, SPF 20R-96
                    </span>
                  </td>
                </tr>
                <tr className="pump-model-row">
                  <td className="pump-manufacturer-name">Grundfos</td>
                  <td className="pump-models-list">
                    <span className="pump-model-badge">CR/CM Series</span>
                    <span className="pump-model-badge">TP/NB & NK Series</span>
                    <span className="pump-model-badge">VLS/VL Series</span>
                    <span className="pump-model-badge">SEG/SEV/MTB Series</span>
                  </td>
                </tr>
                <tr className="pump-model-row">
                  <td className="pump-manufacturer-name">Jabsco</td>
                  <td className="pump-models-list">
                    <span className="pump-model-badge">VLS / PACO VLS</span>
                    <span className="pump-model-badge">CR Series</span>
                    <span className="pump-model-badge">NB / NK Series</span>
                    <span className="pump-model-badge">TP Series</span>
                    <span className="pump-model-badge">SEG / SEV / MTB</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PumpsMarineIndustrial;
