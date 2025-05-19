import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold text-gray-800">
          Wohnen auf Zeit
        </Link>
        <nav className="space-x-6 hidden md:block">
          <a href="#wohnung" className="text-gray-600 hover:text-gray-900">Wohnung</a>
          <a href="#galerie" className="text-gray-600 hover:text-gray-900">Galerie</a>
          <a href="#kontakt" className="text-gray-600 hover:text-gray-900">Kontakt</a>
          <Link to="/impressum" className="text-gray-600 hover:text-gray-900">Impressum</Link>
        </nav>
      </div>
    </header>
  );
}

