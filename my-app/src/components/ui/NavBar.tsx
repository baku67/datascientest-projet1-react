import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./NavBar.scss";

export default function NavBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-left">
          <a className="nav-link" href="#" onClick={close}>
            <span className="nav-title">weeb</span>
          </a>

          <ul className="nav-links" role="list">
            <li>
              <a className="nav-link" href="#" onClick={close}>
                {t("about")}
              </a>
            </li>
            <li>
              <a className="nav-link" href="#" onClick={close}>
                {t("contact")}
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <a className="nav-login" href="#" onClick={close}>
            {t("login")}
          </a>
          <a className="nav-register" href="#" onClick={close}>
            {t("signup")}
          </a>
        </div>

        {/* Burger (mobile uniquement via CSS) */}
        <button
          className="nav-burger"
          type="button"
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="nav-burger-lines" aria-hidden="true" />
        </button>
      </nav>

      {/* Menu mobile (ne change rien en desktop) */}
      <div id="mobile-menu" className={`nav-mobile ${isOpen ? "is-open" : ""}`}>
        <ul className="nav-mobile-links" role="list">
          <li>
            <a className="nav-link" href="#" onClick={close}>
              {t("about")}
            </a>
          </li>
          <li>
            <a className="nav-link" href="#" onClick={close}>
              {t("contact")}
            </a>
          </li>
        </ul>

        <div className="nav-mobile-auth">
          <a className="nav-login" href="#" onClick={close}>
            {t("login")}
          </a>
          <a className="nav-register" href="#" onClick={close}>
            {t("signup")}
          </a>
        </div>
      </div>

      <button
        type="button"
        className={`nav-overlay ${isOpen ? "is-open" : ""}`}
        aria-label="Close"
        onClick={close}
      />
    </header>
  );
}
