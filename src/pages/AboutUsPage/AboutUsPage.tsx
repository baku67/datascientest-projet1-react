import { useTranslation } from "react-i18next";
import Footer from "../../components/ui/Footer/Footer";
import NavBar from "../../components/ui/NavBar/NavBar";
import "./AboutUsPage.scss";

function AboutUsPage() {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <section>
        <h1>{t("about_us_page_title")}</h1>
        <p>{t("about_us_page_description")}</p>
      </section>
      <Footer />
    </>
  );
}

export default AboutUsPage;
