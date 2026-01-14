import { useTranslation } from "react-i18next";
import "./TrustSection.scss";

const smartfinderLogo = "/assets/logos/smartfinder.png";
const zoomerrLogo = "/assets/logos/zoomerr.png";
const shellsLogo = "/assets/logos/shells.png";
const wavesLogo = "/assets/logos/waves.png";
const artvenueLogo = "/assets/logos/artvenue.png";

const ITEMS = [
  { src: smartfinderLogo, alt: "Logo SmartFinder", label: "SmartFinder" },
  { src: zoomerrLogo, alt: "Logo Zoomerr", label: "Zoomerr" },
  { src: shellsLogo, alt: "Logo SHELLS", label: "SHELLS" },
  { src: wavesLogo, alt: "Logo WAVES", label: "WAVES" },
  { src: artvenueLogo, alt: "Logo ArtVenue", label: "ArtVenue" },
];

export default function TrustSection() {
  const { t } = useTranslation();

  return (
    <section className="trust-section">
      <h2>{t("trust_section_title")}</h2>

      {/* Desktop : ton layout normal / Mobile : marquee */}
      <div className="trust-marquee" aria-label="Trusted by">
        <div className="trust-marquee__track">
          {/* 1ère passe */}
          <ul className="trust-logos" role="list" aria-hidden="true">
            {ITEMS.map((it) => (
              <li key={it.label}>
                <img src={it.src} alt={it.alt} />
                <span>{it.label}</span>
              </li>
            ))}
          </ul>

          {/* 2ème passe (clone) */}
          <ul className="trust-logos" role="list" aria-hidden="true">
            {ITEMS.map((it) => (
              <li key={`${it.label}-clone`}>
                <img src={it.src} alt="" />
                <span>{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
