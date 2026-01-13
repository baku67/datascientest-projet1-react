import HeroSection from "../components/home/HeroSection";
import TrustSection from "../components/home/TrustSection";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <TrustSection />
      <Footer />
    </>
  );
}

export default HomePage;
