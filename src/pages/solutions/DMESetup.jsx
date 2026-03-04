import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCrutch, 
  faFileContract,
  faWarehouse,
  faClipboardList,
  faTruck,
  faChartBar,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * DME Setup Solution Page
 */
const DMESetup = () => {
  const services = [
    {
      icon: faFileContract,
      title: 'Licensing & Registration',
      description: 'Complete business formation, state licensing, and federal registration.',
    },
    {
      icon: faClipboardList,
      title: 'Accreditation',
      description: 'Medicare/Medicaid accreditation and ACHC/CHAP certification assistance.',
    },
    {
      icon: faWarehouse,
      title: 'Supplier Setup',
      description: 'Vendor relationships, inventory management, and supply chain setup.',
    },
    {
      icon: faTruck,
      title: 'Distribution Network',
      description: 'Delivery logistics, territory planning, and fulfillment systems.',
    },
    {
      icon: faChartBar,
      title: 'Billing & RCM',
      description: 'DME-specific billing setup, coding, and revenue cycle management.',
    },
    {
      icon: faFileContract,
      title: 'Compliance Support',
      description: 'HIPAA compliance, documentation standards, and regulatory guidance.',
    },
  ];

  const process = [
    {
      phase: 'Phase 1: Foundation',
      duration: '2-3 Weeks',
      tasks: ['Business entity formation', 'EIN & tax setup', 'State licensing applications'],
    },
    {
      phase: 'Phase 2: Accreditation',
      duration: '6-8 Weeks',
      tasks: ['Medicare enrollment', 'Accreditation applications', 'Site surveys'],
    },
    {
      phase: 'Phase 3: Operations',
      duration: '2-3 Weeks',
      tasks: ['Supplier agreements', 'Inventory setup', 'Billing system integration'],
    },
    {
      phase: 'Phase 4: Launch',
      duration: '1 Week',
      tasks: ['Staff training', 'System testing', 'Go-live support'],
    },
  ];

  const benefits = [
    'Complete DME business setup in 10-14 weeks',
    'Medicare/Medicaid enrollment handled',
    'ACHC or CHAP accreditation support',
    'Supplier and vendor relationships established',
    'Billing and inventory systems configured',
    'Ongoing compliance monitoring',
  ];

  return (
    <div className="dme-setup-page">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faCrutch} className="text-gold" />
                <span className="text-sm text-gold font-medium">Specialized Service</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                DME Setup Services
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Complete turnkey setup for Durable Medical Equipment businesses. From 
                licensing and accreditation to supplier relationships and billing systems, 
                we handle every detail.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Start Your DME Business
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  Download Setup Guide
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
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1400&auto=format&fit=crop&q=80"
                alt="Durable medical equipment warehouse and supply setup"
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
                Complete Setup
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Everything You Need to Launch
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

      {/* Process Timeline */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Setup Timeline
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Your Path to Launch
              </h2>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto">
            <StaggerChildren stagger={0.15}>
              <div className="space-y-6">
                {process.map((phase, index) => (
                  <Card key={index} hoverable>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gold text-charcoal font-bold text-xl flex items-center justify-center">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-serif font-semibold text-text-primary">
                              {phase.phase}
                            </h3>
                            <span className="text-sm text-gold font-semibold">
                              {phase.duration}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {phase.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-center space-x-2 text-text-secondary text-sm">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-gold text-xs" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                  Expert DME Business Setup
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
                    What is Included
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-charcoal text-lg mt-1" />
                      <div>
                        <p className="font-semibold">Business Formation</p>
                        <p className="text-sm opacity-80">LLC/Corp setup, EIN, state registration</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-charcoal text-lg mt-1" />
                      <div>
                        <p className="font-semibold">Medicare Enrollment</p>
                        <p className="text-sm opacity-80">PECOS, DMEPOS surety bond, site survey</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-charcoal text-lg mt-1" />
                      <div>
                        <p className="font-semibold">Operational Systems</p>
                        <p className="text-sm opacity-80">Billing, inventory, delivery management</p>
                      </div>
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
                Ready to Launch Your DME Business?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Lets discuss your business goals and create a customized setup plan.
              </p>
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default DMESetup;