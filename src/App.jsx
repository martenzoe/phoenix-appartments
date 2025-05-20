import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wohnung from "./components/Wohnung";
import HeroSection from "./components/HeroSection";
import InfoBoxes from "./components/InfoBoxes";
import UeberUns from "./components/UeberUns";
import Kontakt from "./components/Kontakt";

function App() {
  return (
    <Router>
      <div className="font-sans pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Wohnung /> 
              <UeberUns />
              <InfoBoxes />
              <Kontakt />
            </>
            } />
            
        </Routes>
      </div>
    </Router>
  );
}



export default App;
