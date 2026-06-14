export default function FeaturedPost() {
  return (
    <section className="pb-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
            bg-white
            rounded-3xl
            overflow-hidden
            border
            border-gray-100
            shadow-sm
          "
        >

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"
            alt="Legal Article"
            className="w-full h-full object-cover min-h-[400px]"
          />

          {/* Content */}
          <div className="p-10 flex flex-col justify-center">

            <span
              className="
                inline-block
                w-fit
                px-4
                py-2
                rounded-full
                bg-[#C9A227]/10
                text-[#C9A227]
                text-sm
                font-medium
                mb-5
              "
            >
              Featured Article
            </span>

            <h2 className="heading-font text-4xl md:text-5xl text-black leading-tight">
              Understanding Property
              <br />
              Disputes in India
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Learn about common property disputes,
              available legal remedies, and how
              experienced legal representation can
              safeguard your rights and interests.
            </p>

            <button
              className="
                mt-8
                w-fit
                px-7
                py-3
                rounded-full
                bg-[#C9A227]
                text-white
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Read More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}