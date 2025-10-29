import React from "react";
import { motion } from "framer-motion";
import {
  FaBed,
  FaBolt,
  FaShieldAlt,
  FaCarSide,
  FaTint,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Highlights() {
  const highlights = [
    { icon: <FaBed />, label: "3 Luxury Bedrooms" },
    { icon: <FaBolt />, label: "24/7 Power Supply" },
    { icon: <FaShieldAlt />, label: "Full Security" },
    { icon: <FaCarSide />, label: "Ample Parking" },
    { icon: <FaTint />, label: "Clean Water Supply" },
    { icon: <FaMapMarkerAlt />, label: "Prime Location" },
  ];

  return (
    <section className="py-20 bg-[#102d52]" id="features">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-4xl font-bold text-white"
        >
          Why This Property Stands Out
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-gray-300 max-w-2xl mx-auto mt-3"
        >
          Experience comfort, security, and modern living — all in one perfect
          location.
        </motion.p>

        {/* Feature Icons Row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Wrapper */}
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-linear-to-br from-[#d4af37] to-[#b8962c] text-[#102d52] shadow-lg group-hover:scale-110 transition">
                <span className="text-2xl">{item.icon}</span>
              </div>

              <p className="text-sm text-gray-200 font-medium mt-3 group-hover:text-[#d4af37] transition">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

