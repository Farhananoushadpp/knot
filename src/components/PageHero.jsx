/**
 * ASP Global Marine Trading LLC - Reusable PageHero Component
 *
 * Standardized attractive hero section for all pages (excluding Home)
 * Features: Gradient background, title, subtitle, badges
 *
 * @param {Object} props
 * @param {string} props.title - Main page title (required)
 * @param {string} [props.subtitle] - Section label/subtitle
 * @param {Array<{icon?: React.Component, text: string}>} [props.badges=[]] - Badge items
 * @param {React.Component} [props.icon] - Hero icon component
 * @param {'default'|'compact'|'large'} [props.variant='default'] - Hero size variant
 * @param {string} [props.backgroundImage] - Background image URL
 */

import "../styles/components/PageHero.css";

const PageHero = ({
  title,
  subtitle,
  badges = [],
  icon: Icon,
  variant = "default",
  backgroundImage = null,
}) => {
  return (
    <section
      className={`page-hero page-hero--${variant}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(12, 45, 72, 0.7), rgba(12, 45, 72, 0.7)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {/* Background Pattern */}
      <div className="page-hero__bg-pattern"></div>

      {/* Animated Grid Overlay */}
      {/* <div className="page-hero__grid"></div> */}

      {/* Radial Gradient Orbs */}
      <div className="page-hero__orb page-hero__orb--1"></div>
      <div className="page-hero__orb page-hero__orb--2"></div>

      <div>
        {/* Hero Content */}
        <div className="page-hero__content">
          <div className="page-hero__text">
            {/* Section Label */}
            {subtitle && <span className="page-hero__label">{subtitle}</span>}

            {/* Main Title */}
            <h1 className="page-hero__title">{title}</h1>

            {/* Description - optional slot */}
            <div className="page-hero__description">
              <slot name="description"></slot>
            </div>

            {/* Certification Badges */}
            {badges.length > 0 && (
              <div className="page-hero__badges">
                {badges.map((badge, index) => (
                  <div key={index} className="page-hero__badge">
                    {badge.icon && (
                      <badge.icon size={18} className="badge__icon" />
                    )}
                    <span className="badge__text">{badge.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Optional Icon/Visual - Smaller for compact design */}
          {Icon && (
            <div className="page-hero__visual">
              <div className="page-hero__icon-wrapper">
                <Icon size={48} className="page-hero__icon" strokeWidth={1.5} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Wave - Removed for compact design */}
      {/* <div className="page-hero__wave">...</div> */}
    </section>
  );
};

export default PageHero;
