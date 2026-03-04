import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faHeart, faUsers, faShieldAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Who We Are Page — FIXED
 * ✅ CTA button on gold bg matches Blog & HIPAA pages:
 *    Dark mode  — Default: #1a1a1a bg + white text | Hover: transparent + white border + white text
 *    Light mode — Default: #2d8685 bg + white text | Hover: transparent + teal border + white text
 */
const WhoWeAre = () => {
  const values = [
    { icon: faShieldAlt, title: 'Integrity',   description: 'We operate with transparency and honesty in all client relationships.' },
    { icon: faHeart,     title: 'Care',        description: 'We treat every practice as if it were our own, with dedication and empathy.' },
    { icon: faLightbulb, title: 'Innovation',  description: 'We continuously improve our processes through technology and best practices.' },
    { icon: faUsers,     title: 'Partnership', description: 'We build long-term relationships based on trust and mutual success.' },
  ];

  return (
    <div className="who-we-are-page">

      {/* Hero */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                About MedVocates
              </h5>
              <h1 className="text-h1 font-serif font-bold mb-6" style={{ color: '#ffffff' }}>
                Your Trusted Healthcare Partner
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                We are not just a service provider — we are your dedicated partner in
                practice growth and operational excellence.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/30 mb-6">
                  <FontAwesomeIcon icon={faBullseye} className="text-3xl text-gold" />
                </div>
                <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">Our Mission</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  To empower healthcare providers with comprehensive medical billing and
                  virtual assistance solutions that maximize revenue, reduce administrative
                  burden, and allow practitioners to focus on what matters most—patient care.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We achieve this through US-based expertise, HIPAA-compliant workflows,
                  cutting-edge technology, and a commitment to transparency and excellence
                  in every interaction.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right" delay={0.2}>
              {/* Mission image: doctor focused on patient care / medical professional */}
              <div className="rounded-card border border-grey overflow-hidden" style={{ minHeight: '320px' }}>
                <img
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&auto=format&fit=crop&q=80"
                  alt="Healthcare professional focused on patient care"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '320px' }}
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left" className="order-2 lg:order-1">
              {/* Vision image: collaborative healthcare team / modern medical environment */}
              <div className="rounded-card border border-grey overflow-hidden" style={{ minHeight: '320px' }}>
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop&q=80"
                  alt="Healthcare team collaborating for better patient outcomes"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '320px' }}
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right" delay={0.2} className="order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/30 mb-6">
                  <FontAwesomeIcon icon={faEye} className="text-3xl text-gold" />
                </div>
                <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">Our Vision</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  To become the most trusted and preferred medical billing and virtual
                  assistance partner for healthcare practices across the United States.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We envision a healthcare ecosystem where administrative excellence is
                  the norm, not the exception—where every provider has access to world-class
                  support that drives practice growth and improves patient outcomes.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">Our Values</h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">What Drives Us Every Day</h2>
              <p className="text-lg text-text-secondary">Our core values guide every decision we make and every interaction we have.</p>
            </div>
          </RevealOnScroll>
          <StaggerChildren stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <Card key={i} hoverable className="text-center">
                  <CardContent>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 border border-gold/30 mb-4">
                      <FontAwesomeIcon icon={v.icon} className="text-2xl text-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-text-primary mb-3">{v.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{v.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* ✅ CTA — gold bg, button matches Blog/HIPAA style */}
      <section className="section-padding bg-gradient-gold">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-charcoal mb-6">
                Ready to Experience the MedVocates Difference?
              </h2>
              <p className="text-lg text-charcoal/80 mb-8">
                Lets discuss how we can help your practice thrive.
              </p>

              {/* ✅ Same pattern as BlogList & HIPAACompliance */}
              <Link to="/contact">
                <button className="whoweare-cta-btn inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-button transition-all duration-200">
                  Get in Touch
                </button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ✅ Scoped CTA styles — identical to Blog & HIPAA */}
      <style>{`
        /* DARK MODE */
        .whoweare-cta-btn {
          background: #1a1a1a;
          color: #ffffff;
          border: 2px solid #1a1a1a;
        }
        .whoweare-cta-btn:hover {
          background: transparent;
          color: #ffffff;
          border-color: #ffffff;
        }

        /* LIGHT MODE */
        [data-theme="light"] .whoweare-cta-btn {
          background: #2d8685;
          color: #ffffff;
          border: 2px solid #2d8685;
        }
        [data-theme="light"] .whoweare-cta-btn:hover {
          background: transparent;
          color: #ffffff;
          border-color: #2d8685;
        }
      `}</style>
    </div>
  );
};

export default WhoWeAre;