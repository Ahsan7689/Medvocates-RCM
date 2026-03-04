import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeartbeat,
  faFileInvoiceDollar,
  faMicroscope,
  faClipboardCheck,
  faProcedures,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Gastroenterology Specialty Page
 */
const Gastroenterology = () => {
  const services = [
    {
      icon: faProcedures,
      title: 'Endoscopy Billing',
      description: 'Expert billing for EGD, colonoscopy, ERCP, and all endoscopic procedures.',
    },
    {
      icon: faMicroscope,
      title: 'Pathology Coordination',
      description: 'Seamless biopsy and pathology billing coordination with TC/PC split.',
    },
    {
      icon: faClipboardCheck,
      title: 'Anesthesia Services',
      description: 'Moderate sedation and anesthesia billing compliance and documentation.',
    },
    {
      icon: faFileInvoiceDollar,
      title: 'Consultation Billing',
      description: 'GI consultations, follow-up care, and chronic disease management.',
    },
  ];

  const challenges = [
    'Multiple procedure discounting (MPPR)',
    'Pathology technical/professional component billing',
    'Moderate sedation documentation requirements',
    'Screening vs diagnostic colonoscopy determination',
    'Multiple biopsy site coding',
    'ASC vs office-based procedure billing',
  ];

  const solutions = [
    'Procedure bundling optimization expertise',
    'Automated pathology coordination',
    'Sedation compliance documentation review',
    'Screening diagnosis code accuracy',
    'Multi-site biopsy coding protocols',
    'Site-specific billing optimization',
  ];

  return (
    <div className="gastroenterology-specialty-page">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faHeartbeat} className="text-gold" />
                <span className="text-sm text-gold font-medium">Healthcare Specialty</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Gastroenterology
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Specialized billing for gastroenterology practices including endoscopy centers. 
                Navigate complex procedure coding, pathology coordination, and maximize reimbursements 
                for both screening and diagnostic procedures.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Get GI Billing Support
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
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&auto=format&fit=crop&q=80"
                alt="Gastroenterology endoscopy procedure and medical equipment"
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
                Our Expertise
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Specialized Gastroenterology Services
              </h2>
              <p className="text-lg text-text-secondary">
                From routine colonoscopies to complex ERCP procedures, we handle all aspects 
                of GI billing with precision and expertise.
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
                  Gastroenterology Billing Challenges
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

      {/* Procedure Insights */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-gold text-charcoal">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-h3 font-serif font-bold mb-6">
                    Gastroenterology Procedure Insights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <p className="text-4xl font-bold mb-2">15M</p>
                      <p className="text-sm opacity-80">Colonoscopies performed annually in US</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-2">25%</p>
                      <p className="text-sm opacity-80">Average revenue increase with proper coding</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-2">98%</p>
                      <p className="text-sm opacity-80">Clean claim rate for endoscopy procedures</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Common Procedures */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Procedures We Bill
              </h2>
            </div>
          </RevealOnScroll>
<StaggerChildren stagger={0.1}>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
    {[
      'Screening Colonoscopy',
      'Diagnostic Colonoscopy',
      'EGD (Upper Endoscopy)',
      'ERCP',
      'Flexible Sigmoidoscopy',
      'Polypectomy',
      'Biopsy Procedures',
      'Dilation Procedures',
      'Hemorrhoid Banding',
    ].map((procedure, index) => (
      <div 
        key={index}
        className="flex items-center space-x-3 p-4 bg-bg-card border border-grey rounded-card hover:border-gold transition-colors"
      >
        <FontAwesomeIcon 
          icon={faCheckCircle} 
          className="text-gold flex-shrink-0"
        />
        <span className="text-text-primary font-medium">
          {procedure}
        </span>
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
                Maximize Your Gastroenterology Revenue
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Expert billing for all GI procedures with proven results.
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

export default Gastroenterology;