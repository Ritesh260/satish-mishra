import SectionHeading from "../common/SectionHeading";

export default function Timeline() {
  const timeline = [
    "1998 - Started Legal Practice",
    "2005 - Expanded Civil Litigation Practice",
    "2012 - Corporate Advisory Services",
    "2020 - Senior Counsel Recognition",
  ];

  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6">

        <SectionHeading
          subtitle="Career Journey"
          title="Professional Timeline"
          textColor="text-black"
        />

        <div className="mt-16 relative">

          {/* Main Line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-[#C9A227]/30"></div>

          <div className="space-y-8">

            {timeline.map((item, index) => (
              <div
                key={item}
                className="relative flex items-start gap-6"
              >
                {/* Dot */}
                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-[#C9A227]
                    text-black
                    font-bold
                    flex
                    items-center
                    justify-center
                    z-10
                    shadow-md
                  "
                >
                  {index + 1}
                </div>

                {/* Card */}
                <div
                  className="
                    flex-1
                    bg-white
                    rounded-2xl
                    p-6
                    border
                    border-gray-100
                    shadow-md
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >
                  <h3 className="text-lg md:text-xl font-semibold text-black">
                    {item}
                  </h3>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}