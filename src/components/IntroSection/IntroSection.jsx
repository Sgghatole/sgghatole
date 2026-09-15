import React from "react";
import "../../App.css";

function IntroSection() {
  return (
    <section className="intro-section">
      {/* Main Container Card */}
      <div className="intro-card-container">
        
        {/* Left Text Box */}
        <div className="intro-text-card">
          <span className="card-tag">3D VISUAL ARTIST</span>
          <h1 className="card-title">
            SHREYAS <br /> GHATOLE
          </h1>
          <p className="card-description">
            I love to create/recreate visuals in 3D. Turning ideas into graphics,
            animations and more.
          </p>
          
          {/* Recessed Slogan Slot */}
          <div className="card-footer-indent">
            <span className="card-footer-text">TURNING IDEAS TO REALITY</span>
          </div>
        </div>

        {/* Right Circular Avatar Frame */}
        <div className="avatar-frame-outer">
          <div className="avatar-frame-inner">
            {/* 3D Avatar Render Video */}
            <video
              className="avatar-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/Videos/AvatarVid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}

export default IntroSection;