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
    <section className="section-padding bg-[#ddddde]">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Our Process"
          title="How We Handle Your Case"
          textColor="text-black"
        />

        <div className="grid md:grid-cols-5 gap-6 mt-16">

          {steps.map((step, index) => (
            <div
              key={step}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-md
                border
                border-gray-100
                text-center
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-[#C9A227]
                  text-black
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                "
              >
                {index + 1}
              </div>

              <h3 className="mt-5 text-black font-semibold">
                {step}
              </h3>

              <p className="text-gray-500 text-sm mt-3">
                Professional legal guidance at every stage
                of your matter.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}