/**
 * ASP Global Marine Trading LLC - Oil Purifiers & Filters Page
 *
 * Product Portfolio with GEA and Alfa Laval Brands
 */

import { Settings, CheckCircle, Award } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import "../styles/pages/Products.css";

const Purifiers = () => {
  const manufacturers = [
    {
      name: "GEA WESFALIA",
      models: ["OSE - 5-20 - SERIES", "", "", "", ""],
    },
    {
      name: "ALFA LAVAL",
      models: [
        "PI50 - P615 - SERIES",
        "8815 - S937- SERIES",
        "FOPX - SERIES",
        "MOPX -SERIES",
        "",
      ],
    },
  ];

  return (
    <div className="product-page">
      <div className="container" style={{ paddingTop: "40px" }}>
        {/* Page Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">PURIFIERS</h1>
        </div>
      </div>

      <div className="container">
        {/* Supported Brands Section */}
        <div className="brands-section">
          <div className="supported-brands-label">Brands Supported</div>
          <div className="brand-logos">
            <div className="brand-logo-item">
              <img
                src="/brands/Asset 37.webp"
                alt="GEA"
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

        {/* Product Cards Section */}
        <section className="product-cards-section">
          <div className="product-cards-grid">
            <div className="product-card-item">
              <div className="product-card-content blue-card">
                <h3>
                  Valve Block
                  <br />
                  Pressure Transmitter
                  <br />
                  Rectangular Ring
                  <br />
                  Valve Plug
                  <br />
                  Vibration Damper
                </h3>
              </div>
              <div className="product-card-image">
                <img
                  src="/Engine/engine-23.webp"
                  alt="Valve Block, Pressure Transmitter, Rectangular Ring, Valve Plug, Vibration Damper"
                  onError={(e) => {
                    e.target.src = "/1.webp";
                  }}
                />
              </div>
            </div>

            <div className="product-card-item reverse">
              <div className="product-card-image">
                <img
                  src="/Engine/engine-24.webp"
                  alt="O Ring, Covering Washer, Spanner For Bowl, Compression Tool, Quick Coupling-NRV"
                  onError={(e) => {
                    e.target.src = "/2.webp";
                  }}
                />
              </div>
              <div className="product-card-content blue-card">
                <h3>
                  O Ring
                  <br />
                  Covering Washer
                  <br />
                  Spanner For Bowl
                  <br />
                  Compression Tool
                  <br />
                  Quick Coupling-NRV
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Purifiers;
