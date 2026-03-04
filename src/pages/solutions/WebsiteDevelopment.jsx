import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faMobileAlt,
  faLock,
  faRocket,
  faSearch,
  faPalette,
  faCheckCircle,
  faArrowRight,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Website Development Solution Page
 * ✅ NO PRICING - Marketing-focused with case studies
 */
const WebsiteDevelopment = () => {
  const features = [
    {
      icon: faMobileAlt,
      title: 'Mobile-First Design',
      description: 'Responsive websites that look perfect on all devices and screen sizes.',
    },
    {
      icon: faLock,
      title: 'HIPAA Compliance',
      description: 'Secure, compliant websites that protect patient information.',
    },
    {
      icon: faSearch,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to rank higher in search results.',
    },
    {
      icon: faPalette,
      title: 'Custom Design',
      description: 'Unique designs that reflect your practice brand and values.',
    },
    {
      icon: faRocket,
      title: 'Fast Loading',
      description: 'Optimized for speed to provide the best patient experience.',
    },
    {
      icon: faCode,
      title: 'Modern Technology',
      description: 'Built with the latest web technologies for reliability and performance.',
    },
  ];

  const included = [
    'Custom responsive design',
    'HIPAA-compliant patient forms',
    'Online appointment booking integration',
    'Patient portal integration ready',
    'Google Analytics setup',
    'SSL certificate and security',
    'Content management system (CMS)',
    'Mobile-friendly navigation',
    'Contact forms and calls-to-action',
    'Social media integration',
    'Blog functionality',
    '1 year free maintenance',
  ];

  const caseStudies = [
    {
      practice: 'Gastroenterology Specialists',
      location: 'Los Angeles, CA',
      result: '250% increase in online appointment requests',
      quote: 'Our new website has become our best marketing tool. Patients love the modern design and easy appointment booking.',
    },
    {
      practice: 'Family Practice Group',
      location: 'Phoenix, AZ',
      result: '400% growth in organic search traffic',
      quote: 'MedVocates delivered a beautiful, HIPAA-compliant website that patients actually use.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We learn about your practice, goals, and target patients.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Create custom mockups and designs for your approval.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Build your website with modern, secure, compliant code.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Deploy your site, train your team, and provide ongoing support.',
    },
  ];

  return (
    <div className="website-development-page">
      
      {/* Hero */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faCode} className="text-gold" />
                <span className="text-sm text-gold font-medium">New Service</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Healthcare Website Development
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Modern, HIPAA-compliant websites that attract patients, build trust, 
                and grow your practice. Professional design meets cutting-edge technology.
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
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&auto=format&fit=crop&q=80"
                alt="Healthcare website design and development on multiple devices"
                className="w-full object-cover"
                style={{ maxHeight: '420px', objectPosition: 'center 35%' }}
                loading="lazy"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Key Features
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Everything Your Practice Needs
              </h2>
            </div>
          </RevealOnScroll>

          <StaggerChildren stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} hoverable>
                  <CardContent>
                    <div className="w-14 h-14 rounded-sharp bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={feature.icon} className="text-2xl text-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feature.description}
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
                Websites That Drive Results
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

      {/* What's Included */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Whats Included
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Complete Website Solution
              </h2>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto">
            <StaggerChildren stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-bg-card border border-grey rounded-card hover:border-gold transition-colors"
                  >
                    <FontAwesomeIcon 
                      icon={faCheckCircle} 
                      className="text-gold text-lg flex-shrink-0 mt-0.5"
                    />
                    <p className="text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Our Process
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                From Concept to Launch
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
                Ready to Launch Your New Website?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Lets discuss your vision and create a website that grows your practice.
              </p>
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default WebsiteDevelopment;