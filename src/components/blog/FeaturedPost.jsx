export default function FeaturedPost() {
  return (
    <section className="pb-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900 rounded-3xl overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
            alt="Legal Article"
            className="w-full h-full object-cover min-h-[400px]"
          />

          <div className="p-10">

            <span className="text-[var(--secondary)]">
              Featured Article
            </span>

            <h2 className="heading-font text-4xl mt-4">
              Understanding Property
              Disputes in India
            </h2>

            <p className="text-slate-400 mt-6">
              Learn about common property disputes,
              legal remedies, and how experienced
              legal representation can protect your rights.
            </p>

            <button className="mt-8 px-6 py-3 rounded-full bg-[var(--secondary)] text-black font-semibold">
              Read More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}