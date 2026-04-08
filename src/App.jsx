/**
 * Ocean Infinity - Main App Component
 *
 * Technology Stack:
 * - React 18 with functional components and hooks
 * - React Router for page navigation
 * - HTML5 semantic structure rendered by React
 * - CSS3 styling imported from styles.css
 * - JavaScript ES6+ features
 */

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ProductsPage from "./pages/Products.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Careers from "./pages/Careers.jsx";

// Service Sub-pages
import SafetyServices from "./pages/SafetyServices.jsx";
import TechnicalServices from "./pages/TechnicalServices.jsx";
import DryDockingServices from "./pages/DryDockingServices.jsx";

// Products Pages
import EngineStores from "./pages/EngineStores.jsx";
import DeckStoresGeneral from "./pages/DeckStoresGeneral.jsx";
import EngineSpares2Stroke from "./pages/EngineSpares2Stroke.jsx";
import EngineSpares4Stroke from "./pages/EngineSpares4Stroke.jsx";
import TurbochargersAuxiliary from "./pages/TurbochargersAuxiliary.jsx";
import HVACCompressors from "./pages/HVACCompressors.jsx";
import PumpsMarineIndustrial from "./pages/PumpsMarineIndustrial.jsx";
import BoilersIncineratorsHeatExchangers from "./pages/BoilersIncineratorsHeatExchangers.jsx";
import AirCompressorSpares from "./pages/AirCompressorSpares.jsx";
import Purifiers from "./pages/Purifiers.jsx";
import HydraulicSystems from "./pages/HydraulicSystems.jsx";

import LSAFFA from "./pages/LSAFFA.jsx";

// Authorizations Page
import Authorization from "./pages/Authorization.jsx";
import Certifications from "./pages/Certifications.jsx";
import GuangzhouHGMarine from "./pages/GuangzhouHGMarine.jsx";
import HGMachineryGroup from "./pages/HGMachineryGroup.jsx";
import ZhejiangKintowe from "./pages/ZhejiangKintowe.jsx";
import ZhejiangHuayi from "./pages/ZhejiangHuayi.jsx";
import BeijingZhonghanghua from "./pages/BeijingZhonghanghua.jsx";
import ChangzhouQianmai from "./pages/ChangzhouQianmai.jsx";

import "./styles/main.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    // Add reveal class to sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("reveal");
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Navbar scroll effect - Removed to maintain blue background
    // const handleNavbarScroll = () => {
    //   const navbar = document.querySelector(".navbar");
    //   if (navbar) {
    //     if (window.scrollY > 50) {
    //       navbar.style.background = "rgba(255, 255, 255, 0.98)";
    //       navbar.style.boxShadow = "0 4px 30px rgba(46, 139, 139, 0.15)";
    //     } else {
    //       navbar.style.background = "rgba(255, 255, 255, 0.95)";
    //       navbar.style.boxShadow = "0 2px 20px rgba(46, 139, 139, 0.1)";
    //     }
    //   }
    // };

    // window.addEventListener("scroll", handleNavbarScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />

              {/* About Us Route - Single Page */}
              <Route path="/about" element={<About />} />

              {/* Services Route */}
              <Route path="/services" element={<Services />} />

              {/* Service Sub-pages */}
              <Route
                path="/services/safety-services"
                element={<SafetyServices />}
              />
              <Route
                path="/services/technical-services"
                element={<TechnicalServices />}
              />
              <Route
                path="/services/dry-docking-services"
                element={<DryDockingServices />}
              />

              {/* Products Routes - Main products page first */}
              <Route path="/products" element={<ProductsPage />} />

              {/* Specific Product Categories */}
              <Route
                path="/products/engine-stores"
                element={<EngineStores />}
              />
              <Route
                path="/products/deck-stores-general"
                element={<DeckStoresGeneral />}
              />
              <Route
                path="/products/engine-spares-2stroke"
                element={<EngineSpares2Stroke />}
              />
              <Route
                path="/products/engine-spares-4stroke"
                element={<EngineSpares4Stroke />}
              />
              <Route
                path="/products/turbochargers-auxiliary"
                element={<TurbochargersAuxiliary />}
              />
              <Route
                path="/products/hvac-compressors"
                element={<HVACCompressors />}
              />
              <Route
                path="/products/pumps-marine-industrial"
                element={<PumpsMarineIndustrial />}
              />
              <Route
                path="/products/boilers-incinerators-heat-exchangers"
                element={<BoilersIncineratorsHeatExchangers />}
              />
              <Route
                path="/products/air-compressor-spares"
                element={<AirCompressorSpares />}
              />
              <Route path="/products/purifiers" element={<Purifiers />} />
              <Route
                path="/products/hydraulic-systems"
                element={<HydraulicSystems />}
              />

              <Route path="/products/lsa-ffa" element={<LSAFFA />} />

              {/* Authorizations Route */}
              <Route path="/authorizations" element={<Authorization />} />

              {/* Certifications Route */}
              <Route path="/certifications" element={<Certifications />} />

              <Route
                path="/guangzhou-hg-marine"
                element={<GuangzhouHGMarine />}
              />
              <Route
                path="/hg-machinery-group"
                element={<HGMachineryGroup />}
              />
              <Route path="/zhejiang-kintowe" element={<ZhejiangKintowe />} />
              <Route path="/zhejiang-huayi" element={<ZhejiangHuayi />} />
              <Route
                path="/beijing-zhonghanghua"
                element={<BeijingZhonghanghua />}
              />
              <Route path="/changzhou-qianmai" element={<ChangzhouQianmai />} />


              {/* Contact Route */}
              <Route path="/contact" element={<Contact />} />

              {/* Careers Route */}
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </main>
          <Footer />
          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/+971527756765"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <img src="/whatsapp1.svg" alt="WhatsApp" width="32" height="32" />
          </a>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
