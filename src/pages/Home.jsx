import {
  Hero,
  WhyChooseUs,
  ServicesOverview,
  HowItWorks,
  Stats,
  Testimonials,
  FAQ,
  CTA,
} from '@/components/sections';

/**
 * Home Page Component
 * Main landing page with all sections
 * All sections stay below navbar (z-index: 9999)
 */
const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Services Overview Section */}
      <ServicesOverview />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Home;