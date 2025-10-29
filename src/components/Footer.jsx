import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo / Name */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Heptino Real Estate
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner in securing affordable, high-value properties
            in prime locations.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg text-white mb-4 font-semibold">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" />
              <a href="tel:+2348123456789">+234 812 345 6789</a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400" />
              <a
                href="https://wa.me/2348123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-400" />
              <a href="mailto:info@heptinorealestate.com">
                info@heptinorealestate.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <span>
                Plot 24, Lekki-Epe Expressway,
                <br />
                Ajah, Lagos, Nigeria.
              </span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg text-white mb-4 font-semibold">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Heptino Real Estate. All Rights Reserved.
      </div>
    </footer>
  );
}
