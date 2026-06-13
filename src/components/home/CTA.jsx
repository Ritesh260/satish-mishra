import Button from "../common/Button";

export default function CTA() {
  return (
    <section className="py-24 bg-[#C9A227]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="heading-font text-5xl text-black font-bold">
          Need Legal Assistance?
        </h2>

        <p className="mt-6 text-black/80 text-lg">
          Schedule a consultation and discuss your legal matter
          with an experienced advocate.
        </p>

        <div className="mt-10">
          <Button>
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}