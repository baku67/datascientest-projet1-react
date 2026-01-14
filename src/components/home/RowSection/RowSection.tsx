import { Trans } from "react-i18next";
import "./RowSection.scss";

type RowSectionProps = {
  /** Inversio de l’ordre : image à gauche/texte à droite etc */
  reverse?: boolean;

  /** Textes à droite ou gauche */
  titleTop?: string; // ligne au dessus du texte ToUppercase()
  title: string;
  description?: string;

  /** CTA */
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;

  /** Image block */
  imageUrl: string;
  imageAlt?: string;

  className?: string;
  id?: string;
};

export default function RowSection({
  reverse = false,
  titleTop,
  title,
  description,
  ctaLabel,
  ctaHref,
  onCtaClick,
  imageUrl,
  imageAlt = "",
  className,
  id,
}: RowSectionProps) {
  const hasCta = Boolean(ctaLabel) && (Boolean(ctaHref) || Boolean(onCtaClick));

  return (
    <section
      id={id}
      className={`row-section ${reverse ? "row-section--reverse" : ""} ${
        className ?? ""
      }`}
    >
      <div className="row-section__inner">
        <div className="row-section__text">
          {titleTop && (
            <p className="row-section__eyebrow">{titleTop.toUpperCase()}</p>
          )}

          <h2 className="row-section__title">
            <Trans
              i18nKey={title}
              components={{ primary: <span className="text-primary" /> }}
            />
          </h2>

          {description && (
            <p className="row-section__description">{description}</p>
          )}

          {hasCta && (
            <div className="row-section__cta">
              {ctaHref ? (
                <a className="row-section__link" href={ctaHref}>
                  {ctaLabel}
                  <span aria-hidden="true" className="row-section__arrow">
                    →
                  </span>
                </a>
              ) : (
                <button
                  type="button"
                  className="row-section__link row-section__link--button"
                  onClick={onCtaClick}
                >
                  {ctaLabel}
                  <span aria-hidden="true" className="row-section__arrow">
                    →
                  </span>
                </button>
              )}
            </div>
          )}
        </div>

        <div className="row-section__visual">
          <img
            className="row-section__image"
            src={imageUrl}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
