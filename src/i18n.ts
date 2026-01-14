import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // 404 page
      pagenotfound_text: "The page you are looking for does not exist.",
      pagenotfound_go_back: "Go back to Home",
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
      // Home Row Section 1
      home_rowsection_1_titletop: "Resources for all skill levels",
      home_rowsection_1_title:
        "<primary>Learn</primary> and <primary>grow</primary>",
      home_rowsection_1_description:
        "Whether you are just starting out in web development or you are an experienced professional looking to deepen your knowledge, we provide tutorials, guides, and best practices to help you learn efficiently.",
      home_rowsection_1_ctalabel: "Explore resources",
      home_rowsection_1_imagealt: "Resources overview",
      // Home Row Section 2
      home_rowsection_2_titletop: "The web, an ever-evolving ecosystem",
      home_rowsection_2_title:
        "Stay up to date with the latest <primary>trends</primary>",
      home_rowsection_2_description:
        "Every week, we analyze what’s new on the web: emerging frameworks, SEO best practices, accessibility, and much more. Don’t miss any digital news!",
      home_rowsection_2_ctalabel: "Read the latest articles",
      home_rowsection_2_imagealt: "Illustration",

      // Contact Page
      contact_page_title: "Your opinion matters",
      contact_page_description:
        "Your feedback is essential for us to improve! Share your experience, tell us what you like and what we could improve. Your suggestions help us make this blog an increasingly useful and rewarding resource. ",
      contact_form_name_label: "Name",
      contact_form_name_placeholder: "Enter your name",
      contact_form_forname_label: "First Name",
      contact_form_forname_placeholder: "Enter your first name",
      contact_form_email_label: "Email",
      contact_form_email_placeholder: "Enter your email address",
      contact_form_message_label: "Message",
      contact_form_message_placeholder: "Write your message here",
      contact_form_submit_button: "Send Message",

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
      // 404 page
      pagenotfound_text: "La page que vous cherchez n'existe pas.",
      pagenotfound_go_back: "Retourner à l'accueil",
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
      // Home Row Section 1
      home_rowsection_1_titletop: "Des ressources pour tous les niveaux",
      home_rowsection_1_title:
        "<primary>Apprenez</primary> et <primary>progressez</primary>",
      home_rowsection_1_description:
        "Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement.",
      home_rowsection_1_ctalabel: "Explorer les ressources",
      home_rowsection_1_imagealt: "Aperçu des ressources",
      // Home Row Section 2
      home_rowsection_2_titletop:
        "Le web, un écosystème en constante évolution",
      home_rowsection_2_title:
        "Restez informé des dernières <primary>tendances</primary>",
      home_rowsection_2_description:
        "Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !",
      home_rowsection_2_ctalabel: "Lire les articles récents",
      home_rowsection_2_imagealt: "Illustration",

      // Contact Page
      contact_page_title: "Votre avis compte !",
      contact_page_description:
        "Votre retour est essentiel pour nous améliorer ! Partagez votre expérience, dites-nous ce que vous aimez et ce que nous pourrions améliorer. Vos suggestions nous aident à faire de ce blog une ressource toujours plus utile et enrichissante. ",
      contact_form_name_label: "Nom",
      contact_form_name_placeholder: "Entrez votre nom",
      contact_form_forname_label: "Prénom",
      contact_form_forname_placeholder: "Entrez votre prénom",
      contact_form_email_label: "Email",
      contact_form_email_placeholder: "Entrez votre adresse email",
      contact_form_message_label: "Message",
      contact_form_message_placeholder: "Écrivez votre message ici",
      contact_form_submit_button: "Envoyer le message",

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
  .use(LanguageDetector)
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
