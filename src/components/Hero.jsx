/**
 * Knot & Sail - Ocean Wave Hero Section
 *
 * Modern hero design with ocean wave SVG background
 * Floating ship/anchor animations
 * ASP Ocean Blue Theme
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "../styles/components/Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoSlides = [
    "/homebanner1.mp4",
    "/homebanner3.mp4",
    "/homebanner2.mp4",
  ];

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate videos every 10 seconds
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === videoSlides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 10000);

    return () => clearInterval(videoInterval);

    // Use Font Loading API for better font loading detection
    const loadFont = async () => {
      try {
        const font = new FontFace(
          "Amsterdam Signature",
          "url(./amsterdam-signature.otf)",
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
        const headline = document.querySelector(".hero-headline");
        if (headline) {
          headline.classList.add("font-loaded");
        }
      }
    };

    loadFont();
  }, []);

  return (
    <section className="hero">
      {/* Video Background with Slideshow */}
      <div className="hero-video-background">
        <video
          key={currentVideoIndex}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src={videoSlides[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video Overlay for content readability */}
        <div className="video-overlay"></div>

        {/* Video Slide Indicators */}
        <div className="video-indicators">
          {videoSlides.map((_, index) => (
            <button
              key={index}
              className={`video-indicator ${index === currentVideoIndex ? "active" : ""}`}
              onClick={() => setCurrentVideoIndex(index)}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
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
