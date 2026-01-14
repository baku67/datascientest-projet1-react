import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ToggleLang.scss";

import FlagFR from "country-flag-icons/react/3x2/FR";
import FlagGB from "country-flag-icons/react/3x2/GB";

type Lang = {
  code: "fr" | "en";
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Flag: React.ComponentType<any>;
};

const SUPPORTED: Lang[] = [
  { code: "fr", label: "Français", Flag: FlagFR },
  { code: "en", label: "English", Flag: FlagGB },
];

function normalizeLang(lang: string): Lang["code"] {
  const base = lang.toLowerCase().split("-")[0];
  return base === "fr" ? "fr" : "en";
}

export default function ToggleLang() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const currentCode = useMemo(
    () => normalizeLang(i18n.language || navigator.language || "en"),
    [i18n.language]
  );

  const current = useMemo(
    () => SUPPORTED.find((l) => l.code === currentCode) ?? SUPPORTED[1],
    [currentCode]
  );

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const el = rootRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (open && e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const change = async (code: Lang["code"]) => {
    await i18n.changeLanguage(code);
    setOpen(false);
  };

  const CurrentFlag = current.Flag;

  return (
    <div className="lang" ref={rootRef}>
      <button
        type="button"
        className="lang__trigger"
        aria-label="Language"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang__flag" aria-hidden="true">
          <CurrentFlag className="lang__flagSvg" />
        </span>
        <span className="lang__code">{current.code.toUpperCase()}</span>
        <span className="lang__chev" aria-hidden="true">
          ▾
        </span>
      </button>

      <div className={`lang__menu ${open ? "is-open" : ""}`} role="listbox">
        {SUPPORTED.map((l) => {
          const Flag = l.Flag;
          return (
            <button
              key={l.code}
              type="button"
              className={`lang__item ${
                l.code === current.code ? "is-active" : ""
              }`}
              role="option"
              aria-selected={l.code === current.code}
              onClick={() => change(l.code)}
            >
              <span className="lang__flag" aria-hidden="true">
                <Flag className="lang__flagSvg" />
              </span>
              <span className="lang__label">{l.label}</span>
              <span className="lang__mini">{l.code.toUpperCase()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
