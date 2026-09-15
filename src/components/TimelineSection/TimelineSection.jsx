import React, { useState } from "react";
import { timelineData } from "../../data/timelineData";
import "./TimelineSection.css";

function TimelineSection() {
  // Start with index 0 (2021) as default active year
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = timelineData[activeIndex];

  // 1. Knob Rotation Math:
  // Starts at 0deg (12 o'clock / Top) for 2021 and rotates clockwise up to +300deg for 2026
  const maxRotation = 300; 
  const rotationDegrees = (activeIndex / (timelineData.length - 1)) * maxRotation;

  // 2. SVG Arc Progress Math:
  // Circle radius r = 90 -> Circumference ≈ 565.48
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const progressPercent = activeIndex / (timelineData.length - 1);
  const strokeDashoffset = circumference - progressPercent * circumference;

  return (
    <section className="timeline-section">
      {/* Extruded Outer Card Container */}
      <div className="timeline-card-container">
        
        {/* LEFT PANE: Recessed Display Screen + Years + Details */}
        <div className="timeline-left-pane">
          {/* Recessed Media Display Screen */}
          <div className="timeline-screen-outer">
            <div className="timeline-screen-inner">
              <div className="screen-content-placeholder">
                <span>{currentItem.year} MEDIA PREVIEW</span>
              </div>
            </div>
          </div>

          {/* Desktop Range / Years Bar */}
          <div className="timeline-years-bar">
            {timelineData.map((item, index) => (
              <span
                key={item.year}
                className={`timeline-year-label ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.year}
              </span>
            ))}
          </div>

          {/* Details / Text Box */}
          <div className="timeline-text-display">
            <p className="timeline-description">
              <span className="timeline-subheading">{currentItem.subheading}</span> - {currentItem.description}
            </p>
          </div>
        </div>

        {/* RIGHT PANE: Braun Rotary Dial & Orange Progress Arc */}
        <div className="timeline-right-pane">
          <div className="dial-wrapper">
            {/* SVG Orange Progress Ring */}
            <svg className="dial-svg" viewBox="0 0 200 200">
              <circle
                className="dial-track-bg"
                cx="100"
                cy="100"
                r={radius}
              />
              <circle
                className="dial-progress-arc"
                cx="100"
                cy="100"
                r={radius}
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset
                }}
              />
            </svg>

            {/* Tactile Inner Rotary Dial Knob */}
            <div 
              className="rotary-knob-outer"
              style={{ transform: `rotate(${rotationDegrees}deg)` }}
            >
              <div className="rotary-knob-inner">
                {/* Orange Dot positioned at top center (12 o'clock) */}
                <span className="knob-indicator-dot"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TimelineSection;