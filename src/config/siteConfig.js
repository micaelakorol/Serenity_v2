
import heroImage from "../assets/hero-wellbeing.webp";
import aboutImage from "../assets/about-portrait.webp";

/**
 * Archivo principal de personalización.
 * Permite adaptar el contenido del sitio web sin modificar los componentes.
 * Dejá los campos vacíos para ocultar los métodos de contacto y redes sociales opcionales.
 */
export const siteConfig = {
  brand: {
    name: "Serenity",
    tagline: "Un espacio de bienestar y cuidado personal.",
  },
  professional: {
    name: "Laura Martinez",
    title: "Terapeuta",
  },
  seo: {
    title: "Serenity | Terapia y Bienestar",
    description:
      "Un espacio cálido y acogedor para cuidar tu bienestar emocional. Conocé los servicios y reservá tu sesión.",
    // Agregar la URL pública completa después de publicar el sitio web.
    canonicalUrl: "",
    socialImage: "",
  },
  theme: {
    // Estos valores corresponden a las variables CSS existentes. Modificarlos no altera el diseño.
    text: "#26352f",
    muted: "#68766f",
    primary: "#315f55",
    primaryDark: "#254b43",
    accent: "#e9f0eb",
    soft: "#f7f8f5",
    border: "#e3e9e4",
  },
  navigation: {
    servicesLabel: "Servicios",
    aboutLabel: "Sobre mí",
    faqLabel: "Preguntas frecuentes",
    menuOpenLabel: "Abrir menú de navegación",
    menuCloseLabel: "Cerrar menú de navegación",
  },
  hero: {
    eyebrow: "Un espacio para vos",
    title: "Hacé espacio para una vida más equilibrada.",
    description:
      "Un espacio cálido y de acompañamiento para comprender tus emociones, atravesar los cambios y cuidar tu bienestar.",
    primaryCta: "Reservar una sesión",
    secondaryCta: "Conocer los servicios",
    note: "Atención online y presencial",
    image: heroImage,
    imageAlt: "Una persona disfrutando de un momento de tranquilidad al aire libre",
    imageCaption: "Un espacio para hacer una pausa, reflexionar y crecer",
  },
  about: {
    eyebrow: "Conoceme",
    title: "Un poco sobre mí",
    paragraphs: [
      "Creo que todas las personas merecen un espacio donde puedan sentirse escuchadas, comprendidas y acompañadas.",
      "Mi enfoque es cercano y colaborativo. Juntas podemos explorar herramientas y estrategias que se adapten a tus necesidades y a tus tiempos.",
    ],
    image: aboutImage,
    imageAlt: "Terapeuta en un consultorio cálido y acogedor",
    credentials: "Agregá aquí tus títulos, formación y matrícula profesional.",
  },
  services: {
    eyebrow: "Cómo puedo ayudarte",
    title: "Un acompañamiento adaptado a vos.",
    description:
      "Conocé los servicios disponibles y elegí el tipo de acompañamiento que mejor se adapte a lo que necesitás.",
    items: [
      {
        title: "Sesiones individuales",
        description: "Un espacio de acompañamiento personalizado, confidencial y de confianza.",
        duration: "50 minutos",
      },
      {
        title: "Estrés y ansiedad",
        description: "Explorá herramientas prácticas para afrontar los desafíos cotidianos.",
        duration: "50 minutos",
      },
      {
        title: "Desarrollo personal",
        description: "Un espacio para conocerte mejor y trabajar en tus objetivos personales.",
        duration: "50 minutos",
      },
      {
        title: "Sesiones online",
        description: "Encuentros virtuales desde un lugar donde te sientas cómoda.",
        duration: "50 minutos",
      },
    ],
  },
  booking: {
    // Desactivado hasta que se agregue el enlace real de reservas.
    enabled: false,
    url: "",
    buttonText: "Reservar una sesión",
    openInNewTab: true,
  },
  contact: {
    email: "",
    // Formato internacional, solo números. Dejar vacío para ocultar WhatsApp.
    whatsapp: "",
    whatsappLabel: "Contactar por WhatsApp",
  },
  socialLinks: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  faq: {
    eyebrow: "Información útil",
    title: "Preguntas frecuentes",
    description:
      "Algunos detalles que pueden ayudarte a sentirte más cómoda antes de comenzar.",
    items: [
      {
        question: "¿Cuánto dura una sesión?",
        answer:
          "Las sesiones suelen durar aproximadamente 50 minutos. Actualizá esta respuesta según las características de tu atención.",
      },
      {
        question: "¿Ofrecés sesiones online?",
        answer:
          "Sí. Las sesiones online se realizan mediante una plataforma segura de videollamadas.",
      },
      {
        question: "¿Cómo puedo reservar un turno?",
        answer:
          "Utilizá el botón de reservas de esta página para consultar los días y horarios disponibles.",
      },
    ],
  },
  contactSection: {
    eyebrow: "Dá el primer paso",
    title: "Tu bienestar merece un espacio.",
    description:
      "Elegí el horario que mejor te quede o contactame si tenés alguna consulta antes de reservar.",
  },
};
