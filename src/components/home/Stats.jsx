const stats = [
  {
    number: "25+",
    label: "Years Experience",
  },
  {
    number: "1500+",
    label: "Cases Handled",
  },
  {
    number: "98%",
    label: "Success Rate",
  },
  {
    number: "500+",
    label: "Satisfied Clients",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-[#C9A227]">
                {item.number}
              </h3>

              <p className="mt-2 text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}