/**
 * ASP Global Marine Trading LLC - Mission & Vision Page
 *
 * Company mission, vision and values
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import {
  Shield,
  Eye,
  Star,
  CheckCircle,
  Calendar,
  Users,
  Lightbulb,
  Award,
} from "lucide-react";
import "../styles/pages/About.css";

const MissionVision = () => {
  return (
    <div className="about-page">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">Mission & Vision</h1>
          <p className="page-subtitle">
            Our guiding principles and future aspirations
          </p>
        </div>

        <section className="mission-vision-grid">
          <div className="mission-box">
            <div className="box-icon">
              <Shield size={48} />
            </div>
            <h2>Our Mission</h2>
            <p>
              To deliver accurate, reliable, and compliant marine solutions at
              the right time, every time.
            </p>
            <p>
              We focus on operational reliability, technical compliance,
              maritime industry standards, and long-term client partnerships.
            </p>
          </div>

          <div className="vision-box">
            <div className="box-icon">
              <Eye size={48} />
            </div>
            <h2>Our Vision</h2>
            <p>
              To become a globally trusted marine supply partner known for
              technical excellence and operational reliability.
            </p>
            <p>
              Serving shipowners, ship managers, operators, and offshore
              companies worldwide with unparalleled expertise.
            </p>
          </div>
        </section>

        <section className="core-values">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Star size={32} />
              </div>
              <h3>Excellence</h3>
              <p>Striving for the highest standards in everything we do</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <CheckCircle size={32} />
              </div>
              <h3>Integrity</h3>
              <p>
                Building trust through honest and transparent business practices
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Calendar size={32} />
              </div>
              <h3>Reliability</h3>
              <p>Consistently delivering on our promises and commitments</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Users size={32} />
              </div>
              <h3>Partnership</h3>
              <p>
                Working collaboratively with clients and suppliers for mutual
                success
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Lightbulb size={32} />
              </div>
              <h3>Innovation</h3>
              <p>
                Embracing new technologies and solutions to serve our clients
                better
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Award size={32} />
              </div>
              <h3>Quality</h3>
              <p>
                Delivering products and services that meet the highest standards
              </p>
            </div>
          </div>
        </section>

        <section className="strategic-focus">
          <h2>Strategic Focus Areas</h2>
          <div className="focus-areas">
            <div className="focus-item">
              <h3>Technical Excellence</h3>
              <p>
                Maintaining deep technical knowledge and expertise in marine
                equipment and systems
              </p>
            </div>
            <div className="focus-item">
              <h3>Global Sourcing</h3>
              <p>
                Building strong relationships with certified manufacturers and
                suppliers worldwide
              </p>
            </div>
            <div className="focus-item">
              <h3>Customer Centricity</h3>
              <p>
                Putting customer needs at the center of all our decisions and
                actions
              </p>
            </div>
            <div className="focus-item">
              <h3>Sustainable Growth</h3>
              <p>
                Growing our business responsibly while maintaining quality and
                service standards
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MissionVision;
