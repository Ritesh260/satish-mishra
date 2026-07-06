import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="relative">

            <img
              src="/assets/advocate.png"
              alt="Advocate Satish Mishra"
              className="w-full h-[550px] object-cover rounded-3xl shadow-2xl"
            />

           

            {/* Legal Team - Desktop */}
            <div className="hidden lg:block mt-14 pt-10 border-t border-gray-200">

              <span className="text-[#C9A227] uppercase tracking-[3px] text-sm font-semibold">
                Our Legal Team
              </span>

              <h3 className="text-3xl font-bold text-black mt-2 mb-8">
                Supported By Trusted Professionals
              </h3>

              <div className="grid grid-cols-2 gap-5">

                {/* Shivani */}
                <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4 hover:border-[#C9A227] hover:shadow-lg transition-all duration-300">

                  <img
                    src="/assets/shivani.png"
                    alt="Shivani Mishra"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />

                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      Shivani Mishra
                    </h4>

                    <p className="text-[#C9A227] text-sm">
                      Legal Associate
                    </p>
                  </div>

                </div>

                {/* Akshat */}
                <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4 hover:border-[#C9A227] hover:shadow-lg transition-all duration-300">

                  <img
                    src="/assets/akshat.png"
                    alt="Akshat Mishra"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />

                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      Akshat Mishra
                    </h4>

                    <p className="text-[#C9A227] text-sm">
                      Legal Associate
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div>

            <SectionHeading
              center={false}
              subtitle="About Advocate"
              title="Experienced Legal Counsel With Proven Expertise"
              textColor="text-black"
            />

            <p className="mt-8 text-gray-600 leading-relaxed text-lg">
              With more than two decades of experience before various courts
              and legal forums, we provide trusted legal representation focused
              on protecting client interests and delivering effective legal
              solutions.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              From civil and criminal litigation to property, corporate and
              documentation matters, every case receives strategic attention,
              careful preparation and dedicated advocacy.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <h4 className="text-4xl font-bold text-[#C9A227]">
                  25+
                </h4>

                <p className="text-gray-600 mt-2">
                  Years Experience
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <h4 className="text-4xl font-bold text-[#C9A227]">
                  1500+
                </h4>

                <p className="text-gray-600 mt-2">
                  Cases Resolved
                </p>
              </div>

            </div>

            {/* Button */}
            <div className="mt-10">
              <Button>
                Learn More
              </Button>
            </div>

            {/* Legal Team - Mobile */}
            <div className="block lg:hidden mt-12 pt-8 border-t border-gray-200">

              <span className="text-[#C9A227] uppercase tracking-[3px] text-sm font-semibold">
                Our Legal Team
              </span>

              <h3 className="text-2xl font-bold text-black mt-2 mb-6">
                Supported By Trusted Professionals
              </h3>

              <div className="space-y-4">

                {/* Shivani */}
                <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4">

                  <img
                    src="/assets/shivani.png"
                    alt="Shivani Mishra"
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-black">
                      Shivani Mishra
                    </h4>

                    <p className="text-[#C9A227] text-sm">
                      Legal Associate
                    </p>
                  </div>

                </div>

                {/* Akshat */}
                <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4">

                  <img
                    src="/assets/akshat.png"
                    alt="Akshat Mishra"
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-black">
                      Akshat Mishra
                    </h4>

                    <p className="text-[#C9A227] text-sm">
                      Legal Associate
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}