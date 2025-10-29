import { useState } from "react";
import { motion } from "framer-motion";

export default function InspectionBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your WhatsApp number (no + sign, no spaces)
    const phoneNumber = "2340000000000";

    const whatsappMessage = `Hello, I would like to book an inspection.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="inspection" className="py-20 px-6 bg-[#f8f8f8] text-[#102d52]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Book an Inspection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-3 text-gray-600 max-w-xl mx-auto"
        >
          Send us a message and our representative will contact you to schedule
          your inspection.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-10 bg-white shadow-lg rounded-xl p-8 grid gap-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#d4af37] focus:border-[#d4af37] outline-none"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#d4af37] focus:border-[#d4af37] outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            placeholder="Enter your message"
            className="border border-gray-300 rounded-lg px-4 py-3 h-32 focus:ring-[#d4af37] focus:border-[#d4af37] outline-none resize-none"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#d4af37] text-[#102d52] font-semibold py-3 rounded-lg hover:bg-[#caa12f] transition"
          >
            Send on WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
