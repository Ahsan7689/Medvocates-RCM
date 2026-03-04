import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faComments, 
  faFileContract, 
  faRocket, 
  faChartLine 
} from '@fortawesome/free-solid-svg-icons';

/**
 * HowItWorks Section Component
 * Process steps with timeline
 */
const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: faComments,
      title: 'Free Consultation',
      description: 'Schedule a no-obligation call to discuss your practice needs and pain points.',
    },
    {
      number: '02',
      icon: faFileContract,
      title: 'Custom Proposal',
      description: 'Receive a tailored solution with transparent pricing and clear deliverables.',
    },
    {
      number: '03',
      icon: faRocket,
      title: 'Seamless Onboarding',
      description: 'Our team handles the complete setup and training within 2-3 weeks.',
    },
    {
      number: '04',
      icon: faChartLine,
      title: 'Ongoing Optimization',
      description: 'Regular reporting, continuous improvement, and dedicated account management.',
    },
  ];

  return (
    <section className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
              How It Works
            </h5>
            <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
              Get Started in Four Simple Steps
            </h2>
            <p className="text-lg text-text-secondary">
              Our streamlined onboarding process ensures you are up and running 
              with minimal disruption to your practice.
            </p>
          </div>
        </RevealOnScroll>

        {/* Steps Timeline */}
        <StaggerChildren stagger={0.2} triggerStart="top 80%">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="relative z-10 text-center">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold text-charcoal font-bold text-2xl mb-6 shadow-gold-glow">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <FontAwesomeIcon 
                      icon={step.icon} 
                      className="text-4xl text-gold"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-semibold text-text-primary mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </StaggerChildren>

      </div>
    </section>
  );
};

export default HowItWorks;