import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEye,
  faFileInvoiceDollar,
  faGlasses,
  faClipboardCheck,
  faProcedures,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Ophthalmology = () => {
  const services = [
    {
      icon: faProcedures,
      title: 'Cataract Surgery',
      description: 'Complete cataract surgery billing including premium IOL management.',
    },
    {
      icon: faGlasses,
      title: 'Refractive Procedures',
      description: 'LASIK and other refractive surgery billing support.',
    },
    {
      icon: faClipboardCheck,
      title: 'Medical Eye Care',
      description: 'Glaucoma, retina, and medical eye condition billing.',
    },
    {
      icon: faEye,
      title: 'Vision Services',
      description: 'Routine vision vs medical eye exam determination and billing.',
    },
  ];

  const challenges = [
    'Routine vs medical eye exam determination',
    'Premium IOL billing and ABN requirements',
    'Bilateral procedure coding rules',
    'E&M with same-day procedures',
    'Complex modifier usage requirements',
    'Vision plan vs medical insurance coordination',
  ];

  const solutions = [
    'Medical necessity determination protocols',
    'Premium IOL ABN handling and compliance',
    'Bilateral coding accuracy review',
    'E&M modifier 25 compliance',
    'Comprehensive modifier training',
    'Plan-specific billing optimization',
  ];

  return (
    <div className="ophthalmology-specialty-page">
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faEye} className="text-gold" />
                <span className="text-sm text-gold font-medium">Healthcare Specialty</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                Ophthalmology
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Comprehensive billing for ophthalmology and optometry practices. Expert handling 
                of cataract surgery, premium IOLs, refractive procedures, and medical eye care billing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">Get Ophthalmology Support</Button>
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
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&auto=format&fit=crop&q=80"
                alt="Ophthalmologist examining patient's eye with slit lamp"
                className="w-full object-cover"
                style={{ maxHeight: '420px', objectPosition: 'center 35%' }}
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
                Specialized Ophthalmology Services
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
                  Ophthalmology Challenges
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

      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-gold text-charcoal">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-h3 font-serif font-bold mb-6">Ophthalmology Insights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <p className="text-4xl font-bold mb-2">3.8M</p>
                      <p className="text-sm opacity-80">Cataract surgeries annually</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-2">40%</p>
                      <p className="text-sm opacity-80">Premium IOL adoption rate</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-2">$45B</p>
                      <p className="text-sm opacity-80">US eye care market size</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                Optimize Your Ophthalmology Revenue
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

export default Ophthalmology;