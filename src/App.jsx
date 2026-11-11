import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Contact from "./components/Contact/Contact.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { siteConfig } from "./config/siteConfig.js";
import Services from "./config/Services/Services.jsx";

export default function App() {
  const theme = siteConfig.theme;
  const themeVariables = {
    "--color-text": theme.text,
    "--color-muted": theme.muted,
    "--color-primary": theme.primary,
    "--color-primary-dark": theme.primaryDark,
    "--color-accent": theme.accent,
    "--color-soft": theme.soft,
    "--color-border": theme.border,
  };

  return (
    <div className="site-shell" style={themeVariables}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <Services />
        <AboutMe />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
