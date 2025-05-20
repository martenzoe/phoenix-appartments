import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrNavigate = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleScrollOrNavigate("start")} className="cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-12 sm:h-28 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm text-gray-700 tracking-wide">
          <button onClick={() => handleScrollOrNavigate("start")} className="hover:text-black transition">Start</button>
          <button onClick={() => handleScrollOrNavigate("wohnungen")} className="hover:text-black transition">Wohnungen</button>
          <button onClick={() => handleScrollOrNavigate("ueber-uns")} className="hover:text-black transition">Über uns</button>
          <button onClick={() => handleScrollOrNavigate("kontakt")} className="hover:text-black transition">Kontakt</button>
          <button onClick={() => navigate("/impressum")} className="hover:text-black transition">Impressum</button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 flex flex-col space-y-3 text-sm text-gray-700">
            <button onClick={() => handleScrollOrNavigate("start")} className="hover:text-black">Start</button>
            <button onClick={() => handleScrollOrNavigate("wohnungen")} className="hover:text-black">Wohnungen</button>
            <button onClick={() => handleScrollOrNavigate("ueber-uns")} className="hover:text-black">Über uns</button>
            <button onClick={() => handleScrollOrNavigate("kontakt")} className="hover:text-black">Kontakt</button>
            <button onClick={() => navigate("/impressum")} className="hover:text-black">Impressum</button>
          </div>
        </div>
      )}
    </header>
  );
}
