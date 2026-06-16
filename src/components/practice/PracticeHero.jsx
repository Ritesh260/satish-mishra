export default function PracticeHero() {
  return (
    <section className="relative pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24 overflow-hidden min-h-[60vh] flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

        <p className="text-[#C9A227] uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm">
          Practice Areas
        </p>

        <h1 className="heading-font mt-4 sm:mt-6 font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Comprehensive
          <br />
          Legal Services
        </h1>

        <p className="max-w-3xl mx-auto mt-5 sm:mt-8 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
          Delivering strategic legal solutions tailored to individuals,
          businesses, and institutions with professionalism, expertise,
          and unwavering commitment.
        </p>

      </div>

    </section>
  );
}