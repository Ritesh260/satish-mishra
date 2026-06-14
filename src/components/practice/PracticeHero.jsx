export default function PracticeHero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

        <p className="text-[#C9A227] uppercase tracking-[4px]">
          Practice Areas
        </p>

        <h1 className="heading-font text-5xl md:text-7xl mt-6 font-bold">
          Comprehensive
          <br />
          Legal Services
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-slate-300">
          Delivering strategic legal solutions
          tailored to individuals, businesses,
          and institutions with professionalism,
          expertise, and unwavering commitment.
        </p>

      </div>

    </section>
  );
}