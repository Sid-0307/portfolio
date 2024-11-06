import React, { useEffect, useState } from "react";
import sid from "../assets/sid.jpg";
import puff from "../assets/puff.svg"; // Import the SVG directly
import "./Portfolio.css";

const Portfolio = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPhoto(true), 2500);
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-container">
      {showPhoto ? (
        <div className={`content ${scrolled ? "scrolled" : ""}`}>
          {!scrolled ? (
            <>
              <img src={sid} className="photo" alt="Sid" />
              <h1 className="greeting gradient">SIDDHARTH</h1>
            </>
          ) : (
            <>
              <div className="fullscreen-text">
                <p className="fullstack gradient">FULL STACK</p>
                <div className="developer">
                  <div className="devel gradient">DEVEL</div>
                  <div>
                    <img src={sid} className="photo-small" alt="Sid" />
                  </div>
                  <div className="gradient">PER</div>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <img src={puff} className="loader" alt="Puff Loader" />
      )}
    </div>
  );
};

export default Portfolio;
