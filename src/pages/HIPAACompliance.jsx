import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faUserShield, faFileContract, faServer, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * HIPAACompliance — FIXED
 * ✅ "Contact Our Security Team" button on gold bg:
 *    Dark mode  — Default: charcoal bg + white text | Hover: transparent + white border + white text
 *    Light mode — Default: teal bg + white text     | Hover: transparent + teal border + white text
 */
const HIPAACompliance = () => {
  const securityMeasures = [
    { icon: faLock,         title: 'End-to-End Encryption',         description: 'All data transmissions are encrypted using industry-standard TLS/SSL protocols.' },
    { icon: faServer,       title: 'Secure Infrastructure',          description: 'HIPAA-compliant cloud infrastructure with SOC 2 Type II certification.' },
    { icon: faUserShield,   title: 'Access Controls',               description: 'Role-based access controls and multi-factor authentication for all systems.' },
    { icon: faFileContract, title: 'Business Associate Agreements',  description: 'Signed BAAs with all clients ensuring legal compliance and accountability.' },
  ];

  const complianceFeatures = [
    'Regular security audits and risk assessments',
    'Encrypted data storage and transmission',
    'Detailed audit logs and monitoring',
    'Employee training and background checks',
    'Incident response and breach notification procedures',
    'Physical security controls',
    'Secure disposal of PHI',
    'Disaster recovery and business continuity plans',
  ];

  return (
    <div className="hipaa-compliance-page">

      {/* Hero */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 mb-6">
                <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-gold" />
              </div>
              <h1 className="text-h1 font-serif font-bold text-white mb-6">
                HIPAA Compliance & Security
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Your patients data security is our top priority. We maintain the highest
                standards of HIPAA compliance and data protection.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll direction="up">
              <div className="bg-bg-card border border-grey rounded-card p-8 md:p-12 mb-12">
                <h2 className="text-h3 font-serif font-bold text-text-primary mb-4">
                  Our Commitment to HIPAA Compliance
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  At MedVocates, we understand that Protected Health Information (PHI) is one of
                  your practices most valuable and sensitive assets. We are fully committed to
                  maintaining strict HIPAA compliance across all aspects of our operations.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Every member of our team undergoes comprehensive HIPAA training and background
                  checks. We implement administrative, physical, and technical safeguards that meet
                  or exceed federal requirements.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">Security Measures</h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">How We Protect Your Data</h2>
              <p className="text-lg text-text-secondary">Multi-layered security approach to safeguard patient information.</p>
            </div>
          </RevealOnScroll>
          <StaggerChildren stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {securityMeasures.map((m, i) => (
                <Card key={i} hoverable>
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-sharp bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={m.icon} className="text-xl text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">{m.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{m.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll direction="up">
              <h2 className="text-h3 font-serif font-bold text-text-primary mb-8 text-center">Comprehensive Compliance Framework</h2>
            </RevealOnScroll>
            <StaggerChildren stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {complianceFeatures.map((f, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-bg-card border border-grey rounded-card hover:border-gold transition-colors">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-gold text-lg flex-shrink-0 mt-0.5" />
                    <p className="text-text-secondary">{f}</p>
                  </div>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* BAA */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll direction="up">
              <Card>
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-sharp bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faFileContract} className="text-2xl text-gold" />
                    </div>
                    <div>
                      <h2 className="text-h3 font-serif font-bold text-text-primary mb-2">Business Associate Agreement (BAA)</h2>
                      <p className="text-text-secondary">We sign a comprehensive BAA with every client</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-text-secondary leading-relaxed">
                    <p>As required by HIPAA, we execute a BAA with all clients before handling any Protected Health Information.</p>
                    <p>Our BAA includes provisions for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Permitted uses and disclosures of PHI</li>
                      <li>Safeguards to prevent unauthorized use or disclosure</li>
                      <li>Breach notification procedures</li>
                      <li>Subcontractor requirements</li>
                      <li>Access, amendment, and accounting of disclosures</li>
                      <li>Return or destruction of PHI upon termination</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-h3 font-serif font-bold text-text-primary mb-8">Certifications & Compliance</h2>
              <div className="flex flex-wrap items-center justify-center gap-8 text-text-secondary">
                {[
                  { icon: faShieldAlt, label: 'HIPAA Compliant',    sub: 'Fully Certified' },
                  { icon: faServer,    label: 'SOC 2 Type II',      sub: 'Audited Infrastructure' },
                  { icon: faLock,      label: '256-bit Encryption', sub: 'Industry Standard' },
                ].map((cert, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-2">
                      <FontAwesomeIcon icon={cert.icon} className="text-2xl text-gold" />
                    </div>
                    <p className="font-semibold text-text-primary">{cert.label}</p>
                    <p className="text-sm">{cert.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ✅ Questions CTA — gold bg */}
      <section className="section-padding bg-gradient-gold">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-charcoal mb-4">
                Questions About Our Security?
              </h2>
              <p className="text-lg text-charcoal/80 mb-8">
                Our compliance team is happy to discuss our security measures in detail.
              </p>

              {/* ✅ FIXED: visible button with correct hover */}
              <Link to="/contact">
                <button className="hipaa-cta-btn inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-button transition-all duration-200">
                  Contact Our Security Team
                </button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Scoped styles */}
      <style>{`
        /* DARK MODE — charcoal bg + white text | Hover: transparent + white border + white text */
        .hipaa-cta-btn {
          background: #1a1a1a;
          color: #ffffff;
          border: 2px solid #1a1a1a;
        }
        .hipaa-cta-btn:hover {
          background: transparent;
          color: #ffffff;
          border-color: #ffffff;
        }

        /* LIGHT MODE — teal bg + white text | Hover: transparent + teal border + white text */
        [data-theme="light"] .hipaa-cta-btn {
          background: #2d8685;
          color: #ffffff;
          border: 2px solid #2d8685;
        }
        [data-theme="light"] .hipaa-cta-btn:hover {
          background: transparent;
          color: #ffffff;
          border-color: #2d8685;
        }
      `}</style>
    </div>
  );
};

export default HIPAACompliance;