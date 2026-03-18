/**
 * ASP Global Marine Trading LLC - Layout Template
 *
 * Reusable layout component that wraps all pages with Header and Footer
 * Maintains the oceanic color theme and existing content structure
 */

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({
  children,
  showPageHero = false,
  pageTitle = "",
  pageSubtitle = "",
}) => {
  return (
    <div className="website-layout">
      {/* Header / Navigation */}
      <header className="layout-header">
        <Navbar />
      </header>

      {/* Main Content Area */}
      <main className="layout-main">{children}</main>

      {/* Footer */}
      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
