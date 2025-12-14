import React, { forwardRef } from "react";
import "./Experience.css";
import citi from "../assets/citi-logo.png";
import spenza from "../assets/spenza-logo.png";

const Experience = forwardRef((props, ref) => {
  const experiences = [
    {
      id: 1,
      company: "Citi",
      logo: citi,
      role: "Application Developer",
      startDate: "2024-07-01",
      endDate: null,
      highlights: [
        "Automated internal approvals by building RESTful APIs with Spring Boot, Angular, and Oracle SQL, cutting turnaround time by 40% and eliminating 80% of manual emails",
        "Developed a portfolio budget dashboard with dynamic filters, charts, and tables, improving analytics for 200+ users and enabling actionable insights",
        "Improved backend reliability by fixing 20+ critical Sonar bugs, addressing security vulnerabilities, and increasing unit test coverage by 80%",
        "Managed CI/CD pipelines for containerized microservices using Jenkins and Docker, deploying applications via OpenShift",
      ],
      techIcons: "angular,spring,nodejs,oracle,junit,docker,jenkins,openshift",
    },
    {
      id: 2,
      company: "Spenza",
      logo: spenza,
      role: "Full-Stack Developer Intern",
      startDate: "2024-02-01",
      endDate: "2024-07-01",
      highlights: [
        "Built full-stack features for a telecom SaaS platform using NestJS, React, and MongoDB, serving 500+ users with secure Auth0 authentication",
        "Reduced new vendor integration effort by 70% by standardizing backend data flows and validating changes through end-to-end Postman testing",
        "Developed an AI-driven invoice extraction system using Python and LLMs, automating PDF data entry and cutting manual effort by 99%",
        "Deployed and monitored production applications on AWS using EC2 and CloudWatch to ensure stable operations",
      ],
      techIcons: "react,nestjs,mongodb,python,ai,aws",
    },
    {
      id: 3,
      company: "Citi",
      logo: citi,
      role: "SDE Intern",
      startDate: "2023-05-01",
      endDate: "2023-07-01",
      highlights: [
        "Built an Angular dashboard with a FastAPI backend to automate manual SQL queries for tracking system alerts and incidents, reducing MTTR for critical incidents by 50%",
      ],
      techIcons: "angular,fastapi,oracle",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-US", { month: "short", year: "numeric" })
      .toUpperCase();
  };

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

  return (
    <div className="experience-section" ref={ref}>
      <div className="experience-header">
        <h1>EXPERIENCE</h1>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div
            className="experience-card"
            key={exp.id}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="card-header">
              <div className="company-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>
              <div className="company-info">
                <h3 className="role-title">{exp.role}</h3>
                <div className="company-name">{exp.company}</div>
              </div>
            </div>

            <div className="duration-badge">
              <span className="duration-text">
                {calculateDuration(exp.startDate, exp.endDate)}
              </span>
              <span className="duration-dates">
                {formatDate(exp.startDate)} -{" "}
                {exp.endDate ? formatDate(exp.endDate) : "PRESENT"}
              </span>
            </div>

            <div className="highlights">
              {exp.highlights.map((highlight, idx) => (
                <div className="highlight-item" key={idx}>
                  <svg
                    className="highlight-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>

            <div className="tech-stack">
              <img
                src={`https://go-skill-icons.vercel.app/api/icons?i=${exp.techIcons}&titles=true`}
                alt="Tech Stack"
                className="tech-icons"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Experience;
