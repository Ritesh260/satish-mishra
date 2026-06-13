const categories = [
  "All",
  "Civil Law",
  "Criminal Law",
  "Property Law",
  "Corporate Law",
  "Family Law",
];

export default function Categories() {
  return (
    <section className="pb-10 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-wrap gap-4 justify-center">

          {categories.map((category) => (
            <button
              key={category}
              className="px-5 py-2 rounded-full border border-slate-700 hover:border-[var(--secondary)] transition"
            >
              {category}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}