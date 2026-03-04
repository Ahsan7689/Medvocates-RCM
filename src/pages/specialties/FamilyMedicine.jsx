import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers,
  faFileInvoiceDollar,
  faUserMd,
  faClipboardCheck,
  faBaby,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * Family Medicine Specialty Page
 */
const FamilyMedicine = () => {
  const services = [
    {
      icon: faBaby,
      title: 'Pediatric to Geriatric',
      description: 'Comprehensive billing expertise for patients of all ages, from newborns to elderly care.',
    },
    {
      icon: faClipboardCheck,
      title: 'Preventive Care',
      description: 'Well visits, immunizations, screenings, and annual wellness visit optimization.',
    },
    {
      icon: faFileInvoiceDollar,
      title: 'Acute & Chronic Care',
      description: 'Both acute illness visits and chronic disease management billing.',
    },
    {
      icon: faUserMd,
      title: 'Family Planning',
      description: 'Reproductive health, family planning services, and ob/gyn co-management.',
    },
  ];

  const challenges = [
    'Wide age range coding complexity',
    'Preventive visit bundling rules',
    'Same-day sick visits with preventive',
    'Ob/Gyn co-management billing',
    'Pediatric vaccination coding (VFC)',
    'Wellness visit timing requirements',
  ];

  const solutions = [
    'Age-specific E&M coding expertise',
    'Preventive visit optimization',
    'Modifier 25 compliance review',
    'Co-management billing protocols',
    'VFC program billing support',
    'Visit scheduling coordination',
  ];

  return (
    <div className="family-medicine-specialty-page">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faUsers} className="text-gold" />
                <span className="text-sm text-gold font-medium">Healthcare Specialty</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Family Medicine
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Complete billing and administrative support for family medicine practices serving 
                patients of all ages. Expert handling of preventive care, chronic disease management, 
                and multi-generational family healthcare.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Get Family Medicine Support
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
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1400&auto=format&fit=crop&q=80"
                alt="Family medicine doctor with patients of all ages"
                className="w-full object-cover"
                style={{ maxHeight: '420px', objectPosition: 'center 25%' }}
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
                Specialized Family Medicine Services
              </h2>
              <p className="text-lg text-text-secondary">
                From newborn care to geriatric services, we understand the unique billing 
                requirements of comprehensive family practice.
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
                  Family Medicine Billing Challenges
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
                    Family Medicine Industry Insights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <p className="text-4xl font-bold mb-2">35%</p>
                      <p className="text-sm opacity-80">Of all US physicians are in family medicine</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-2">215M</p>
                      <p className="text-sm opacity-80">Annual family medicine visits in US</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-2">40%</p>
                      <p className="text-sm opacity-80">Reduction in billing errors with experts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
                Why Family Medicine Practices Choose Us
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
                    Multi-Age Expertise
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Our team understands the unique coding requirements for every age group.
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
                    Preventive Care Focus
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Maximize reimbursements for wellness visits and preventive screenings.
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
                    Same-Day Optimization
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Properly bill same-day sick visits with preventive care using modifier 25.
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
                Ready to Optimize Your Family Medicine Practice?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Get expert billing support tailored to comprehensive family healthcare.
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

export default FamilyMedicine;