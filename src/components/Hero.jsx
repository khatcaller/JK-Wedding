import { images } from '../content';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${images.heroBackground})` }}
        role="presentation"
      />
      <a href="#welcome" className="hero-scroll" aria-label="Scroll to content">
        <span className="hero-chevron" aria-hidden="true" />
      </a>
    </section>
  );
}
