import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import OfficeHours from "@/components/contact/OfficeHours";

export default function ContactView() {
  return (
    <>
      <Navbar />

      <ContactHero />

      <section className="section-padding bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <ContactInfo />
              <OfficeHours />
            </div>

            <ContactForm />

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}