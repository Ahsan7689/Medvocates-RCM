import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHospital,
  faFileInvoiceDollar,
  faProcedures,
  faClipboardCheck,
  faUserMd,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * ASC (Ambulatory Surgery Center) Specialty Page
 */
const ASC = () => {
  const services = [
    {
      icon: faProcedures,
      title: 'ASC Facility Billing',
      description: 'Complete facility fee billing for all ASC-approved procedures.',
    },
    {
      icon: faUserMd,
      title: 'Multi-Specialty Support',
      description: 'Billing expertise across all surgical specialties performed in ASCs.',
    },
    {
      icon: faClipboardCheck,
      title: 'Implant & Device Billing',
      description: 'Proper billing for implantable devices and surgical supplies.',
    },
    {
      icon: faFileInvoiceDollar,
      title: 'ASC Payment System',
      description: 'Navigate ASC payment rates, OPPS, and bundled payments.',
    },
  ];

  const challenges = [
    'Complex ASC payment bundling rules',
    'Device pass-through and outlier payments',
    'Multiple procedure payment reduction (MPPR)',
    'Modifier 59/XU usage requirements',
    'Bilateral procedure coding',
    'Medical necessity documentation standards',
  ];

  const solutions = [
    'ASC payment system expertise',
    'Device billing optimization',
    'MPPR calculation accuracy',
    'Modifier compliance review',
    'Bilateral coding protocols',
    'Pre-authorization support',
  ];

  return (
    <div className="asc-specialty-page">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faHospital} className="text-gold" />
                <span className="text-sm text-gold font-medium">Healthcare Specialty</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Ambulatory Surgery Center (ASC)
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Specialized billing for ambulatory surgery centers across all surgical specialties. 
                Expert handling of facility fees, device billing, and complex ASC payment system 
                navigation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Get ASC Support
                  </Button>
                </Link>
                <Link to="/solutions/medical-billing">
                  <Button variant="secondary" size="lg">
                    Billing Services
                  </Button>
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
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1400&auto=format&fit=crop&q=80"
                alt="Ambulatory surgery center operating room"
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
                Our Expertise
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Specialized ASC Services
              </h2>
              <p className="text-lg text-text-secondary">
                From orthopedic surgery to ophthalmology, we handle all ASC specialties 
                with precision and compliance expertise.
              </p>
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

      {/* Challenges & Solutions */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <RevealOnScroll direction="left">
              <div>
                <h3 className="text-h3 font-serif font-bold text-text-primary mb-6">
                  ASC Billing Challenges
                </h3>
                <div className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-bg-card border border-alert/30 rounded-card"
                    >
                      <span className="text-alert text-lg flex-shrink-0 mt-0.5">⚠</span>
                      <p className="text-text-secondary">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Solutions */}
            <RevealOnScroll direction="right" delay={0.2}>
              <div>
                <h3 className="text-h3 font-serif font-bold text-text-primary mb-6">
                  Our Solutions
                </h3>
                <div className="space-y-3">
                  {solutions.map((solution, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-bg-card border border-success/30 rounded-card"
                    >
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-success text-lg flex-shrink-0 mt-0.5"
                      />
                      <p className="text-text-secondary">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-gold text-charcoal">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-h3 font-serif font-bold mb-6">
                    ASC Industry Insights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <p className="text-4xl font-bold mb-2">5,900+</p>
                      <p className="text-sm opacity-80">Medicare-certified ASCs in US</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-2">$40B</p>
                      <p className="text-sm opacity-80">ASC market size (2024)</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-2">58%</p>
                      <p className="text-sm opacity-80">Cost savings vs hospital outpatient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Specialties Served */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Specialties We Support
              </h2>
              <p className="text-lg text-text-secondary">
                Comprehensive billing expertise across all ASC surgical specialties
              </p>
            </div>
          </RevealOnScroll>

          <StaggerChildren stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                'Orthopedic Surgery',
                'Ophthalmology',
                'Pain Management',
                'Gastroenterology',
                'Podiatry',
                'ENT Surgery',
                'Plastic Surgery',
                'Spine Surgery',
                'General Surgery',
                'Urology',
                'Cardiovascular Procedures',
                'Hand Surgery',
              ].map((specialty, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-bg-card border border-grey rounded-card hover:border-gold transition-colors"
                >
                  <FontAwesomeIcon 
                    icon={faCheckCircle} 
                    className="text-gold flex-shrink-0"
                  />
                  <span className="text-text-primary font-medium">
                    {specialty}
                  </span>
                </div>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Why ASCs Choose MedVocates
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <RevealOnScroll direction="up" delay={0.1}>
              <Card hoverable>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    Multi-Specialty Expertise
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Our team handles billing for all surgical specialties performed in ASCs.
                  </p>
                </CardContent>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.2}>
              <Card hoverable>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    Device Billing Mastery
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Expert handling of implantable devices, pass-through payments, and outliers.
                  </p>
                </CardContent>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.3}>
              <Card hoverable>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    Compliance Assurance
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Stay compliant with ASC regulations, OPPS updates, and Medicare requirements.
                  </p>
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
                Maximize Your ASC Revenue
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Expert billing support for multi-specialty ambulatory surgery centers.
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

export default ASC;