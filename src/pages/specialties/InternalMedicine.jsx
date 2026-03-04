import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faFileInvoiceDollar, faUserMd, faClipboardCheck, faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const InternalMedicine = () => {
  const services = [
    { icon: faFileInvoiceDollar, title: 'E&M Coding', description: 'Expert evaluation and management coding for internal medicine.' },
    { icon: faUserMd, title: 'Chronic Care Management', description: 'CCM and TCM billing optimization.' },
    { icon: faClipboardCheck, title: 'Annual Wellness Visits', description: 'AWV and preventive care billing.' },
    { icon: faStethoscope, title: 'Procedure Billing', description: 'Minor procedures and diagnostic testing billing.' },
  ];

  const challenges = ['2021/2023 E&M guideline changes', 'Complex chronic disease management', 'High volume patient encounters', 'Modifier usage compliance', 'Preventive vs problem visits', 'Time-based coding documentation'];
  const solutions = ['Certified E&M coding specialists', 'CCM revenue optimization', 'Documentation improvement plans', 'Modifier audit compliance', 'Preventive visit maximization', 'Time tracking integration'];

  return (
    <div className="internal-medicine-page">
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <FontAwesomeIcon icon={faStethoscope} className="text-gold" />
                <span className="text-sm text-gold font-medium">Healthcare Specialty</span>
              </div>
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">Internal Medicine</h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Comprehensive billing support for internal medicine practices. Maximize reimbursements for E&M visits, chronic care management, and preventive services.
              </p>
              <Link to="/contact"><Button variant="primary" size="lg">Get Started</Button></Link>
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
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1400&auto=format&fit=crop&q=80"
                alt="Internal medicine physician consulting with patient"
                className="w-full object-cover"
                style={{ maxHeight: '420px', objectPosition: 'center 25%' }}
                loading="lazy"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <StaggerChildren stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <Card key={i} hoverable>
                  <CardContent>
                    <div className="w-14 h-14 rounded-sharp bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={s.icon} className="text-2xl text-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-text-primary mb-3">{s.title}</h3>
                    <p className="text-text-secondary text-sm">{s.description}</p>
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
                <h3 className="text-h3 font-serif font-bold text-text-primary mb-6">Challenges</h3>
                <div className="space-y-3">
                  {challenges.map((c, i) => (
                    <div key={i} className="flex items-start space-x-3 p-4 bg-bg-card border border-alert/30 rounded-card">
                      <span className="text-alert text-lg">⚠</span>
                      <p className="text-text-secondary">{c}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div>
                <h3 className="text-h3 font-serif font-bold text-text-primary mb-6">Our Solutions</h3>
                <div className="space-y-3">
                  {solutions.map((s, i) => (
                    <div key={i} className="flex items-start space-x-3 p-4 bg-bg-card border border-success/30 rounded-card">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success text-lg" />
                      <p className="text-text-secondary">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
                Ready to Optimize Your Internal Medicine Practice?
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

export default InternalMedicine;