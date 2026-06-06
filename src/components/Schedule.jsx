import { schedule, event } from '../content';
import FloralMark from './FloralMark';
import './Schedule.css';

const highlights = schedule.filter(item => item.highlight);

export default function Schedule() {
  return (
    <section id="schedule" className="section schedule" aria-label="Weekend schedule">
      <div className="section-inner">
        <div className="schedule-header">
          <p className="section-label">Wedding Weekend</p>
          <h2 className="section-title">Schedule of Events</h2>
        </div>

        {/* ── Friday: Rehearsal Dinner ── */}
        <div className="schedule-day">
          <h3 className="schedule-day-label">
            <span className="schedule-day-date">Friday, September 4</span>
          </h3>

          <div className="event-card event-card--private">
            <div className="event-card-header">
              <p className="event-card-title serif">Rehearsal & Dinner</p>
              <p className="event-card-badge event-card-badge--private">Bridal Party & Family</p>
            </div>
            <p className="event-card-date">Friday, September 4, 2026</p>
            <p className="event-card-private-sub">
              Additional details will be shared directly with invited guests.
            </p>
          </div>
        </div>

        {/* ── Saturday: Wedding ── */}
        <div className="schedule-day">
          <h3 className="schedule-day-label">
            <span className="schedule-day-date">Saturday, September 5</span>
          </h3>

          <div className="event-card event-card--wedding">
            {/* inner decorative border */}
            <div className="invite-inner">
              <p className="invite-names script">Our Wedding Day</p>

              <div className="invite-rule invite-rule--ornament" aria-hidden="true">
                <span className="invite-rule-line" />
                <FloralMark size={26} color="rgba(201, 168, 76, 0.55)" />
                <span className="invite-rule-line" />
              </div>

              <div className="invite-details">
                <p className="invite-detail-line serif">Saturday, September 5, 2026</p>
                <p className="invite-detail-line invite-detail-time serif">3:30 PM – 10:00 PM</p>
              </div>

              <div className="invite-rule" aria-hidden="true">
                <span className="invite-rule-line" />
              </div>

              <p className="invite-venue serif">{event.venue}</p>
              <p className="invite-address serif">{event.address}</p>

              <div className="invite-rule" aria-hidden="true">
                <span className="invite-rule-line" />
              </div>

              <ul className="event-highlights event-highlights--invite" aria-label="Key moments">
                {highlights.map(({ time, label }) => (
                  <li key={label} className="event-highlight-row">
                    <span className="event-highlight-time serif">{time}</span>
                    <span className="event-highlight-bullet" aria-hidden="true">
                      <FloralMark size={11} color="rgba(201, 168, 76, 0.55)" />
                    </span>
                    <span className="event-highlight-label serif">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
