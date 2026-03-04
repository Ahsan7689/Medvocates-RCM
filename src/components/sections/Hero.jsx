import { Button } from '@/components/ui';
import { SplitText, FadeIn } from '@/components/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NAVIGATION } from '@/lib/constants';

/**
 * Hero Section — FIXED
 * ✅ All text is WHITE in BOTH light and dark mode
 *    Hero always has dark image overlay so text must always be white
 *    Replaced text-text-primary / text-text-secondary with explicit white styles
 */
const Hero = () => {
  const handleCTAClick = () => {
    window.open(import.meta.env.VITE_CALENDLY_URL || NAVIGATION?.cta?.external || 'https://calendly.com', '_blank', 'noopener noreferrer');
  };

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image + dark overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://thbrjephelueobbsgwrl.supabase.co/storage/v1/object/public/Blog/Gemini_Generated_Image_xryffpxryffpxryf.png)' }}
        />
        {/* Dark overlay — ensures text is ALWAYS readable regardless of theme */}
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      {/* Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201,169,97,0.15) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-[1] section-padding">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <FadeIn delay={0.3}>
            <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-sm text-gold font-medium">
                Trusted by 300+ Healthcare Providers
              </span>
            </div>
          </FadeIn>

          {/* ✅ Heading — color prop on SplitText forces white on every span,
               immune to theme CSS variable changes in both light & dark mode */}
          <h1
            className="text-h1 md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
            style={{ color: '#ffffff' }}
          >
            {/* ✅ color="#ffffff" ensures each word-span is white regardless of theme */}
            <SplitText
              text="Trusted Medical Billing &"
              splitBy="words"
              stagger={0.08}
              delay={0.5}
              color="#ffffff"
            />
            <br />
            {/* Gold line stays gold — no color prop needed here */}
            <span className="text-gold">
              <SplitText
                text="Virtual Assistance"
                splitBy="words"
                stagger={0.08}
                delay={0.9}
              />
            </span>
          </h1>

          {/* ✅ Subheading — forced white/80 via style prop */}
          <FadeIn delay={1.3}>
            <p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Streamline operations, improve cash flow, and reduce administrative burden
              with{' '}
              <span className="text-gold font-semibold">US-based healthcare expertise</span>
              {' '}and HIPAA-compliant workflows.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={1.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                variant="primary"
                size="lg"
                onClick={handleCTAClick}
                rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                className="w-full sm:w-auto"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToServices}
                className="w-full sm:w-auto"
              >
                Explore Services
              </Button>
            </div>
          </FadeIn>

          {/* ✅ Trust indicators — forced white/70 */}
          <FadeIn delay={1.9}>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {['HIPAA Compliant', '25+ EHR Systems', '100+ Professionals', 'No-Contract Model'].map((item) => (
                <div key={item} className="flex items-center space-x-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <span className="text-gold text-lg">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Scroll indicator */}
      <FadeIn delay={2.2}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[1]">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-xs uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.5)' }}>Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </FadeIn>

    </section>
  );
};

export default Hero;