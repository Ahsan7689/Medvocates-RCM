import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHashtag, 
  faImage,
  faCalendarAlt,
  faChartLine,
  faBullhorn,
  faUsers,
  faCheckCircle,
  faArrowRight,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faInstagram, 
  faLinkedin, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Social Media Marketing Solution Page
 * ✅ NO PRICING - Marketing-focused with case studies and process
 */
const SocialMediaMarketing = () => {
  const services = [
    {
      icon: faImage,
      title: 'Content Creation',
      description: 'Professional graphics, photos, and videos tailored for healthcare social media.',
    },
    {
      icon: faCalendarAlt,
      title: 'Content Calendar',
      description: 'Strategic posting schedule optimized for patient engagement and visibility.',
    },
    {
      icon: faBullhorn,
      title: 'Paid Advertising',
      description: 'Targeted ad campaigns to reach new patients in your service area.',
    },
    {
      icon: faUsers,
      title: 'Community Management',
      description: 'Professional response management and patient community engagement.',
    },
    {
      icon: faChartLine,
      title: 'Analytics & Reporting',
      description: 'Monthly performance reports with actionable insights and growth metrics.',
    },
    {
      icon: faHashtag,
      title: 'Strategy Development',
      description: 'Custom social media strategy aligned with your practice goals.',
    },
  ];

  const platforms = [
    { icon: faFacebook, name: 'Facebook', color: '#1877F2' },
    { icon: faInstagram, name: 'Instagram', color: '#E4405F' },
    { icon: faLinkedin, name: 'LinkedIn', color: '#0A66C2' },
    { icon: faTwitter, name: 'Twitter', color: '#1DA1F2' },
  ];

  const benefits = [
    'Increase patient acquisition through targeted campaigns',
    'Build trust and credibility in your community',
    'Educate patients about your services and specialties',
    'Stay top-of-mind with current and potential patients',
    'Improve your online reputation and visibility',
    'Drive more appointments and consultations',
  ];

  const caseStudies = [
    {
      specialty: 'Family Medicine Practice',
      location: 'Phoenix, AZ',
      result: '300% increase in new patient inquiries within 6 months',
      quote: 'Our social media presence has completely transformed how patients find and engage with our practice.',
    },
    {
      specialty: 'Dental Practice',
      location: 'Las Vegas, NV',
      result: '45% growth in appointment bookings from social media',
      quote: 'MedVocates made social media marketing simple and effective for our practice.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery & Audit',
      description: 'We analyze your current social presence and identify growth opportunities.',
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Create a custom content strategy tailored to your practice and patients.',
    },
    {
      number: '03',
      title: 'Content Production',
      description: 'Design and create engaging, compliant content for your platforms.',
    },
    {
      number: '04',
      title: 'Launch & Optimize',
      description: 'Publish content, monitor performance, and continuously improve results.',
    },
  ];

  return (
    <div className="social-media-marketing-page">
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faHashtag} className="text-gold" />
                <span className="text-sm text-gold font-medium">New Service</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Social Media Marketing
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Grow your practice with professional social media management that attracts 
                new patients and builds lasting relationships with your community.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Get Started Today
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  View Success Stories
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
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&auto=format&fit=crop&q=80"
                alt="Social media marketing strategy and content creation"
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
                What We Do
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Complete Social Media Management
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

      {/* Platforms Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Platforms We Manage
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Reach Patients Where They Are
              </h2>
            </div>
          </RevealOnScroll>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="flex flex-col items-center space-y-3 p-6 rounded-card bg-bg-card border border-grey hover:border-gold transition-colors"
              >
                <FontAwesomeIcon 
                  icon={platform.icon} 
                  style={{ color: platform.color }}
                  className="text-5xl"
                />
                <span className="text-text-primary font-semibold">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CASE STUDIES - replaces pricing section */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Success Stories
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Real Results for Healthcare Practices
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
                      <p className="text-text-primary font-semibold">{study.specialty}</p>
                      <p className="text-text-muted text-sm">{study.location}</p>
                    </div>
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
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll direction="up">
              <h2 className="text-h3 font-serif font-bold text-text-primary mb-8 text-center">
                Why Social Media Matters for Healthcare
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
                      icon={faCheckCircle} 
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

      {/* ✅ PROCESS - additional marketing section */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
                Our Process
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                How We Grow Your Social Presence
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
                Ready to Grow Your Practice Through Social Media?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Lets discuss a custom social media strategy for your practice.
              </p>
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  Schedule Free Consultation
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default SocialMediaMarketing;