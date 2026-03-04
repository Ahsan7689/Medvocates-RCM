import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NAVIGATION, COMPANY_INFO } from '@/lib/constants';
import { Button, ThemeToggle } from '@/components/ui';
import { cn } from '@/lib/utils';

/**
 * MobileMenu Component
 * Slide-out mobile navigation drawer
 */
const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSubmenu = (label) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  const handleCTAClick = () => {
    if (NAVIGATION.cta.external) {
      window.open(NAVIGATION.cta.external, '_blank', 'noopener noreferrer');
    }
    onClose();
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-80 max-w-full bg-bg-primary border-l border-grey z-50 lg:hidden',
          'transform transition-transform duration-300 ease-in-out',
          'overflow-y-auto',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl font-bold text-gold tracking-luxury">
              MEDVOCATES
            </h2>
            <ThemeToggle />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {NAVIGATION.main.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  // Dropdown Item
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-text-primary hover:bg-charcoal-light rounded-sharp transition-colors"
                    >
                      <span className="font-medium">{item.label}</span>
                      <FontAwesomeIcon
                        icon={expandedMenu === item.label ? faChevronDown : faChevronRight}
                        className="text-sm"
                      />
                    </button>

                    {/* Submenu */}
                    {expandedMenu === item.label && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={handleLinkClick}
                            className={cn(
                              'block px-4 py-2 text-sm text-text-secondary hover:text-gold hover:bg-charcoal-light rounded-sharp transition-colors',
                              subItem.featured && 'text-gold'
                            )}
                          >
                            {subItem.label}
                            {subItem.featured && <span className="ml-1">★</span>}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular Link
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-text-primary hover:bg-charcoal-light rounded-sharp transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-8">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleCTAClick}
            >
              {NAVIGATION.cta.label}
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-grey">
            <div className="space-y-3 text-sm text-text-secondary">
              <div>
                <p className="font-medium text-text-primary mb-1">Contact Us</p>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-gold transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;