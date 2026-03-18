/**
 * ASP Global Marine Trading LLC - Core Strengths Section
 * 
 * Horizontal card layout with 5 key strengths
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/components/Strengths.css';

const Strengths = () => {
  const strengths = [
    {
      icon: 'parts',
      title: 'Genuine, OEM & Equivalent Spare Parts Sourcing',
      description: 'Comprehensive sourcing of authentic marine components from trusted manufacturers worldwide'
    },
    {
      icon: 'logistics',
      title: 'Rapid Response & Global Logistics',
      description: 'Fast turnaround times with efficient worldwide shipping and delivery networks'
    },
    {
      icon: 'compliance',
      title: 'SOLAS, IMO & Class Approved Equipment',
      description: 'All products certified and compliant with international maritime safety standards'
    },
    {
      icon: 'pricing',
      title: 'Competitive Pricing Without Compromising Quality',
      description: 'Best value solutions maintaining highest standards of product excellence'
    },
    {
      icon: 'network',
      title: 'Strong Supplier Network Across Europe & Asia',
      description: 'Strategic partnerships with leading marine equipment manufacturers globally'
    }
  ];

  return (
    <section className="strengths">
      <div className="container">
        <span className="section-label">WHY CHOOSE US</span>
        <h2 className="strengths-headline">Our Core Strengths</h2>
        
        <div className="strengths-list">
          {strengths.map((item, index) => (
            <div key={index} className="strength-card">
              <div className="strength-icon">
                {item.icon === 'parts' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                )}
                {item.icon === 'logistics' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                )}
                {item.icon === 'compliance' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                  </svg>
                )}
                {item.icon === 'pricing' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                )}
                {item.icon === 'network' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                )}
              </div>
              <div className="strength-content">
                <h3 className="strength-title">{item.title}</h3>
                <p className="strength-description">{item.description}</p>
              </div>
              <div className="strength-number">{String(index + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
