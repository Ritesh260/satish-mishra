"use client";

import Link from "next/link";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/">
          <h2 className="heading-font text-2xl font-bold">
            Advocate
            <span className="gold-text">.</span>
          </h2>
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#C9A227]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
  <Link href="/contact">
    <Button>Book Consultation</Button>
  </Link>
</div>

        <button
  className="
    md:hidden
    w-10
    h-10
    rounded-full
    border
    border-slate-700
    flex
    items-center
    justify-center
  "
  onClick={() => setOpen(true)}
>
  <Menu size={20} />
</button>
      </div>

      <AnimatePresence>
  {open && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
        onClick={() => setOpen(false)}
      />

      {/* Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
        }}
        className="
          fixed
          top-0
          right-0
          h-screen
          w-[85%]
          max-w-[350px]
          bg-black/95
          border-l
          border-slate-800
          z-50
          md:hidden
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">

          <h2 className="heading-font text-2xl">
            Advocate
            <span className="gold-text">.</span>
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="
              w-10
              h-10
              rounded-full
              border
              border-slate-700
              flex
              items-center
              justify-center
            "
          >
            <X size={20} />
          </button>

        </div>

        {/* Links */}
        <div className="flex flex-col p-6">

          {links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  py-4
                  border-b
                  border-slate-800
                  text-lg
                  hover:text-[var(--secondary)]
                  transition
                  block
                "
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8"
          >
            <Button>
              Book Consultation
            </Button>
          </Link>

        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </nav>
  );
}