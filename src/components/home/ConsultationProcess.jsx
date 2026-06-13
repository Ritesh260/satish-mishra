import SectionHeading from "../common/SectionHeading";

const steps = [
  "Initial Consultation",
  "Case Evaluation",
  "Legal Strategy",
  "Representation",
  "Resolution",
];

export default function ConsultationProcess() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Our Process"
          title="How We Handle Your Case"
        />

        <div className="grid md:grid-cols-5 gap-6 mt-16">
          {steps.map((step, index) => (
            <div
              key={step}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A227] text-black flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="mt-4">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}