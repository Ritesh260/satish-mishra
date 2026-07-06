export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="heading-font text-2xl">
              Advocate
            </h3>

            <p className="mt-4 text-slate-400">
              Trusted legal representation
              and strategic counsel for
              individuals and businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Practice Areas
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>Civil Law</li>
              <li>Criminal Law</li>
              <li>Corporate Law</li>
              <li>Property Law</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>Mumbai, Maharashtra</li>
              <li>+91 XXXXX XXXXX</li>
              <li>contact@advocate.com</li>
            </ul>
          </div>
        </div>

       <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">

  <p>
    © 2026 Advocate Satish Mishra. All Rights Reserved.
  </p>

  <p className="mt-2 text-sm">
    Designed & Developed by{" "}
    <a
      href="https://ritesh-mali-portfolio.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#C9A227] hover:text-white transition-colors"
    >
      Ritesh Mali
    </a>
  </p>

</div>
      </div>
    </footer>
  );
}