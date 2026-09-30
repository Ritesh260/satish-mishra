
import {
  Scale,
  Building2,
  Home,
  Gavel,
  BriefcaseBusiness,
  Users,
  Banknote,
  ShoppingBag,
  KeyRound,
  Handshake,
  Laptop,
  Copyright,
  FileCheck,
} from "lucide-react";


const services = [
  {
    icon: Building2,
    title: "REDEVELOPMENT",
    description:
      "Legal assistance for redevelopment projects, including agreements, permissions, documentation and related property matters.",
  },
  {
    icon: FileCheck,
    title: "CONVEYANCE",
    description:
      "Professional guidance for property conveyance, ownership transfers, sale documentation and related legal formalities.",
  },
  {
    icon: Scale,
    title: "PROPERTY LITIGATIONS",
    description:
      "Representation and legal support for disputes involving ownership, possession, title, boundaries and other property concerns.",
  },
  {
    icon: Users,
    title: "DIVORCE LITIGATION",
    description:
      "Legal guidance and representation in matrimonial disputes, divorce proceedings, settlements and related family matters.",
  },
  {
    icon: Gavel,
    title: "CRIMINAL LITIGATIONS",
    description:
      "Dedicated legal representation in criminal proceedings, complaints, investigations, trials and other criminal law matters.",
  },
  {
    icon: BriefcaseBusiness,
    title: "COMPANY LITIGATION",
    description:
      "Legal assistance for companies in corporate disputes, compliance matters, agreements and proceedings under applicable laws.",
  },
  {
    icon: Users,
    title: "COOPERATIVE & SOCIETY LITIGATION",
    description:
      "Legal advice and representation for disputes, management issues and proceedings involving cooperative societies and associations.",
  },
  {
    icon: Banknote,
    title: "MONEY RECOVERY LITIGATION",
    description:
      "Legal support for recovering outstanding dues through appropriate notices, negotiations, suits and other lawful proceedings.",
  },
  {
    icon: ShoppingBag,
    title: "CONSUMER LAW LITIGATIONS",
    description:
      "Assistance with consumer disputes concerning defective services, products, unfair practices and protection of consumer rights.",
  },
  {
    icon: KeyRound,
    title: "RENT CONTROL LAW",
    description:
      "Legal representation in tenancy and rental disputes involving landlords, tenants, possession, rent and related proceedings.",
  },
  {
    icon: Users,
    title: "LABOUR LAWS LITIGATION",
    description:
      "Legal assistance in employment-related disputes involving workplace rights, service matters, employer-employee issues and claims.",
  },
  {
    icon: Handshake,
    title: "ARBITRATION",
    description:
      "Professional assistance in resolving commercial and contractual disputes through arbitration and related proceedings.",
  },
  {
    icon: Laptop,
    title: "INFORMATION TECHNOLOGY LAWS",
    description:
      "Legal guidance on technology-related agreements, digital transactions, online matters, compliance and information technology concerns.",
  },
  {
    icon: Copyright,
    title: "INTELLECTUAL PROPERTY RIGHTS (IPR)",
    description:
      "Assistance with protecting intellectual creations through registration, enforcement and legal action concerning intellectual property.",
  },
  {
    icon: FileCheck,
    title: "REGISTRATION OF DOCUMENTS",
    description:
      "Guidance throughout the documentation and registration process to ensure legal formalities are properly completed.",
  },
  {
    icon: Home,
    title: "REAL ESTATE & PROPERTY TRANSFER",
    description:
      "Legal support for property transactions, transfers, documentation, due diligence and other real estate requirements.",
  },
];



export default function ServicesGrid() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  bg-white
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
                    w-20
                    h-20
                    mx-auto
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
                  <Icon
                    size={42}
                    strokeWidth={1.7}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-black
                    mt-6
                    text-center
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4
                    text-gray-600
                    leading-relaxed
                    text-center
                  "
                >
                  {service.description}
                </p>

                {/* Read More */}
                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    className="
                      px-5
                      py-2
                      text-sm
                      font-medium
                      border
                      border-[#C9A227]
                      text-[#C9A227]
                      rounded-md
                      hover:bg-[#C9A227]
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    Read More
                  </button>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

