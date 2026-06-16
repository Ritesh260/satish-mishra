import Button from "../common/Button";

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

            <Button>
              Book Consultation
            </Button>

            <Button variant="secondary">
              Call Now
            </Button>

          </div>

        </div>
      </section>

      {/* Floating Stats */}
      {/* <div className="relative z-20 -mt-16 px-5">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <h3 className="text-4xl font-bold text-black">25+</h3>
              <p className="text-gray-600 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <h3 className="text-4xl font-bold text-black">1000+</h3>
              <p className="text-gray-600 mt-2">
                Cases Handled
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <h3 className="text-4xl font-bold text-black">Bombay</h3>
              <p className="text-gray-600 mt-2">
                High Court Practice
              </p>
            </div>

          </div>

        </div>
      </div> */}
    </>
  );
}