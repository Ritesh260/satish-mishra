export default function BlogHero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <p className="text-[#C9A227] uppercase tracking-[4px]">
          Legal Insights
        </p>

        <h1 className="heading-font text-5xl md:text-7xl mt-6 text-white">
          Knowledge &
          <br />
          Legal Updates
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-slate-300">
          Stay informed with expert legal articles,
          insights, and updates from our practice.
        </p>

      </div>

    </section>
  );
}