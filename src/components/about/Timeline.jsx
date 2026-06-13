import SectionHeading from "../common/SectionHeading";

export default function Timeline() {
  const timeline = [
    "1998 - Started Legal Practice",
    "2005 - Expanded Civil Litigation Practice",
    "2012 - Corporate Advisory Services",
    "2020 - Senior Counsel Recognition",
  ];

  return (
    <section className="section-padding bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">

        <SectionHeading
          subtitle="Career Journey"
          title="Professional Timeline"
        />

        <div className="mt-16 space-y-8">
          {timeline.map((item) => (
            <div
              key={item}
              className="border-l-4 border-[#C9A227] pl-6 py-4"
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