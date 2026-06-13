import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import PracticeHero from "@/components/practice/PracticeHero";
import ServicesGrid from "@/components/practice/ServicesGrid";
import IndustriesServed from "@/components/practice/IndustriesServed";
import ProcessSection from "@/components/practice/ProcessSection";
import CTA from "@/components/home/CTA";

export default function PracticeAreasView() {
  return (
    <>
      <Navbar />

      <PracticeHero />

      <ServicesGrid />

      <IndustriesServed />

      <ProcessSection />

      <CTA />

      <Footer />
    </>
  );
}