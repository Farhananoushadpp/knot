
const Certifications = () => {
  const certifications = [
    {
      name: "SOLAS Regulations",
      description: "Safety of Life at Sea compliance",
      icon: "icon-solas"
    },
    {
      name: "IMO Standards",
      description: "International Maritime Organization standards",
      icon: "icon-global"
    },
    {
      name: "Classification Society Approvals",
      description: "Major classification society certifications",
      icon: "icon-cert"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Quality & Compliance</h2>
        <div className="certifications-content">
          <p className="certifications-intro">
            All products supplied comply with:
          </p>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="certification-icon"><span className={cert.icon}></span></div>
                <h3>{cert.name}</h3>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
          <div className="certification-badges">
            <div className="badge-placeholder">
              <div className="badge-icon icon-iso"></div>
              <span>ISO 9001:2015</span>
            </div>
            <div className="badge-placeholder">
              <div className="badge-icon icon-maritime"></div>
              <span>Maritime Certified</span>
            </div>
            <div className="badge-placeholder">
              <div className="badge-icon icon-global"></div>
              <span>Global Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
