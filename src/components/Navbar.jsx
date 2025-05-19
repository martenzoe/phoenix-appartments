import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo links */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto object-contain sm:h-28"
          />
        </Link>

        {/* Navigation rechts */}
        <nav className="hidden md:flex space-x-8 text-sm text-gray-700 tracking-wide">
          <a href="#wohnungen" className="hover:text-black transition">Wohnungen</a>
          <a href="#ueber-uns" className="hover:text-black transition">Über uns</a>
          <a href="#kontakt" className="hover:text-black transition">Kontakt</a>
          <Link to="/impressum" className="hover:text-black transition">Impressum</Link>
        </nav>
      </div>
    </header>
  );
}
