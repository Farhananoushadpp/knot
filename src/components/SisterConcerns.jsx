/**
 * ASP Global Marine Trading LLC - Sister Concerns Section
 * 
 * Corporate grid of group companies
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/components/SisterConcerns.css';

const SisterConcerns = () => {
  const companies = [
    {
      name: 'Ocean Serenity FZ-LLC',
      description: 'Marine services and solutions provider'
    },
    {
      name: 'Ocean Infinity Marine Service LLC',
      description: 'Comprehensive marine engineering services'
    },
    {
      name: 'ANC Arabia Contracting',
      description: 'Industrial contracting and solutions'
    },
    {
      name: 'Warmsol Marine & Industrial Company',
      description: 'Marine and industrial equipment solutions'
    }
  ];

  return (
    <section className="sister-concerns">
      <div className="container">
        <span className="section-label">GROUP COMPANIES</span>
        <h2 className="sister-headline">Sister Concerns</h2>
        <p className="sister-subtext">
          Part of a diversified maritime conglomerate
        </p>

        <div className="companies-grid">
          {companies.map((company, index) => (
            <div key={index} className="company-block">
              <div className="company-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="company-name">{company.name}</h3>
              <p className="company-desc">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SisterConcerns;
