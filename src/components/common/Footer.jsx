"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}
          <div>
            <Link href="/">
              <img
                src="/assets/footor.jpeg"
                alt="Advocate Satish Mishra"
                className="h-20 w-auto"
              />
            </Link>

            <p className="mt-6 text-gray-400 leading-7">
              Providing trusted legal representation,
              strategic legal advice, and dedicated
              advocacy for individuals, families,
              and businesses across Mumbai.
            </p>
          </div>

          {/* Practice Areas */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Practice Areas
            </h3>

            <ul className="space-y-4">

              {[
                "Civil Litigation",
                "Criminal Defense",
                "Property Disputes",
                "Corporate Law",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/practice-areas"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#C9A227] transition"
                  >
                    <ArrowRight size={15} />
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Practice Areas", path: "/practice-areas" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#C9A227] transition"
                  >
                    <ArrowRight size={15} />
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <MapPin
                  size={22}
                  className="text-[#C9A227] mt-1"
                />

                <p className="text-gray-400 leading-6">
                  Mumbai, Maharashtra,
                  India
                </p>

              </div>

              <div className="flex gap-4">

                <Phone
                  size={20}
                  className="text-[#C9A227]"
                />

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-gray-400 hover:text-[#C9A227]"
                >
                  +91 XXXXX XXXXX
                </a>

              </div>

              <div className="flex gap-4">

                <Mail
                  size={20}
                  className="text-[#C9A227]"
                />

                <a
                  href="mailto:contact@advocatesatishmishra.com"
                  className="text-gray-400 hover:text-[#C9A227]"
                >
                  contact@advocatesatishmishra.com
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Advocate Satish Mishra. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center md:text-right">
            Designed & Developed by{" "}
            <a
              href="https://ritesh-mali-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A227] hover:text-white transition"
            >
              Ritesh Mali
            </a>
          </p>

        </div>

      </div>

    </footer>
  );
}