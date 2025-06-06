import { useTranslation } from "react-i18next";
import businessSuite from "../assets/cards/business-suite.jpg";
import heartOfCity from "../assets/cards/heart-of-city.jpg";
import cityLiving from "../assets/cards/city-living.jpg";
import suiteKüche from "../assets/cards/suite-mit-küche.jpg";

export default function Wohnungen() {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("wohnungen.card1.title"),
      desc: t("wohnungen.card1.desc"),
      image: suiteKüche,
      link: "https://www.booking.com/hotel/de/gemutliche-wohnung-am-phonixsee.de.html?aid=304142&label=gen173nr-1BCAsoO0IfZ2VtdXRsaWNoZS13b2hudW5nLWFtLXBob25peHNlZUgzWARoO4gBApgBB7gBGMgBDdgBAegBAYgCAagCBLgCmseRvgbAAgHSAiQxZTk5M2JiMi0wOTk2LTRiOWItOTZjNi00YTlhYmIyMWEzYTPYAgXgAgE-Share-J5o4FJW%401740923806",
    },
    {
      title: t("wohnungen.card2.title"),
      desc: t("wohnungen.card2.desc"),
      image: businessSuite,
      link: "https://www.booking.com/hotel/de/gemutliche-wohnung-am-phonixsee.de.html?aid=304142&label=gen173nr-1BCAsoO0IfZ2VtdXRsaWNoZS13b2hudW5nLWFtLXBob25peHNlZUgzWARoO4gBApgBB7gBGMgBDdgBAegBAYgCAagCBLgCmseRvgbAAgHSAiQxZTk5M2JiMi0wOTk2LTRiOWItOTZjNi00YTlhYmIyMWEzYTPYAgXgAgE-Share-J5o4FJW%401740923806",
    },
    {
      title: t("wohnungen.card3.title"),
      desc: t("wohnungen.card3.desc"),
      image: heartOfCity,
      link: "https://www.booking.com/hotel/de/citywohnung-dortmund-toplage.de.html?aid=304142&label=gen173nr-1BCAsoO0IcY2l0eXdvaG51bmctZG9ydG11bmQtdG9wbGFnZUgzWARoO4gBApgBB7gBGMgBDdgBAegBAYgCAagCBLgCzseRvgbAAgHSAiQyOGYyNTUxYy0wNTM3LTQ2YzgtODM2MS0yMmI2NmNkYmJmMzfYAgXgAgE-Share-mb2QSr%401740923856#tab-main",
    },
    {
      title: t("wohnungen.card4.title"),
      desc: t("wohnungen.card4.desc"),
      image: cityLiving,
      link: "https://www.booking.com/hotel/de/cityliving-dortmund-top-lage.de.html?aid=304142&label=gen173nr-1BCAsoO0IcY2l0eWxpdmluZy1kb3J0bXVuZC10b3AtbGFnZUgzWARoO4gBApgBB7gBGMgBDdgBAegBAYgCAagCBLgCtceRvgbAAgHSAiQ5ODVlZDAxNS1lMTQ5LTQyZjItYmY5ZS1lMDZkMjcxNGFmYWPYAgXgAgE-Share-BDXjD7%401740923832",
    },
  ];

  return (
    <section id="wohnungen" className="bg-[#19233C] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, i) => (
          <div key={i} className="bg-white text-gray-800 rounded-lg shadow-md p-4 text-center">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-sm whitespace-pre-line mb-4">{card.desc}</p>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm font-medium"
            >
              {t("wohnungen.button")}
            </a>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">{t("wohnungen.flexible.title")}</h3>
        <p>
          {t("wohnungen.flexible.text1")}{" "}
          <strong>+49 155 60434704</strong> {t("wohnungen.flexible.text2")}<br />
          <a href="mailto:wohnenaufzeitdortmund@gmail.com" className="underline text-white">
            wohnenaufzeitdortmund@gmail.com
          </a>
        </p>
        <p className="mt-4">
          <strong>{t("wohnungen.flexible.text3")}</strong> {t("wohnungen.flexible.text4")}
        </p>
      </div>
    </section>
  );
}
