const steps = [
  "Consultation",
  "Case Analysis",
  "Legal Strategy",
  "Representation",
  "Resolution",
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="heading-font text-5xl text-center">
          Our Legal Process
        </h2>

        <div className="grid md:grid-cols-5 gap-6 mt-16">

          {steps.map((step, index) => (
            <div key={step} className="text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--secondary)] text-black flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <p className="mt-4">
                {step}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}