import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = ({ onAboutClick, onProjectClick, onSkillClick }) => {
  const parentRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const parentElement = parentRef.current;

    const handleScroll = () => {
      if (parentElement.scrollTop > 5) {
        console.log("works");
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (parentElement) {
      parentElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (parentElement) {
        parentElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "minimized" : ""}`}>
      <div className="navbar-content">
        <div className="name">SID.</div>
        <div className="links">
          <div onClick={onProjectClick}>PROJECTS</div>
          <div onClick={onSkillClick}>SKILLS</div>
          <div onClick={onAboutClick}>ABOUT</div>
          <div>CONTACT</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
