import topLageImg from "../assets/top-lage.jpg";
import businessFreizeitImg from "../assets/business-freizeit.jpg";
import serviceImg from "../assets/persönlicher-service.jpg";

export default function InfoBoxes() {
  const boxes = [
    {
      title: "Top Lage & Komfort",
      text: "Unsere exklusiven Wohnungen befinden sich in erstklassigen Lagen und bieten eine hochwertige Ausstattung für maximalen Komfort.",
      image: topLageImg,
    },
    {
      title: "Business & Freizeit kombinieren",
      text: "Ob für Projektarbeit, Langzeitaufenthalt oder Erholung – bei uns finden Sie die perfekte Balance zwischen Arbeiten und Wohlfühlen.",
      image: businessFreizeitImg,
    },
    {
      title: "Persönlicher Service",
      text: "Wir sind jederzeit für Sie erreichbar und kümmern uns um einen reibungslosen Ablauf – persönlich, unkompliziert und zuverlässig.",
      image: serviceImg,
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {boxes.map((box, i) => (
          <div key={i} className="text-center">
            <img
              src={box.image}
              alt={box.title}
              className="w-full h-48 object-cover rounded-lg shadow mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">{box.title}</h3>
            <p className="text-gray-700 text-sm">{box.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
