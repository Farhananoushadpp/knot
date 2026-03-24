/**
 * Knot & Sail - Main App Component
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
              {/* <Route path="/certifications" element={<Certifications />} /> */}

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
            href="https://wa.me/971525478137"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.709-.508-.173-.006-.371-.006-.57-.006-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.24 3.076c.173.198 2.445 3.732 5.927 5.236.828.357 1.476.57 1.979.73.828.262 1.582.225 2.178.136.664-.099 2.04-1.33 2.329-2.618.288-1.288.148-2.388.074-2.618-.074-.23-.27-.347-.567-.496z" />
              <path d="M12.042 24.042c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z" />
            </svg>
          </a>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
