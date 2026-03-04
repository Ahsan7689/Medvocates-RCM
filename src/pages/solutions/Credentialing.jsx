import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faIdCard, 
  faFileSignature,
  faUserCheck,
  faHospital,
  faClock,
  faShieldAlt,
  faCheckCircle,
  faArrowRight,
  faSync
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Provider Credentialing Solution Page
 */
const Credentialing = () => {
  const services = [
    {
      icon: faUserCheck,
      title: 'Initial Credentialing',
      description: 'Complete credentialing for new providers joining your practice.',
    },
    {
      icon: faSync,
      title: 'Re-credentialing',
      description: 'Timely renewal of credentials before expiration dates.',
    },
    {
      icon: faHospital,
      title: 'Payer Enrollment',
      description: 'Enrollment with Medicare, Medicaid, and commercial payers.',
    },
    {
      icon: faFileSignature,
      title: 'Application Management',
      description: 'Accurate completion and submission of all credentialing forms.',
    },
    {
      icon: faClock,
      title: 'Expiration Tracking',
      description: 'Proactive monitoring of license and certification renewals.',
    },
    {
      icon: faShieldAlt,
      title: 'CAQH Management',
      description: 'CAQH profile setup, maintenance, and attestation.',
    },
  ];

  const timeline = [
    { step: '1-2 Days', task: 'Document collection & verification' },
    { step: '3-5 Days', task: 'Application preparation & submission' },
    { step: '60-90 Days', task: 'Insurance company processing' },
    { step: '90-120 Days', task: 'Complete credentialing approval' },
  ];

  const benefits = [
    'Fast-track credentialing in 90-120 days',
    'Reduce application errors and delays',
    'Never miss a renewal deadline',
    'Expert handling of complex applications',
    'Direct communication with payers',
    'Complete compliance documentation',
  ];

  return (
    <div className="credentialing-page">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faIdCard} className="text-gold" />
                <span className="text-sm text-gold font-medium">Essential Service</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Provider Credentialing
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Fast, accurate provider credentialing and payer enrollment services. 
                Get your providers credentialed quickly so they can start seeing patients 
                and generating revenue.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Start Credentialing
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  View Timeline
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Feature Image */}
      <section className="bg-bg-primary">
        <div className="container mx-auto px-4 py-8">
          <RevealOnScroll direction="up">
            <div className="rounded-card overflow-hidden border border-grey" style={{ maxHeight: '420px' }}>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&auto=format&fit=crop&q=80"
                alt="Provider credentialing documents and healthcare compliance"
                className="w-full object-cover"
                style={{ maxHeight: '420px', objectPosition: 'center 40%' }}
                loading="lazy"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                What We Handle
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Complete Credentialing Solutions
              </h2>
            </div>
          </RevealOnScroll>

          <StaggerChildren stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} hoverable>
                  <CardContent>
                    <div className="w-14 h-14 rounded-sharp bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={service.icon} className="text-2xl text-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Typical Timeline
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                What to Expect
              </h2>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto">
            <StaggerChildren stagger={0.15}>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-6 p-6 bg-bg-card border border-grey rounded-card hover:border-gold transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center">
                        <span className="text-gold font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gold font-semibold mb-1">{item.step}</p>
                      <p className="text-text-primary font-medium">{item.task}</p>
                    </div>
                  </div>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <div>
                <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                  Why Choose Us
                </h5>
                <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                  Expert Credentialing Service
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-gold text-lg flex-shrink-0 mt-1"
                      />
                      <p className="text-text-secondary">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.2}>
              <Card className="bg-gradient-gold text-charcoal">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-6">
                    Fast-Track Process
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-charcoal text-lg mt-1" />
                      <p>Dedicated credentialing specialist assigned</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-charcoal text-lg mt-1" />
                      <p>Direct payer contacts and relationships</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-charcoal text-lg mt-1" />
                      <p>Weekly status updates</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-charcoal text-lg mt-1" />
                      <p>Document verification and error correction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                Get Your Providers Credentialed Fast
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Start the credentialing process today and get approved in 90-120 days.
              </p>
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  Begin Credentialing
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Credentialing;