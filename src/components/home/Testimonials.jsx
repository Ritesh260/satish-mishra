import SectionHeading from "../common/SectionHeading";

export default function Testimonials() {
  const reviews = [
    {
      name: "Client A",
      review:
        "Professional, responsive and highly experienced. Excellent legal guidance.",
    },
    {
      name: "Client B",
      review:
        "Handled our matter with dedication and achieved a positive outcome.",
    },
    {
      name: "Client C",
      review:
        "Highly recommended for complex legal and corporate matters.",
    },
  ];

  return (
    <section className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Testimonials"
          title="What Clients Say"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {reviews.map((item) => (
            <div
              key={item.name}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
            >
              <p className="text-slate-300">
                "{item.review}"
              </p>

              <h4 className="mt-6 text-[#C9A227] font-semibold">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}