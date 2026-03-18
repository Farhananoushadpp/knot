/**
 * ASP Global Marine Trading LLC - Our Commitment Section
 * 
 * 4 icon boxes in grid: Reliability, Responsiveness, Technical Accuracy, Right Product
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/components/Commitment.css';

const Commitment = () => {
  const commitments = [
    {
      icon: 'shield',
      title: 'Reliability',
      description: 'Consistent quality and dependable service delivery'
    },
    {
      icon: 'clock',
      title: 'Responsiveness',
      description: 'Rapid response to all customer needs and inquiries'
    },
    {
      icon: 'accuracy',
      title: 'Technical Accuracy',
      description: 'Precise specifications and technical compliance'
    },
    {
      icon: 'target',
      title: 'Right Product – Right Time – Every Time',
      description: 'Accurate sourcing with on-time delivery guarantee'
    }
  ];

  return (
    <section className="commitment">
      <div className="container">
        <span className="section-label">OUR PROMISE</span>
        <h2 className="commitment-headline">Our Commitment</h2>
        
        <div className="commitment-grid">
          {commitments.map((item, index) => (
            <div key={index} className="commitment-card">
              <div className="commitment-icon">
                {item.icon === 'shield' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                  </svg>
                )}
                {item.icon === 'clock' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"/>
                  </svg>
                )}
                {item.icon === 'accuracy' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z"/>
                  </svg>
                )}
                {item.icon === 'target' && (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"/>
                  </svg>
                )}
              </div>
              <h3 className="commitment-title">{item.title}</h3>
              <p className="commitment-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
