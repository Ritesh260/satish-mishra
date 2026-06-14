const steps = [
  "Consultation",
  "Case Analysis",
  "Legal Strategy",
  "Representation",
  "Resolution",
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="heading-font text-5xl text-center text-black">
          Our Legal Process
        </h2>

        <div className="grid md:grid-cols-5 gap-6 mt-16">

          {steps.map((step, index) => (
            <div
              key={step}
              className="
                text-center
                bg-white
                rounded-2xl
                p-6
                border
                border-gray-100
                shadow-sm
                hover:shadow-lg
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
                  text-white
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-lg
                "
              >
                {index + 1}
              </div>

              <p className="mt-5 text-black font-medium">
                {step}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}