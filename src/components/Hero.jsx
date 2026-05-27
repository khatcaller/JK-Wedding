import { couple, event } from '../content';
import FloralMark from './FloralMark';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Wedding announcement">
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-ornament" aria-hidden="true">
          <span className="hero-ornament-line" />
          <FloralMark size={22} color="rgba(196, 181, 160, 0.5)" />
          <span className="hero-ornament-line" />
        </div>

        <h1 className="hero-names script">{couple.combined}</h1>

        <div className="hero-divider" aria-hidden="true">
          <span className="hero-divider-line" />
          <FloralMark size={22} color="rgba(196, 181, 160, 0.5)" />
          <span className="hero-divider-line" />
        </div>

        <p className="hero-date serif">{event.day} · {event.date}</p>
        <p className="hero-venue serif">{event.venue} · {event.city}</p>

        <div className="hero-cta">
          <a href="#rsvp" className="btn btn-primary">RSVP</a>
          <a href="#details" className="btn btn-outline">View Details</a>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}
