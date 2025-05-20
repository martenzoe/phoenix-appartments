import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#19233C] text-white py-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>© wohnenaufzeitdortmund.de</p>
        <div className="flex gap-6">
          <Link to="/impressum" className="hover:underline">
            Impressum
          </Link>
          <Link to="/datenschutz" className="hover:underline">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
