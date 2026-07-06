"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What types of legal services do you provide?",
    answer:
      "We provide legal assistance in Civil, Criminal, Family, Property, Consumer, Corporate, Documentation, Arbitration, and various other legal matters with personalized guidance.",
  },
  {
    question: "How can I schedule a consultation?",
    answer:
      "You can schedule a consultation by visiting our Contact page, calling our office, or submitting an enquiry through our website.",
  },
  {
    question: "Do you offer online legal consultations?",
    answer:
      "Yes. We provide both online and in-person consultations depending on your convenience and the nature of your legal matter.",
  },
  {
    question: "What documents should I bring during my first meeting?",
    answer:
      "Please bring all relevant documents related to your case, including agreements, notices, identity proof, court papers, and any supporting evidence.",
  },
  {
    question: "How are legal fees determined?",
    answer:
      "Legal fees depend upon the complexity, urgency, and scope of the legal matter. We discuss our fee structure transparently before proceeding.",
  },
  {
    question: "How long does a legal case usually take?",
    answer:
      "The timeline varies depending on the type of case, court proceedings, and legal requirements. We will provide a realistic estimate after reviewing your matter.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#fafafa] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[#C9A227] uppercase tracking-[3px] font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4">
            Frequently Asked Questions
          </h2>

          <div className="w-24 h-1 bg-[#C9A227] rounded-full mx-auto mt-6"></div>

          <p className="max-w-2xl mx-auto mt-8 text-gray-600 text-lg leading-8">
            We understand that legal matters can be confusing. Here are answers
            to some of the most common questions our clients ask.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-black">
                  {faq.question}
                </h3>

                <div
                  className={`w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center transition duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="text-[#C9A227]" size={20} />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-8 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-24">
          <div className="rounded-3xl bg-black px-10 py-16 text-center">
            <span className="text-[#C9A227] uppercase tracking-[3px] text-sm font-semibold">
              Need Legal Assistance?
            </span>

            <h2 className="text-white text-4xl font-bold mt-4">
              Still Have Questions?
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto mt-6 leading-8">
              Every legal matter is unique. If you couldn't find the answer
              you're looking for, we're here to help. Get in touch for trusted
              legal advice tailored to your situation.
            </p>

            <Link
              href="/contact"
              className="inline-flex mt-10 bg-[#C9A227] hover:bg-[#b8911c] text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}