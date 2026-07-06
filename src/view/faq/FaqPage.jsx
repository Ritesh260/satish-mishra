import FaqHero from "@/components/faq/FaqHero";
import FaqSection from "./FaqSection";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
export default function FaqPage() {
  return (
    <>
     <Navbar />
      <FaqHero />
      <FaqSection />
      <Footer />
    </>
  );
}