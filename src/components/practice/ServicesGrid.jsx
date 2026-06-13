import {
  Scale,
  Building2,
  Landmark,
  Home,
  Shield,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: <Scale size={36} />,
    title: "Civil Litigation",
  },
  {
    icon: <Shield size={36} />,
    title: "Criminal Defense",
  },
  {
    icon: <Home size={36} />,
    title: "Property Disputes",
  },
  {
    icon: <Building2 size={36} />,
    title: "Corporate Law",
  },
  {
    icon: <Landmark size={36} />,
    title: "Constitutional Matters",
  },
  {
    icon: <FileText size={36} />,
    title: "Legal Documentation",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-[var(--secondary)] transition"
            >
              <div className="text-[var(--secondary)]">
                {service.icon}
              </div>

              <h3 className="text-2xl mt-6">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-400">
                Expert representation and
                strategic legal guidance.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}