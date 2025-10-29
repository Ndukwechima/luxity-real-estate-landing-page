import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Mr. & Mrs. Obinna",
    role: "Family Residents",
    photo: "https://i.pravatar.cc/120?img=12",
    quote:
      "The environment is calm, security is reliable, and our kids play freely. Moving here was the best decision for our family.",
  },
  {
    name: "Blessing A.",
    role: "Tech Professional",
    photo: "https://i.pravatar.cc/120?img=36",
    quote:
      "I work remotely and needed uninterrupted power. This place has been a life-saver for productivity and peace of mind.",
  },
  {
    name: "David E.",
    role: "Real Estate Investor",
    photo: "https://i.pravatar.cc/120?img=28",
    quote:
      "The rental value here is strong. My unit has been consistently occupied since I acquired it. Highly profitable investment.",
  },
  {
    name: "Chinwe M.",
    role: "Young Couple",
    photo: "https://i.pravatar.cc/120?img=44",
    quote:
      "Stylish finishing and responsive management. We felt at home the moment we moved in.",
  },
  {
    name: "Ngozi R.",
    role: "Small Business Owner",
    photo: "https://i.pravatar.cc/120?img=52",
    quote:
      "Great location — close to the market and main roads. Perfect balance of convenience and peaceful living.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);

  const cardWidth = 360; // px approx; Tailwind min-w used in markup to match

  // Autoplay every 5s
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(autoplayRef.current);
  }, []);

  // Pause on hover
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleEnter = () => clearInterval(autoplayRef.current);
    const handleLeave = () => {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-20 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#102d52]">
            What Our Residents Say
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Real stories from families and professionals who now call this place
            home.
          </p>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          {/* Left / Right Controls */}
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md text-[#102d52] hover:scale-105 transition z-20"
          >
            <FiChevronLeft size={20} />
          </button>

          <button
            aria-label="Next testimonial"
            onClick={next}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md text-[#102d52] hover:scale-105 transition z-20"
          >
            <FiChevronRight size={20} />
          </button>

          {/* Visible sliding area */}
          <div
            ref={containerRef}
            className="overflow-hidden"
            aria-roledescription="carousel"
          >
            <motion.div
              animate={{ x: -index * (cardWidth + 24) }} // cardWidth + gap (approx)
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex gap-6"
              style={{ padding: "0 3rem" }} // side padding to center cards nicely
            >
              {testimonials.map((t, i) => (
                <AnimatePresence key={t.name}>
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="min-w-[320px] md:min-w-[360px] bg-white rounded-2xl p-6 shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={t.photo}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-[#d4af37]/40"
                      />
                      <div>
                        <h4 className="font-semibold text-[#102d52]">
                          {t.name}
                        </h4>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="text-gray-700 mt-4 leading-relaxed"
                    >
                      “{t.quote}”
                    </motion.p>

                    <div className="mt-4 flex items-center gap-2">
                      {/* simple rating visuals */}
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <svg
                            key={idx}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={idx < 5 ? "#F6C649" : "none"}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 .587l3.668 7.431L23.5 9.75l-5.5 5.36L19.335 24 12 20.201 4.665 24 6 15.11 0.5 9.75l7.832-1.732L12 .587z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">
                        Verified resident
                      </span>
                    </div>
                  </motion.article>
                </AnimatePresence>
              ))}
            </motion.div>
          </div>

          {/* Mobile small pager dots */}
          <div className="flex items-center justify-center gap-2 mt-6 md:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === index ? "bg-[#102d52]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Desktop pager below */}
          <div className="hidden md:flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  i === index
                    ? "bg-[#d4af37] text-[#102d52]"
                    : "bg-white text-gray-600 shadow-sm"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
