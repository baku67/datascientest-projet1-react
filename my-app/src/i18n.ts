import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // NAV
      about: "About Us",
      contact: "Contact",
      login: "Log In",
      signup: "Join Now",
      // Home
      hero_title_1: "Explore the",
      hero_title_2: "Web",
      hero_title_3: "in all its",
      hero_title_4: "facets",
      hero_sub_text:
        "The world of the web is constantly evolving, and we are here to guide you through its trends, technologies and best practices. Whether you are a developer, designer or digital enthusiast, our blog offers quality content to help you stay ahead of the curve.",
      discover_btn: "Discover our articles",
      newsletter_btn: "Subscribe to the newsletter",
      trust_section_title: "Trusted by Industry Leaders",
      // FOOTER
      footer_product: "Product",
      footer_pricing: "Pricing",
      footer_overview: "Overview",
      footer_browse: "Browse",
      footer_accessibility: "Accessibility",
      footer_five: "Five",

      footer_solutions: "Solutions",
      footer_brainstorming: "Brainstorming",
      footer_ideation: "Ideation",
      footer_wireframing: "Wireframing",
      footer_research: "Research",

      footer_resources: "Resources",
      footer_help_center: "Help Center",
      footer_blog: "Blog",
      footer_tutorials: "Tutorials",

      footer_company: "Company",
      footer_about: "About",
      footer_press: "Press",
      footer_events: "Events",
      footer_careers: "Careers",

      footer_rights: "All rights reserved.",
    },
  },
  fr: {
    translation: {
      // NAV
      about: "À propos",
      contact: "Contact",
      login: "Connexion",
      signup: "Créer un compte",
      // Home
      hero_title_1: "Explorez le",
      hero_title_2: "Web",
      hero_title_3: "sous toutes ses",
      hero_title_4: "facettes",
      hero_sub_text:
        "Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances, technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital, notre blog vous offre du contenu de qualité pour rester à la pointe.",
      discover_btn: "Découvrir les articles",
      newsletter_btn: "S'abonner à la newsletter",
      trust_section_title: "Ils nous font confiance",
      // FOOTER
      footer_product: "Produits",
      footer_pricing: "Prix",
      footer_overview: "Vue d'ensemble",
      footer_browse: "Parcourir",
      footer_accessibility: "Accessibilité",
      footer_five: "Five",

      footer_solutions: "Solutions",
      footer_brainstorming: "Cogitation",
      footer_ideation: "Créativité",
      footer_wireframing: "Maquettage",
      footer_research: "Recherche",

      footer_resources: "Ressources",
      footer_help_center: "Centre d'aide",
      footer_blog: "Blog",
      footer_tutorials: "Tutoriels",

      footer_company: "Entreprise",
      footer_about: "À propos",
      footer_press: "Presse",
      footer_events: "Événements",
      footer_careers: "Carrières",

      footer_rights: "Tous droits réservés.",
    },
  },
} as const;

i18n
  .use(LanguageDetector) // optionnel mais pratique :contentReference[oaicite:1]{index=1}
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
