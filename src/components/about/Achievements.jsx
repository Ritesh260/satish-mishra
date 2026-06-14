import SectionHeading from "../common/SectionHeading";

export default function Achievements() {
  const items = [
    "25+ Years of Courtroom Experience",
    "Representation Before Bombay High Court",
    "Corporate & Civil Litigation Expertise",
    "Trusted Advisor to Businesses & Individuals",
  ];

  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Achievements"
          title="Professional Highlights"
          textColor="text-black"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {items.map((item, index) => (
            <div
              key={item}
              className="
                bg-white
                rounded-3xl
                p-8
                border
                border-gray-100
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                items-center
                gap-5
              "
            >
              {/* Number Badge */}
              <div
                className="
                  min-w-14
                  h-14
                  rounded-2xl
                  bg-[#C9A227]/10
                  flex
                  items-center
                  justify-center
                  text-[#C9A227]
                  font-bold
                  text-xl
                "
              >
                {index + 1}
              </div>

              {/* Text */}
              <h3 className="text-lg md:text-xl font-semibold text-black">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}