import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import hausBild from "../assets/haus-phönixsee.jpg";

export default function UeberUns() {
  const { t } = useTranslation();

  return (
    <section id="ueber-uns" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Bild */}
        <div>
          <img
            src={hausBild}
            alt={t("ueberuns.imageAlt")}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t("ueberuns.heading")}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>{t("ueberuns.point1")}</li>
            <li>{t("ueberuns.point2")}</li>
            <li>{t("ueberuns.point3")}</li>
          </ul>

          {/* Button */}
          <ScrollLink
            to="kontakt"
            smooth={true}
            duration={500}
            offset={-80}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition cursor-pointer"
          >
            {t("ueberuns.button")}
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
