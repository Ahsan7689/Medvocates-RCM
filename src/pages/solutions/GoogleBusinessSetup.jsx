import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faStar,
  faSearch,
  faCamera,
  faChartLine,
  faComments,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Google Business Setup Solution Page
 */
const GoogleBusinessSetup = () => {
  const services = [
    {
      icon: faMapMarkerAlt,
      title: 'Profile Setup',
      description: 'Complete Google Business Profile creation and verification.',
    },
    {
      icon: faCamera,
      title: 'Profile Optimization',
      description: 'Professional photos, detailed descriptions, and complete information.',
    },
    {
      icon: faSearch,
      title: 'Local SEO',
      description: 'Optimization for local search visibility and rankings.',
    },
    {
      icon: faStar,
      title: 'Review Management',
      description: 'Review monitoring, response templates, and reputation management.',
    },
    {
      icon: faChartLine,
      title: 'Performance Tracking',
      description: 'Regular reporting on views, clicks, and patient actions.',
    },
    {
      icon: faComments,
      title: 'Q&A Management',
      description: 'Monitor and respond to patient questions on your profile.',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Profile Creation',
      description: 'Set up or claim your Google Business Profile with accurate information.',
      duration: '1-2 days',
    },
    {
      step: '2',
      title: 'Verification',
      description: 'Complete Google verification process (phone, postcard, or email).',
      duration: '3-7 days',
    },
    {
      step: '3',
      title: 'Optimization',
      description: 'Add photos, services, hours, and optimize all profile sections.',
      duration: '2-3 days',
    },
    {
      step: '4',
      title: 'Monitoring',
      description: 'Ongoing management, review responses, and performance tracking.',
      duration: 'Ongoing',
    },
  ];

  const benefits = [
    'Appear in Google Maps and local search results',
    'Show up in the "Local Pack" for relevant searches',
    'Display accurate business information 24/7',
    'Collect and showcase patient reviews',
    'Post updates, offers, and announcements',
    'Track patient engagement and insights',
  ];

  const stats = [
    { value: '76%', label: 'Of Local Searchers', description: 'Visit a business within 24 hours' },
    { value: '4x', label: 'More Likely', description: 'To visit with complete profile' },
    { value: '70%', label: 'Of Consumers', description: 'Read reviews before choosing' },
  ];

  return (
    <div className="google-business-setup-page">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gold" />
                <span className="text-sm text-gold font-medium">Local SEO</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Google Business Setup
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Optimize your Google Business Profile to attract local patients. Professional 
                setup, optimization, and ongoing management to maximize your local search visibility.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Setup My Profile
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  See Sample Profile
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-gold">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-h2 font-serif font-bold text-charcoal mb-4">
                Why Google Business Matters
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 0.1}>
                <div className="text-center">
                  <p className="text-6xl font-serif font-bold text-charcoal mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xl font-semibold text-charcoal mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm text-charcoal/70">
                    {stat.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="bg-bg-primary">
        <div className="container mx-auto px-4 py-8">
          <RevealOnScroll direction="up">
            <div className="rounded-card overflow-hidden border border-grey" style={{ maxHeight: '420px' }}>
              <img
                src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1400&auto=format&fit=crop&q=80"
                alt="Google Maps local business search on smartphone"
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
                Whats Included
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Complete Profile Management
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
                Our Process
              </h5>
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                From Setup to Success
              </h2>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto">
            <StaggerChildren stagger={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {process.map((item, index) => (
                  <Card key={index} hoverable>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gold text-charcoal font-bold text-xl flex items-center justify-center">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-serif font-semibold text-text-primary">
                              {item.title}
                            </h3>
                            <span className="text-xs text-gold font-semibold whitespace-nowrap ml-2">
                              {item.duration}
                            </span>
                          </div>
                          <p className="text-text-secondary text-sm">
                            {item.description}
                          </p>
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
                  Key Benefits
                </h5>
                <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                  Dominate Local Search Results
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
                    Package Includes
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-gold text-lg mt-1" />
                      <div>
                        <p className="font-semibold text-text-primary">One-Time Setup</p>
                        <p className="text-sm text-text-secondary">Complete profile creation & verification</p>
                        <p className="text-gold font-bold mt-1">$299</p>
                      </div>
                    </div>
                    <div className="h-px bg-grey"></div>
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-gold text-lg mt-1" />
                      <div>
                        <p className="font-semibold text-text-primary">Monthly Management</p>
                        <p className="text-sm text-text-secondary">Posts, reviews, Q&A, reporting</p>
                        <p className="text-gold font-bold mt-1">$99/month</p>
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
                Ready to Boost Your Local Visibility?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Get found by local patients searching for healthcare services.
              </p>
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                >
                  Setup My Google Business
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default GoogleBusinessSetup;