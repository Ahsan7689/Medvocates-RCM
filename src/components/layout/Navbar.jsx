import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { ThemeToggle } from '@/components/ui';
import { NAVIGATION } from '@/lib/constants';
import { cn } from '@/lib/utils';

const NAVBAR_HEIGHT = 80;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setIsScrolled(y > 20);
          setIsVisible(!(y > lastScrollY.current && y > 100));
          lastScrollY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handle = (e) => {
      if (!e.target.closest('[data-dropdown]') && !e.target.closest('[data-dropdown-trigger]')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); setActiveDropdown(null); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (key) => setActiveDropdown(activeDropdown === key ? null : key);
  const closeMobileMenu = () => { setIsMobileMenuOpen(false); setActiveDropdown(null); };

  const handleCTAClick = () => {
    const url = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com';
    window.open(url, '_blank', 'noopener noreferrer');
  };

  // Dropdown items — no Tailwind hover bg classes, handled by <style> below
  const renderItems = (items, showDesc = false) => {
    if (!Array.isArray(items)) return null;
    return items.map((item, i) => (
      <Link
        key={item.path || i}
        to={item.path || '/'}
        className="nav-dropdown-item block px-4 py-2.5 text-sm"
        onClick={() => setActiveDropdown(null)}
      >
        <div className="flex items-center gap-2">
          <span className="font-medium nav-dropdown-label">{item.label}</span>
          {item.featured && <FontAwesomeIcon icon={faStar} className="text-gold text-xs" />}
          {item.badge && (
            <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-gold/20 text-gold border border-gold/30">
              {item.badge}
            </span>
          )}
        </div>
        {showDesc && item.description && (
          <p className="nav-dropdown-desc text-xs mt-0.5">{item.description}</p>
        )}
      </Link>
    ));
  };

  const mobilePortal = isMobileMenuOpen
    ? createPortal(
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" style={{ zIndex: 99998 }} onClick={closeMobileMenu} />
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-bg-primary border-l border-grey overflow-y-auto" style={{ zIndex: 99999 }}>
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-grey">
                <span className="font-serif text-xl font-bold text-gold">MENU</span>
                <button onClick={closeMobileMenu} className="text-text-primary hover:text-gold p-1.5 transition-colors">
                  <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </button>
              </div>

              {/* Home */}
              <Link to="/" className="block py-3 px-1 text-text-primary hover:text-gold font-medium border-b border-grey/40 transition-colors" onClick={closeMobileMenu}>Home</Link>

              {/* Solutions */}
              <div className="border-b border-grey/40">
                <button onClick={() => toggleDropdown('sol-m')} className="w-full flex items-center justify-between py-3 px-1 text-text-primary hover:text-gold font-medium transition-colors" data-dropdown-trigger>
                  <span>Solutions</span>
                  <FontAwesomeIcon icon={faChevronDown} className={cn('text-xs transition-transform duration-200', activeDropdown === 'sol-m' && 'rotate-180')} />
                </button>
                {activeDropdown === 'sol-m' && (
                  <div className="pl-4 pb-3" data-dropdown>
                    {NAVIGATION?.solutions?.map((s, i) => (
                      <Link key={i} to={s.path} className="flex items-center gap-2 py-2 text-sm text-text-secondary hover:text-gold transition-colors" onClick={closeMobileMenu}>
                        {s.label}
                        {s.featured && <FontAwesomeIcon icon={faStar} className="text-gold text-xs" />}
                        {s.badge && <span className="px-1.5 py-0.5 rounded text-xs bg-gold/20 text-gold font-bold">{s.badge}</span>}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Specialties */}
              <div className="border-b border-grey/40">
                <button onClick={() => toggleDropdown('spec-m')} className="w-full flex items-center justify-between py-3 px-1 text-text-primary hover:text-gold font-medium transition-colors" data-dropdown-trigger>
                  <span>Specialties</span>
                  <FontAwesomeIcon icon={faChevronDown} className={cn('text-xs transition-transform duration-200', activeDropdown === 'spec-m' && 'rotate-180')} />
                </button>
                {activeDropdown === 'spec-m' && (
                  <div className="pl-4 pb-3 max-h-60 overflow-y-auto" data-dropdown>
                    {NAVIGATION?.specialties?.map((s, i) => (
                      <Link key={i} to={s.path} className="block py-2 text-sm text-text-secondary hover:text-gold transition-colors" onClick={closeMobileMenu}>{s.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Who We Are */}
              <Link to="/who-we-are" className="block py-3 px-1 text-text-primary hover:text-gold font-medium border-b border-grey/40 transition-colors" onClick={closeMobileMenu}>Who We Are</Link>

              {/* Company */}
              <div className="border-b border-grey/40">
                <button onClick={() => toggleDropdown('co-m')} className="w-full flex items-center justify-between py-3 px-1 text-text-primary hover:text-gold font-medium transition-colors" data-dropdown-trigger>
                  <span>Company</span>
                  <FontAwesomeIcon icon={faChevronDown} className={cn('text-xs transition-transform duration-200', activeDropdown === 'co-m' && 'rotate-180')} />
                </button>
                {activeDropdown === 'co-m' && (
                  <div className="pl-4 pb-3" data-dropdown>
                    {NAVIGATION?.company?.map((item, i) => (
                      <Link key={i} to={item.path} className="block py-2 text-sm text-text-secondary hover:text-gold transition-colors" onClick={closeMobileMenu}>{item.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="pt-5">
                <button onClick={() => { handleCTAClick(); closeMobileMenu(); }} className="w-full py-3 bg-gold text-charcoal font-semibold rounded-sharp hover:bg-gold/90 transition-colors">
                  {NAVIGATION?.cta?.label || 'Book Appointment'}
                </button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

  return (
    <>
      {/* ✅ FIX: Spacer so content is NOT hidden behind navbar on ALL pages */}
      <div style={{ height: NAVBAR_HEIGHT }} aria-hidden="true" />

      <nav
        className={cn(
          'fixed top-0 left-0 right-0 transition-all duration-300',
          isScrolled ? 'shadow-lg backdrop-blur-md' : '',
          isVisible ? 'translate-y-0' : '-translate-y-full'
        )}
        style={{ zIndex: 9999, height: NAVBAR_HEIGHT }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img
              src="https://thbrjephelueobbsgwrl.supabase.co/storage/v1/object/public/Blog/Untitled%20design%20(1).png"
              alt="MedVocates Logo"
              style={{ height: '38px', width: 'auto' }}
            />
            <span className="font-serif text-xl font-bold text-gold tracking-wider">MEDVOCATES</span>
          </Link>

          {/* CENTER — Desktop */}
          <div className="hidden lg:flex items-center space-x-7">
            <Link to="/" className={cn('text-sm font-medium transition-colors hover:text-gold', location.pathname === '/' ? 'text-gold' : 'text-text-primary')}>Home</Link>

            {/* Solutions */}
            <div className="relative">
              <button onClick={() => toggleDropdown('solutions')} className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-gold transition-colors" data-dropdown-trigger>
                Solutions <FontAwesomeIcon icon={faChevronDown} className={cn('text-xs transition-transform duration-200', activeDropdown === 'solutions' && 'rotate-180')} />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="nav-dropdown-panel absolute top-full left-0 mt-2 w-80 rounded-card py-1.5 border" style={{ zIndex: 99999 }} data-dropdown>
                  {renderItems(NAVIGATION?.solutions || [], true)}
                </div>
              )}
            </div>

            {/* Specialties */}
            <div className="relative">
              <button onClick={() => toggleDropdown('specialties')} className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-gold transition-colors" data-dropdown-trigger>
                Specialties <FontAwesomeIcon icon={faChevronDown} className={cn('text-xs transition-transform duration-200', activeDropdown === 'specialties' && 'rotate-180')} />
              </button>
              {activeDropdown === 'specialties' && (
                <div className="nav-dropdown-panel absolute top-full left-0 mt-2 w-60 rounded-card py-1.5 border max-h-96 overflow-y-auto" style={{ zIndex: 99999 }} data-dropdown>
                  {renderItems(NAVIGATION?.specialties || [], false)}
                </div>
              )}
            </div>

            <Link to="/who-we-are" className={cn('text-sm font-medium transition-colors hover:text-gold', location.pathname === '/who-we-are' ? 'text-gold' : 'text-text-primary')}>Who We Are</Link>

            {/* Company */}
            <div className="relative">
              <button onClick={() => toggleDropdown('company')} className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-gold transition-colors" data-dropdown-trigger>
                Company <FontAwesomeIcon icon={faChevronDown} className={cn('text-xs transition-transform duration-200', activeDropdown === 'company' && 'rotate-180')} />
              </button>
              {activeDropdown === 'company' && (
                <div className="nav-dropdown-panel absolute top-full left-0 mt-2 w-52 rounded-card py-1.5 border" style={{ zIndex: 99999 }} data-dropdown>
                  {renderItems(NAVIGATION?.company || [], true)}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT — Desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <ThemeToggle />
            <button onClick={handleCTAClick} className="px-5 py-2.5 bg-gold text-charcoal text-sm font-semibold rounded-sharp hover:bg-gold/90 transition-all duration-200 whitespace-nowrap">
              {NAVIGATION?.cta?.label || 'Book Appointment'}
            </button>
          </div>

          {/* RIGHT — Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-text-primary hover:text-gold transition-colors" aria-label="Menu">
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>

        </div>
      </nav>

      {mobilePortal}

      {/* ✅ Scoped CSS for dropdown styling — avoids Tailwind conflicts */}
      <style>{`
        /* ── NAVBAR background ── */
        nav {
          background: var(--bg-primary, #1a1a1a);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* ── DARK MODE DROPDOWN PANEL ── */
        .nav-dropdown-panel {
          background: #222222;
          border-color: #383838;
          box-shadow: 0 12px 40px rgba(0,0,0,0.6);
        }

        /* ── DARK MODE DROPDOWN ITEM ── */
        .nav-dropdown-item { color: #d0d0d0; background: transparent; }
        .nav-dropdown-desc { color: #7a7a7a; }
        .nav-dropdown-item:hover { color: #c9a961; background: rgba(201,169,97,0.08); }
        .nav-dropdown-item:hover .nav-dropdown-desc { color: #a8823a; }

        /* ── LIGHT MODE NAVBAR ── */
        [data-theme="light"] nav {
          background: #ffffff !important;
          border-bottom: 1px solid #e5e7eb !important;
        }

        /* ── LIGHT MODE DROPDOWN PANEL ── */
        [data-theme="light"] .nav-dropdown-panel {
          background: #ffffff;
          border-color: #e5e7eb;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }

        /* ── LIGHT MODE DROPDOWN ITEM ──
           ✅ Text starts as dark, changes to teal on hover
           ✅ NO background color ever */
        [data-theme="light"] .nav-dropdown-item { color: #1a1a1a; background: transparent; }
        [data-theme="light"] .nav-dropdown-desc { color: #666; }
        [data-theme="light"] .nav-dropdown-item:hover { color: #2d8685 !important; background: transparent !important; }
        [data-theme="light"] .nav-dropdown-item:hover .nav-dropdown-desc { color: #2d8685; }

        /* ── LIGHT MODE NAV LINKS ── */
        [data-theme="light"] nav a:not(.nav-dropdown-item),
        [data-theme="light"] nav button:not([class*="bg-gold"]) {
          color: #1a1a1a;
        }
        [data-theme="light"] nav a:not(.nav-dropdown-item):hover {
          color: #2d8685;
        }

        /* ✅ FIX: Remove background/border from nav dropdown trigger buttons in light mode */
        [data-theme="light"] nav button[data-dropdown-trigger] {
          background: transparent !important;
          border: none !important;
          color: #1a1a1a !important;
          box-shadow: none !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        [data-theme="light"] nav button[data-dropdown-trigger]:hover {
          background: transparent !important;
          color: #2d8685 !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;