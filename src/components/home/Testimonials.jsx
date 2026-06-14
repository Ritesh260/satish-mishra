import SectionHeading from "../common/SectionHeading";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Sharma",
      role: "Business Owner",
      review:
        "Adv. Satish Mishra provided exceptional legal guidance and represented our matter with professionalism and dedication. The entire process was handled smoothly and efficiently.",
    },
    {
      name: "Neha Verma",
      role: "Property Dispute Client",
      review:
        "Highly knowledgeable and approachable. Every legal aspect was explained clearly, and the matter was resolved with great attention to detail.",
    },
    {
      name: "Amit Desai",
      role: "Corporate Client",
      review:
        "Professional, responsive, and strategic in approach. We received practical legal advice and excellent representation throughout our case.",
    },
  ];

  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          textColor="text-black"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {reviews.map((item) => (
            <div
              key={item.name}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-md
                border
                border-gray-100
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#C9A227]/10 flex items-center justify-center">
                  <Quote className="text-[#C9A227]" size={24} />
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed">
                "{item.review}"
              </p>

              {/* Client */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-bold text-black">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}