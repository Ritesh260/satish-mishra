import SectionHeading from "../common/SectionHeading";

export default function Education() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading
          subtitle="Education"
          title="Qualifications & Memberships"
        />

        <div className="mt-16 space-y-8">

          <div className="border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold">
              Bachelor of Laws (LL.B)
            </h3>
            <p className="text-slate-400 mt-2">
              Recognized University, India
            </p>
          </div>

          <div className="border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold">
              Bar Council Registration
            </h3>
            <p className="text-slate-400 mt-2">
              Active Member
            </p>
          </div>

          <div className="border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold">
              Bombay High Court Practice
            </h3>
            <p className="text-slate-400 mt-2">
              Senior Litigation Counsel
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}