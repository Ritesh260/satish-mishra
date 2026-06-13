import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
              alt="Senior Advocate"
              className="rounded-3xl w-full h-[600px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              center={false}
              subtitle="About Advocate"
              title="Experienced Legal Counsel With Proven Expertise"
            />

            <p className="mt-8 text-slate-300 leading-relaxed">
              With more than two decades of experience
              before various courts and legal forums,
              our practice is committed to providing
              exceptional legal representation grounded
              in integrity, professionalism, and results.
            </p>

            <p className="mt-6 text-slate-300 leading-relaxed">
              We assist clients in civil litigation,
              criminal defense, property disputes,
              corporate advisory matters, and legal
              documentation, ensuring every case
              receives strategic attention and
              dedicated advocacy.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h4 className="text-[#C9A227] text-3xl font-bold">
                  25+
                </h4>

                <p className="text-slate-400">
                  Years Experience
                </p>
              </div>

              <div>
                <h4 className="text-[#C9A227] text-3xl font-bold">
                  1500+
                </h4>

                <p className="text-slate-400">
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