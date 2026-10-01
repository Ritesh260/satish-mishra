
import SectionHeading from "../common/SectionHeading";

const team = [
  {
    name: "Adv. Satish Mishra",
    title: "Founder & Senior Advocate",
    qualifications: ["LL.B.", "B.A.", "Legal Practitioner"],
    image: "/assets/advocate.png",
    bioUrl: "#",
  },
  {
    name: "Shivani Mishra",
    title: "Legal Associate",
    qualifications: ["B.A. LL.B.", "Legal Research", "Civil Law"],
    image: "/assets/shivani.png",
    bioUrl: "#",
  },
  {
    name: "Akshat Mishra",
    title: "Legal Associate",
    qualifications: ["B.A. LL.B.", "Legal Research", "Civil Law"],
    image: "/assets/akshat.png",
    bioUrl: "#",
  },
];

export default function LegalTeam() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
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

        {/* Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {team.map((member, index) => (
            <div key={index} className="group">

              {/* Image Card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-t-1xl
                  h-[420px]
                  bg-black
                  shadow-lg
                "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Bottom Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                ></div>

                {/* Name & Designation */}
                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <p
                    className="
                      text-[#C9A227]
                      text-xs
                      uppercase
                      tracking-[2.5px]
                      font-medium
                      mb-2
                    "
                  >
                    {member.title}
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-white
                      leading-tight
                    "
                  >
                    {member.name}
                  </h3>

                </div>
              </div>

              {/* Qualification Panel */}
              <div
                className="
                  bg-white
                  rounded-b-1xl
                  border
                  border-gray-100
                  border-t-0
                  px-7
                  py-6
                  shadow-md
                "
              >
                {/* Small Heading */}
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[2px]
                    font-semibold
                    text-[#C9A227]
                    mb-3
                  "
                >
                  Qualifications
                </p>

                {/* Qualifications */}
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {member.qualifications.map((qualification, i) => (
                    <span
                      key={i}
                      className="
                        text-gray-700
                        text-sm
                        font-medium
                      "
                    >
                      {qualification}
                      {i !== member.qualifications.length - 1 && (
                        <span className="ml-2 text-[#C9A227]">
                          •
                        </span>
                      )}
                    </span>
                  ))}
                </div>

               
{/* View Bio Button */}
<div className="flex justify-center mt-6">
  <a
    href={member.bioUrl}
    className="
      inline-flex
      items-center
      justify-center
      gap-2
      min-w-[130px]
      px-6
      py-2.5
      rounded-full
      border
      border-[#C9A227]
      text-[#C9A227]
      text-sm
      font-semibold
      tracking-wide
      hover:bg-[#C9A227]
      hover:text-white
      transition-all
      duration-300
      group/bio
    "
  >
    View Bio

    <span
      className="
        text-base
        transition-transform
        duration-300
        group-hover/bio:translate-x-1
      "
    >
      
    </span>
  </a>
</div>


              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

