// src/components/WhatsAppButton.jsx

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "4915560434704"; // ohne + und Leerzeichen

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
      title="Mit WhatsApp schreiben"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}
