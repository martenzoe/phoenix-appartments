import wohnungImg from '../assets/wohnung.jpg'; // falls du ein Bild einfügst

export default function Wohnung() {
  return (
    <section id="wohnung" className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-semibold mb-4">Wohnen auf Zeit – modern & möbliert</h2>
        <p className="text-gray-700 mb-4">
          Die stilvoll eingerichtete Wohnung bietet Ihnen auf 70 m² ein komfortables Zuhause auf Zeit.
          Ideal für Berufstätige, Projektmitarbeiter oder Langzeitbesucher in Dortmund.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Komplett möbliert</li>
          <li>2 Zimmer + Küche + Bad</li>
          <li>WLAN & TV inklusive</li>
          <li>Waschmaschine & Küche voll ausgestattet</li>
        </ul>
      </div>
      <div>
        <img src={wohnungImg} alt="Wohnung Innenansicht" className="rounded-lg shadow-lg w-full" />
      </div>
    </section>
  );
}
