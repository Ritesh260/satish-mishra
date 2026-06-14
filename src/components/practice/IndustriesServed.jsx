export default function IndustriesServed() {
  const industries = [
    "Real Estate",
    "Finance",
    "Manufacturing",
    "Technology",
    "Healthcare",
    "Hospitality",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="heading-font text-5xl text-center text-black">
          Industries Served
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {industries.map((industry) => (
            <div
              key={industry}
              className="
                bg-[#F8FAFC]
                border
                border-gray-100
                rounded-2xl
                p-8
                text-center
                text-black
                font-medium
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {industry}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}