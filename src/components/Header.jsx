import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import luxityLOGO from '../assets/images/luxitylogo.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-blue/95 backdrop-blur border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={luxityLOGO} alt="Luxity-logo" className="w-20 md:w-24" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-300 text-sm uppercase tracking-wide">
          <a href="#features" className="hover:text-[#d4af37] transition">
            Features
          </a>
          <a href="#gallery" className="hover:text-[#d4af37] transition">
            Gallery
          </a>
          <a href="#pricing" className="hover:text-[#d4af37] transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-[#d4af37] transition">
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="tel:+2340000000000"
            className="text-sm px-4 py-2 rounded border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#102d52] transition"
          >
            Call Agent
          </a>
          <a
            href="https://wa.me/2340000000000?text=Hello%2C%20I%27m%20interested%20in%20the%20property."
            className="text-sm px-4 py-2 rounded bg-[#d4af37] text-[#102d52] hover:bg-[#c19e2f] transition"
          >
            WhatsApp Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#d4af37] text-2xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-dark-blue
             border-l border-[#d4af37]/30 px-6 py-6 flex flex-col space-y-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#d4af37] text-2xl self-end"
            >
              <FiX />
            </button>

            <nav className="flex flex-col space-y-5 text-gray-200 text-lg tracking-wide">
              <a href="#features" onClick={() => setIsOpen(false)}>
                Features
              </a>
              <a href="#gallery" onClick={() => setIsOpen(false)}>
                Gallery
              </a>
              <a href="#pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </nav>

            <div className="pt-6 flex flex-col space-y-4">
              <a
                href="tel:+2340000000000"
                className="w-full text-center py-3 border border-[#d4af37] text-[#d4af37] rounded hover:bg-[#d4af37] hover:text-[#102d52]"
              >
                Call Agent
              </a>

              <a
                href="https://wa.me/2340000000000?text=Hello%2C%20I%27m%20interested%20in%20the%20property."
                className="w-full text-center py-3 bg-[#d4af37] text-[#102d52] rounded font-medium hover:bg-[#c19e2f]"
              >
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

