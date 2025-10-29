import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaHammer,
  FaHome,
  FaTree,
} from "react-icons/fa";

export default function PropertyDetails() {
  return (
    <section id="details" className="bg-[#0b1625] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] leading-tight">
            A Home Designed for Comfort,
            <br />
            Elegance & Everyday Living
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed text-lg">
            Perfectly positioned in a serene and secure environment, this
            property offers the convenience of city life while maintaining a
            peaceful community feel. Whether you're a growing family, a working
            professional, or an investor— this is a home built to elevate your
            lifestyle.
          </p>
        </motion.div>

        {/* Right Details Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#10243d] border border-[#1a3b5e] rounded-2xl p-8 space-y-6 shadow-xl"
        >
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-[#d4af37] text-xl" />
            <p className="leading-relaxed">
              Located in a highly accessible and desirable area, close to
              schools, malls, workplaces, worship centers, and major roads.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <FaUsers className="text-[#d4af37] text-xl" />
            <p className="leading-relaxed">
              Ideal for families, professionals, remote workers, and investors
              seeking long-term rental value.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <FaHammer className="text-[#d4af37] text-xl" />
            <p className="leading-relaxed">
              Built with premium finishing: POP ceilings, high-grade tiles,
              modern lighting, reliable plumbing, and strong structural
              materials.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <FaHome className="text-[#d4af37] text-xl" />
            <p className="leading-relaxed">
              Estate amenities include 24/7 security, clean water supply, ample
              parking space, well-planned drainage, and constant power.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <FaTree className="text-[#d4af37] text-xl" />
            <p className="leading-relaxed">
              Peaceful surroundings, well-landscaped environment, and a
              welcoming neighborhood community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

