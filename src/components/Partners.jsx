/**
 * ASP Global Marine Trading LLC - Associated Partners Section
 * 
 * Premium logo grid with partner descriptions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/components/Partners.css';

const Partners = () => {
  const partners = [
    {
      name: 'Guangzhou HG Marine',
      description: 'Leading manufacturer of marine deck machinery and ship equipment, specializing in winches, anchors, and mooring systems.'
    },
    {
      name: 'Zhejiang Huayi Ship Equipment',
      description: 'Premium supplier of marine navigation equipment, communication systems, and electrical components for vessels.'
    },
    {
      name: 'Beijing Zhonghanghua Safety Valve',
      description: 'Specialized manufacturer of marine safety valves, pressure relief systems, and industrial valve solutions.'
    },
    {
      name: 'Changzhou Qianmai Mechanical',
      description: 'Expert in marine mechanical components, precision machining, and custom fabrication for shipbuilding industry.'
    }
  ];

  return (
    <section className="partners">
      <div className="container">
        <span className="section-label">STRATEGIC PARTNERSHIPS</span>
        <h2 className="partners-headline">Associated Partners</h2>
        <p className="partners-subtext">
          Collaborating with leading marine equipment manufacturers to deliver quality solutions
        </p>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo">
                <div className="logo-placeholder">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-description">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
