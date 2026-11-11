import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { siteConfig } from "./config/siteConfig.js";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element "#root" was not found.');
}

document.title = siteConfig.seo.title;

const description = document.querySelector('meta[name="description"]');
if (description) {
  description.setAttribute("content", siteConfig.seo.description);
}

const socialMetadata = [
  ['property', 'og:title', siteConfig.seo.title],
  ['property', 'og:description', siteConfig.seo.description],
  ['property', 'og:url', siteConfig.seo.canonicalUrl],
  ['property', 'og:image', siteConfig.seo.socialImage],
  ['name', 'twitter:title', siteConfig.seo.title],
  ['name', 'twitter:description', siteConfig.seo.description],
  ['name', 'twitter:image', siteConfig.seo.socialImage],
];

for (const [attribute, key, content] of socialMetadata) {
  if (!content) continue;
  let meta = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.append(meta);
  }
  meta.setAttribute("content", content);
}

const canonicalUrl = siteConfig.seo.canonicalUrl;
if (canonicalUrl) {
  try {
    const parsedUrl = new URL(canonicalUrl);
    if (parsedUrl.protocol === "https:" || parsedUrl.protocol === "http:") {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.append(canonicalLink);
      }
      canonicalLink.href = parsedUrl.href;
    }
  } catch {
    // Ignore an invalid optional canonical URL; the site still renders normally.
  }
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
