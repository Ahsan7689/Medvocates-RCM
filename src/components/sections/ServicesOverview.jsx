import { Link } from 'react-router-dom';
import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserMd, 
  faFileInvoiceDollar, 
  faIdCard, 
  faCrutch,
  faArrowRight,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { SERVICES } from '@/lib/constants';

/**
 * ServicesOverview Section Component - FIXED
 * Featured services with cards and icon fallback
 */
const ServicesOverview = () => {
  const iconMap = {
    faUserMd,
    faFileInvoiceDollar,
    faIdCard,
    faCrutch,
  };

  const featuredServices = SERVICES.filter(service => service.featured);

  return (
    <section id="services-section" className="section-padding bg-bg-secondary">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
              Our Solutions
            </h5>
            <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-text-secondary">
              From medical billing to virtual assistance, we provide end-to-end solutions 
              to streamline your practice operations and maximize revenue.
            </p>
          </div>
        </RevealOnScroll>

        {/* Services Grid */}
        <StaggerChildren stagger={0.15} triggerStart="top 80%">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map((service, index) => {
              // ✅ FIXED: Add fallback for undefined icons
              const IconComponent = iconMap[service.icon] || faUserMd;
              
              return (
                <Link 
                  key={service.id} 
                  to={`/solutions/${service.slug}`}
                  className="group"
                >
                  <Card hoverable className="h-full relative overflow-hidden">
                    {/* Featured Badge */}
                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <FontAwesomeIcon 
                          icon={faStar} 
                          className="text-gold text-sm"
                        />
                      </div>
                    )}

                    <CardContent className="flex flex-col h-full pt-8">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-sharp bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <FontAwesomeIcon 
                          icon={IconComponent} 
                          className="text-3xl text-gold"
                        />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-serif font-semibold text-text-primary mb-3 group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
                        {service.shortDesc}
                      </p>

                      {/* Learn More Link */}
                      <div className="flex items-center text-gold text-sm font-medium group-hover:translate-x-2 transition-transform">
                        <span>Learn More</span>
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </StaggerChildren>

        {/* View All Services CTA */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="text-center">
            <Link to="/solutions">
              <Button variant="secondary" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default ServicesOverview;