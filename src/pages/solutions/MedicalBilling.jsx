import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileInvoiceDollar, 
  faMoneyCheckAlt,
  faChartLine,
  faSync,
  faExclamationTriangle,
  faClipboardCheck,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Medical Billing Solution Page
 */
const MedicalBilling = () => {
  const services = [
    {
      icon: faFileInvoiceDollar,
      title: 'Claims Submission',
      description: 'Accurate claim preparation and submission to all major payers.',
    },
    {
      icon: faSync,
      title: 'Payment Posting',
      description: 'Timely posting of payments, adjustments, and denials.',
    },
    {
      icon: faExclamationTriangle,
      title: 'Denial Management',
      description: 'Proactive denial prevention and aggressive appeals process.',
    },
    {
      icon: faMoneyCheckAlt,
      title: 'AR Follow-up',
      description: 'Systematic follow-up on outstanding accounts receivable.',
    },
    {
      icon: faClipboardCheck,
      title: 'Eligibility Verification',
      description: 'Real-time insurance verification before appointments.',
    },
    {
      icon: faChartLine,
      title: 'Revenue Analytics',
      description: 'Detailed reporting and performance metrics.',
    },
  ];

  const benefits = [
    'Average 25% increase in collections',
    'Reduce claim rejection rate by 40%',
    'Faster payment cycles (30-45 days shorter)',
    'Complete transparency with real-time dashboards',
    'No long-term contracts required',
    'Support for 25+ EHR systems',
  ];

  const metrics = [
    { value: '98%', label: 'Clean Claim Rate', description: 'First-pass acceptance' },
    { value: '15 Days', label: 'Average Collection', description: 'Faster than industry average' },
    { value: '25%', label: 'Revenue Increase', description: 'Within first quarter' },
  ];

  return (
    <div className="medical-billing-page">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-gold" />
                <span className="text-sm text-gold font-medium">Core Service</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Medical Billing Services
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                End-to-end revenue cycle management that maximizes reimbursements, reduces 
                denials, and accelerates cash flow. Expert billing specialists dedicated to 
                your practices financial health.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Request RCM Analysis
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  View Pricing
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
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&auto=format&fit=crop&q=80"
                alt="Medical billing specialist reviewing healthcare claims and revenue cycle"
                className="w-full object-cover"
                style={{ maxHeight: '420px', objectPosition: 'center 35%' }}
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
                Full RCM Services
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Complete Revenue Cycle Management
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

      {/* Metrics Section */}
      <section className="section-padding bg-gradient-gold">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-h2 font-serif font-bold text-charcoal mb-4">
                Proven Results That Drive Growth
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 0.1}>
                <div className="text-center">
                  <p className="text-6xl font-serif font-bold text-charcoal mb-2">
                    {metric.value}
                  </p>
                  <p className="text-xl font-semibold text-charcoal mb-1">
                    {metric.label}
                  </p>
                  <p className="text-sm text-charcoal/70">
                    {metric.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <div>
                <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                  Why Choose Us
                </h5>
                <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                  Medical Billing Excellence
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
              <Card className="bg-bg-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-6">
                    What is Included
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-center space-x-3">
                      <span className="text-gold">✓</span>
                      <span>Dedicated billing team</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-gold">✓</span>
                      <span>Real-time dashboards</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-gold">✓</span>
                      <span>Monthly performance reports</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-gold">✓</span>
                      <span>Compliance monitoring</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-gold">✓</span>
                      <span>Account manager support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-gold">✓</span>
                      <span>HIPAA-compliant workflows</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                Ready to Improve Your Revenue Cycle?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Get a free RCM analysis and see how much you could be earning.
              </p>
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  Request Free Analysis
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default MedicalBilling;