"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CareerHero from "@/components/careers/CareerHero";
import { Upload, Send } from "lucide-react";

export default function CareersView() {
  return (
    <>
      <Navbar />
      <CareerHero />
      {/* Hero */}
      {/* <section className="pt-40 pb-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-[#C9A227] uppercase tracking-[4px] text-sm">
            Careers
          </p>

          <h1 className="heading-font text-5xl md:text-7xl mt-6 font-bold">
            Build Your
            <br />
            Legal Career
          </h1>

          <p className="max-w-2xl mx-auto mt-7 text-gray-400 text-lg leading-relaxed">
            We welcome motivated legal professionals and aspiring lawyers
            who are looking to grow through meaningful legal work and
            practical experience.
          </p>

        </div>
      </section> */}

      {/* Application Section */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">

            {/* Left Content */}
            <div className="lg:sticky lg:top-28">

              <p className="text-[#C9A227] uppercase tracking-[3px] text-sm">
                Join Our Practice
              </p>

              <h2 className="heading-font text-4xl md:text-5xl text-black mt-4">
                Take The Next
                <br />
                Step In Your Career
              </h2>

              <p className="text-gray-600 mt-6 leading-7">
                Whether you are an experienced legal professional or
                beginning your legal career, we invite you to share
                your profile with us.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span className="text-gray-700">
                    Practical legal exposure
                  </span>
                </div>

                <div className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span className="text-gray-700">
                    Professional working environment
                  </span>
                </div>

                <div className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  <span className="text-gray-700">
                    Opportunities for professional growth
                  </span>
                </div>

              </div>

            </div>

            {/* Form */}
            <form
              className="
                bg-white
                rounded-[30px]
                p-7
                md:p-10
                shadow-xl
                border
                border-gray-100
              "
            >

              <div className="mb-8">
                <span className="text-[#C9A227] uppercase tracking-[3px] text-sm">
                  Application Form
                </span>

                <h3 className="heading-font text-3xl text-black mt-3">
                  Tell Us About Yourself
                </h3>

                <p className="text-gray-500 mt-2">
                  Submit your details and resume for consideration.
                </p>
              </div>

              {/* Name + Phone */}
              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="
                      w-full h-14
                      rounded-2xl
                      bg-[#F8FAFC]
                      border border-gray-200
                      px-5
                      text-black
                      placeholder:text-gray-500
                      outline-none
                      focus:border-[#C9A227]
                      focus:ring-4
                      focus:ring-[#C9A227]/10
                      transition
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="
                      w-full h-14
                      rounded-2xl
                      bg-[#F8FAFC]
                      border border-gray-200
                      px-5
                      text-black
                      placeholder:text-gray-500
                      outline-none
                      focus:border-[#C9A227]
                      focus:ring-4
                      focus:ring-[#C9A227]/10
                      transition
                    "
                  />
                </div>

              </div>

              {/* Email */}
              <div className="mt-5">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    w-full h-14
                    rounded-2xl
                    bg-[#F8FAFC]
                    border border-gray-200
                    px-5
                    text-black
                    placeholder:text-gray-500
                    outline-none
                    focus:border-[#C9A227]
                    focus:ring-4
                    focus:ring-[#C9A227]/10
                    transition
                  "
                />

              </div>

              {/* Qualification + Experience */}
              <div className="grid md:grid-cols-2 gap-5 mt-5">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qualification
                  </label>

                  <select
                    className="
                      w-full h-14
                      rounded-2xl
                      bg-[#F8FAFC]
                      border border-gray-200
                      px-5
                      text-gray-700
                      outline-none
                      focus:border-[#C9A227]
                      focus:ring-4
                      focus:ring-[#C9A227]/10
                      transition
                    "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select qualification
                    </option>
                    <option>LL.B</option>
                    <option>LL.M</option>
                    <option>BA LL.B</option>
                    <option>BBA LL.B</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience
                  </label>

                  <select
                    className="
                      w-full h-14
                      rounded-2xl
                      bg-[#F8FAFC]
                      border border-gray-200
                      px-5
                      text-gray-700
                      outline-none
                      focus:border-[#C9A227]
                      focus:ring-4
                      focus:ring-[#C9A227]/10
                      transition
                    "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select experience
                    </option>
                    <option>Fresher</option>
                    <option>Less than 1 Year</option>
                    <option>1–3 Years</option>
                    <option>3–5 Years</option>
                    <option>5+ Years</option>
                  </select>
                </div>

              </div>

              {/* Area */}
              <div className="mt-5">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Interest
                </label>

                <select
                  className="
                    w-full h-14
                    rounded-2xl
                    bg-[#F8FAFC]
                    border border-gray-200
                    px-5
                    text-gray-700
                    outline-none
                    focus:border-[#C9A227]
                    focus:ring-4
                    focus:ring-[#C9A227]/10
                    transition
                  "
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select area of interest
                  </option>
                  <option>Civil Litigation</option>
                  <option>Criminal Law</option>
                  <option>Corporate Law</option>
                  <option>Property Law</option>
                  <option>Constitutional Law</option>
                  <option>Legal Research</option>
                  <option>Other</option>
                </select>

              </div>

              {/* Message */}
              <div className="mt-5">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  About You
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us briefly about your experience, skills or career interests..."
                  className="
                    w-full
                    rounded-2xl
                    bg-[#F8FAFC]
                    border border-gray-200
                    px-5
                    py-4
                    text-black
                    placeholder:text-gray-500
                    outline-none
                    resize-none
                    focus:border-[#C9A227]
                    focus:ring-4
                    focus:ring-[#C9A227]/10
                    transition
                  "
                />

              </div>

              {/* Resume */}
              <div className="mt-5">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Resume
                </label>

                <label
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    w-full
                    min-h-32
                    rounded-2xl
                    border-2
                    border-dashed
                    border-gray-300
                    bg-[#F8FAFC]
                    cursor-pointer
                    hover:border-[#C9A227]
                    hover:bg-[#C9A227]/5
                    transition
                  "
                >
                  <Upload
                    size={24}
                    className="text-[#C9A227]"
                  />

                  <span className="mt-3 text-sm font-medium text-gray-700">
                    Click to upload your resume
                  </span>

                  <span className="text-xs text-gray-400 mt-1">
                    PDF, DOC or DOCX
                  </span>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                </label>

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  h-14
                  mt-7
                  rounded-full
                  bg-[#C9A227]  
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:bg-[#C9A227]
                  hover:text-white
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                Submit Application
                <Send size={18} />
              </button>

            </form>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}