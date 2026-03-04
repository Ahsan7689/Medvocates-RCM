import { RevealOnScroll } from '@/components/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { COMPANY_INFO } from '@/lib/constants';
import ContactForm from '@/components/forms/ContactForm';

const Contact = () => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com';

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto px-4">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-semibold mb-3 uppercase tracking-widest text-sm">
                Get In Touch
              </p>
              {/* ✅ FIX: force white text in both modes */}
              <h1 className="text-h1 font-serif font-bold mb-6" style={{ color: '#ffffff' }}>
                Lets Start a Conversation
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Ready to transform your practice? Our team is here to answer your questions
                and provide a customized solution for your needs.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-12 bg-bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: faEnvelope, title: 'Email Us', content: <a href={`mailto:${COMPANY_INFO.email}`} className="text-gold hover:underline text-sm break-all">{COMPANY_INFO.email}</a> },
              { icon: faPhone, title: 'Call Us', content: <a href={`tel:${COMPANY_INFO.phone}`} className="text-gold hover:underline text-sm">{COMPANY_INFO.phone}</a> },
              { icon: faMapMarkerAlt, title: 'Visit Us', content: <address className="text-text-secondary text-sm not-italic">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</address> },
              { icon: faClock, title: 'Business Hours', content: <p className="text-text-secondary text-sm">Mon-Fri: 8am – 6pm<br />All US Time Zones</p> },
            ].map((card, i) => (
              <RevealOnScroll key={card.title} direction="up" delay={i * 0.1}>
                <div className="flex flex-col items-center text-center p-6 bg-bg-card border border-grey rounded-card hover:border-gold transition-colors h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 border border-gold/30 mb-4 flex-shrink-0">
                    <FontAwesomeIcon icon={card.icon} className="text-2xl text-gold" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-2">{card.title}</h3>
                  {card.content}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + WHY US */}
      <section className="section-padding bg-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <RevealOnScroll direction="left">
              <div>
                <h2 className="text-h3 font-serif font-bold text-text-primary mb-2">Send Us a Message</h2>
                <p className="text-text-secondary mb-6">Fill out the form below and we will get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.2}>
              <div>
                <h2 className="text-h3 font-serif font-bold text-text-primary mb-6">Why Choose MedVocates?</h2>
                <div className="space-y-5 mb-8">
                  {[
                    { title: 'Fast Response Time', desc: 'We respond to all inquiries within 24 hours, often much sooner.' },
                    { title: 'No Obligation Consultation', desc: 'Free consultation to understand your needs and provide tailored solutions.' },
                    { title: 'Transparent Pricing', desc: 'Clear, upfront pricing with no hidden fees or long-term contracts.' },
                    { title: 'HIPAA Compliant', desc: 'All communications and data are handled with enterprise-grade security.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                        <p className="text-sm text-text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-bg-card border border-grey rounded-card">
                  <p className="text-xs text-text-muted mb-4 uppercase tracking-widest font-semibold">Trusted By</p>
                  <div className="flex items-center gap-0">
                    {[['300+', 'Providers'], ['100+', 'Professionals'], ['99%', 'Satisfaction']].map(([val, label], i) => (
                      <div key={label} className="flex items-center">
                        <div className="text-center px-4">
                          <p className="text-2xl font-bold text-gold">{val}</p>
                          <p className="text-xs text-text-secondary">{label}</p>
                        </div>
                        {i < 2 && <div className="w-px h-10 bg-grey" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ✅ CALENDLY — ONE TIME ONLY using .env */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto px-4">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">Schedule a Free Consultation</h2>
              <p className="text-lg text-text-secondary">Book a 30-minute call with our team to discuss your practice needs.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="max-w-4xl mx-auto rounded-card overflow-hidden border border-grey shadow-luxury">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a consultation with MedVocates"
                loading="lazy"
                style={{ display: 'block', minHeight: 700 }}
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Contact;