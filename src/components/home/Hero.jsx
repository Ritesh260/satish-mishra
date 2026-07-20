import Button from "../common/Button";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

          <span className="inline-block border border-[#C9A227]/40 px-5 py-2 rounded-full text-sm tracking-[3px] uppercase text-[#C9A227] mt-8">
            Senior Advocate • Bombay High Court
          </span>

          <h1 className="heading-font mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            Adv. Satish Mishra
          </h1>

          <p className="mt-5 text-xl md:text-2xl text-slate-300">
            Justice • Integrity • Excellence
          </p>

          <p className="max-w-3xl mx-auto mt-8 text-slate-400 text-base md:text-lg leading-relaxed">
            Providing strategic legal counsel and strong courtroom
            representation with over 25 years of experience handling
            complex legal matters before the Bombay High Court and
            various judicial forums.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

             <Link href="/contact">

                <Button className="flex items-center gap-2">

                  Book Consultation

                </Button>

              </Link>

           <a href="tel:+919323651498">
            <Button variant="secondary">
               Call Now
            </Button>
          </a>

          </div>

        </div>
      </section>

     
    </>
  );
}