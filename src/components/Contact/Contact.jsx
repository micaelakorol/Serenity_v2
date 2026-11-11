import BookingButton from "./BookingButton.jsx";
import { siteConfig } from "../../config/siteConfig.js";
import "./Contact.css";

export default function Contact() {
  const { contact, contactSection } = siteConfig;
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-inner container">
        <p className="section-kicker">{contactSection.eyebrow}</p>
        <h2 className="section-title" id="contact-title">
          {contactSection.title}
        </h2>
        <p className="section-copy">{contactSection.description}</p>
        <div className="contact-actions">
          {/* Render de boton de reservar sesión */}
          <BookingButton />
        </div>
      </div>
    </section>
  );
}
