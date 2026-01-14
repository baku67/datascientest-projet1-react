import { useTranslation } from "react-i18next";
import HeroSection from "../components/home/HeroSection";
import RowSection from "../components/home/RowSection";
import TrustSection from "../components/home/TrustSection";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <HeroSection />
      <TrustSection />
      <RowSection
        titleTop={t("home_rowsection_1_titletop")}
        title={t("home_rowsection_1_title")}
        description={t("home_rowsection_1_description")}
        ctaLabel={t("home_rowsection_1_ctalabel")}
        ctaHref="#resources"
        imageUrl="/assets/home-hero.png"
        imageAlt={t("home_rowsection_1_imagealt")}
        reverse={false}
      />
      <RowSection
        titleTop={t("home_rowsection_2_titletop")}
        title={t("home_rowsection_2_title")}
        description={t("home_rowsection_2_description")}
        ctaLabel={t("home_rowsection_2_ctalabel")}
        ctaHref="#resources"
        imageUrl="/assets/row-section-2.png"
        imageAlt={t("home_rowsection_2_imagealt")}
        reverse={true}
      />
      <Footer />
    </>
  );
}

export default HomePage;
