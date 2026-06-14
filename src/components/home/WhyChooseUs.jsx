import SectionHeading from "../common/SectionHeading";
import { ShieldCheck, Scale, Briefcase, Users } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    {
      icon: <ShieldCheck size={28} />,
      title: "25+ Years Experience",
      desc: "Extensive courtroom and advisory experience across diverse legal matters.",
    },
    {
      icon: <Scale size={28} />,
      title: "Strong Representation",
      desc: "Strategic advocacy focused on protecting client interests and rights.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Professional Approach",
      desc: "Every matter is handled with diligence, ethics, and legal precision.",
    },
    {
      icon: <Users size={28} />,
      title: "Client Focused",
      desc: "Transparent communication and personalized legal guidance.",
    },
  ];

  return (
    <section className="section-padding bg-[#e0e7ee]">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Why Choose Us"
          title="Committed To Excellence In Law"
          textColor="text-black"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {items.map((item) => (
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
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}