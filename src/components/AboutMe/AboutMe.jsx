import { siteConfig } from "../../config/siteConfig.js";
import "./AboutMe.css";

export default function AboutMe() {
  const { about, professional } = siteConfig;

  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-inner container">
        <div className="about-image-wrap">
          <img
            src={about.image}
            alt={about.imageAlt}
            className="about-image"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-content">
          <p className="section-kicker">{about.eyebrow}</p>
          <h2 className="section-title" id="about-title">
            {about.title}
          </h2>
          <p className="about-name">
            {professional.name}
            {professional.title && <span> · {professional.title}</span>}
          </p>
          {about.paragraphs.map((paragraph, index) => (
            <p className="section-copy" key={`${index}-${paragraph}`}>
              {paragraph}
            </p>
          ))}
          {about.credentials && (
            <div className="credentials-note">{about.credentials}</div>
          )}
        </div>
      </div>
    </section>
  );
}
