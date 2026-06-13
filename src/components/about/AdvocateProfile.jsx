import SectionHeading from "../common/SectionHeading";

export default function AdvocateProfile() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="Advocate"
            className="rounded-3xl h-[650px] w-full object-cover"
          />

          <div>
            <SectionHeading
              center={false}
              subtitle="Profile"
              title="Senior Advocate, Bombay High Court"
            />

            <p className="mt-8 text-slate-300 leading-relaxed">
              Advocate Satish Mishra is a seasoned legal
              professional with extensive experience
              representing clients before the Bombay
              High Court and various judicial forums.
            </p>

            <p className="mt-6 text-slate-300 leading-relaxed">
              His practice spans civil litigation,
              corporate disputes, property matters,
              constitutional law, and legal advisory
              services.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-[#C9A227]">
                  25+
                </h3>
                <p className="text-slate-400">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#C9A227]">
                  1500+
                </h3>
                <p className="text-slate-400">
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