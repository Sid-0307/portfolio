import React, { useState, useEffect, forwardRef } from "react";
import sid from "../assets/sid.jpg";
import IconCloud from "@components/components/ui/icon-cloud";
import "./About.css";
import citi from "../assets/citi-logo.png";
import spenza from "../assets/spenza-logo.png";
import { frame } from "framer-motion";

const About = forwardRef((props, ref) => {
  const initialSlugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "amazonaws",
    "firebase",
    "docker",
    "git",
    "jira",
    "github",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "c",
    "c++",
    "python",
    "angular",
    "bootstrap",
    "fastapi",
    "flask",
    "nestjs",
    "springboot",
    "tailwindcss",
    "mongodb",
    "mysql",
    "oracle",
    "postman",
  ];

  const [isPulsing, setIsPulsing] = useState(false);
  const [showClickMessage, setShowClickMessage] = useState(false);
  const [messagePosition, setMessagePosition] = useState({ x: 0, y: 0 });

  const handleAestheticClick = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 1000);
  };

  const handleClickWorthy = (e) => {
    alert("See made you click 😉");
    const rect = e.target.getBoundingClientRect();
    setMessagePosition({
      x: rect.right + 30,
      y: rect.top - 30,
    });
    setShowClickMessage(true);
    setTimeout(() => setShowClickMessage(false), 2000);
  };
  const [slugs, setSlugs] = useState(initialSlugs);

  return (
    <div className={`about ${isPulsing ? "pulse-animation" : ""}`}>
      <div className="box box1" ref={ref}>
        <p className="box1-text">
          I'm a web developer from Chennai with a knack for building{" "}
          <span className="aesthetic" onClick={handleAestheticClick}>
            aesthetic
          </span>{" "}
          and{" "}
          <span className="aesthetic" onClick={handleClickWorthy}>
            click-worthy
          </span>{" "}
          websites that combine code with creative design. I love turning ideas
          into visually stunning experiences.
        </p>

        {/* {showClickMessage && (
          <div
            className="click-message"
            style={{
              position: "absolute",
              left: `${messagePosition.x}px`,
              top: `${messagePosition.y}px`,
            }}
          >
            SEE IT MADE YOU CLICK!
          </div>
        )} */}
      </div>

      <div className="box box2 full">
        <img src={sid} alt="sid photo" className="photo" />
        <div className="skills ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>

      <div className="box box3">
        <div className="box3-heading">EXPIERIENCE</div>

        <div className="items">
          <div className="item">
            <div className="companyName">
              <img src={citi} alt="citi" />
            </div>
            <div className="companyContent">
              <div className="duration">6 MONTHS</div>
              <div className="timeline">JUL 2024 - PRESENT</div>
            </div>
          </div>

          <div className="item">
            <div className="companyName">
              <img src={spenza} alt="spenza" />
            </div>
            <div className="companyContent">
              <div className="duration">6 MONTHS</div>
              <div className="timeline">FEB 2024 - JUL 2024</div>
            </div>
          </div>

          <div className="item item-last">
            <div className="companyName">
              <img src={citi} alt="citi" />
            </div>
            <div className="companyContent">
              <div className="duration">2 MONTHS</div>
              <div className="timeline">JUN 2023 - AUG 2023</div>
            </div>
          </div>
        </div>
      </div>

      <div className="box box4">
        <div className="box4-text">
          <a
            href="https://www.linkedin.com/in/siddharth-s-59b600256/"
            target="_blank"
          >
            <img src="https://skillicons.dev/icons?i=linkedin" />
          </a>
        </div>
        <div className="box4-text">
          <a href="https://github.com/Sid-0307" target="_blank">
            <img src="https://skillicons.dev/icons?i=github" />
          </a>
        </div>
        <a
          href="mailto:siddharthshankar03@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="box4-text">
            <img src="https://skillicons.dev/icons?i=gmail" alt="Gmail Icon" />
          </div>
        </a>
      </div>
      <div className="box box5">
        <p className="box5-text">FULL STACK DEVELOPER</p>
      </div>
      <div className="box box6">
        <a
          href="https://drive.google.com/file/d/1ZDWjp8yc8JVjeqGcRPeSABcpggIkr7PA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="box6-text"
        >
          Resume
        </a>
      </div>
    </div>
  );
});

export default About;
