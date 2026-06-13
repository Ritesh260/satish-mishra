"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210";

  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* Tooltip */}
      <div
        className="
          absolute
          right-16
          top-1/2
          -translate-y-1/2
          bg-slate-900
          text-white
          px-4
          py-2
          rounded-lg
          text-sm
          whitespace-nowrap
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          pointer-events-none
          border border-slate-700
        "
      >
        Chat With Advocate
      </div>

      {/* Pulse Ring */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-green-500
          animate-ping
          opacity-20
        "
      />

      {/* Button */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          w-14
          h-14
          rounded-full
          bg-green-500
          flex
          items-center
          justify-center
          shadow-[0_10px_30px_rgba(34,197,94,0.4)]
          hover:scale-110
          transition-all
          duration-300
        "
      >
        <FaWhatsapp size={30} color="white" />
      </a>

    </div>
  );
}