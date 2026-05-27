import { details } from '../content';
import './Details.css';

export default function Details() {
  return (
    <section id="details" className="section details" aria-label="Wedding details">
      <div className="section-inner">
        <div className="details-header">
          <p className="section-label">The Day</p>
          <h2 className="section-title">Plan Your Visit</h2>
          <div className="section-divider" />
        </div>

        <dl className="details-list">
          {details.map(({ label, value }) => (
            <div key={label} className="details-row">
              <dt className="details-term">{label}</dt>
              <dd className="details-def serif">
                {value.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < value.split('\n').length - 1 && <br />}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
