import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout Component
 * Main page wrapper with Navbar and Footer
 */
const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to main content link (accessibility) */}
      <a 
        href="#main-content" 
        className="skip-to-content"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;