import { couple, images, story } from '../content';
import './Welcome.css';

export default function Welcome() {
  return (
    <section id="welcome" className="section welcome" aria-label="A note from us">
      <div className="section-inner welcome-inner">
        <div className="welcome-text">
          <p className="section-label">A Note From Us</p>
          <h2 className="section-title">A love worth celebrating</h2>
          <p className="welcome-story">{story.text}</p>
          <p className="welcome-names script">{couple.combined}</p>
        </div>

        <div className="welcome-photo-area" aria-label="Photo of Karina and Jonathan">
          <div className="welcome-photo-frame">
            <img
              src={images.couplePhoto}
              alt={images.couplePhotoAlt}
              className="welcome-photo-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
