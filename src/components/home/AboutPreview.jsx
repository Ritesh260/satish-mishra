import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="relative">

            <div className="absolute "/>

            <img
              src="/assets/advocate.png"
              alt="Senior Advocate"
              className="
                w-full
                h-[550px]
                object-cover
                rounded-3xl
                shadow-2xl
              "
            />

            {/* Floating Experience Card */}
            <div
              className="
                absolute
                bottom-6
                right-6
                bg-white
                shadow-xl
                rounded-2xl
                px-6
                py-4
              "
            >
              <h3 className="text-3xl font-bold text-black">
                25+
              </h3>

              <p className="text-gray-600 text-sm">
                Years Experience
              </p>
            </div>

          </div>

          {/* Content Side */}
          <div>

            <SectionHeading
              center={false}
              subtitle="About Advocate"
              title="Experienced Legal Counsel With Proven Expertise"
              textColor="text-black"
            />

            <p className="mt-8 text-gray-600 leading-relaxed text-lg">
              With more than two decades of experience before
              various courts and legal forums, we provide
              trusted legal representation focused on protecting
              client interests and delivering effective solutions.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              From civil and criminal litigation to property,
              corporate, and documentation matters, every case
              receives strategic attention, careful preparation,
              and dedicated advocacy.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div
                className="
                  bg-gray-50
                  rounded-2xl
                  p-6
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <h4 className="text-[#C9A227] text-4xl font-bold">
                  25+
                </h4>

                <p className="text-gray-600 mt-2">
                  Years Experience
                </p>
              </div>

              <div
                className="
                  bg-gray-50
                  rounded-2xl
                  p-6
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <h4 className="text-[#C9A227] text-4xl font-bold">
                  1500+
                </h4>

                <p className="text-gray-600 mt-2">
                  Cases Resolved
                </p>
              </div>

            </div>

            <div className="mt-10">
              <Button>
                Learn More
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}