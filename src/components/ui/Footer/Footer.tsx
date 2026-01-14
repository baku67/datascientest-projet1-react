import { useTranslation } from "react-i18next";
import "./footer.scss";

type FooterLink = { label: string; href: string };

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export default function Footer() {
  const { t } = useTranslation();

  const columns: FooterColumn[] = [
    {
      title: t("footer_product"),
      links: [
        { label: t("footer_pricing"), href: "#" },
        { label: t("footer_overview"), href: "#" },
        { label: t("footer_browse"), href: "#" },
        { label: t("footer_accessibility"), href: "#" },
        { label: t("footer_five"), href: "#" },
      ],
    },
    {
      title: t("footer_solutions"),
      links: [
        { label: t("footer_brainstorming"), href: "#" },
        { label: t("footer_ideation"), href: "#" },
        { label: t("footer_wireframing"), href: "#" },
        { label: t("footer_research"), href: "#" },
      ],
    },
    {
      title: t("footer_resources"),
      links: [
        { label: t("footer_help_center"), href: "#" },
        { label: t("footer_blog"), href: "#" },
        { label: t("footer_tutorials"), href: "#" },
      ],
    },
    {
      title: t("footer_company"),
      links: [
        { label: t("footer_about"), href: "#" },
        { label: t("footer_press"), href: "#" },
        { label: t("footer_events"), href: "#" },
        { label: t("footer_careers"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <a className="footer__brand" href="#" aria-label="Weeb">
            weeb
          </a>

          <nav className="footer__nav" aria-label="Footer navigation">
            {columns.map((col) => (
              <section key={col.title} className="footer__col">
                <h3 className="footer__title">{col.title}</h3>
                <ul className="footer__list" role="list">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a className="footer__link" href={l.href}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <small className="footer__copyright">
            © {new Date().getFullYear()} Weeb, Inc. {t("footer_rights")}
          </small>

          <div className="footer__social" aria-label="Social links">
            <a className="footer__socialLink" href="#" aria-label="YouTube">
              {/* YouTube */}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.4-4.8ZM10 15.3V8.7L16 12l-6 3.3Z"
                />
              </svg>
            </a>

            <a className="footer__socialLink" href="#" aria-label="Facebook">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.2-1.5 1.6-1.5h1.7V5a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.4V11H7.4v3H10v8h3.5Z"
                />
              </svg>
            </a>

            <a className="footer__socialLink" href="#" aria-label="Twitter / X">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H2l7.3-8.4L1.8 2H8l4.5 5.8L18.9 2Zm-1.1 18h1.7L7 3.9H5.2L17.8 20Z"
                />
              </svg>
            </a>

            <a className="footer__socialLink" href="#" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18 6.8a1.2 1.2 0 1 1-1.2-1.2A1.2 1.2 0 0 1 18 6.8Z"
                />
              </svg>
            </a>

            <a className="footer__socialLink" href="#" aria-label="LinkedIn">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 21V9h4v12H3Zm7 0V9h3.8v1.7h.1A4.2 4.2 0 0 1 17.7 8.8c4 0 4.3 2.6 4.3 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
