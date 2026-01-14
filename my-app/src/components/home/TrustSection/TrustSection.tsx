import { useTranslation } from "react-i18next";
import "./TrustSection.scss";
const smartfinderLogo = "/assets/logos/smartfinder.png";
const zoomerrLogo = "/assets/logos/zoomerr.png";
const shellsLogo = "/assets/logos/shells.png";
const wavesLogo = "/assets/logos/waves.png";
const artvenueLogo = "/assets/logos/artvenue.png";

export default function TrustSection() {
  const { t } = useTranslation();

  return (
    <section className="trust-section">
      <h2>{t("trust_section_title")}</h2>
      <ul className="trust-logos" role="list">
        <li>
          <img src={smartfinderLogo} alt="Logo SmartFinder" />
          <span>SmartFinder</span>
        </li>
        <li>
          <img src={zoomerrLogo} alt="Logo Zoomerr" />
          <span>Zoomerr</span>
        </li>
        <li>
          <img src={shellsLogo} alt="Logo SHELLS" />
          <span>SHELLS</span>
        </li>
        <li>
          <img src={wavesLogo} alt="Logo WAVES" />
          <span>WAVES</span>
        </li>
        <li>
          <img src={artvenueLogo} alt="Logo ArtVenue" />
          <span>ArtVenue</span>
        </li>
      </ul>
    </section>
  );
}
