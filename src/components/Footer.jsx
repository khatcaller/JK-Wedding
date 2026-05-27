import { couple, event } from '../content';
import FloralMark from './FloralMark';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-divider" aria-hidden="true">
          <span className="footer-divider-line" />
          <FloralMark size={22} color="rgba(196, 181, 160, 0.4)" />
          <span className="footer-divider-line" />
        </div>

        <p className="footer-tagline serif">We can't wait to celebrate with you.</p>
        <p className="footer-names script">{couple.combined}</p>
        <p className="footer-date">{event.date}</p>

        <p className="footer-venue">{event.venue} · {event.city}</p>
      </div>
    </footer>
  );
}
