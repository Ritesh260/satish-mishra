import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background)]">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 md:left-20 w-56 md:w-72 h-56 md:h-72 bg-[var(--secondary)]/10 blur-[120px]" />
        <div className="absolute bottom-20 right-0 md:right-20 w-56 md:w-72 h-56 md:h-72 bg-[var(--secondary)]/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 pt-28 md:pt-24 pb-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <span className="text-[var(--secondary)] uppercase tracking-[3px] text-xs md:text-sm">
              Senior Advocate • Bombay High Court
            </span>

            <h1 className="heading-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-5 leading-tight">
              Justice.
              <br />
              Integrity.
              <br />
              Results.
            </h1>

            <p className="mt-6 md:mt-8 text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Providing trusted legal representation,
              strategic counsel, and dedicated advocacy
              for individuals, families, and businesses
              across Mumbai and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 justify-center lg:justify-start">

              <Button className="w-full sm:w-auto">
                Book Consultation
              </Button>

              <Button
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Call Now
              </Button>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center order-1 lg:order-2">

            <div className="relative">

              <div className="absolute -inset-3 md:-inset-4 rounded-[24px] md:rounded-[30px] border border-[var(--secondary)]/40"></div>

              <img
                src="/assets/advocate.png"
                alt="Advocate"
                className="
                  w-[280px]
                  sm:w-[340px]
                  md:w-[420px]
                  lg:w-[500px]
                  h-[380px]
                  sm:h-[460px]
                  md:h-[560px]
                  lg:h-[650px]
                  object-cover
                  rounded-[24px]
                  md:rounded-[30px]
                "
              />

              {/* Experience Card */}
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  md:bottom-6
                  md:left-6
                  bg-slate-900/90
                  backdrop-blur-md
                  border
                  border-slate-700
                  rounded-2xl
                  px-4
                  py-3
                  md:px-6
                  md:py-4
                "
              >
                <h3 className="text-xl md:text-2xl font-bold">
                  25+
                </h3>

                <p className="text-slate-400 text-xs md:text-sm">
                  Years of Experience
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}