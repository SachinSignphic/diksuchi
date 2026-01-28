import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurWorks from "./pages/OurWorks";
import Publications from "./pages/Publications";
import ScrollToTop from "./ScrollToTop";
import { CardContent } from "./components";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/works" element={<OurWorks />}></Route>
        <Route path="/publications" element={<Publications />}></Route>
        <Route path="/gowtham-residency" element={<CardContent />}></Route>
      </Routes>
    </>
  );
}

export default App;
