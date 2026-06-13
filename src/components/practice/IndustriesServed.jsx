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
    <section className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="heading-font text-5xl text-center">
          Industries Served
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {industries.map((industry) => (
            <div
              key={industry}
              className="border border-slate-800 rounded-2xl p-8 text-center"
            >
              {industry}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}