// File: src/components/FloatingContactButtons.tsx

import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingContactButtons: React.FC = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919369504698"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          fixed bottom-28 right-6
          bg-green-600 hover:bg-green-700
          text-white
          p-4
          rounded-full shadow-lg
          flex items-center justify-center
          z-50
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-green-400
        "
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+919369504698"
        aria-label="Call Phone Number"
        className="
          fixed bottom-12 right-6
          bg-purple-600 hover:bg-purple-700
          text-white
          p-4
          rounded-full shadow-lg
          flex items-center justify-center
          z-50
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-purple-400
        "
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
};

export default FloatingContactButtons;
