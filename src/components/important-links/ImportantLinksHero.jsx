// export default function ImportantLinksHero() {
//   return (
//     <section className="pt-40 pb-20 bg-[var(--background)]">
//       <div className="max-w-7xl mx-auto px-6 text-center">

//         <p className="text-[var(--secondary)] uppercase tracking-[4px] text-sm">
//           Important Links
//         </p>

//         <h1 className="heading-font text-5xl md:text-7xl mt-6 text-white">
//           Courts & Legal
//           <br />
//           Resources
//         </h1>

//         <p className="max-w-2xl mx-auto mt-7 text-slate-400 leading-7">
//           Quick access to official websites of important
//           courts and legal institutions across India.
//         </p>

//       </div>
//     </section>
//   );
// }


export default function CareerHero() {
  return (
    <section className="relative pt-28 md:pt-36 lg:pt-40 pb-20 overflow-hidden min-h-[60vh] flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gold Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* Decorative Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#C9A227]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

        <span className="inline-block px-5 py-2 border border-[#C9A227]/40 rounded-full text-sm uppercase tracking-[3px] text-[#C9A227]">
          Important Links
        </span>

        <h1 className="heading-font text-5xl md:text-7xl mt-6 font-bold leading-tight">
           Courts & Legal
           <br />
           Resources
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-slate-300 text-lg leading-relaxed">
           Quick access to official websites of important
          courts and legal institutions across India.
        </p>

      </div>

    </section>
  );
}
