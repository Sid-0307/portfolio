import React, { useState, forwardRef } from "react";
import "./Project.css";
import project from "../assets/project.png";

const Project = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [project, project, project, project, project];
  const projectNames = [
    "Real Estate Management",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
  ];

  const projectDesc = [
    "A web application that streamlines property listings and client interactions using user friendly interfaces and database management",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
  ];

  const carouselEffect = (direction) => {
    if (direction === "left" && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else if (direction === "right" && activeIndex < projects.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="project" ref={ref}>
      <div className="project-heading">
        <h1>PROJECTS</h1>
      </div>
      <div className="project-carousel">
        <button
          className="project-carousel-button left"
          onClick={() => carouselEffect("left")}
          disabled={activeIndex === 0}
        >
          &lt;
        </button>
        <div className="project-content">
          {projects.map((img, index) => {
            const offset = index - activeIndex;
            return (
              <div
                key={index}
                className="project-content-item"
                style={{
                  transform: `translateX(calc(${offset * 50}% + ${
                    offset * 10
                  }px)) scale(${1 - Math.abs(offset) * 0.2})`,
                  zIndex: projects.length - Math.abs(offset),
                  filter: `blur(${Math.min(Math.abs(offset) * 2, 5)}px)`,
                }}
              >
                <img src={img} alt={`project ${index + 1}`} />
              </div>
            );
          })}
        </div>
        <button
          className="project-carousel-button right"
          onClick={() => carouselEffect("right")}
          disabled={activeIndex === projects.length - 1}
        >
          &gt;
        </button>
      </div>
      <div className="project-details">
        <div className="project-content-name">
          <h2 className="project-content-name-text">
            {projectNames[activeIndex]}{" "}
          </h2>
          <img src="https://skillicons.dev/icons?i=c,cpp,python&perline=3" />
        </div>
        <div className="project-content-name">
          <h5 className="project-content-desc-text">
            {projectDesc[activeIndex]}
          </h5>
          {/* <img src="https://skillicons.dev/icons?i=github" /> */}
        </div>
        <span>Code</span> <span>Demo</span>
      </div>
    </div>
  );
});

export default Project;
