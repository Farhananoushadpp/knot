/**
 * ASP Global Marine Trading LLC - Hydraulic Systems & Components Page
 *
 * Product Portfolio Grid Layout
 */

import "../styles/pages/Products.css";

const HydraulicSystems = () => {
  const products = [
    {
      id: 1,
      name: "Hatch cover hydraulic systems",
      image: "/products/hydraulic-hatch-cover.webp",
      textPosition: "left",
    },
    {
      id: 2,
      name: "Steering gear pumps",
      image: "/products/hydraulic-steering-gear.webp",
      textPosition: "right",
    },
    {
      id: 3,
      name: "Hydraulic motors & cylinders",
      image: "/products/hydraulic-motors.webp",
      textPosition: "bottom",
    },
    {
      id: 4,
      name: "Control blocks & valves",
      image: "/products/hydraulic-control-blocks.webp",
      textPosition: "bottom",
    },
    {
      id: 5,
      name: "Hydraulic power packs",
      image: "/products/hydraulic-power-packs.webp",
      textPosition: "bottom",
    },
    {
      id: 6,
      name: "Gearboxes",
      image: "/products/hydraulic-gearboxes.webp",
      textPosition: "left",
    },
    {
      id: 7,
      name: "Repair kits",
      image: "/products/hydraulic-repair-kits.webp",
      textPosition: "right",
    },
  ];

  return (
    <div className="product-page" style={{ paddingBottom: "60px" }}>
      <div className="container" style={{ paddingTop: "40px" }}>
        {/* Page Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">HYDRAULIC SYSTEMS & COMPONENTS</h1>
        </div>

        {/* Product Includes Label */}
        <div className="product-includes-section">
          <div className="product-includes-label">Product Includes</div>
        </div>

        {/* Hydraulic Grid Layout */}
        <section className="hydraulic-grid">
          {/* Row 1 - Two large items */}
          <div className="hydraulic-row hydraulic-row-large">
            {/* Hatch cover - text left, image right */}
            <div className="hydraulic-item hydraulic-item-horizontal">
              <div className="hydraulic-text-box">
                <span>Hatch cover hydraulic systems</span>
              </div>
              <div className="hydraulic-image-box">
                <img
                  src="/Engine/engine-25.webp"
                  alt="Hatch cover hydraulic systems"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/1.webp";
                  }}
                />
              </div>
            </div>

            {/* Steering gear - image left, text right */}
            <div className="hydraulic-item hydraulic-item-horizontal reverse">
              <div className="hydraulic-image-box">
                <img
                  src="/Engine/engine-26.webp"
                  alt="Steering gear pumps"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/2.webp";
                  }}
                />
              </div>
              <div className="hydraulic-text-box">
                <span>Steering gear pumps</span>
              </div>
            </div>
          </div>

          {/* Row 2 - Three items */}
          <div className="hydraulic-row hydraulic-row-three">
            <div className="hydraulic-item hydraulic-item-vertical">
              <div className="hydraulic-image-box">
                <img
                  src="/Engine/engine-29.webp"
                  alt="Hydraulic motors & cylinders"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/3.webp";
                  }}
                />
              </div>
              <div className="hydraulic-text-box">
                <span>Hydraulic motors & cylinders</span>
              </div>
            </div>

            <div className="hydraulic-item hydraulic-item-vertical">
              <div className="hydraulic-image-box">
                <img
                  src="/Engine/engine-30.webp"
                  alt="Control blocks & valves"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/4.webp";
                  }}
                />
              </div>
              <div className="hydraulic-text-box">
                <span>Control blocks & valves</span>
              </div>
            </div>

            <div className="hydraulic-item hydraulic-item-vertical">
              <div className="hydraulic-image-box">
                <img
                  src="/Engine/engine-27.webp"
                  alt="Hydraulic power packs"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/5.webp";
                  }}
                />
              </div>
              <div className="hydraulic-text-box">
                <span>Hydraulic power packs</span>
              </div>
            </div>
          </div>

          {/* Row 3 - Two items */}
          <div className="hydraulic-row hydraulic-row-large">
            {/* Gearboxes - text left, image right */}
            <div className="hydraulic-item hydraulic-item-horizontal">
              <div className="hydraulic-text-box">
                <span>Gearboxes</span>
              </div>
              <div className="hydraulic-image-box">
                <img
                  src="/Engine/engine-31.webp"
                  alt="Gearboxes"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/6.webp";
                  }}
                />
              </div>
            </div>

            {/* Repair kits - image left, text right */}
            <div className="hydraulic-item hydraulic-item-horizontal reverse">
              <div className="hydraulic-image-box">
                <img
                  src="/Engine/engine-28.webp"
                  alt="Repair kits"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/7.webp";
                  }}
                />
              </div>
              <div className="hydraulic-text-box">
                <span>Repair kits</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HydraulicSystems;
