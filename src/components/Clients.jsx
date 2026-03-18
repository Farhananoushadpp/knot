/**
 * ASP Global Marine Trading LLC - Trusted Clients Section
 * 
 * Testimonial style client showcase
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/components/Clients.css';

const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <span className="section-label">TRUSTED BY INDUSTRY LEADERS</span>
        <h2 className="clients-headline">Our Trusted Clients</h2>

        <div className="client-showcase">
          <div className="client-block">
            <div className="client-logo">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="client-name">AL RAFEDAIN Marine Services LLC</h3>
            <p className="client-type">Marine Services & Equipment</p>
            <blockquote className="client-testimonial">
              &ldquo;ASP Global Marine has been our trusted partner for marine equipment supply. 
              Their commitment to quality and timely delivery has been exceptional.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
