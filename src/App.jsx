import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="font-sans pt-20 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Wohnung />
                  <UeberUns />
                  <InfoBoxes />
                  <Faq />
                  <Kontakt />
                </>
              }
            />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
