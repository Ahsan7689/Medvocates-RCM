import { RevealOnScroll } from '@/components/animations';
import { CountUp } from '@/components/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faUserMd,
  faSmile,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Stats Section — FIXED
 * ✅ Icons hardcoded directly — no broken string-to-icon lookup
 * ✅ All 4 icons always render
 */
const STATS_DATA = [
  { value: '50+', label: 'Healthcare Providers', icon: faBuilding,   prefix: '',  end: 50, suffix: '+'  },
  { value: '100+', label: 'Professionals',        icon: faUserMd,     prefix: '',  end: 100, suffix: '+'  },
  { value: '99%',  label: 'Satisfaction Rate',    icon: faSmile,      prefix: '',  end: 99,  suffix: '%'  },
  { value: '$50M+',label: 'Revenue Managed',      icon: faChartLine,  prefix: '$', end: 50,  suffix: 'M+' },
];

const Stats = () => (
  <section className="section-padding bg-gradient-dark relative overflow-hidden">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(201,169,97,.05) 25%, rgba(201,169,97,.05) 26%, transparent 27%, transparent 74%, rgba(201,169,97,.05) 75%, rgba(201,169,97,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(201,169,97,.05) 25%, rgba(201,169,97,.05) 26%, transparent 27%, transparent 74%, rgba(201,169,97,.05) 75%, rgba(201,169,97,.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px',
      }} />
    </div>

    <div className="container mx-auto relative z-10">
      <RevealOnScroll direction="up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="text-gold font-sans font-semibold mb-3 uppercase tracking-wide text-sm">
            By The Numbers
          </h5>
          <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
            Proven Results That Speak for Themselves
          </h2>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS_DATA.map((stat, index) => (
          <RevealOnScroll key={index} direction="up" delay={index * 0.1}>
            <div className="text-center group">
              {/* ✅ Icon always renders — imported directly */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={stat.icon} className="text-2xl text-gold" />
              </div>

              {/* Animated value */}
              <div className="text-5xl font-serif font-bold text-gold mb-2 flex items-center justify-center">
                {stat.prefix && <span>{stat.prefix}</span>}
                <CountUp end={stat.end} suffix={stat.suffix} duration={2.5} delay={0.3} />
              </div>

              <p className="text-text-secondary font-medium">{stat.label}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;