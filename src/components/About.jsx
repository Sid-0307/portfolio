import React, { useState, useRef, forwardRef, useMemo } from "react";
import sid from "../assets/sid.jpg";
import IconCloud from "@components/components/ui/icon-cloud";
import "./About.css";
import citi from "../assets/citi-logo.png";
import spenza from "../assets/spenza-logo.png";

const About = forwardRef(({ experienceRef }, ref) => {
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

  const [slugs] = useState(initialSlugs);
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 50 });
  const [ballVelocity, setBallVelocity] = useState({ vx: 3, vy: 2 });
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const [particles, setParticles] = useState([]);

  const handleParticleBurst = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const colors = ["#DDBDA0", "#FFD89B", "#175C5F", "#89CBEA"];
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      tx: Math.cos((i * 30 * Math.PI) / 180) * 100,
      ty: Math.sin((i * 30 * Math.PI) / 180) * 100,
      delay: Math.random() * 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, 1000);
  };

  // Calculate duration dynamically
  const calculateDuration = (startDate, endDate = null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    if (months < 12) {
      return `${months} MONTH${months !== 1 ? "S" : ""}`;
    } else {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      if (remainingMonths === 0) {
        return `${years} YEAR${years !== 1 ? "S" : ""}`;
      }
      return `${years}Y ${remainingMonths}M`;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-US", { month: "short", year: "numeric" })
      .toUpperCase();
  };

  const experiences = [
    {
      company: "Citi",
      logo: citi,
      startDate: "2024-07-01",
      endDate: null,
      role: "Application Developer",
    },
    {
      company: "Spenza",
      logo: spenza,
      startDate: "2024-02-01",
      endDate: "2024-07-01",
      role: "Full-Stack Developer Intern",
    },
    {
      company: "Citi",
      logo: citi,
      startDate: "2023-05-01",
      endDate: "2023-07-01",
      role: "SDE Intern",
    },
  ];

  const totalExperience = () => {
    const startDate = new Date("2024-06-01");
    const endDate = new Date();
    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
    return (months / 12).toFixed(1);
  };

  const handleExperienceClick = () => {
    if (experienceRef && experienceRef.current) {
      experienceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Bouncing ball animation
  const handleBallClick = () => {
    if (isAnimatingRef.current) {
      // Stop animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      isAnimatingRef.current = false;
      setIsAnimating(false);
    } else {
      // Start animation
      isAnimatingRef.current = true;
      setIsAnimating(true);
      animateBall();
    }
  };

  const animateBall = () => {
    if (!isAnimatingRef.current) return;

    setBallPosition((prev) => {
      let newX = prev.x + ballVelocity.vx;
      let newY = prev.y + ballVelocity.vy;

      let newVx = ballVelocity.vx;
      let newVy = ballVelocity.vy;

      if (newX <= 10 || newX >= 90) {
        newVx = -ballVelocity.vx;
        newX = newX <= 10 ? 10 : 90;
      }
      if (newY <= 10 || newY >= 90) {
        newVy = -ballVelocity.vy;
        newY = newY <= 10 ? 10 : 90;
      }

      setBallVelocity({ vx: newVx, vy: newVy });
      animationRef.current = requestAnimationFrame(animateBall);

      return {
        x: Math.max(10, Math.min(90, newX)),
        y: Math.max(10, Math.min(90, newY)),
      };
    });
  };

  return (
    <div className="about">
      {/* About Me Section */}
      <div className="box about-box" ref={ref}>
        <div className="section-title">
          <svg
            className="section-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <h2>ABOUT ME</h2>
        </div>
        <p className="about-text">
          Full-stack engineer experienced in enterprise fintech and SaaS
          systems, building scalable, maintainable backend architecture with
          clean user-facing platforms. Delivering reliable, production-grade
          systems across web and mobile platforms.
        </p>
      </div>

      {/* Photo & Skills */}
      <div className="box photo-box">
        <img src={sid} alt="Siddharth" className="photo" />
        <div className="skills">
          {useMemo(
            () => (
              <IconCloud iconSlugs={slugs} />
            ),
            [slugs]
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="box stats-box">
        <div className="stat-card">
          <div className="stat-value">{totalExperience()}+</div>
          <div className="stat-label">Years Exp</div>
        </div>
      </div>

      <div className="box stats-box-2">
        <div className="stat-card">
          <div className="stat-value">10+</div>
          <div className="stat-label">Projects</div>
        </div>
      </div>

      {/* Particle Burst Box */}
      <div className="box stats-box-3" onClick={handleParticleBurst}>
        <div className="burst-hint">✦</div>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              "--tx": `${particle.tx}px`,
              "--ty": `${particle.ty}px`,
              "--delay": `${particle.delay}s`,
              "--color": particle.color,
            }}
          />
        ))}
      </div>

      {/* Experience Section */}
      <div className="box experience-box">
        <div className="section-title">
          <svg
            className="section-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <h2>EXPERIENCE</h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div
              className="experience-item"
              key={index}
              onClick={handleExperienceClick}
            >
              <div className="exp-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>
              <div className="exp-content">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-meta">
                  <span className="exp-duration">{exp.company}</span>
                  <span className="exp-separator"> ✦ </span>
                  <span className="exp-timeline">
                    {formatDate(exp.startDate)} -{" "}
                    {exp.endDate ? formatDate(exp.endDate) : "PRESENT"}
                  </span>
                </div>
              </div>
              <svg
                className="exp-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Role Title */}
      <div className="box title-box">
        <p className="role-title-about">SDE ✦ Backend ✦ Full Stack</p>
      </div>

      {/* Socials Card */}
      <div className="box social-box">
        <div className="social-group">
          <a
            href="https://www.linkedin.com/in/siddharth-s-59b600256/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/Sid-0307"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
          </a>
          <a
            href="mailto:siddharthshankar03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Email"
          >
            <img src="https://skillicons.dev/icons?i=gmail" alt="Gmail" />
          </a>
        </div>
      </div>

      {/* Resume Card */}
      <div className="box resume-box">
        <a
          href="https://drive.google.com/file/d/1K_ohSzxYLLIq1MfMAE3FBNr7Shbp-Cqe/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Resume
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17L17 7" />
          </svg>
        </a>
      </div>
    </div>
  );
});

export default About;
