import { siteConfig } from "../siteConfig.js";
import "./Services.css";

export default function Services() {
  const { services } = siteConfig;

  if (!services.items.length) return null;

  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">{services.eyebrow}</p>
          <h2 className="section-title" id="services-title">
            {services.title}
          </h2>
          <p className="section-copy">{services.description}</p>
        </div>
        <div className="services-grid">
          {services.items.map((service, index) => (
            <article className="service-card" key={`${service.title}-${index}`}>
              <span className="service-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.duration && (
                <span className="service-duration">{service.duration}</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
