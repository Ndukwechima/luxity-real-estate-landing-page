import { motion } from "framer-motion";
import { FaWhatsapp, FaHome } from "react-icons/fa";

export default function PricingSection({ showPrice = true }) {
  const plans = [
    {
      name: "Standard Apartment",
      price: "₦85 Million",
      features: [
        "3 Spacious Bedrooms",
        "Modern Kitchen & Dining",
        "Private Balcony",
        "24/7 Power & Security",
      ],
    },
    {
      name: "Deluxe Apartment",
      price: "₦110 Million",
      features: [
        "3 Ensuite Bedrooms + BQ",
        "Luxury Finishing",
        "Smart Home Features",
        "2 Private Balconies",
      ],
    },
    {
      name: "Premium Apartment",
      price: "₦150 Million",
      features: [
        "Penthouse View",
        "Exclusive Parking",
        "Private Garden",
        "Fully Automated Systems",
      ],
    },
  ];

  return (
    <section id="pricing" className="text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-[#d4af37]"
        >
          Pricing & Offer Options
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-[#102d52]  max-w-2xl mx-auto leading-relaxed"
        >
          Choose the perfect space that fits your lifestyle. Whether you’re an
          investor or a home seeker, we have flexible options to suit your
          vision.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#10243d] border border-[#1a3b5e] rounded-2xl p-8 flex flex-col items-center hover:shadow-xl hover:border-[#d4af37] transition"
            >
              <h3 className="text-xl font-semibold text-[#d4af37]">
                {plan.name}
              </h3>

              {showPrice ? (
                <p className="text-3xl font-bold mt-4">{plan.price}</p>
              ) : (
                <p className="text-gray-400 mt-4 italic">
                  Price available on request
                </p>
              )}

              <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 w-full">
                {showPrice ? (
                  <a
                    href="#inspection"
                    className="w-full px-6 py-3 bg-[#d4af37] text-[#102d52] rounded font-semibold hover:bg-[#c19e2f] transition flex items-center justify-center gap-2"
                  >
                    <FaHome /> Book Inspection
                  </a>
                ) : (
                  <a
                    href="https://wa.me/2340000000000?text=Hello!%20I%27d%20like%20to%20know%20the%20price%20of%20your%20apartments."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-[#25D366] text-white rounded font-semibold hover:bg-[#1eb15a] transition flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp /> Request Price on WhatsApp
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
