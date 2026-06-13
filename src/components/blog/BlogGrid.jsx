const posts = [
  {
    title: "How To File A Legal Notice",
    category: "Civil Law",
  },
  {
    title: "Understanding Consumer Rights",
    category: "Consumer Law",
  },
  {
    title: "Divorce Procedure In India",
    category: "Family Law",
  },
  {
    title: "Property Registration Guide",
    category: "Property Law",
  },
  {
    title: "Corporate Compliance Essentials",
    category: "Corporate Law",
  },
  {
    title: "What To Do After Receiving A Summons",
    category: "Civil Law",
  },
];

export default function BlogGrid() {
  return (
    <section className="section-padding bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800"
            >

              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
                alt={post.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <span className="text-[var(--secondary)] text-sm">
                  {post.category}
                </span>

                <h3 className="text-2xl mt-3">
                  {post.title}
                </h3>

                <p className="text-slate-400 mt-4">
                  Read detailed legal insights and practical guidance.
                </p>

                <button className="mt-6 text-[var(--secondary)]">
                  Read Article →
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}