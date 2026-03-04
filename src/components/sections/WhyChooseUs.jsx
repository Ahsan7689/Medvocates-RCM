import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserMd, 
  faShieldAlt, 
  faDollarSign, 
  faHeadset,
  faClock,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

/**
 * WhyChooseUs Section Component
 * Value propositions with icon cards
 */
const WhyChooseUs = () => {
  const benefits = [
    {
      icon: faUserMd,
      title: 'US Healthcare Expertise',
      description: 'Our team consists of certified medical billing specialists with deep knowledge of US healthcare regulations and insurance protocols.',
    },
    {
      icon: faShieldAlt,
      title: 'HIPAA-Compliant Workflows',
      description: 'Enterprise-grade security with encrypted systems, regular audits, and signed Business Associate Agreements (BAA).',
    },
    {
      icon: faDollarSign,
      title: 'Cost-Effective Solutions',
      description: 'Reduce overhead by up to 70% compared to in-house staff, with transparent pricing and no hidden fees.',
    },
    {
      icon: faHeadset,
      title: 'Dedicated Account Management',
      description: 'Your dedicated account manager ensures seamless communication and personalized service tailored to your practice.',
    },
    {
      icon: faClock,
      title: 'All US Time Zones Covered',
      description: 'Extended support hours across all US time zones ensure your practice operations run smoothly whenever you need us.',
    },
    {
      icon: faChartLine,
      title: 'Proven Revenue Growth',
      description: 'Average 25% increase in collections within the first quarter through optimized billing and denial management.',
    },
  ];

  return (
    <section className="section-padding bg-bg-primary">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
              Why Choose MedVocates
            </h5>
            <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
              Healthcare Expertise You Can Trust
            </h2>
            <p className="text-lg text-text-secondary">
              We combine medical billing excellence with comprehensive virtual assistance 
              to help your practice thrive in today competitive healthcare landscape.
            </p>
          </div>
        </RevealOnScroll>

        {/* Benefits Grid */}
        <StaggerChildren stagger={0.15} triggerStart="top 80%">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} hoverable className="h-full">
                <CardContent className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-sharp bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                    <FontAwesomeIcon 
                      icon={benefit.icon} 
                      className="text-2xl text-gold"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-serif font-semibold text-text-primary mb-3">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </StaggerChildren>

      </div>
    </section>
  );
};

export default WhyChooseUs;