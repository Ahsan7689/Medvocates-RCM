import { useState } from 'react';
import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FAQ_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

/**
 * FAQ — FIXED
 * ✅ Dark mode hover: charcoal-light bg, gold text (unchanged)
 * ✅ Light mode hover: teal bg + white text
 * ✅ Active item: teal bg + white text in light mode
 */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-bg-primary">
      <div className="container mx-auto">

        {/* Header */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
              FAQ
            </h5>
            <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary">
              Have questions? We have got answers. If you do not find what you are looking for,
              feel free to contact us directly.
            </p>
          </div>
        </RevealOnScroll>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <StaggerChildren stagger={0.1} triggerStart="top 85%">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="mb-4 border border-grey rounded-card overflow-hidden bg-bg-card faq-item"
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={cn(
                    'w-full flex items-center justify-between p-6 text-left transition-all duration-200 faq-btn',
                    openIndex === index ? 'faq-btn--active' : ''
                  )}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold pr-4 faq-question">
                    {item.question}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={cn(
                      'text-gold transition-transform duration-300 flex-shrink-0 faq-chevron',
                      openIndex === index && 'rotate-180'
                    )}
                  />
                </button>

                {/* Answer */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>

      </div>

      {/* ✅ Scoped styles for teal hover in light mode */}
      <style>{`
        /* DARK MODE — gold accent hover */
        .faq-btn { background: transparent; }
        .faq-question { color: var(--text-primary, #ffffff); }
        .faq-btn:hover { background: rgba(255,255,255,0.04); }
        .faq-btn:hover .faq-question { color: #c9a961; }
        .faq-btn--active { background: rgba(201,169,97,0.08); }
        .faq-btn--active .faq-question { color: #c9a961; }

        /* LIGHT MODE — teal hover */
        [data-theme="light"] .faq-btn { background: transparent; }
        [data-theme="light"] .faq-question { color: #1a1a1a; }
        [data-theme="light"] .faq-btn:hover {
          background: #2d8685 !important;
        }
        [data-theme="light"] .faq-btn:hover .faq-question {
          color: #ffffff !important;
        }
        [data-theme="light"] .faq-btn:hover .faq-chevron {
          color: #ffffff !important;
        }
        [data-theme="light"] .faq-btn--active {
          background: #2d8685 !important;
        }
        [data-theme="light"] .faq-btn--active .faq-question {
          color: #ffffff !important;
        }
        [data-theme="light"] .faq-btn--active .faq-chevron {
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
};

export default FAQ;