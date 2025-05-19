import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wohnung from "./components/Wohnung";

function App() {
  return (
    <Router>
      <div className="font-sans pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Wohnung />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
