import SectionHeading from "../common/SectionHeading";

const team = [
  {
    name: "Adv. Satish Mishra",
    title: "Founder & Senior Advocate",
    image: "/assets/advocate.png",
  },
  {
    name: "Shivani Mishra",
    title: "Legal Associate",
    image: "/assets/shivani.png",
  },
  {
    name: "Akshat Mishra",
    title: "Legal Associate",
    image: "/assets/akshat.png",
  },
];

export default function LegalTeam() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Our Legal Team"
          title="Meet Our Dedicated Legal Professionals"
          textColor="text-black"
        />

        <p className="max-w-3xl mx-auto text-center text-gray-600 text-lg mt-6 leading-8">
          Our team is committed to delivering trusted legal guidance,
          strategic representation, and personalized solutions with the
          highest standards of professionalism and integrity.
        </p>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
  {team.map((member, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-3xl shadow-lg h-[420px] cursor-pointer"
    >
      {/* Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7">

        <span className="inline-block text-xs uppercase tracking-[3px] text-[#C9A227] border border-[#C9A227]/40 px-3 py-1 rounded-full mb-3">
          {member.title}
        </span>

        <h3 className="text-3xl font-bold text-white leading-tight">
          {member.name}
        </h3>

      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}