import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Wohnung from "./components/Wohnung";
import HeroSection from "./components/HeroSection";
import InfoBoxes from "./components/InfoBoxes";
import UeberUns from "./components/UeberUns";
import Kontakt from "./components/Kontakt";
import Faq from "./components/Faq";
import Datenschutz from "./components/Datenschutz";
import Impressum from "./components/Impressum";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import InstagramPromo from "./components/InstagramPromo";
import WhatsAppButton from "./components/WhatsAppButton";

function ScrollToSectionOnLoad() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Warten, bis DOM bereit ist
      }
    }
  }, [location]);

  return null;
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ScrollToSectionOnLoad />
            <HeroSection />
            <Wohnung />
            <UeberUns />
            <InfoBoxes />
            <Faq />
            <InstagramPromo />
            <Kontakt />
          </>
        }
      />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <div className="font-sans pt-20 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
        <CookieBanner />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
