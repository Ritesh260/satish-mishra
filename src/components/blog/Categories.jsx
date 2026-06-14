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
    <section className="pb-10 bg-[#e3e3e3]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-wrap gap-4 justify-center">

          {categories.map((category) => (
            <button
              key={category}
              className="
                px-5
                py-2
                rounded-full
                border
                border-gray-300
                text-black
                bg-white
                hover:border-[#C9A227]
                hover:text-[#C9A227]
                transition
              "
            >
              {category}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}