const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "1500+", label: "Cases Handled" },
  { number: "98%", label: "Success Rate" },
  { number: "500+", label: "Clients" },
];

export default function Stats() {
  return (
   <section className="py-12 bg-[#F8FAFC]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex flex-wrap justify-center gap-4">

      <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
        <span className="font-semibold text-black">
          25+ Years Experience
        </span>
      </div>

      <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
        <span className="font-semibold text-black">
          Bombay High Court
        </span>
      </div>

      <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
        <span className="font-semibold text-black">
          1500+ Cases Handled
        </span>
      </div>

      <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
        <span className="font-semibold text-black">
          Client-Focused Approach
        </span>
      </div>

    </div>

  </div>
</section>
  );
}