import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import qrCode from "../assets/frame.svg";

export default function InstagramPromo() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center justify-between gap-10 p-10">
        {/* Textbereich */}
        <div className="md:w-1/2">
          <p className="text-sm text-gray-500 mb-1">{t("instagram.tagline")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#19233C] mb-6">
            {t("instagram.headline")}
          </h2>

          {/* Button */}
          <a
            href="https://www.instagram.com/wohnenaufzeitdortmund"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#19233C] text-white px-6 py-3 rounded hover:bg-gray-800 transition text-base font-semibold mb-4"
          >
            <FaInstagram className="mr-2" /> {t("instagram.button")}
          </a>

          {/* Handle */}
          <div className="flex items-center text-gray-700 text-sm">
            <FaInstagram className="mr-2 text-gray-600" />
            wohnenaufzeitdortmund
          </div>
        </div>

        {/* QR-Code */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={qrCode}
            alt="Instagram QR Code"
            className="w-[280px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
