/**
 * ASP Global Marine Trading LLC - Air Compressor Spares Page
 *
 * Product Portfolio with Brand Logos and Manufacturer Table
 */

import "../styles/pages/Products.css";

const AirCompressorSpares = () => {
  const manufacturers = [
    {
      name: "TANABE",
      serial: "H Serial",
      models: ["H63, H54, H64.H264.", "H73, H273, H373,"],
    },
    {
      name: "JP SAUER & SOHN",
      serial: "WP Serials",
      models: ["WP15L. WP22L, WP33L", "WP-100, WP10IL.WP12IL"],
    },
    {
      name: "SPERRE",
      serial: "HV.HL,xwSerial",
      models: [
        "HV1-56A,HV2-200.HV2, 210, HV2-240,HV2-270",
        "HL2-70.HL2-90.HL2-10.HL2-140. HL2-160.HL2-170",
      ],
    },
    {
      name: "HATLAPA",
      serial: "W Serial",
      models: ["W110, W140", "W220, W280"],
    },
  ];

  return (
    <div className="product-page" style={{ paddingBottom: "60px" }}>
      <div className="container" style={{ paddingTop: "40px" }}>
        {/* Page Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">AIR COMPRESSOR SPARES</h1>
        </div>

        {/* Supported Brands Section */}
        <div className="brands-section">
          <div className="supported-brands-label">Brands Supported</div>
          <div className="brand-logos">
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 33.webp"
                alt="TANABE COMPRESSORS"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 32.webp"
                alt="Sauer Compressors"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 31.webp"
                alt="SPERRE"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.src = "/logo.webp";
                }}
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 30.webp"
                alt="HATLAPA"
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
          <table className="manufacturer-table compressor-table">
            <thead>
              <tr>
                <th className="col-manufacturer">Manufacturer</th>
                <th className="col-serial">Serial</th>
                <th className="col-models">Model</th>
                <th className="col-models"></th>
              </tr>
            </thead>
            <tbody>
              {manufacturers.map((manufacturer, index) => (
                <tr key={index}>
                  <td className="manufacturer-name">{manufacturer.name}</td>
                  <td className="serial-type">{manufacturer.serial}</td>
                  {manufacturer.models.map((model, idx) => (
                    <td key={idx} className="model-value">
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
            {/* Left Product - Piston Components */}
            <div className="product-display-item">
              <div className="blue-text-box">
                <ul>
                  <li>Piston Rings</li>
                  <li>Piston & Gudgeon Pin</li>
                  <li>Cylinder Liner</li>
                  <li>Inlet/Exhaust Valve</li>
                  <li>Connecting Rod Bearing</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/Engine/engine-21.webp"
                  alt="Piston Rings, Piston & Gudgeon Pin, Cylinder Liner, Inlet/Exhaust Valve, Connecting Rod Bearing"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/1.webp";
                  }}
                />
              </div>
            </div>

            {/* Right Product - Valve Components */}
            <div className="product-display-item">
              <div className="blue-text-box">
                <ul>
                  <li>LP/HP Valve</li>
                  <li>NRV Valve</li>
                  <li>Oil/Mechanical Seal</li>
                  <li>Lube Oil Pump</li>
                  <li>Unloader Valve</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/Engine/engine-22.webp"
                  alt="LP/HP Valve, NRV Valve, Oil/Mechanical Seal, Lube Oil Pump, Unloader Valve"
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

export default AirCompressorSpares;
