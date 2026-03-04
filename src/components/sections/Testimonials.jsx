import { useState } from 'react';
import { RevealOnScroll } from '@/components/animations';
import { Card, CardContent } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TESTIMONIALS } from '@/lib/constants';

/**
 * Testimonials — FIXED
 * ✅ Uses .text (not .content), .title (not .role/.specialty)
 * ✅ Fallback prevents empty render
 */
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Safety: never crash if TESTIMONIALS is empty/undefined
  const items = TESTIMONIALS && TESTIMONIALS.length > 0 ? TESTIMONIALS : [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Family Medicine Physician',
      location: 'Las Vegas, NV',
      rating: 5,
      text: 'MedVocates transformed our billing process. Our collections increased by 35% in just 3 months.',
    },
    {
      name: 'Michael Chen',
      title: 'Practice Manager',
      location: 'Los Angeles, CA',
      rating: 5,
      text: 'The virtual assistants are incredibly professional and have reduced our administrative burden by 70%.',
    },
    {
      name: 'Dr. Robert Martinez',
      title: 'Gastroenterology Specialist',
      location: 'Phoenix, AZ',
      rating: 5,
      text: 'Best decision we made for our practice. The team is knowledgeable, responsive, and results-driven.',
    },
  ];

  const t = items[currentIndex];

  const prev = () => setCurrentIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container mx-auto">

        {/* Header */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
              Testimonials
            </h5>
            <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-text-secondary">
              Do not just take our word for it. Hear from healthcare providers
              who have transformed their practice with MedVocates.
            </p>
          </div>
        </RevealOnScroll>

        {/* Carousel */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <Card className="relative">
              <CardContent className="p-8 md:p-12">

                {/* Quote icon */}
                <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl text-gold/20 mb-6" />

                {/* ✅ FIXED: uses .text not .content */}
                <blockquote className="text-xl md:text-2xl text-text-primary font-serif leading-relaxed mb-8">
                  {t.text || t.content || 'Great experience working with MedVocates.'}
                </blockquote>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-gold text-lg" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-lg">
                      {(t.name || 'A').charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">{t.name}</p>
                    {/* ✅ FIXED: uses .title and .location */}
                    <p className="text-sm text-text-secondary">
                      {t.title || t.role}{t.location ? ` • ${t.location}` : t.specialty ? ` • ${t.specialty}` : ''}
                    </p>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                  <button onClick={prev} className="pointer-events-auto w-10 h-10 rounded-full bg-bg-secondary border border-grey hover:border-gold hover:text-gold transition-all flex items-center justify-center text-text-primary" aria-label="Previous">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button onClick={next} className="pointer-events-auto w-10 h-10 rounded-full bg-bg-secondary border border-grey hover:border-gold hover:text-gold transition-all flex items-center justify-center text-text-primary" aria-label="Next">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-grey hover:bg-gold/50'}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Testimonials;