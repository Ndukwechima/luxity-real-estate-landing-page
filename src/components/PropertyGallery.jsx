import { motion } from "framer-motion";
import gal1 from "../assets/images/hero1.png";
import gal2 from "../assets/images/hero2.jpg";
import gal3 from "../assets/images/hero3.png";
import gal4 from "../assets/images/hero1.png";
import gal5 from "../assets/images/hero2.jpg";
import gal6 from "../assets/images/hero3.png";
import gal7 from "../assets/images/hero1.png";
import gal8 from "../assets/images/hero2.jpg";

export default function PropertyGallery() {
  // Replace these with your real image URLs later
  const images = [
   gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8,
  ];

  return (
    <section id="gallery" className="bg-[#dfe2e7] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-semibold tracking-wide text-[#102d52] mb-12"
        >
          Property Gallery
        </motion.h2>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl cursor-pointer group"
            >
              <img
                src={src}
                alt={`Property view ${index}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
