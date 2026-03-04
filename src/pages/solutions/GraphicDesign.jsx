import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPalette, 
  faFileImage,
  faPrint,
  faEnvelope,
  faBullhorn,
  faIdCard,
  faCheckCircle,
  faArrowRight,
  faQuoteLeft,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Graphic Design Solution Page
 * ✅ NO PRICING - Marketing-focused with portfolio and creative process
 */
const GraphicDesign = () => {
  const services = [
    {
      icon: faIdCard,
      title: 'Logo & Branding',
      description: 'Professional logos and complete brand identity systems for your practice.',
    },
    {
      icon: faPrint,
      title: 'Print Materials',
      description: 'Business cards, brochures, flyers, and patient education materials.',
    },
    {
      icon: faFileImage,
      title: 'Social Media Graphics',
      description: 'Custom social media posts, banners, and profile graphics.',
    },
    {
      icon: faEnvelope,
      title: 'Marketing Collateral',
      description: 'Email templates, newsletters, and promotional materials.',
    },
    {
      icon: faBullhorn,
      title: 'Advertising Design',
      description: 'Display ads, billboards, and digital advertising graphics.',
    },
    {
      icon: faPalette,
      title: 'Custom Illustrations',
      description: 'Medical illustrations, infographics, and educational diagrams.',
    },
  ];

  const designTypes = [
    { name: 'Logo Design', description: 'Professional logos that represent your practice' },
    { name: 'Business Cards', description: 'Memorable cards that make an impression' },
    { name: 'Brochures', description: 'Informative patient materials' },
    { name: 'Social Graphics', description: 'Eye-catching social media content' },
    { name: 'Presentations', description: 'Professional slide decks' },
    { name: 'Signage', description: 'Office signs and wayfinding' },
    { name: 'Patient Forms', description: 'Branded intake and consent forms' },
    { name: 'Newsletters', description: 'Engaging email newsletters' },
  ];

  const benefits = [
    'Stand out from competing practices',
    'Build a recognizable brand identity',
    'Create consistent messaging across all materials',
    'Improve patient trust and credibility',
    'Professional appearance that reflects quality care',
    'Marketing materials that actually convert',
  ];

  const caseStudies = [
    {
      practice: 'Cardiology Center',
      location: 'Las Vegas, NV',
      result: 'Complete rebrand increased patient inquiries by 180%',
      quote: 'The new branding completely transformed how patients perceive our practice. Everything looks cohesive and professional.',
    },
    {
      practice: 'Pediatric Dental Group',
      location: 'Phoenix, AZ',
      result: 'Social media engagement up 350% with new graphics',
      quote: 'MedVocates created fun, engaging designs that resonate with parents and kids alike.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Brief & Strategy',
      description: 'Understand your practice, patients, and brand goals.',
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Create initial design concepts for your review.',
    },
    {
      number: '03',
      title: 'Refinement',
      description: 'Refine chosen design based on your feedback.',
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'Provide final files in all formats you need.',
    },
  ];

  return (
    <div className="graphic-design-page">
      
      {/* Hero */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faPalette} className="text-gold" />
                <span className="text-sm text-gold font-medium">New Service</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Professional Graphic Design
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Create a strong visual identity that sets your practice apart. From logos 
                to marketing materials, we design everything you need to attract and retain patients.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Start Your Project
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  View Portfolio
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
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&auto=format&fit=crop&q=80"
                alt="Professional graphic designer creating healthcare branding materials"
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
                What We Design
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Complete Design Services
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

      {/* ✅ CASE STUDIES - replaces pricing */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Success Stories
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Designs That Drive Results
              </h2>
            </div>
          </RevealOnScroll>

          <StaggerChildren stagger={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card key={index} hoverable>
                  <CardContent className="p-8">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl text-gold/20 mb-4" />
                    <p className="text-text-secondary italic mb-6 leading-relaxed">
                      {study.quote}
                    </p>
                    <div className="mb-4">
                      <p className="text-gold font-bold text-2xl mb-2">{study.result}</p>
                    </div>
                    <div className="border-t border-grey pt-4">
                      <p className="text-text-primary font-semibold">{study.practice}</p>
                      <p className="text-text-muted text-sm">{study.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Design Types Grid */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Design Portfolio
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Every Design Type You Need
              </h2>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto">
            <StaggerChildren stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {designTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-bg-card border border-grey rounded-card hover:border-gold transition-colors"
                  >
                    <FontAwesomeIcon 
                      icon={faCheckCircle} 
                      className="text-gold text-lg flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-text-primary font-semibold mb-1">{type.name}</p>
                      <p className="text-text-secondary text-sm">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll direction="up">
              <h2 className="text-h3 font-serif font-bold text-text-primary mb-8 text-center">
                Why Professional Design Matters
              </h2>
            </RevealOnScroll>

            <StaggerChildren stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-bg-card border border-grey rounded-card hover:border-gold transition-colors"
                  >
                    <FontAwesomeIcon 
                      icon={faLightbulb} 
                      className="text-gold text-lg flex-shrink-0 mt-0.5"
                    />
                    <p className="text-text-secondary">{benefit}</p>
                  </div>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Our Process
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                From Brief to Final Design
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

      {/* CTA */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Lets create professional designs that make your practice stand out.
              </p>
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  Start Your Design Project
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default GraphicDesign;