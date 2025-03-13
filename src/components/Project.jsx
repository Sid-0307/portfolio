import React, { useState, forwardRef } from "react";
import "./Project.css";
import project from "../assets/project.png";
import stock from "../assets/stock.png";
import snake from "../assets/snake.png";
import rems from "../assets/rems.png";
import movie from "../assets/movie.png";
import dockify from "../assets/dockify.png";
import access from "../assets/access.png";
import vizalpay from "../assets/vizalpay.png";
import triviaGame from "../assets/trivia-game.png";
import dqr from "../assets/dqr.png";

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
  const projects = [
    stock,
    dockify,
    dqr,
    movie,
    triviaGame,
    rems,
    vizalpay,
    access,
    snake,
  ];
  const projectNames = [
    "Stock Portfolio Management",
    "Dockify",
    "Digital QR",
    "Movies4U",
    "Trivia Game",
    "Real Estate Management",
    "VizalPay",
    "Access Management System",
    "Evil Snake",
  ];

  const projectDesc = [
    "A dynamic stock management app where users can buy, sell, and track stocks effortlessly. It offers real-time stock value updates, detailed transaction records, and a discovery section to explore new opportunities — all wrapped in an intuitive, user-friendly design.",
    "Dockify is an AI-powered documentation tool that generates markdown files from a repository URL or zip file. It streamlines the process of creating technical documentation, ensuring clear, organized, and developer-friendly outputs for any project.",
    "A dynamic QR code generator that allows users to upload images and embed location tags. The tool creates scannable QR codes for quick access, making it ideal for sharing location-based content.",
    "A movie browsing platform where users can explore films or search them by genre or text. It offers a smooth interface for discovering movie details and allows easy navigation through a wide variety of films.",
    "A multiplayer trivia game where players can create or join rooms to compete in real-time. The game features dynamic question sets, real-time score updates, and player tracking, ensuring a seamless and interactive experience.",
    "A web-based platform for listing, buying, and selling properties. Users can explore detailed property listings and manage their own, offering a simple and efficient way to navigate the real estate market.",
    "A payment app prototype designed with dummy cash to simulate digital transactions. Users can send and receive funds within the app and view detailed transaction histories of the transactions.",
    "An access management system designed for user authentication and role-based access control. It enables secure logins, efficient permission management in web applications.",
    "A wicked twist on the classic Snake game where you control the apple instead of the snake. Dodge the relentless snake as it hunts you down, challenging your reflexes and strategy in a fun, fast-paced survival game.",
  ];

  const skillsImage = [
    "https://skillicons.dev/icons?i=javascript,css,react,java,spring,mysql",
    "https://skillicons.dev/icons?i=html,css,javascript,python,fastapi,ai",
    "https://skillicons.dev/icons?i=figma,java,androidstudio,gradle,firebase",
    "https://skillicons.dev/icons?i=react,css,javascript,nodejs,express,mongodb",

    "https://skillicons.dev/icons?i=flutter,dart,androidstudio,gradle,firebase",

    "https://skillicons.dev/icons?i=html,css,javascript,java,jquery,mysql",
    "https://skillicons.dev/icons?i=figma,java,androidstudio,gradle,sqlite",
    "https://skillicons.dev/icons?i=html,css,javascript,nodejs,mongodb",
    "https://skillicons.dev/icons?i=java,replit,bash",
  ];

  const links = [
    "https://github.com/Sid-0307/Stock-Portfolio-Handler",
    "https://github.com/Sid-0307/Dockify",
    "https://github.com/Sid-0307/DigitalQR",
    "https://github.com/Sid-0307/MovieBrowser",
    "https://github.com/Sid-0307/TriviaApp",
    "https://github.com/Sid-0307/RealEstate-Management-System",
    "https://github.com/Sid-0307/VizalPay",
    "https://github.com/Sid-0307/Access-Management-System",
    "https://github.com/Sid-0307/EvilSnake",
  ];

  const carouselEffect = (direction) => {
    const projectElement = document.querySelector(".project");
    projectElement.classList.remove("ripple-grid");
    void projectElement.offsetWidth;
    projectElement.classList.add("ripple-grid");

    setTimeout(() => {
      projectElement.classList.remove("ripple-grid");
    }, 500);
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
                <img
                  src={img}
                  alt={`project ${index + 1}`}
                  onClick={() => {
                    window.open(links[index], "_blank");
                  }}
                />
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
          <img src={skillsImage[activeIndex]} />
        </div>
        <div className="project-content-name">
          <h5 className="project-content-desc-text">
            {projectDesc[activeIndex]}
          </h5>
        </div>
      </div>
    </div>
  );
});

export default Project;
