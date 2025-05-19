import businessSuite from "../assets/cards/business-suite.jpg";
import heartOfCity from "../assets/cards/heart-of-city.jpg";
import cityLiving from "../assets/cards/city-living.jpg";
import suiteKüche from "../assets/cards/suite-mit-küche.jpg";


export default function Wohnungen() {
  const cards = [
    {
      title: "Top Location Business Suite mit Küche am Phönixsee",
      desc: "ca. 45 QM – 1,5 Zimmer – 1 Bad – Balkon\nBis zu 4 Personen – mit Waschmaschine",
      image: suiteKüche,
      link: "https://www.booking.com/hotel/de/gemutliche-wohnung-am-phonixsee.de.html?aid=304142&label=gen173nr-1BCAsoO0IfZ2VtdXRsaWNoZS13b2hudW5nLWFtLXBob25peHNlZUgzWARoO4gBApgBB7gBGMgBDdgBAegBAYgCAagCBLgCmseRvgbAAgHSAiQxZTk5M2JiMi0wOTk2LTRiOWItOTZjNi00YTlhYmIyMWEzYTPYAgXgAgE-Share-J5o4FJW%401740923806",
    },
    {
      title: "Top Location small Business Suite am Phönixsee",
      desc: "ca. 35 qm – 1 Zimmer – 1 Bad –\nBis zu 4 Personen – mit Waschmaschine",
      image: businessSuite,
      link: "https://www.booking.com/hotel/de/gemutliche-wohnung-am-phonixsee.de.html?aid=304142&label=gen173nr-1BCAsoO0IfZ2VtdXRsaWNoZS13b2hudW5nLWFtLXBob25peHNlZUgzWARoO4gBApgBB7gBGMgBDdgBAegBAYgCAagCBLgCmseRvgbAAgHSAiQxZTk5M2JiMi0wOTk2LTRiOWItOTZjNi00YTlhYmIyMWEzYTPYAgXgAgE-Share-J5o4FJW%401740923806",
    },
    {
      title: "Heart of City Suite",
      desc: "ca. 80 QM – 3 Zimmer – Küche – 1 Bad –\nBis zu 8 Personen – mit eigener Waschmaschine",
      image: heartOfCity,
      link: "https://www.booking.com/hotel/de/citywohnung-dortmund-toplage.de.html?aid=304142&label=gen173nr-1BCAsoO0IcY2l0eXdvaG51bmctZG9ydG11bmQtdG9wbGFnZUgzWARoO4gBApgBB7gBGMgBDdgBAegBAYgCAagCBLgCzseRvgbAAgHSAiQyOGYyNTUxYy0wNTM3LTQ2YzgtODM2MS0yMmI2NmNkYmJmMzfYAgXgAgE-Share-mb2QSr%401740923856#tab-main",
    },
    {
      title: "City Living Dortmund – Top Lage in der Innenstadt!",
      desc: "ca. 25 QM – 1,5 Zimmer – Küche – 1 Bad –\nBis zu 3 Personen",
      image: cityLiving,
      link: "https://www.booking.com/hotel/de/cityliving-dortmund-top-lage.de.html?aid=304142&label=gen173nr-1BCAsoO0IcY2l0eWxpdmluZy1kb3J0bXVuZC10b3AtbGFnZUgzWARoO4gBApgBB7gBGMgBDdgBAegBAYgCAagCBLgCtceRvgbAAgHSAiQ5ODVlZDAxNS1lMTQ5LTQyZjItYmY5ZS1lMDZkMjcxNGFmYWPYAgXgAgE-Share-BDXjD7%401740923832",
    },
  ];

  return (
    <section id="wohnungen" className="relative bg-white">
      {/* Dunkelblauer Hintergrund unten */}
      <div className="absolute inset-x-0 bottom-0 h-[400px] bg-[#19233C] -z-10 clip-half-arc"></div>

      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600 whitespace-pre-line mb-4">{card.desc}</p>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm font-medium"
            >
              Jetzt buchen!
            </a>
          </div>
        ))}
      </div>

      {/* Infotextblock */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-white text-center text-sm">
        <h3 className="text-xl font-semibold mb-4">Sie möchten flexibel buchen?</h3>
        <p>
          Jetzt telefonisch unter <strong>+49 155 60434704</strong> oder per Mail unter<br />
          <a href="mailto:wohnenaufzeitdortmund@gmail.com" className="underline">
            wohnenaufzeitdortmund@gmail.com
          </a>{" "}
          anfragen!
        </p>
        <p className="mt-4">
          <strong>B2B-Rechnungsausstellung möglich!</strong> Bitte treten Sie dazu einfach vor
          Buchung mit uns in Kontakt!
        </p>
      </div>
    </section>
  );
}
