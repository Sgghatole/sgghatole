import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Lazy-loaded page components for faster initial load
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Work = lazy(() => import("./pages/Work/Work"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div style={{ minHeight: "100vh", background: "var(--bg)" }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;