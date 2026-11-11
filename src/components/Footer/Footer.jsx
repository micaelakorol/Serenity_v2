import { siteConfig } from "../../config/siteConfig.js";
import "./Footer.css";

export default function Footer() {
const { brand, contact, socialLinks } = siteConfig;
{/** LINKS RRSS */}
const socialItems = [
  { label: "Instagram", href: socialLinks.instagram },
  { label: "Facebook", href: socialLinks.facebook },
  { label: "LinkedIn", href: socialLinks.linkedin },
  { label: "Email", href: contact.email },
];

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <a className="footer-brand" href="#home" aria-label={`${brand.name} home`}>
          {brand.name}<span>.</span>
        </a>
        <p>{brand.tagline}</p>
        {socialItems.length > 0 && (
          <nav className="footer-links" aria-label="Social media and contact links">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external === false ? undefined : "_blank"}
                rel={item.external === false ? undefined : "noopener noreferrer"}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
        <small>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
