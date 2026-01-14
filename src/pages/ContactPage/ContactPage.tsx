import { useTranslation } from "react-i18next";
import Footer from "../../components/ui/Footer/Footer";
import NavBar from "../../components/ui/NavBar/NavBar";
import FormSection from "../../components/contact/FormSection/FormSection";
import "./ContactPage.scss";

function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="page-nav-footer">
      <NavBar />
      <main className="page__content">
        <section className="contact-intro">
          <h1>{t("contact_page_title")}</h1>
          <p>{t("contact_page_description")}</p>
        </section>
        <FormSection />
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
