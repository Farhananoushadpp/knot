/**
 * Ocean Infinity - Ocean Wave Hero Section
 *
 * Modern hero design with ocean wave SVG background
 * Floating ship/anchor animations
 * Ocean Infinity Deep Blue Theme
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "../styles/components/Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Single video for home banner background
  const videoSrc = "/homebanner1.mp4";

  useEffect(() => {
    setIsVisible(true);

    // Use Font Loading API for better font loading detection
    const loadFont = async () => {
      try {
        const font = new FontFace(
          "Amsterdam Signature",
          "url(/amsterdam-signature.otf)",
        );
        await font.load();
        document.fonts.add(font);

        // Add font-loaded class to headline
        const headline = document.querySelector(".hero-headline");
        if (headline) {
          headline.classList.add("font-loaded");
        }
      } catch (error) {
        console.log("Font loading failed, using fallback");
      }
    };

    loadFont();
  }, []);

  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero-video-background">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video Overlay for content readability */}
        <div className="video-overlay"></div>
      </div>

      {/* Modern Hero Content */}
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          {/* Tagline - First in order */}
          <h1 className="hero-headline">
            &quot;Delivering Expectations for Every Voyage&quot;
          </h1>

          {/* Modern Description Card - Second */}
          <div className="hero-description-card">
            <p className="hero-description">
              Premier marine solutions and technical manpower supply in the UAE,
              setting benchmarks for excellence in the maritime industry through
              innovation and customer-centric approach.
            </p>
          </div>

          {/* Modern Subtitle - Third */}
          <div className="hero-subtitle-wrapper">
            <span className="accent-line"></span>
            <p className="hero-subtitle">UAE Maritime Industry Leader</p>
            <span className="accent-line"></span>
          </div>

          {/* Professional Trust Indicators - Fifth */}
          <div className="hero-trust-indicators">
            <span className="trust-badge">Technical Excellence</span>
            <span className="trust-badge">UAE Maritime Focus</span>
            <span className="trust-badge">24/7 Support</span>
          </div>

          {/* Scroll Down Indicator */}
          <div className="scroll-indicator">
            <ChevronDown size={32} color="#ffffff" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
