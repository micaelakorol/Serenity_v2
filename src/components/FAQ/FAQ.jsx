import { useId, useState } from "react";
import { siteConfig } from "../../config/siteConfig.js";
import "./FAQ.css";

export default function FAQ() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState(0);
  const panelIdPrefix = useId();

  if (!faq.items.length) return null;

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-inner container">
        <div className="faq-heading">
          <p className="section-kicker">{faq.eyebrow}</p>
          <h2 className="section-title" id="faq-title">
            {faq.title}
          </h2>
          <p className="section-copy">{faq.description}</p>
        </div>
        <div className="faq-list">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${panelIdPrefix}-panel-${index}`;
            const buttonId = `${panelIdPrefix}-button-${index}`;

            return (
              <article className={`faq-item ${isOpen ? "faq-item-open" : ""}`} key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    {item.question}
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  {item.answer}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
