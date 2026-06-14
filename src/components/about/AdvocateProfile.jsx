import SectionHeading from "../common/SectionHeading";

export default function AdvocateProfile() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">

            <img
              src="/assets/advocate.png"
              alt="Advocate Satish Mishra"
              className="
                w-full
                h-[500px]
                md:h-[650px]
                object-cover
                rounded-3xl
                shadow-2xl
              "
            />

            {/* Experience Card */}
            <div
              className="
                absolute
                bottom-6
                left-6
                bg-white
                rounded-2xl
                shadow-xl
                px-6
                py-4
              "
            >
              <h3 className="text-3xl font-bold text-[#C9A227]">
                25+
              </h3>

              <p className="text-gray-600 text-sm">
                Years of Legal Practice
              </p>
            </div>

          </div>

          {/* Content */}
          <div>

            <SectionHeading
              center={false}
              subtitle="Profile"
              title="Senior Advocate, Bombay High Court"
              textColor="text-black"
            />

            <p className="mt-8 text-gray-600 leading-relaxed text-lg">
              Advocate Satish Mishra is a distinguished legal
              professional with extensive courtroom experience
              before the Bombay High Court and various judicial
              forums across India.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              His practice focuses on civil litigation,
              corporate disputes, property matters,
              constitutional law, arbitration, and
              strategic legal advisory services for
              individuals and businesses.
            </p>

            {/* Highlights */}
            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#C9A227]" />
                <p className="text-gray-700">
                  Representation before Bombay High Court
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#C9A227]" />
                <p className="text-gray-700">
                  Expertise in Civil & Corporate Litigation
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#C9A227]" />
                <p className="text-gray-700">
                  Trusted Legal Advisor for Businesses
                </p>
              </div>

            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100">
                <h3 className="text-3xl font-bold text-[#C9A227]">
                  25+
                </h3>

                <p className="text-gray-600 mt-2">
                  Years Experience
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100">
                <h3 className="text-3xl font-bold text-[#C9A227]">
                  1500+
                </h3>

                <p className="text-gray-600 mt-2">
                  Cases Handled
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}