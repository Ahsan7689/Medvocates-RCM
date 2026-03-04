import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserMd, 
  faCalendar, 
  faPhone,
  faFileAlt,
  faEnvelope,
  faDatabase,
  faChartLine,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Virtual Assistance Solution Page
 */
const VirtualAssistance = () => {
  const services = [
    {
      icon: faCalendar,
      title: 'Appointment Scheduling',
      description: 'Patient appointment management, reminders, and calendar coordination.',
    },
    {
      icon: faPhone,
      title: 'Phone & Call Management',
      description: 'Professional call answering, message taking, and call routing.',
    },
    {
      icon: faFileAlt,
      title: 'Medical Documentation',
      description: 'Chart preparation, documentation assistance, and record organization.',
    },
    {
      icon: faEnvelope,
      title: 'Patient Communication',
      description: 'Email management, patient inquiries, and follow-up coordination.',
    },
    {
      icon: faDatabase,
      title: 'Data Entry & Management',
      description: 'EHR data entry, database management, and record updates.',
    },
    {
      icon: faChartLine,
      title: 'Administrative Support',
      description: 'General administrative tasks, reporting, and workflow optimization.',
    },
  ];

  const benefits = [
    'Reduce administrative overhead by up to 70%',
    'Extend office hours without hiring additional staff',
    'Improve patient satisfaction with faster response times',
    'Focus your team on high-value clinical activities',
    'Scale support up or down based on practice needs',
    'Access to trained healthcare administrative professionals',
  ];

  const process = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We assess your practice needs and identify bottlenecks.',
    },
    {
      number: '02',
      title: 'VA Selection',
      description: 'We match you with experienced virtual assistants.',
    },
    {
      number: '03',
      title: 'Training',
      description: 'Your VA learns your systems, processes, and preferences.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Begin with supervised support, then full independence.',
    },
  ];

  return (
    <div className="virtual-assistance-page">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faUserMd} className="text-gold" />
                <span className="text-sm text-gold font-medium">Featured Service</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Virtual Assistance Services
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Dedicated virtual assistants who handle administrative tasks so your team 
                can focus on patient care. HIPAA-compliant, US-trained, and available 
                across all time zones.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Get Started Today
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  Download Service Guide
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&auto=format&fit=crop&q=80"
                alt="Virtual assistant working remotely on administrative tasks"
                className="w-full object-cover"
                style={{ maxHeight: '420px', objectPosition: 'center 30%' }}
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
                What We Do
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Comprehensive Administrative Support
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

      {/* Benefits Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <div>
                <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                  Key Benefits
                </h5>
                <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                  Why Practices Choose Our Virtual Assistants
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
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    Real Results
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-5xl font-bold mb-2">70%</p>
                      <p className="text-sm opacity-80">Reduction in administrative costs</p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold mb-2">3x</p>
                      <p className="text-sm opacity-80">Faster patient response times</p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold mb-2">95%</p>
                      <p className="text-sm opacity-80">Client retention rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Our Process
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Getting Started Is Simple
              </h2>
            </div>
          </RevealOnScroll>

          <StaggerChildren stagger={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold text-charcoal font-bold text-2xl mb-4 shadow-gold-glow">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                Ready to Reduce Your Administrative Burden?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Schedule a free consultation to discuss your practice needs.
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

export default VirtualAssistance;