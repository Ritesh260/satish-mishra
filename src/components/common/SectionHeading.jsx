export default function SectionHeading({
  subtitle,
  title,
  center = true,
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="gold-text uppercase tracking-widest text-sm mb-3">
        {subtitle}
      </p>

      <h2 className="heading-font text-4xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}