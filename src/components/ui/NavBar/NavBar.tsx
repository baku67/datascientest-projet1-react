import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./NavBar.scss";
import LanguageSwitcher from "../ToggleLang/ToggleLang";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-left">
          <NavLink className="nav-link" to="/" onClick={close}>
            <span className="nav-title">weeb</span>
          </NavLink>

          <ul className="nav-links" role="list">
            <li>
              <NavLink className="nav-link" to="/about" onClick={close}>
                {t("about")}
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact" onClick={close}>
                {t("contact")}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <LanguageSwitcher />

          <NavLink className="nav-login" to="/login" onClick={close}>
            {t("login")}
          </NavLink>
          <NavLink className="nav-register" to="/register" onClick={close}>
            {t("signup")}
          </NavLink>
        </div>

        {/* Burger */}
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

      {/* Menu mobile */}
      <div id="mobile-menu" className={`nav-mobile ${isOpen ? "is-open" : ""}`}>
        <ul className="nav-mobile-links" role="list">
          <li>
            <NavLink className="nav-link" to="/about" onClick={close}>
              {t("about")}
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact" onClick={close}>
              {t("contact")}
            </NavLink>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        <div className="nav-mobile-auth">
          <NavLink className="nav-login" to="/login" onClick={close}>
            {t("login")}
          </NavLink>
          <NavLink className="nav-register" to="/signup" onClick={close}>
            {t("signup")}
          </NavLink>
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
