import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutPreview from "@/components/home/AboutPreview";
import PracticePreview from "@/components/home/PracticePreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ConsultationProcess from "@/components/home/ConsultationProcess";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
// import WhatsAppButton from "@/components/common/WhatsAppButton";
export default function HomeView() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <AboutPreview />
      <PracticePreview />
      <WhyChooseUs />
      <ConsultationProcess />
      <Testimonials />
      <CTA />
      {/* <WhatsAppButton /> */}
      <Footer />
    </>
  );
}