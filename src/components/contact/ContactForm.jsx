export default function ContactForm() {
  return (
    <form
      className="
        bg-white
        border
        border-gray-200
        rounded-3xl
        p-6 md:p-8
        shadow-sm
      "
    >
      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Full Name"
          className="
            w-full
            bg-[#F8FAFC]
            border
            border-gray-200
            rounded-xl
            px-4
            py-3
            text-black
            outline-none
            focus:border-[#C9A227]
            focus:ring-2
            focus:ring-[#C9A227]/20
            transition
          "
        />

        <input
          type="email"
          placeholder="Email Address"
          className="
            w-full
            bg-[#F8FAFC]
            border
            border-gray-200
            rounded-xl
            px-4
            py-3
            text-black
            outline-none
            focus:border-[#C9A227]
            focus:ring-2
            focus:ring-[#C9A227]/20
            transition
          "
        />

      </div>

      <input
        type="text"
        placeholder="Subject"
        className="
          w-full
          mt-6
          bg-[#F8FAFC]
          border
          border-gray-200
          rounded-xl
          px-4
          py-3
          text-black
          outline-none
          focus:border-[#C9A227]
          focus:ring-2
          focus:ring-[#C9A227]/20
          transition
        "
      />

      <textarea
        rows="6"
        placeholder="Describe your legal matter..."
        className="
          w-full
          mt-6
          bg-[#F8FAFC]
          border
          border-gray-200
          rounded-xl
          px-4
          py-3
          text-black
          outline-none
          resize-none
          focus:border-[#C9A227]
          focus:ring-2
          focus:ring-[#C9A227]/20
          transition
        "
      />

      <button
        className="
          mt-6
          px-8
          py-3
          rounded-full
          bg-[#C9A227]
          text-white
          font-semibold
          hover:scale-105
          transition-all
          duration-300
        "
      >
        Send Inquiry
      </button>
    </form>
  );
}