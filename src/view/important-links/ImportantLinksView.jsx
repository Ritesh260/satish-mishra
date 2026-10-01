import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import ImportantLinksHero from "@/components/important-links/ImportantLinksHero";
import ImportantLinksGrid from "@/components/important-links/ImportantLinksGrid";

export default function ImportantLinksView() {
  return (
    <>
      <Navbar />

      <main>
        <ImportantLinksHero />
        <ImportantLinksGrid />
      </main>

      <Footer />
    </>
  );
}