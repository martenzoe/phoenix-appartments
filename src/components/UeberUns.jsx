import hausBild from "../assets/haus-phönixsee.jpg";

export default function UeberUns() {
  return (
    <section id="ueber-uns" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Bild */}
        <div>
          <img
            src={hausBild}
            alt="Haus am Phönixsee"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ihr Komfort ist unsere Priorität</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Parkplätze vorhanden (teilweise gegen Aufpreis)</li>
            <li>Top Service – wir sind immer erreichbar</li>
            <li>Saubere und moderne Einrichtung</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
