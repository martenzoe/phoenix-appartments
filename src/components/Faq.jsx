import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function Faq() {
  const faqs = [
    {
      question: "Wo kann ich parken?",
      answer:
        "Bei den Apartments am Phönixsee sind kostenlose Parkplätze in der Umgebung. Gegen Aufpreis (+10 €/Tag) kann ein Parkplatz im Hof gebucht werden. In der Innenstadt gibt es kostenpflichtige Parkhäuser und Parkplätze fußläufig an der Unterkunft. Bei Fragen helfen wir gerne weiter!",
    },
    {
      question: "Gibt es Bettwäsche, Handtücher etc.?",
      answer: "Ja – Bettwäsche und Handtücher sind vorhanden.",
    },
    {
      question: "Ist eine Rechnungsstellung möglich?",
      answer:
        "Ja. Bitte rufen Sie uns an oder schreiben Sie an wohnenaufzeitdortmund@gmail.com.",
    },
    {
      question: "Wie lange kann ich bleiben?",
      answer:
        "Wir bieten Aufenthalte von 1 Tag bis 6 Monaten. Eine Verlängerung ist jederzeit möglich.",
    },
    {
      question: "Wann ist Check-In & Check-Out?",
      answer:
        "Check-In ab 15 Uhr, Check-Out bis 12 Uhr. Individuelle Zeiten auf Anfrage möglich – einfach melden.",
    },
    {
      question: "Wie komme ich in die Wohnung?",
      answer:
        "Der Zugang erfolgt per Self-Check-in – entweder Schlüsselbox oder Türcode. Details erhalten Sie 24 Stunden vorher.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">Häufige Fragen (FAQ)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <Disclosure key={i}>
              {({ open }) => (
                <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
                  <Disclosure.Button className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-50 transition">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`w-5 h-5 transform transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
