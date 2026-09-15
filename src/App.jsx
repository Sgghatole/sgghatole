import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contacts from "./pages/Contacts/Contacts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;