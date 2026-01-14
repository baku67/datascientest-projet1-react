import { useTranslation } from "react-i18next";
import Footer from "../../components/ui/Footer/Footer";
import NavBar from "../../components/ui/NavBar/NavBar";
import FormSection from "../../components/contact/FormSection/FormSection";
import "./ContactPage.scss";

function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <section>
        <h1>{t("contact_page_title")}</h1>
        <p>{t("contact_page_description")}</p>
      </section>
      <FormSection />
      <Footer />
    </>
  );
}

export default ContactPage;
