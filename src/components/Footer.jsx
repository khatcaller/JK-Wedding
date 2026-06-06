import { couple, event } from '../content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-tagline serif">We can't wait to celebrate with you.</p>
        <p className="footer-names script">{couple.combined}</p>
        <p className="footer-date">{event.date}</p>

        <p className="footer-venue">{event.venue} · {event.city}</p>
      </div>
    </footer>
  );
}
