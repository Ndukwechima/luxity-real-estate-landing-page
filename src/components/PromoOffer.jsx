import { motion } from "framer-motion";
import { FaGift, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function PromoOffer() {
  return (
    <section
      id="promo"
      className="relative bg-[#102d52] text-white py-20 px-6 overflow-hidden"
    >
      {/* Subtle Gold Light Glow Background */}
      <div className="absolute inset-0 bg-linear-to-r from-[#d4af3733] to-transparent opacity-20 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-[#d4af37]"
        >
          Limited-Time Promo Offer
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-3 text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Secure your new home with our flexible **Pay Small Small** payment
          plan. Offer valid for a short period — take advantage now before it
          ends.
        </motion.p>

        {/* PROMO BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 bg-[#0c1e33] border border-[#d4af37] rounded-2xl p-10 shadow-[0_0_25px_-5px_rgba(212,175,55,0.4)]"
        >
          {/* Offer Headline */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#d4af37]">
            Pay Small Small Plan Available
          </h3>

          <p className="mt-2 text-gray-300 text-base md:text-lg">
            Spread payment with flexible installment schedules.
          </p>

          {/* Bonuses / Perks */}
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#d4af37] text-xl" />
              <p>Flexible installment payments</p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#d4af37] text-xl" />
              <p>No hidden charges</p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#d4af37] text-xl" />
              <p>Move-in ready & fully finished</p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#d4af37] text-xl" />
              <p>Secure gated estate environment</p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#d4af37] text-xl" />
              <p>High rental value for investors</p>
            </div>
            <div className="flex items-start gap-3">
              <FaGift className="text-[#d4af37] text-xl" />
              <p>
                <strong>Bonus:</strong> Free interior consultation
              </p>
            </div>
          </div>

          {/* Urgency Line */}
          <p className="mt-8 text-[#d4af37] text-lg font-semibold">
            Offer Ends: <span className="underline">31st December</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2340000000000?text=Hello!%20I%27m%20interested%20in%20the%20Promo%20Offer.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#25D366] text-white rounded font-semibold flex items-center gap-2 hover:bg-[#1eb15a] transition"
            >
              <FaWhatsapp /> Claim Offer on WhatsApp
            </a>

            <a
              href="#inspection"
              className="px-8 py-3 border border-[#d4af37] text-[#d4af37] rounded font-semibold hover:bg-[#d4af37] hover:text-[#102d52] transition"
            >
              Book Inspection
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
