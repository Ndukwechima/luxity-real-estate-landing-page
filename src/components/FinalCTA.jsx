import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import bgImage from "../assets/images/hero1.png"; // <-- Replace with your own image

export default function FinalCTA() {
  return (
    <section
      className="relative py-24 text-white bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold tracking-wide"
        >
          Ready to Secure Your New Home?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg"
        >
          Limited units available. Book an inspection now or chat with our agent
          instantly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/2340000000000?text=Hello,%20I%27m%20interested%20in%20the%20property.%20Can%20we%20chat%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#d4af37] text-[#102d52] px-7 py-4 rounded font-semibold hover:bg-[#c19e2f] transition"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp Now
          </a>

          {/* Call Agent */}
          <a
            href="tel:+2340000000000"
            className="flex items-center gap-2 border border-white px-7 py-4 rounded font-semibold hover:bg-white hover:text-[#102d52] transition"
          >
            <FaPhoneAlt className="text-lg" />
            Call Agent
          </a>

          {/* Book Inspection */}
          <a
            href="#inspection"
            className="px-7 py-4 border border-[#d4af37] text-[#d4af37] rounded font-semibold hover:bg-[#d4af37] hover:text-[#102d52] transition"
          >
            Book Inspection
          </a>
        </motion.div>
      </div>
    </section>
  );
}

