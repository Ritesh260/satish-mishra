import SectionHeading from "../common/SectionHeading";

export default function Values() {
  const values = [
    "Integrity",
    "Commitment",
    "Confidentiality",
    "Professional Excellence",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Core Values"
          title="What Defines Our Practice"
          textColor="text-black"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {values.map((item, index) => (
            <div
              key={item}
              className="
                bg-[#F8FAFC]
                rounded-3xl
                p-8
                border
                border-gray-100
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                text-center
              "
            >
              {/* Number */}
              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-2xl
                  bg-[#C9A227]/10
                  flex
                  items-center
                  justify-center
                  text-[#C9A227]
                  text-2xl
                  font-bold
                "
              >
                0{index + 1}
              </div>

              <h3 className="text-xl font-semibold text-black mt-6">
                {item}
              </h3>

              <div className="w-12 h-1 bg-[#C9A227] mx-auto mt-4 rounded-full" />

              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                Dedicated to maintaining the highest standards of legal
                service and client trust.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}