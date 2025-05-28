import { useTranslation } from "react-i18next";

export default function Kontakt() {
  const { t } = useTranslation();

  return (
    <section id="kontakt" className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Kontakttext */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t("contact.title")}</h2>
          <p className="text-gray-700 mb-4">{t("contact.description")}</p>
          <p className="text-gray-800 font-semibold mb-2">📞 +49 155 60434704</p>
          <p className="text-blue-700 underline mb-6">✉️ wohnenaufzeitdortmund@gmail.com</p>
          <p className="text-gray-600 text-sm">{t("contact.note")}</p>
        </div>

        {/* Eingebettete Karte */}
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1LeHb9kLNP042UwIBgbSACA7rDjKHn-s&ehbc=2E312F&noprof=1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
