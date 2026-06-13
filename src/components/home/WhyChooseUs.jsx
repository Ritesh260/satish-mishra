import SectionHeading from "../common/SectionHeading";

export default function WhyChooseUs() {
  const items = [
    "25+ Years of Experience",
    "Dedicated Client Support",
    "Strategic Legal Solutions",
    "Strong Courtroom Representation",
  ];

  return (
    <section className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Committed To Excellence In Law"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {items.map((item) => (
            <div
              key={item}
              className="border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-[#C9A227]">
                ✓
              </h3>

              <p className="mt-4 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}