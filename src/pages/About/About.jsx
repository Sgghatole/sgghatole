import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";

function About() {
 const techIcons = [
  { src: "/Images/Icon01.webp", alt: "Icon 1" },
  { src: "/Images/Icon02.webp", alt: "Icon 2" },
  { src: "/Images/Icon03.webp", alt: "Icon 3" },
  { src: "/Images/Icon04.webp", alt: "Icon 4" },
  { src: "/Images/Icon05.webp", alt: "Icon 5" },
  { src: "/Images/Icon06.webp", alt: "Icon 6" },
  { src: "/Images/Icon07.webp", alt: "Icon 7" },
  { src: "/Images/Icon08.webp", alt: "Icon 8" },
];

  return (
    <div className="about-page">
      <Navbar />

      <main className="about-wrapper">
        {/* Main Extruded Neumorphic Outer Frame */}
        <div className="about-outer-frame">
          
          {/* Top Section: Media Circle & Text Box */}
          <div className="about-top-grid">
            
            {/* Circular Video Frame (Extruded) */}
            <div className="about-avatar-circle">
              <video
                className="avatar-video-placeholder"
                src="/Videos/AboutVideo.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Text Card Component */}
            <div className="about-text-card">
              <h1 className="about-title">About ME-</h1>
              <div className="about-title-line"></div>
              <p className="about-text-content">
                Textual details will be added here.
              </p>
            </div>

          </div>

          {/* Bottom Section: Inset Capsule with Infinite Marquee */}
          <div className="tech-capsule-inset">
            <div className="marquee-track">
              {/* Four copies of the icon set for a seamless infinite loop */}
              {[...techIcons, ...techIcons, ...techIcons, ...techIcons].map((icon, index) => (
                <div key={index} className="tech-circle-node">
                  <img src={icon.src} alt={icon.alt} className="tech-icon-img" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;