import SectionHeading from "../common/SectionHeading";

export default function Education() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading
          subtitle="Education"
          title="Qualifications & Memberships"
          textColor="text-black"
        />

        <div className="mt-16 space-y-6">

          {/* Card 1 */}
          <div
            className="
              bg-white
              rounded-3xl
              p-8
              border
              border-gray-100
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div className="flex items-start gap-5">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#C9A227]/10
                  flex
                  items-center
                  justify-center
                  text-[#C9A227]
                  text-xl
                  font-bold
                "
              >
                01
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black">
                  Bachelor of Laws (LL.B)
                </h3>

                <p className="text-gray-600 mt-2">
                  Recognized University, India
                </p>
              </div>

            </div>
          </div>

          {/* Card 2 */}
          <div
            className="
              bg-white
              rounded-3xl
              p-8
              border
              border-gray-100
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div className="flex items-start gap-5">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#C9A227]/10
                  flex
                  items-center
                  justify-center
                  text-[#C9A227]
                  text-xl
                  font-bold
                "
              >
                02
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black">
                  Bar Council Registration
                </h3>

                <p className="text-gray-600 mt-2">
                  Active Member
                </p>
              </div>

            </div>
          </div>

          {/* Card 3 */}
          <div
            className="
              bg-white
              rounded-3xl
              p-8
              border
              border-gray-100
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div className="flex items-start gap-5">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#C9A227]/10
                  flex
                  items-center
                  justify-center
                  text-[#C9A227]
                  text-xl
                  font-bold
                "
              >
                03
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black">
                  Bombay High Court Practice
                </h3>

                <p className="text-gray-600 mt-2">
                  Senior Litigation Counsel
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}