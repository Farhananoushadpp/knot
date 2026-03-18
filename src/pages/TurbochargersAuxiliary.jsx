/**
 * ASP Global Marine Trading LLC - Turbochargers & Auxiliary Engine Products Page
 *
 * Product Portfolio with Brand Logos and Manufacturer Tables
 */

import "../styles/pages/Products.css";

const TurbochargersAuxiliary = () => {
  const manufacturers = [
    {
      name: "ABB",
      models: ["NR", "VTR", "VTC series", "", "", "", "", "", "", ""],
    },
    {
      name: "KBB",
      models: ["ST", "HPR series", "", "", "", "", "", "", "", ""],
    },
    {
      name: "Mitsubishi",
      models: ["MET", "HPR series", "", "", "", "", "", "", "", ""],
    },
  ];

  return (
    <div className="product-page" style={{ paddingBottom: "80px" }}>
      <div className="container" style={{ paddingTop: "40px" }}>
        {/* Page Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">
            TURBOCHARGERS & AUXILIARY ENGINE PRODUCTS
          </h1>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "40px" }}>
        {/* Supported Brands Section */}
        <div className="brands-section">
          <div className="supported-brands-label">
            Supported Brands & Series
          </div>
          <div className="brand-logos">
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 29.webp"
                alt="ABB"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 24.webp"
                alt="KBB.COM"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 25.webp"
                alt="Mitsubishi Motors"
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
                  <li>Turbocharger Units</li>
                  <li>Bearings</li>
                  <li>Turbo impeller wheels</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/Engine/engine-14.webp"
                  alt="Turbocharger Units, Bearings, Turbo Impeller Wheels"
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
                  <li>Repair Kits</li>
                  <li>Seal Plate</li>
                  <li>Piston rings/Seal</li>
                  <li>Gasket</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/Engine/engine-15.webp"
                  alt="Repair Kits, Seal Plates, Piston Rings, Seals, Gaskets"
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

export default TurbochargersAuxiliary;
