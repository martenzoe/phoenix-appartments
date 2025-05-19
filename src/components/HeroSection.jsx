import { useState } from "react";
import { createPortal } from "react-dom";
import phoneIcon from "../assets/icons/phone.png"; // optionales Symbol

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-white text-center py-20 px-4 mt-13">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Hier finden Sie Businessunterkünfte auf Zeit in Dortmund!
      </h1>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        Ich biete erstklassige Wohnungen in Top Lage mit hochwertiger Ausstattung exklusiv und komfortabel – ideal für Business-Besucher und Privatgäste!
      </p>

      {/* Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-semibold mb-4 transition"
      >
        Jetzt anrufen!
      </button>

      {/* Bewertung */}
      <p className="text-sm text-gray-600 mt-2">
        <span className="text-black font-bold">⭐ 4.9 / 5 Sterne</span> – ø Bewertung
      </p>

      {/* Modal */}
      {showModal &&
        createPortal(
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 text-center relative">
              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
              >
                &times;
              </button>

              {/* Icon */}
              <img
                src={phoneIcon}
                alt="Telefon"
                className="w-12 h-12 mx-auto mb-4"
              />

              <p className="text-blue-600 text-sm font-medium mb-2">
                Jetzt anrufen oder schreiben!
              </p>
              <p className="text-lg font-bold">
                +49 155 60434704<br />
                oder Email unter<br />
                <a
                  href="mailto:wohnenaufzeitdortmund@gmail.com"
                  className="text-blue-700 underline"
                >
                  wohnenaufzeitdortmund@gmail.com
                </a>
              </p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
