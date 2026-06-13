import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import AboutHero from "@/components/about/AboutHero";
import AdvocateProfile from "@/components/about/AdvocateProfile";
import Achievements from "@/components/about/Achievements";
import Education from "@/components/about/Education";
import Values from "@/components/about/Values";
import Timeline from "@/components/about/Timeline";
import CTA from "@/components/home/CTA";

export default function AboutView() {
  return (
    <>
      <Navbar />

      <AboutHero />
      <AdvocateProfile />
      <Achievements />
      <Education />
      <Values />
      <Timeline />
      <CTA />

      <Footer />
    </>
  );
}