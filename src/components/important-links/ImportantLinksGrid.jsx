import {
  ExternalLink,
  Scale,
} from "lucide-react";

const links = [
  {
    title: "Supreme Court of India",
    location: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1200&auto=format&fit=crop",
    url: "https://www.sci.gov.in/",
  },
  {
    title: "Bombay High Court",
    location: "Mumbai, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop",
    url: "https://bombayhighcourt.nic.in/",
  },
  {
    title: "Gujarat High Court",
    location: "Ahmedabad, Gujarat",
    image:
      "https://images.unsplash.com/photo-1528747008803-3f8a7e1e4f0b?q=80&w=1200&auto=format&fit=crop",
    url: "https://gujarathighcourt.nic.in/",
  },
  {
    title: "Delhi High Court",
    location: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop",
    url: "https://delhihighcourt.nic.in/",
  },
  {
    title: "Karnataka High Court",
    location: "Bengaluru, Karnataka",
    image:
      "https://images.unsplash.com/photo-1592639296346-560c37a0f711?q=80&w=1200&auto=format&fit=crop",
    url: "https://karnatakajudiciary.kar.nic.in/",
  },
  {
    title: "Madhya Pradesh High Court",
    location: "Jabalpur, Madhya Pradesh",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1200&auto=format&fit=crop",
    url: "https://mphc.gov.in/",
  },
];

export default function ImportantLinksGrid() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {links.map((item) => (
            <article
              key={item.title}
              className="
                group
                bg-white
                border
                border-gray-200
                
                overflow-hidden
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#C9A227]
                hover:shadow-xl
              "
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-[#C9A227]
                      text-black
                      flex
                      items-center
                      justify-center
                      shadow-lg
                    "
                  >
                    <Scale size={20} />
                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h2 className="text-xl font-semibold text-black">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {item.location}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#C9A227]
                    hover:text-black
                    transition
                  "
                >
                  Visit Official Website
                  <ExternalLink size={16} />
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}