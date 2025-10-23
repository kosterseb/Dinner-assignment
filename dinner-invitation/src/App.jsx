import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Price from "./pages/Price";
import Seating from "./pages/Seating";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f9f8f4] text-[#2b2b2b]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pris" element={<Price />} />
            <Route path="/bordplan" element={<Seating />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
