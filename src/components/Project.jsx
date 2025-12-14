import React, { useState, forwardRef } from "react";
import "./Project.css";
import Eventhub from "../assets/eventhub.png";
import XpenseEz from "../assets/XpenseEz.png";
import dockify from "../assets/dockify.png";
import stock from "../assets/stock.png";
import dqr from "../assets/dqr.png";
import movie from "../assets/movie.png";
import triviaGame from "../assets/trivia-game.png";
import rems from "../assets/rems.png";
import vizalpay from "../assets/vizalpay.png";
import access from "../assets/access.png";
import snake from "../assets/snake.png";

const Project = forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      name: "Eventhub",
      image: Eventhub,
      description:
        "A high-concurrency ticket booking platform with real-time seat availability and demand-driven pricing.Built with transactional guarantees and caching to ensure consistency and fast user experience.",
      tech: "https://go-skill-icons.vercel.app/api/icons?i=nextjs,nestjs,postgresql,redis,docker,turborepo",
      github: "https://github.com/Sid-0307/ticketing-platform-monorepo",
      live: null,
    },
    {
      id: 2,
      name: "XpenseEz",
      image: XpenseEz,
      description:
        "XpenseEz is a personal expense tracker that automatically parses UPI SMS transaction alerts, eliminating the need for manual expense entry. It categorizes spending and provides clear insights through category-wise breakdowns and time-frame analytics.",
      tech: "https://skillicons.dev/icons?i=flutter,dart,androidstudio,gradle,firebase",
      github: "https://github.com/Sid-0307/UPI-expense-tracker",
      live: null,
    },
    {
      id: 3,
      name: "Dockify",
      image: dockify,
      description:
        "Dockify is an AI-powered documentation tool that generates markdown files from a repository URL or zip file. It streamlines the process of creating technical documentation, ensuring clear, organized, and developer-friendly outputs for any project.",
      tech: "https://skillicons.dev/icons?i=html,css,javascript,python,fastapi,ai",
      github: "https://github.com/Sid-0307/Dockify",
      live: null,
    },
    {
      id: 4,
      name: "Stock Portfolio Management",
      image: stock,
      description:
        "A dynamic stock management app where users can buy, sell, and track stocks effortlessly. It offers real-time stock value updates, detailed transaction records, and a discovery section to explore new opportunities — all wrapped in an intuitive, user-friendly design.",
      tech: "https://skillicons.dev/icons?i=javascript,css,react,java,spring,mysql",
      github: "https://github.com/Sid-0307/Stock-Portfolio-Handler",
      live: null,
    },
    {
      id: 5,
      name: "Digital QR",
      image: dqr,
      description:
        "A dynamic QR code generator that allows users to upload images and embed location tags. The tool creates scannable QR codes for quick access, making it ideal for sharing location-based content.",
      tech: "https://skillicons.dev/icons?i=figma,java,androidstudio,gradle,firebase",
      github: "https://github.com/Sid-0307/DigitalQR",
      live: null,
    },
    {
      id: 6,
      name: "Movies4U",
      image: movie,
      description:
        "A movie browsing platform where users can explore films or search them by genre or text. It offers a smooth interface for discovering movie details and allows easy navigation through a wide variety of films.",
      tech: "https://skillicons.dev/icons?i=react,css,javascript,nodejs,express,mongodb",
      github: "https://github.com/Sid-0307/MovieBrowser",
      live: null,
    },
    {
      id: 7,
      name: "Trivia Game",
      image: triviaGame,
      description:
        "A multiplayer trivia game where players can create or join rooms to compete in real-time. The game features dynamic question sets, real-time score updates, and player tracking, ensuring a seamless and interactive experience.",
      tech: "https://skillicons.dev/icons?i=flutter,dart,androidstudio,gradle,firebase",
      github: "https://github.com/Sid-0307/TriviaApp",
      live: null,
    },
    {
      id: 8,
      name: "Real Estate Management",
      image: rems,
      description:
        "A web-based platform for listing, buying, and selling properties. Users can explore detailed property listings and manage their own, offering a simple and efficient way to navigate the real estate market.",
      tech: "https://skillicons.dev/icons?i=html,css,javascript,java,jquery,mysql",
      github: "https://github.com/Sid-0307/RealEstate-Management-System",
      live: null,
    },
    {
      id: 9,
      name: "VizalPay",
      image: vizalpay,
      description:
        "A payment app prototype designed with dummy cash to simulate digital transactions. Users can send and receive funds within the app and view detailed transaction histories of the transactions.",
      tech: "https://skillicons.dev/icons?i=figma,java,androidstudio,gradle,sqlite",
      github: "https://github.com/Sid-0307/VizalPay",
      live: null,
    },
    {
      id: 10,
      name: "Access Management System",
      image: access,
      description:
        "An access management system designed for user authentication and role-based access control. It enables secure logins, efficient permission management in web applications.",
      tech: "https://skillicons.dev/icons?i=html,css,javascript,nodejs,mongodb",
      github: "https://github.com/Sid-0307/Access-Management-System",
      live: null,
    },
    {
      id: 11,
      name: "Evil Snake",
      image: snake,
      description:
        "A wicked twist on the classic Snake game where you control the apple instead of the snake. Dodge the relentless snake as it hunts you down, challenging your reflexes and strategy in a fun, fast-paced survival game.",
      tech: "https://skillicons.dev/icons?i=java,replit,bash",
      github: "https://github.com/Sid-0307/EvilSnake",
      live: null,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

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

  const activeProject = projects[activeIndex];

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
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            return (
              <div
                key={project.id}
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
                  src={project.image}
                  alt={`project ${index + 1}`}
                  onClick={() => {
                    window.open(project.github, "_blank");
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
          <div className="title-with-live-link">
            <h2 className="project-content-name-text">{activeProject.name}</h2>
            {activeProject.live && (
              <a
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link-icon"
                title="View Live Site"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
          <img src={activeProject.tech} alt="Tech Stack" />
        </div>
        <div className="project-content-name">
          <h5 className="project-content-desc-text">
            {activeProject.description}
          </h5>
        </div>
      </div>
    </div>
  );
});

export default Project;
