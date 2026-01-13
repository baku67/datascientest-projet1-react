import { useTranslation } from "react-i18next";
import "./HeroSection.scss";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>{t("hero_title_1")} </span>
          <span className="hero-title-web"> {t("hero_title_2")} </span>
          <span>{t("hero_title_3")} </span>
          <span className="hero-title-facets">{t("hero_title_4")}</span>
        </h1>
        <p className="hero-subtitle">{t("hero_sub_text")}</p>

        <div className="hero-cta-buttons">
          <a href="#" className="hero-cta-btn">
            {t("discover_btn")}
          </a>
          <a href="#" className="hero-secondary-btn">
            {t("newsletter_btn")}
          </a>
        </div>
      </div>
      <img
        src="/assets/home-hero.png"
        alt="Illustration"
        className="hero-image"
      />
    </section>
  );
}
