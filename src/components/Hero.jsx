import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.png";

const images = [hero1, hero2, hero3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden" id="home">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Property"
            className={`absolute w-full h-full object-cover transition-opacity duration-1800ms ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-6 text-white">
        {/* Headline Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
        >
          Luxury 3-Bedroom Apartments Available Now in Lekki
        </motion.h1>

        {/* Subtext Animation */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-gray-200 text-lg md:text-xl"
        >
          Move into a premium, secure, and family-friendly environment with
          top-tier finishing and modern amenities.
        </motion.p>

        {/* CTA Buttons (stagger animation) */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.6 },
            },
          }}
          className="mt-6 flex flex-wrap gap-4"
        >
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            href="https://wa.me/2340000000000?text=Hello%2C%20I%27m%20interested%20in%20the%20property.%20Can%20we%20talk%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d4af37] text-[#102d52] font-semibold px-6 py-3 rounded hover:bg-[#c19e2f] transition"
          >
            WhatsApp Now
          </motion.a>

          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            href="#inspection"
            className="px-6 py-3 border border-[#d4af37] text-[#d4af37] rounded hover:bg-[#d4af37] hover:text-[#102d52] transition font-semibold"
          >
            Book Inspection
          </motion.a>

          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            href="tel:+2340000000000"
            className="px-6 py-3 border border-white/80 text-white rounded hover:bg-white hover:text-[#102d52] transition font-semibold"
          >
            Call Agent
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

