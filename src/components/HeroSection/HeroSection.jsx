import { siteConfig } from "../../config/siteConfig.js";
import "./HeroSection.css";

export default function HeroSection() {
  const { hero, booking } = siteConfig;
  const bookingUrl = booking.enabled;

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-inner container">
        <div className="hero-content">
          <p className="section-kicker">{hero.eyebrow}</p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            {bookingUrl ? (
              <a
                className="btn btn-primary"
                href={bookingUrl}
                target={booking.openInNewTab ? "_blank" : undefined}
                rel={booking.openInNewTab ? "noopener noreferrer" : undefined}
              >
                {hero.primaryCta}
              </a>
            ) : (
              <span className="btn btn-primary" aria-disabled="true">
                {hero.primaryCta}
              </span>
            )}
            <a className="btn btn-secondary" href="#services">
              {hero.secondaryCta}
            </a>
          </div>
          {hero.note && <p className="hero-note">{hero.note}</p>}
        </div>
        <div className="hero-visual">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            fetchPriority="high"
            decoding="async"
          />
          {hero.imageCaption && (
            <div className="hero-caption">
              <span className="caption-dot" aria-hidden="true" />
              {hero.imageCaption}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
