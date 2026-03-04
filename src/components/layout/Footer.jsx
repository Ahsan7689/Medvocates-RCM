import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faFacebook, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';
import { FOOTER_SECTIONS, COMPANY_INFO } from '@/lib/constants';
import { Divider } from '@/components/ui';
import NewsletterForm from '@/components/forms/NewsletterForm';

/**
 * Footer Component - FIXED
 * Multi-column footer with newsletter signup
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-bg-tertiary border-t border-grey">
      <div className="container mx-auto section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img
                src="https://thbrjephelueobbsgwrl.supabase.co/storage/v1/object/public/Blog/Untitled%20design%20(1).png"
                alt="MedVocates Logo"
                style={{ height: '34px', width: 'auto', marginBottom: "16px" }}
              />
              <h3 className="font-serif text-xl font-bold text-gold tracking-luxury">
                MEDVOCATES
              </h3>
            </Link>
            <p className="text-text-secondary mb-6 text-sm leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-sans text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
                Subscribe to Our Newsletter
              </h4>
              <NewsletterForm />
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-text-primary mb-4 uppercase tracking-wide">
              {FOOTER_SECTIONS.solutions.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_SECTIONS.solutions.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-text-primary mb-4 uppercase tracking-wide">
              {FOOTER_SECTIONS.company.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_SECTIONS.company.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon 
              icon={faEnvelope} 
              className="text-gold text-lg mt-1"
            />
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
                Email
              </p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-sm text-text-primary hover:text-gold transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon 
              icon={faPhone} 
              className="text-gold text-lg mt-1"
            />
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
                Phone
              </p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-sm text-text-primary hover:text-gold transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon 
              icon={faMapMarkerAlt} 
              className="text-gold text-lg mt-1"
            />
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
                Address
              </p>
              <address className="text-sm text-text-primary not-italic">
                {COMPANY_INFO.address.street}<br />
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
              </address>
            </div>
          </div>
        </div>

        <Divider variant="default" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-text-muted">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {COMPANY_INFO.social.linkedin && (
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
            )}
            {COMPANY_INFO.social.instagram && (
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
            )}
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-4 text-sm">
            {FOOTER_SECTIONS.legal.links.map((link, index) => (
              <span key={link.path}>
                <Link
                  to={link.path}
                  className="text-text-muted hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
                {index < FOOTER_SECTIONS.legal.links.length - 1 && (
                  <span className="mx-2 text-text-muted">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Trust Badges / Certifications */}
        <div className="mt-8 pt-8 border-t border-grey">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gold">✓</span>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gold">✓</span>
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gold">✓</span>
              <span>US-Based Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gold">✓</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;