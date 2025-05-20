import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo links */}
        <ScrollLink to="start" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-12 sm:h-28 w-auto object-contain"
          />
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm text-gray-700 tracking-wide">
          <ScrollLink to="wohnungen" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-black transition">Wohnungen</ScrollLink>
          <ScrollLink to="ueber-uns" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-black transition">Über uns</ScrollLink>
          <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-black transition">Kontakt</ScrollLink>
          <RouterLink to="/impressum" className="hover:text-black transition">Impressum</RouterLink>
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
            <ScrollLink to="wohnungen" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-black" onClick={closeMenu}>Wohnungen</ScrollLink>
            <ScrollLink to="ueber-uns" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-black" onClick={closeMenu}>Über uns</ScrollLink>
            <ScrollLink to="kontakt" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-black" onClick={closeMenu}>Kontakt</ScrollLink>
            <RouterLink to="/impressum" className="hover:text-black" onClick={closeMenu}>Impressum</RouterLink>
          </div>
        </div>
      )}
    </header>
  );
}
