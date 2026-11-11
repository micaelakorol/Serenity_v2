import { siteConfig } from "../../config/siteConfig.js";
import "./BookingButton.css";

export default function BookingButton({ className = "" }) {
  const { booking } = siteConfig;
  {/** Boton reservar sesión */}
  const bookingUrl = "https://calendar.app.google/LPKbntNQSHgPuiCA8"

  if (!bookingUrl) {
    return (
      <span
        className={`booking-button ${className}`.trim()}
        aria-disabled="true"
      >
        {booking.buttonText}
        <span aria-hidden="true">↗</span>
      </span>
    );
  }

  return (
    <a
      className={`booking-button ${className}`.trim()}
      href={bookingUrl}
      target={booking.openInNewTab ? "_blank" : undefined}
      rel={booking.openInNewTab ? "noopener noreferrer" : undefined}
    >
      {booking.buttonText}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
