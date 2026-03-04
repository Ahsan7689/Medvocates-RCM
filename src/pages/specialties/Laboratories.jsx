import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlask,
  faFileInvoiceDollar,
  faVial,
  faClipboardCheck,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Laboratories = () => {
  const services = [
    {
      icon: faFileInvoiceDollar,
      title: 'Lab Billing',
      description: 'Complete billing for clinical, reference, and specialty laboratories.',
    },
    {
      icon: faVial,
      title: 'CPT Coding',
      description: 'Expert laboratory CPT coding and modifier application.',
    },
    {
      icon: faClipboardCheck,
      title: 'ABN Management',
      description: 'Proper ABN handling and Medicare compliance.',
    },
    {
      icon: faFlask,
      title: 'CLIA Compliance',
      description: 'Billing compliance with CLIA certification requirements.',
    },
  ];

  const challenges = [
    'Complex CPT and HCPCS coding',
    'Medicare LCD compliance',
    'ABN requirement tracking',
    'Panel testing bundling rules',
    'Modifier 91 vs 59 usage',
    'Reference lab coordination',
  ];

  const solutions = [
    'Certified lab billing specialists',
    'LCD monitoring and updates',
    'Automated ABN tracking',
    'Panel unbundling expertise',
    'Modifier compliance review',
    'Reference lab reconciliation',
  ];

  return (
    <div className="laboratories-specialty-page">
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faFlask} className="text-gold" />
                <span className="text-sm text-gold font-medium">Healthcare Specialty</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Laboratory Services
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Specialized billing for clinical, reference, and specialty laboratories. Navigate 
                complex coding requirements, Medicare LCDs, and ensure CLIA compliance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">Get Lab Support</Button>
                </Link>
                <Link to="/solutions/medical-billing">
                  <Button variant="secondary" size="lg">Billing Services</Button>
                </Link>
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
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1400&auto=format&fit=crop&q=80"
                alt="Clinical laboratory scientist analyzing samples"
                className="w-full object-cover"
                style={{ maxHeight: '420px', objectPosition: 'center 40%' }}
                loading="lazy"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Specialized Laboratory Services
              </h2>
            </div>
          </RevealOnScroll>
          <StaggerChildren stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <RevealOnScroll direction="left">
              <div>
                <h3 className="text-h3 font-serif font-bold text-text-primary mb-6">
                  Laboratory Challenges
                </h3>
                <div className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-bg-card border border-alert/30 rounded-card">
                      <span className="text-alert text-lg flex-shrink-0 mt-0.5">⚠</span>
                      <p className="text-text-secondary">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right" delay={0.2}>
              <div>
                <h3 className="text-h3 font-serif font-bold text-text-primary mb-6">
                  Our Solutions
                </h3>
                <div className="space-y-3">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-bg-card border border-success/30 rounded-card">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success text-lg flex-shrink-0 mt-0.5" />
                      <p className="text-text-secondary">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                Optimize Your Laboratory Revenue Cycle
              </h2>
              <Link to="/contact">
                <Button variant="primary" size="lg" rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
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

export default Laboratories;