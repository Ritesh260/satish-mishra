import SectionHeading from "../common/SectionHeading";

export default function Values() {
  const values = [
    "Integrity",
    "Commitment",
    "Confidentiality",
    "Professional Excellence",
  ];

  return (
    <section className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Core Values"
          title="What Defines Our Practice"
        />

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {values.map((item) => (
            <div
              key={item}
              className="bg-slate-900 rounded-2xl p-8 text-center"
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}