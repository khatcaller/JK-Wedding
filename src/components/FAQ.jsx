import { useState } from 'react';
import { faqs } from '../content';
import './FAQ.css';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  function toggle(i) {
    setOpen(prev => (prev === i ? null : i));
  }

  return (
    <section id="faq" className="section faq" aria-label="Frequently asked questions">
      <div className="section-inner">
        <div className="faq-header">
          <p className="section-label">Questions</p>
          <h2 className="section-title">Good to Know</h2>
          <div className="section-divider" />
        </div>

        <dl className="faq-list">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                <dt>
                  <button
                    className="faq-question"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{q}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  className={`faq-answer${isOpen ? ' faq-answer--open' : ''}`}
                  aria-hidden={!isOpen}
                >
                  <p>{a}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
