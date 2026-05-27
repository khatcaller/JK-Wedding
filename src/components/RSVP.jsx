import { useState, useEffect, useRef } from 'react';
import { SHEET_URL } from '../content';
import './RSVP.css';

const initialForm = {
  name: '',
  attending: '',
  numAttending: '1',
  plusOneName: '',
  childrenAttending: '',
  songRequest: '',
  notes: '',
};

export default function RSVP() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef(null);

  const attending = form.attending === 'yes';

  // After submission, wait for the DOM to repaint then scroll the section into view
  useEffect(() => {
    if (submitted && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }, [submitted]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.attending) {
      setError("Please fill in your name and whether you'll be attending.");
      return;
    }

    if (!SHEET_URL) {
      setSubmitted(true);
      return;
    }

    setLoading(true);
    try {
      const body = new FormData();
      Object.entries(form).forEach(([key, val]) => body.append(key, val));
      await fetch(SHEET_URL, { method: 'POST', body, mode: 'no-cors' });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or reach out to us directly.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="rsvp" ref={sectionRef} className="section rsvp" aria-label="RSVP">
      <div className="section-inner rsvp-inner">
        {submitted ? (
          <div className="rsvp-success">
            <span className="rsvp-success-icon" aria-hidden="true">✦</span>
            <h2 className="section-title">Thank you!</h2>
            <p className="rsvp-success-text serif">
              We've received your response and can't wait to celebrate with you.
            </p>
          </div>
        ) : (
          <>
            <div className="rsvp-header">
              <p className="section-label">Join Us</p>
              <h2 className="section-title">RSVP</h2>
              <div className="section-divider" />
              <p className="rsvp-note serif">
                Please only include guests listed on your invitation.
                Kindly respond by <strong>August 1, 2026</strong>.
              </p>
            </div>

            <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name" className="field-label">Your full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="field-input"
                  placeholder="First and last name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <fieldset className="field field--radio">
                <legend className="field-label">Will you be attending?</legend>
                <div className="radio-group">
                  <label className={`radio-option${form.attending === 'yes' ? ' radio-option--selected' : ''}`}>
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={form.attending === 'yes'}
                      onChange={handleChange}
                    />
                    Joyfully accepts
                  </label>
                  <label className={`radio-option${form.attending === 'no' ? ' radio-option--selected' : ''}`}>
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={form.attending === 'no'}
                      onChange={handleChange}
                    />
                    Regretfully declines
                  </label>
                </div>
              </fieldset>

              {attending && (
                <>
                  <div className="field">
                    <label htmlFor="numAttending" className="field-label">Number of guests attending</label>
                    <select
                      id="numAttending"
                      name="numAttending"
                      className="field-input field-select"
                      value={form.numAttending}
                      onChange={handleChange}
                    >
                      {[1, 2, 3, 4, 5, 6].map(n => (
                        <option key={n} value={String(n)}>{n}</option>
                      ))}
                    </select>
                    <p className="field-hint">Include only guests listed on your invitation.</p>
                  </div>

                  <div className="field">
                    <label htmlFor="plusOneName" className="field-label">
                      Plus-one name <span className="field-optional">(if applicable)</span>
                    </label>
                    <input
                      id="plusOneName"
                      name="plusOneName"
                      type="text"
                      className="field-input"
                      placeholder="Full name"
                      value={form.plusOneName}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    <p className="field-hint">Only if a plus one is listed on your invitation.</p>
                  </div>

                  <div className="field">
                    <label htmlFor="childrenAttending" className="field-label">
                      Children attending <span className="field-optional">(if applicable)</span>
                    </label>
                    <input
                      id="childrenAttending"
                      name="childrenAttending"
                      type="text"
                      className="field-input"
                      placeholder="Names and ages, e.g. Emma (4), Liam (7)"
                      value={form.childrenAttending}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="songRequest" className="field-label">
                      Song request <span className="field-optional">(optional)</span>
                    </label>
                    <input
                      id="songRequest"
                      name="songRequest"
                      type="text"
                      className="field-input"
                      placeholder="What will get you on the dance floor?"
                      value={form.songRequest}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <div className="field">
                <label htmlFor="notes" className="field-label">
                  Notes <span className="field-optional">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  className="field-input field-textarea"
                  placeholder="Anything else you'd like us to know?"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              {error && <p className="rsvp-error" role="alert">{error}</p>}

              <button
                type="submit"
                className="btn btn-primary rsvp-submit"
                disabled={loading}
              >
                {loading ? 'Sending…' : 'Send RSVP'}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
