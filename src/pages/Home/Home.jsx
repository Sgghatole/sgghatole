import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import IntroSection from "../../components/IntroSection/IntroSection";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <IntroSection />
      <TimelineSection />
      <Footer showDisclaimer />
    </div>
  );
}

export default Home;