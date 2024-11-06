import React, { useEffect, useState } from "react";
import sid from "../assets/sid.jpg";
import puff from "../assets/puff.svg"; // Import the SVG directly
import "./Portfolio.css";

const Portfolio = () => {
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPhoto(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-container">
      <div>
        {showPhoto ? (
          <div className="fullscreen-text">
            <p className="fullstack">FULL STACK</p>
            <div className="developer">
              <div className="devel">DEVEL</div>
              <div>
                <img src={sid} className="photo" alt="Sid" />
              </div>
              <div>PER</div>
            </div>
          </div>
        ) : (
          // <img src={sid} className="photo" alt="Sid" onClick={handleClick} />
          <img src={puff} className="loader" alt="Puff Loader" />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
