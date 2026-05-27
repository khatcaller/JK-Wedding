import { registry } from '../content';
import './Registry.css';

export default function Registry() {
  return (
    <section id="registry" className="section registry" aria-label="Registry">
      <div className="section-inner">
        <div className="registry-header">
          <p className="section-label">Gifts</p>
          <h2 className="section-title">Registry</h2>
          <div className="section-divider" />
          <p className="registry-blurb serif">
            Having you there is everything. If you'd like to bring a gift, we've set up a few places to browse.
          </p>
        </div>

        <div className="registry-buttons">
          {registry.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              className="btn btn-outline-dark registry-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View our ${label} registry`}
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
