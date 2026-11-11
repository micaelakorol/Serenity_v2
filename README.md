# Serenity — Wellness Website Template

A responsive, single-page React template for therapists, counsellors and wellness professionals. The visual design is intentionally kept lightweight and editorial; the main content, links, images and theme values are managed from one configuration file.

## Live demo

https://serenity-spanish.netlify.app/

> This is a demonstration deployment. Replace the sample identity, copy, contact information, images and booking destination before using the template for a real professional.

## Technology

- React 19
- Vite 7
- CSS (no UI framework)
- Native anchor navigation (no scrolling library required)
- Node.js built-in test runner for utility tests

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10 or newer recommended

## Quick start

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint across the project |
| `npm test` | Run the link utility tests using Node's test runner |
| `npm run build` | Create the optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |

Run all checks before delivery:

```bash
npm ci
npm run lint
npm test
npm run build
```

## Customize the website

Most customization happens in **`src/config/siteConfig.js`**. You should not need to edit component files for ordinary personalization.

| Configuration section | What it controls |
| --- | --- |
| `brand` | Brand name and footer tagline |
| `professional` | Professional name and role |
| `seo` | Browser title, description, canonical URL and social preview image |
| `theme` | Existing text, muted, primary, accent, soft and border colors |
| `navigation` | Navigation labels and accessible menu labels |
| `hero` | Main heading, description, buttons, note and hero image |
| `about` | Biography, credentials and portrait |
| `services` | Services section copy and service cards |
| `booking` | Booking destination, label, enabled state and new-tab behavior |
| `contact` | Email, WhatsApp number, WhatsApp label and location text |
| `socialLinks` | Instagram, Facebook and LinkedIn URLs |
| `faq` | FAQ heading, description, questions and answers |
| `contactSection` | Contact section heading and description |

### Images

The image imports are defined at the top of `src/config/siteConfig.js`:

- `src/assets/hero-wellbeing.webp` — hero image
- `src/assets/about-portrait.webp` — about section image

To replace an image, either replace the file while keeping its filename or update the corresponding import and config property. Use optimized WebP or AVIF images where practical, keep a sensible file size, and write meaningful alt text. **Verify that you own or have a license that permits commercial use and redistribution of every image included in the downloadable package.** The current demo images' redistribution rights have not been independently verified.

### Booking link

Set `booking.enabled` to `true` and provide a full `https://` or `http://` URL in `booking.url`. If the URL is empty or invalid, the booking CTA keeps its visual appearance but is rendered as a non-interactive placeholder (not a link). This keeps the demo layout intact without sending visitors to a generic or fictitious booking page. The template does not provide a booking backend; the link must point to the buyer's own scheduling service or booking page.

### WhatsApp

Set `contact.whatsapp` to an international phone number with country code, using digits only (for example, `5491112345678`). The WhatsApp link is hidden when the number is blank or invalid. Do not include a plus sign, spaces or punctuation.

### Email and social profiles

Set `contact.email` to a real email address. Leave it blank to hide the email link. Set each social URL to a full HTTP(S) profile URL; leave unused profiles blank. Invalid and blank URLs are not rendered as clickable links.

### Theme

Change the values in `theme` to adjust the existing palette. The CSS layout, typography, spacing and component structure remain separate from the theme values.

### SEO and social sharing

Update `seo.title` and `seo.description`. After deployment, set `seo.canonicalUrl` to the final public URL and `seo.socialImage` to an absolute, publicly accessible image URL for social previews. The app updates the browser title, description, canonical URL and Open Graph/Twitter metadata from this configuration. For social crawlers that do not execute JavaScript, also keep the fallback title, description and Open Graph values in `index.html` synchronized with the config.

## Project structure

```text
src/
├── assets/             # Local image assets
├── components/         # Page sections and reusable UI components
├── config/
│   └── siteConfig.js   # Main personalization file
├── utils/
│   └── links.js        # Safe URL and contact-link helpers
├── App.jsx             # Page composition and theme variables
├── index.css           # Global styles and accessibility preferences
└── main.jsx            # React entry point and document metadata
```

## Accessibility and implementation notes

- Semantic page landmarks and section headings are used throughout.
- A skip-to-content link is available for keyboard users.
- The mobile navigation exposes its expanded state and closes with Escape.
- FAQ controls expose `aria-expanded` and `aria-controls` relationships.
- Visible keyboard focus styles and reduced-motion preferences are included.
- External links opened in a new tab use `noopener noreferrer`.
- Optional links are validated before rendering to avoid active placeholder destinations.
- The hero image is prioritized; the about image is lazy-loaded.
- Native anchor links are used instead of an additional scrolling dependency.

## Deployment

The project can be deployed to any static hosting provider that supports Vite builds, including Netlify or Vercel.

1. Install dependencies with `npm ci`.
2. Run `npm run lint`, `npm test` and `npm run build`.
3. Deploy the generated `dist/` directory.
4. Update the canonical URL and social preview image in `siteConfig.js`.
5. Test the deployed site and every external link on desktop and mobile.

## Third-party resources and resale

- React, Vite and the other npm packages retain their respective open-source licenses. Review package licenses and include any required notices when redistributing.
- Google Fonts are loaded from Google Fonts. Review the applicable font licenses and current service terms before resale or redistribution.
- Third-party scheduling, social, email and hosting services may require the buyer's own account and are not included as services by this template.
- Do not represent the template as an operating business or claim revenue, customers, traffic or bookings unless independently documented.
- The seller must verify ownership and redistribution rights for all source code, images, fonts, icons and other assets before listing or transferring the package.
