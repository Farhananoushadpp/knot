/**
 * Knot & Sail - Services Page
 *
 * Comprehensive marine services including hydro blasting,
 * tank cleaning, painting works, and technical manpower
 */

import { Helmet } from "react-helmet-async";
import PageHero from "../components/PageHero.jsx";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Marine Services | Knot & Sail</title>
        <meta
          name="description"
          content="Professional marine services including hydro blasting, tank cleaning, painting works, antifouling coating, steel fabrication, and technical manpower supply across UAE ports."
        />
        <meta
          name="keywords"
          content="marine services, hydro blasting, tank cleaning, painting works, antifouling coating, steel fabrication, manpower supply, Knot & Sail, UAE ports"
        />
        <meta property="og:title" content="Marine Services | Knot & Sail" />
        <meta
          property="og:description"
          content="Comprehensive marine services by Knot & Sail across all UAE ports with professional expertise and international standards compliance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://knotandsail.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marine Services | Knot & Sail" />
        <meta
          name="twitter:description"
          content="Professional marine services including hydro blasting, tank cleaning, painting works, and more by Knot & Sail."
        />
      </Helmet>

      <div className="services-page">
        {/* Page Hero */}
        <PageHero
          title="Marine Services"
          subtitle="Comprehensive Marine Solutions Across All UAE Ports"
          description="At Knot & Sail, we deliver a full spectrum of dependable and high-quality marine services tailored to the needs of ship owners and ship management companies across all major UAE ports."
        />

        {/* Services Section - Professional Design */}
        <section className="services-section-professional">
          <div className="container">
            <div className="services-header">
              <h2 className="services-title">Knot & Sail Services</h2>
              <p className="services-subtitle">
                Professional marine solutions across all UAE ports
              </p>
            </div>

            <div className="services-sections-layout">
              {/* 1. Hydro Blasting Section */}
              <section className="service-section-detailed">
                <div className="service-header">
                  <h3 className="service-section-title">Hydro Blasting</h3>
                </div>
                <div className="service-content-layout-balanced">
                  <div className="service-left-column">
                    <div className="service-images-section">
                      <div className="service-images-row">
                        <img
                          src="/knot and sail images/Asset 33.webp"
                          alt="Hydro Blasting Service 1"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Asset 34.webp"
                          alt="Hydro Blasting Service 2"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Asset 35.webp"
                          alt="Hydro Blasting Service 3"
                          className="service-section-image"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="service-desc-detailed">
                        This process enhances the durability of coatings,
                        improves vessel maintenance, and helps ship owners
                        maintain compliance with international maritime
                        standards. With a team of skilled professionals and
                        state-of-the-art equipment, we provide hydro blasting
                        services across all UAE ports, delivering fast,
                        efficient, and cost-effective solutions.
                      </p>
                    </div>
                  </div>
                  <div className="service-right-column">
                    <div className="service-text-section">
                      <p className="service-desc-detailed">
                        At Knot & Sail, we specialize in hydro blasting, a
                        highly effective and eco-friendly cleaning method
                        designed to remove rust, paint, scale, and contaminants
                        from ship surfaces. Using high-pressure water jets, our
                        hydro blasting services ensure thorough surface
                        preparation without causing damage to the underlying
                        structure.
                      </p>
                      <p className="service-desc-detailed">
                        Whether it's hull cleaning, deck maintenance, or engine
                        room descaling, our expertise guarantees superior
                        results with minimal downtime. At Knot & Sail, we are
                        committed to keeping your vessels in top condition,
                        ensuring smooth sailing and long-term performance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. Tank Cleaning Section */}
              <section className="service-section-detailed">
                <div className="service-header">
                  <h3 className="service-section-title">
                    Tank Cleaning Service
                  </h3>
                </div>
                <div className="service-content-layout-balanced">
                  <div className="service-left-column">
                    <div className="service-images-section">
                      <div className="service-images-row">
                        <img
                          src="/knot and sail images/Asset 37.webp"
                          alt="Tank Cleaning Service 1"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Asset 38.webp"
                          alt="Tank Cleaning Service 2"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Asset 39.webp"
                          alt="Tank Cleaning Service 3"
                          className="service-section-image"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="service-desc-detailed">
                        We remove sludge, residues, and contaminants to prevent
                        corrosion, improve operational efficiency, and maintain
                        regulatory compliance. With a commitment to safety and
                        environmental responsibility, our tank cleaning services
                        are designed to minimize downtime and maximize
                        performance.
                      </p>
                    </div>
                  </div>
                  <div className="service-right-column">
                    <div className="service-text-section">
                      <p className="service-desc-detailed">
                        At Knot & Sail, we provide professional tank cleaning
                        services to ensure the safety, efficiency, and
                        compliance of your vessel's storage systems. Our expert
                        team specializes in cleaning fuel tanks, ballast tanks,
                        cargo tanks, and water tanks using advanced techniques,
                        including high-pressure hydro blasting and chemical
                        cleaning.
                      </p>
                      <p className="service-desc-detailed">
                        Available at all UAE ports, we deliver fast, reliable,
                        and cost-effective solutions tailored to your vessel's
                        needs. Trust Knot & Sail for clean, well-maintained
                        tanks that keep your ship running at its best.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Painting Works Section */}
              <section className="service-section-detailed">
                <div className="service-header">
                  <h3 className="service-section-title">Painting Works</h3>
                </div>
                <div className="service-content-layout-balanced">
                  <div className="service-left-column">
                    <div className="service-images-section">
                      <div className="service-images-row">
                        <img
                          src="/knot and sail images/Asset 40.webp"
                          alt="Painting Works Service 1"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Asset 41.webp"
                          alt="Painting Works Service 2"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Asset 42.webp"
                          alt="Painting Works Service 3"
                          className="service-section-image"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="service-desc-detailed">
                        Our team of skilled experts is dedicated to ensuring
                        every project is executed with precision and in full
                        compliance with international maritime standards. At the
                        core of our service offering is our specialization in
                        Painting Works, which plays a vital role in preserving
                        vessel integrity and enhancing operational efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="service-right-column">
                    <div className="service-text-section">
                      <p className="service-desc-detailed">
                        Knot & Sail is a premier service provider in the UAE's
                        dynamic marine market, delivering a full spectrum of
                        dependable and high-quality services tailored to the
                        needs of ship owners and ship management companies. With
                        an extensive presence across all major UAE ports, we
                        have built a strong reputation for excellence,
                        reliability, and professionalism.
                      </p>
                      <p className="service-desc-detailed">
                        We provide comprehensive painting solutions—from surface
                        preparation to final coating—using only top-grade
                        materials and the latest application techniques. Whether
                        it's routine maintenance or specialized coating for
                        extreme conditions, Knot & Sail ensures superior results
                        that extend vessel lifespan, reduce downtime, and meet
                        the highest industry standards.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Antifouling Anticavitation Coating Section */}
              <section className="service-section-detailed">
                <div className="service-header">
                  <h3 className="service-section-title">
                    Antifouling Anticavitation Coating
                  </h3>
                </div>
                <div className="service-content-layout-balanced">
                  <div className="service-left-column">
                    <div className="service-images-section">
                      <div className="service-images-row">
                        <img
                          src="/knot and sail images/Asset 43.webp"
                          alt="Antifouling Coating Service 1"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Asset 44.webp"
                          alt="Antifouling Coating Service 2"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Asset 45.webp"
                          alt="Antifouling Coating Service 3"
                          className="service-section-image"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="service-desc-detailed">
                        Meanwhile, our anticavitation coatings shield propellers
                        and hull surfaces from cavitation erosion, reducing wear
                        and tear and extending the lifespan of critical
                        components. Using high-performance coatings and expert
                        application techniques, we ensure long-lasting
                        protection that improves vessel performance and reduces
                        maintenance costs.
                      </p>
                    </div>
                  </div>
                  <div className="service-right-column">
                    <div className="service-text-section">
                      <p className="service-desc-detailed">
                        At Knot & Sail, we offer Antifouling and Anticavitation
                        Coating services to protect your vessel's hull and
                        propulsion systems from marine growth, corrosion, and
                        cavitation damage. Our antifouling coatings prevent the
                        accumulation of barnacles, algae, and other marine
                        organisms, enhancing fuel efficiency and maintaining
                        smooth sailing.
                      </p>
                      <p className="service-desc-detailed">
                        Available at all UAE ports, our antifouling and
                        anticavitation solutions help shipowners maintain
                        efficiency, compliance, and reliability in demanding
                        marine environments. Trust Knot & Sail to keep your
                        fleet in peak condition.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. Fabricator Steel/ Pipe welder Section */}
              <section className="service-section-detailed">
                <div className="service-header">
                  <h3 className="service-section-title">
                    Fabricator Steel/ Pipe welder
                  </h3>
                </div>
                <div className="service-content-layout-balanced">
                  <div className="service-left-column">
                    <div className="service-images-section">
                      <div className="service-images-row">
                        <img
                          src="/knot and sail images/Asset 50.webp"
                          alt="Steel Fabrication Service 1"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Asset 51.webp"
                          alt="Steel Fabrication Service 2"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Asset 52.webp"
                          alt="Steel Fabrication Service 3"
                          className="service-section-image"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="service-desc-detailed">
                        From hull repairs and structural modifications to
                        custom-fabricated components, we ensure all work is
                        executed with strength, durability, and full compliance
                        with international maritime standards. Our Pipe Welding
                        services are designed to support critical onboard
                        systems, including fuel lines, cooling systems, ballast
                        piping, and hydraulic lines.
                      </p>
                    </div>
                  </div>
                  <div className="service-right-column">
                    <div className="service-text-section">
                      <p className="service-desc-detailed">
                        Knot & Sail also proudly offers specialized Steel
                        Fabrication and Pipe Welding services, catering to the
                        structural and mechanical needs of vessels across all
                        UAE ports. Our experienced fabricators and certified
                        welders are skilled in handling a wide range of
                        marine-grade materials, delivering precision work for
                        both new installations and repair projects.
                      </p>
                      <p className="service-desc-detailed">
                        Using advanced welding techniques such as TIG, MIG, and
                        ARC welding, we provide leak-proof, corrosion-resistant
                        joints that ensure long-lasting performance under
                        demanding marine conditions. At Knot & Sail, we combine
                        technical expertise with a commitment to quality and
                        safety, helping ship owners and managers maintain the
                        structural integrity and efficiency of their vessels at
                        all times.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. Technical Manpower supply Section */}
              <section className="service-section-detailed">
                <div className="service-header">
                  <h3 className="service-section-title">
                    Technical Manpower Supply
                  </h3>
                </div>
                <div className="service-content-layout-balanced">
                  <div className="service-left-column">
                    <div className="service-images-section">
                      <div className="service-images-row">
                        <img
                          src="/knot and sail images/Asset 53.webp"
                          alt="Technical Manpower Service 1"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Asset 59.webp"
                          alt="Technical Manpower Service 2"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/Bh8OVy.webp"
                          alt="Technical Manpower Service 3"
                          className="service-section-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="service-right-column">
                    <div className="service-text-section">
                      <p className="service-desc-detailed">
                        Knot and Sail is a trusted provider of certified marine
                        and technical manpower, committed to operational
                        excellence and regulatory compliance. We are delivering
                        structured, reliable, and performance-driven maritime
                        workforce solutions, enhancing vessel and offshore
                        efficiency through strategically deployed maritime
                        professionals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="manpower-full-width-section">
                  <div className="manpower-categories">
                    <h4 className="manpower-subtitle">
                      Our Technical Personnel Include:
                    </h4>
                    <div className="manpower-table">
                      <div className="manpower-row">
                        <div className="manpower-cell">
                          Marine Mechanical Fitter
                        </div>
                        <div className="manpower-cell">Pipe Fitter</div>
                        <div className="manpower-cell">
                          TIG / MIG / ARC Welder
                        </div>
                      </div>
                      <div className="manpower-row">
                        <div className="manpower-cell">
                          Structural Fabricator
                        </div>
                        <div className="manpower-cell">Marine Electrician</div>
                        <div className="manpower-cell">
                          Instrument Technician
                        </div>
                      </div>
                      <div className="manpower-row">
                        <div className="manpower-cell">
                          Insulation Technician
                        </div>
                        <div className="manpower-cell">Blaster / Painter</div>
                        <div className="manpower-cell">Scaffolder / Rigger</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 7. Riding Squad Services Section */}
              <section className="service-section-detailed">
                <div className="service-header">
                  <h3 className="service-section-title">
                    Riding Squad Services
                  </h3>
                </div>
                <div className="service-content-layout-balanced">
                  <div className="service-left-column">
                    <div className="service-images-section">
                      <div className="service-images-row">
                        <img
                          src="/knot and sail images/F0F5Nv.webp"
                          alt="Riding Squad Service 1"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/cU5Gqw.webp"
                          alt="Riding Squad Service 2"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/ekc1je.webp"
                          alt="Riding Squad Service 3"
                          className="service-section-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="riding-squad-services">
                        <h4 className="riding-squad-subtitle">
                          Our Riding Squad Services Include:
                        </h4>
                        <ul className="riding-squad-list">
                          <li>
                            <strong>Ballast Tank Maintenance:</strong>{" "}
                            Protection against corrosion through surface
                            preparation and coating maintenance. This reduces
                            steel renewal costs and helps maintain strong CAP
                            ratings.
                          </li>
                          <li>
                            <strong>Deck Maintenance:</strong> Rust removal,
                            coating touch-ups, and structural preservation to
                            protect exposed areas, maintain vessel appearance,
                            and ensure crew safety.
                          </li>
                          <li>
                            <strong>Accommodation Maintenance:</strong> Interior
                            maintenance, corrosion control, and refurbishment to
                            provide a clean, safe, and comfortable living
                            environment for onboard personnel.
                          </li>
                          <li>
                            <strong>Steel Repair Team:</strong> Class-certified
                            welders and fabricators perform structural steel
                            repairs, deck renewals, and outfitting works during
                            voyage to maintain overall vessel integrity.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="service-right-column">
                    <div className="service-text-section">
                      <p className="service-desc-detailed">
                        At Knot & Sail, we provide reliable Riding Squad
                        Services globally, supporting vessels at sea and in
                        port. Our skilled teams perform maintenance and repair
                        works during voyages to reduce downtime, control costs,
                        and maintain class and CAP standards.
                      </p>
                      <div className="riding-squad-services">
                        <ul className="riding-squad-list">
                          <li>
                            <strong>Pipeline Cleaning:</strong> Internal
                            cleaning and preservation to prevent corrosion,
                            ensure smooth flow, and extend pipeline service
                            life.
                          </li>
                          <li>
                            <strong>HVAC, Insulation & Cladding:</strong>{" "}
                            Inspection, repair, and refurbishment of HVAC
                            systems and insulation to improve efficiency and
                            onboard comfort.
                          </li>
                          <li>
                            <strong>Cargo Hold Maintenance:</strong> Coating
                            maintenance and product change washing using
                            certified equipment to ensure cargo readiness and
                            compliance.
                          </li>
                          <li>
                            <strong>Helideck Maintenance:</strong> Maintenance
                            in line with CAP 437 requirements, including
                            friction control and proper markings for safe
                            helicopter operations.
                          </li>
                          <li>
                            <strong>Engine Service Team:</strong> Engine
                            overhauling, troubleshooting, and preventive
                            maintenance to ensure reliable performance and
                            reduced breakdown risk.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. Engine Service Team Section */}
              <section className="service-section-detailed">
                <div className="service-header">
                  <h3 className="service-section-title">Engine Service Team</h3>
                </div>
                <div className="service-content-layout-balanced">
                  <div className="service-left-column">
                    <div className="service-images-section">
                      <div className="service-images-row">
                        <img
                          src="/knot and sail images/fNVNPj.webp"
                          alt="Engine Service Team 1"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/gSQA4n.webp"
                          alt="Engine Service Team 2"
                          className="service-section-image"
                        />
                        <img
                          src="/knot and sail images/iV1ZQg.webp"
                          alt="Engine Service Team 3"
                          className="service-section-image"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="service-desc-detailed">
                        From routine maintenance to complex engine repairs, our
                        team is equipped with the latest diagnostic tools and
                        technical expertise to handle all types of marine
                        propulsion systems. We minimize downtime and maximize
                        engine lifespan through proactive maintenance strategies
                        and rapid response to operational issues.
                      </p>
                    </div>
                  </div>
                  <div className="service-right-column">
                    <div className="service-text-section">
                      <p className="service-desc-detailed">
                        Our Engine Service Team provides comprehensive engine
                        overhauling, troubleshooting, and preventive maintenance
                        to ensure reliable performance and reduced breakdown
                        risk. With highly skilled marine engineers and
                        technicians, we deliver expert engine services that keep
                        your vessels operating at peak efficiency.
                      </p>
                      <p className="service-desc-detailed">
                        Available across all UAE ports, our engine services
                        ensure your vessels maintain optimal performance, fuel
                        efficiency, and compliance with maritime standards.
                        Trust Knot & Sail's Engine Service Team for reliable,
                        professional engine maintenance and repair solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="services-cta">
          <div className="container">
            <div className="cta-content text-center">
              <h2 className="cta-title">
                Ready to Experience Our Marine Services?
              </h2>
              <p className="cta-subtitle">
                Contact Knot & Sail today to discuss your marine service needs
                and discover how our expertise can benefit your operations.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">
                  Contact Us
                </a>
                <a href="tel:+971527756765" className="btn btn-secondary">
                  Call +971 52 775 6765
                </a>
                <a href="tel:+971581464580" className="btn btn-secondary">
                  Call +971 58 146 4580
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
