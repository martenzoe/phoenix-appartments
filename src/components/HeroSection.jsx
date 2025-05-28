import { useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import phoneIcon from "../assets/icons/phone.png";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <section id="start" className="bg-white text-center py-20 px-4 mt-13">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t("hero.title")}</h1>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">{t("hero.subtitle")}</p>

      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-semibold mb-4 transition"
      >
        {t("hero.cta")}
      </button>

      <p className="text-sm text-gray-600 mt-2">
        <span className="text-black font-bold">⭐ 4.9 / 5 {t("hero.stars")}</span> – {t("hero.avgRating")}
      </p>

      {showModal &&
        createPortal(
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 text-center relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
              >
                &times;
              </button>

              <img src={phoneIcon} alt="Telefon" className="w-12 h-12 mx-auto mb-4" />

              <p className="text-blue-600 text-sm font-medium mb-2">{t("hero.modalTitle")}</p>
              <p className="text-lg font-bold">
                +49 155 60434704<br />
                {t("hero.modalEmail")}<br />
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
