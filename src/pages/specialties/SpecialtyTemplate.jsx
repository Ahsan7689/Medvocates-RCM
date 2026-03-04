import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Reusable Specialty Page Template
 * @param {Object} props - Specialty data
 */
const SpecialtyTemplate = ({ 
  icon,
  title,
  description,
  services,
  challenges,
  solutions,
  insights,
  ctaText,
  heroImage,        // { src, alt } — optional Unsplash image shown below hero
}) => {
  return (
    <div className="specialty-page">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={icon} className="text-gold" />
                <span className="text-sm text-gold font-medium">Healthcare Specialty</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                {title}
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Get Started
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

      {/* Feature Image (optional) */}
      {heroImage && (
        <section className="bg-bg-primary">
          <div className="container mx-auto px-4 py-8">
            <RevealOnScroll direction="up">
              <div className="rounded-card overflow-hidden border border-grey" style={{ maxHeight: '420px' }}>
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="w-full object-cover"
                  style={{ maxHeight: '420px', objectPosition: 'center 35%' }}
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Our Expertise
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Specialized Services for {title}
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

      {/* Challenges & Solutions */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <RevealOnScroll direction="left">
              <div>
                <h3 className="text-h3 font-serif font-bold text-text-primary mb-6">
                  Common Challenges
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
      {insights && (
        <section className="section-padding bg-bg-primary">
          <div className="container mx-auto">
            <RevealOnScroll direction="up">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-gradient-gold text-charcoal">
                  <CardContent className="p-8 md:p-12">
                    <h3 className="text-h3 font-serif font-bold mb-6">
                      Industry Insights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {insights.map((insight, index) => (
                        <div key={index}>
                          <p className="text-4xl font-bold mb-2">{insight.value}</p>
                          <p className="text-sm opacity-80">{insight.label}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                {ctaText || `Ready to Optimize Your ${title} Practice?`}
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Get expert billing and administrative support tailored to your specialty.
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

export default SpecialtyTemplate;