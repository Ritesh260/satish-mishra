"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const officeAddress =
    "Shop Number 7, Royal Enclave, Parsi Panchayat Rd, Near Sona Udyog, Amba Wadi, Natwar Nagar, Andheri East, Mumbai, Maharashtra 400069";

  const mapQuery = encodeURIComponent(
    "Shop Number 7, Royal Enclave, Parsi Panchayat Rd, Near Sona Udyog, Amba Wadi, Natwar Nagar, Andheri East, Mumbai, Maharashtra 400069"
  );

  const phone = "+91 XXXXX XXXXX";
  const phoneLink = "+91XXXXXXXXXX";

  const email = "contact@advocatesatishmishra.com";

  return (
    <footer className="bg-black text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

        {/* MAIN FOOTER */}

        <div className="grid lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.5fr] md:grid-cols-2 gap-12 lg:gap-10">

          {/* BRAND */}

          <div>
            <Link href="/" className="inline-block">
              <img
                src="/assets/footor.jpeg"
                alt="Advocate Satish Mishra"
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 text-gray-400 leading-7 max-w-sm">
              Providing trusted legal representation,
              strategic legal advice, and dedicated
              advocacy for individuals, families,
              and businesses across Mumbai.
            </p>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                mt-7
                px-5
                py-3
                rounded-full
                border
                border-[#C9A227]/50
                text-[#C9A227]
                text-sm
                font-medium
                hover:bg-[#C9A227]
                hover:text-black
                transition-all
                duration-300
              "
            >
              Book a Consultation
              <ArrowRight size={16} />
            </Link>
          </div>


          {/* PRACTICE AREAS */}

          <div>
            <h3 className="text-lg font-semibold mb-6">
              Practice Areas
            </h3>

            <ul className="space-y-4">

             {[
  "Redevelopment",
  "Conveyance",
  "Property Litigations",
  "Divorce Litigation",
  "Criminal Litigations",
  "Company Litigation",
  "Cooperative & Society Litigation",
  "Money Recovery Litigation",
  "Consumer Law Litigations",
  "Rent Control Law",
  "Labour Laws Litigation",
  "Arbitration",
  "Information Technology Laws",
  "Intellectual Property Rights (IPR)",
  "Registration of Documents",
  "Real Estate & Property Transfer",
].map((item) => (
                <li key={item}>
                  <Link
                    href="/practice-areas"
                    className="
                     flex items-start gap-2 text-gray-400 hover:text-[#C9A227] transition text-sm leading-5
                    "
                  >
                    <ArrowRight size={14} />
                    {item}
                  </Link>
                </li>
              ))}

            </ul>
          </div>


          {/* QUICK LINKS */}

          <div>
            <h3 className="text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 gap-1">

              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                {
                  name: "Practice Areas",
                  path: "/practice-areas",
                },
                { name: "Blog", path: "/blog" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="
                      flex
                      items-center
                      gap-2
                      text-gray-400
                      hover:text-[#C9A227]
                      transition
                    "
                  >
                    <ArrowRight size={14} />
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>


          {/* CONTACT + MAP */}

          <div>

            <h3 className="text-lg font-semibold mb-6">
              Contact & Location
            </h3>

            {/* PHONE */}

            <a
              href={`tel:${phoneLink}`}
              className="flex gap-4 items-start group mb-5"
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-[#C9A227]/10
                  border
                  border-[#C9A227]/20
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  group-hover:bg-[#C9A227]
                  transition
                "
              >
                <Phone
                  size={19}
                  className="text-[#C9A227] group-hover:text-black"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Call Us
                </p>

                <p className="mt-1 text-gray-300 group-hover:text-[#C9A227] transition">
                  {phone}
                </p>
              </div>
            </a>


            {/* EMAIL */}

            <a
              href={`mailto:${email}`}
              className="flex gap-4 items-start group mb-6"
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-[#C9A227]/10
                  border
                  border-[#C9A227]/20
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  group-hover:bg-[#C9A227]
                  transition
                "
              >
                <Mail
                  size={19}
                  className="text-[#C9A227] group-hover:text-black"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-gray-300 break-all group-hover:text-[#C9A227] transition">
                  {email}
                </p>
              </div>
            </a>


            {/* GOOGLE MAP */}

            <div
              className="
                rounded-2xl
                overflow-hidden
                border
                border-white/10
                bg-[#111]
              "
            >

              {/* Actual Google Map */}

              <div className="relative w-full h-[210px]">

                <iframe
                  title="Advocate Satish Mishra Office Location"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>


              {/* Address */}

              <div className="p-4">

                <div className="flex gap-3 items-start">

                  <MapPin
                    size={19}
                    className="text-[#C9A227] mt-1 flex-shrink-0"
                  />

                  <div>

                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Office Address
                    </p>

                    <p className="mt-2 text-sm text-gray-300 leading-6">
                      {officeAddress}
                    </p>

                  </div>

                </div>


                {/* Directions */}

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-[#C9A227]
                    hover:text-white
                    transition
                  "
                >
                  Get Directions
                  <ExternalLink size={14} />
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM */}

        <div
          className="
            border-t
            border-white/10
            mt-14
            pt-7
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Advocate Satish Mishra. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center md:text-right">
            Designed & Developed by{" "}
            <a
              href="https://ritesh-mali-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[#C9A227]
                hover:text-white
                transition
              "
            >
              Ritesh Mali
            </a>
          </p>

        </div>

      </div>

    </footer>
  );
}