import { RevealOnScroll } from '@/components/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { COMPANY_INFO } from '@/lib/constants';

/**
 * CTA Section — FIXED
 * Gold-overlay background section
 *
 * "Schedule Free Consultation":
 *   Default → dark bg (#1a1a1a) + white text
 *   Hover   → transparent + white border + white text
 *
 * "Call Us Now":
 *   Default → transparent + dark border + dark text
 *   Hover   → dark bg + white text
 */
const CTA = () => {
  const handleCTAClick = () => {
    window.open(import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com', '_blank', 'noopener noreferrer');
  };

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Bg image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://thbrjephelueobbsgwrl.supabase.co/storage/v1/object/public/Blog/Gemini_Generated_Image_xryffpxryffpxryf.png)' }} />
        <div className="absolute inset-0 bg-gold/90" />
      </div>
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(26,26,26,0.1) 10px, rgba(26,26,26,0.1) 20px)',
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <RevealOnScroll direction="up">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-h2 md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
              Join 300+ healthcare providers who trust MedVocates for their
              medical billing and virtual assistance needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {/* PRIMARY */}
              <button onClick={handleCTAClick}
                style={{ background:'#1a1a1a', color:'#ffffff', border:'2px solid #1a1a1a' }}
                onMouseEnter={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.background='#1a1a1a'; e.currentTarget.style.borderColor='#1a1a1a'; }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-button transition-all duration-200"
              >
                Schedule Free Consultation
                <FontAwesomeIcon icon={faArrowRight} />
              </button>

              {/* SECONDARY */}
              <a href={`tel:${COMPANY_INFO.phone}`}
                style={{ background:'transparent', color:'#1a1a1a', border:'2px solid #1a1a1a' }}
                onMouseEnter={e => { e.currentTarget.style.background='#1a1a1a'; e.currentTarget.style.color='#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#1a1a1a'; }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-button transition-all duration-200"
              >
                <FontAwesomeIcon icon={faPhone} />
                Call Us Now
              </a>
            </div>

            <p className="text-sm text-charcoal/70">• Free consultation • No-obligation quote</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CTA;