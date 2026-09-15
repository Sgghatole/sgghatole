import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Work.css";

function Work() {
  const categories = [
    {
      name: "Product",
      items: [
        { title: "Product Piece 1" },
        { title: "Product Piece 2" },
      ],
    },
    {
      name: "Hard-surface",
      items: [{ title: "Hard-surface Piece 1" }],
    },
    {
      name: "Environment",
      items: [{ title: "Environment Piece 1" }],
    },
    {
      name: "Character",
      items: [{ title: "Character Piece 1" }],
    },
    {
      name: "Cinematic",
      items: [{ title: "Cinematic Piece 1" }],
    },
    {
      name: "Stylized",
      items: [{ title: "Stylized Piece 1" }],
    },
    {
      name: "Game Design",
      items: [{ title: "Game Design Piece 1" }],
    },
    {
      name: "2D",
      items: [{ title: "2D Piece 1" }],
    },
  ];

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);

  const currentCategory = categories[categoryIndex];
  const currentMedia = currentCategory.items[mediaIndex];

  const goToPrevCategory = () => {
    setCategoryIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
    setMediaIndex(0);
  };

  const goToNextCategory = () => {
    setCategoryIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
    setMediaIndex(0);
  };

  const goToPrevMedia = () => {
    setMediaIndex((prev) =>
      prev === 0 ? currentCategory.items.length - 1 : prev - 1
    );
  };

  const goToNextMedia = () => {
    setMediaIndex((prev) =>
      prev === currentCategory.items.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="work-page">
      <Navbar />

      <main className="work-wrapper">
       

        <div className="work-outer-frame">

          {/* Corner screws */}
          <span className="frame-screw top-left" />
          <span className="frame-screw top-right" />
          <span className="frame-screw bottom-left" />
          <span className="frame-screw bottom-right" />

          {/* Top row: category-switch arrows (outside) + fixed-width indent */}
          <div className="work-category-row">
            <button
              className="work-arrow-btn"
              onClick={goToPrevCategory}
              aria-label="Previous category"
            >
              &lt;
            </button>

            <div className="work-indent work-category-bar">
              <span className="work-category-name">{currentCategory.name}</span>
            </div>

            <button
              className="work-arrow-btn"
              onClick={goToNextCategory}
              aria-label="Next category"
            >
              &gt;
            </button>
          </div>

          {/* Main screen frame - 16:9 */}
          <div className="work-screen-frame">
            <span className="screen-status-dot" />
            <div className="work-screen-placeholder">
              <div className="screen-glare" />
              {/* Ready for image/video per item later */}
            </div>
            <div className="speaker-grille">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Bottom indent: media details + media-switch arrows */}
          <div className="work-indent work-details-bar">
            <span className="work-details-text">
              {currentCategory.name} - {currentMedia.title}
            </span>

            <div className="work-media-arrows">
              <button
                className="work-arrow-btn small"
                onClick={goToPrevMedia}
                aria-label="Previous item"
              >
                &lt;
              </button>
              <button
                className="work-arrow-btn small"
                onClick={goToNextMedia}
                aria-label="Next item"
              >
                &gt;
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Work;