import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NotFoundPage.scss";
import NavBar from "../../components/ui/NavBar/NavBar";
import Footer from "../../components/ui/Footer/Footer";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <div className="nf">
        <h1 className="nf__code">404</h1>
        <p className="nf__text">{t("pagenotfound_text")}</p>

        <Link to="/" className="nf__btn">
          {t("pagenotfound_go_back")}
        </Link>
      </div>
      <Footer />
    </>
  );
}
