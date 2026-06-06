import { images } from '../content';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Karina and Jonathan">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${images.heroBackground})` }}
        role="img"
        aria-label="Karina and Jonathan"
      />
    </section>
  );
}
