export default function Button({
  children,
  variant = "primary",
}) {
  return (
    <button
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300
      ${
        variant === "primary"
          ? "bg-[#C9A227] text-black hover:scale-105"
          : "border border-[#C9A227] text-[#C9A227]"
      }`}
    >
      {children}
    </button>
  );
}