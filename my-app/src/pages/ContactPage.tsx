import { useTranslation } from "react-i18next";
import Footer from "../components/ui/Footer/Footer";
import NavBar from "../components/ui/NavBar/NavBar";

function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <p>Contenu</p>
      <Footer />
    </>
  );
}

export default ContactPage;
