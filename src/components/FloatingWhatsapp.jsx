import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/2340000000000?text=Hello%2C%20I'm%20interested%20in%20your%20property%20listing."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
