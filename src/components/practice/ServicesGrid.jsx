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
    icon: <Scale size={34} />,
    title: "Civil Litigation",
  },
  {
    icon: <Shield size={34} />,
    title: "Criminal Defense",
  },
  {
    icon: <Home size={34} />,
    title: "Property Disputes",
  },
  {
    icon: <Building2 size={34} />,
    title: "Corporate Law",
  },
  {
    icon: <Landmark size={34} />,
    title: "Constitutional Matters",
  },
  {
    icon: <FileText size={34} />,
    title: "Legal Documentation",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="
                bg-white
                rounded-3xl
                p-8
                border
                border-gray-100
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
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
                  group-hover:bg-[#C9A227]
                  group-hover:text-white
                  transition-all
                  duration-300
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-black mt-6">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                Expert representation, strategic legal
                advice, and dedicated advocacy tailored
                to your legal requirements.
              </p>

              {/* Bottom Line */}
              <div className="mt-6 w-12 h-1 bg-[#C9A227] rounded-full"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}