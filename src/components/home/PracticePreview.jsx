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
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Practice Areas"
          title="Legal Services We Provide"
          textColor="text-black"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((item) => (
            <div
              key={item.title}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-md
                border
                border-gray-100
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                group
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#C9A227]/10
                  flex
                  items-center
                  justify-center
                  text-[#C9A227]
                  group-hover:scale-110
                  transition
                "
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-black mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-6">
                <span className="text-[#C9A227] font-medium">
                  Learn More →
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}