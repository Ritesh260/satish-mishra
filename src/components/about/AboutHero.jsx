export default function AboutHero() {
  return (
    <section className="relative pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24 overflow-hidden min-h-[60vh] flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

     {/* Dark Overlay */}
<div className="absolute inset-0 bg-black/40" />

{/* Gold Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

        <span className="inline-block px-5 py-2 border border-[#C9A227]/40 rounded-full text-sm uppercase tracking-[3px] text-[#C9A227]">
          About Advocate
        </span>

        <h1 className="heading-font text-5xl md:text-7xl mt-6 font-bold leading-tight">
          Trusted Legal
          <br />
          Excellence
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-slate-300 text-lg leading-relaxed">
          Providing strategic legal counsel, courtroom excellence,
          and dedicated representation backed by years of experience
          before the Bombay High Court and various judicial forums.
        </p>

      </div>

    </section>
  );
}