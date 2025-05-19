import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wohnung from "./components/Wohnung";
import HeroSection from "./components/HeroSection";

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
              
            </>
            } />
            
        </Routes>
      </div>
    </Router>
  );
}



export default App;
