import SectionHeading from "../common/SectionHeading";
import { Scale, Building2, Home, Users } from "lucide-react";

const services = [
  {
    icon: <Scale size={32} />,
    title: "Civil Litigation",
    desc: "Strategic representation in civil disputes and litigation matters.",
  },
  {
    icon: <Building2 size={32} />,
    title: "Corporate Law",
    desc: "Legal advisory services for businesses and organizations.",
  },
  {
    icon: <Home size={32} />,
    title: "Property Disputes",
    desc: "Expert handling of property and real estate matters.",
  },
  {
    icon: <Users size={32} />,
    title: "Family Law",
    desc: "Guidance in family disputes, succession, and settlements.",
  },
];

export default function PracticePreview() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Practice Areas"
          title="Legal Services We Provide"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-[#C9A227] transition"
            >
              <div className="text-[#C9A227]">{item.icon}</div>

              <h3 className="text-xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}