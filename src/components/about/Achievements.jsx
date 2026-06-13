import SectionHeading from "../common/SectionHeading";

export default function Achievements() {
  const items = [
    "25+ Years of Courtroom Experience",
    "Representation Before Bombay High Court",
    "Corporate & Civil Litigation Expertise",
    "Trusted Advisor to Businesses & Individuals",
  ];

  return (
    <section className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Achievements"
          title="Professional Highlights"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {items.map((item) => (
            <div
              key={item}
              className="border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-xl">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}