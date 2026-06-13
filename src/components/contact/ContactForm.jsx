export default function ContactForm() {
  return (
    <form className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Full Name"
          className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
        />

      </div>

      <input
        type="text"
        placeholder="Subject"
        className="w-full mt-6 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
      />

      <textarea
        rows="6"
        placeholder="Describe your legal matter..."
        className="w-full mt-6 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3"
      />

      <button
        className="mt-6 px-8 py-3 rounded-full bg-[var(--secondary)] text-black font-semibold"
      >
        Send Inquiry
      </button>
    </form>
  );
}