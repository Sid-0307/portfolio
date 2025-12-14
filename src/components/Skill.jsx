import React, { useState, useRef, forwardRef, useEffect } from "react";
import { Star } from "lucide-react";

const Skills = forwardRef((props, ref) => {
  const [activeFilter, setActiveFilter] = useState("Languages");
  const containerRef = useRef(null);

  const skills = [
    // Languages
    { name: "Java", level: 4.5, type: "Languages" },
    { name: "Python", level: 4.5, type: "Languages" },
    { name: "JavaScript", level: 4.5, type: "Languages" },
    { name: "TypeScript", level: 4, type: "Languages" },
    { name: "C", level: 4.5, type: "Languages" },
    { name: "C++", level: 4.5, type: "Languages" },
    { name: "HTML", level: 5, type: "Languages" },
    { name: "CSS", level: 5, type: "Languages" },
    { name: "Dart", level: 4, type: "Languages" },

    // Databases
    { name: "Oracle SQL", level: 5, type: "Databases" },
    { name: "PostgreSQL", level: 4, type: "Databases" },
    { name: "MySQL", level: 5, type: "Databases" },
    { name: "MongoDB", level: 5, type: "Databases" },
    { name: "Firebase", level: 4, type: "Databases" },

    // Frameworks
    { name: "Spring Boot", level: 4, type: "Frameworks" },
    { name: "Node.js", level: 4.5, type: "Frameworks" },
    { name: "ExpressJS", level: 4.5, type: "Frameworks" },
    { name: "NestJS", level: 4, type: "Frameworks" },
    { name: "FastAPI", level: 4, type: "Frameworks" },
    { name: "Angular", level: 4, type: "Frameworks" },
    { name: "React", level: 4.5, type: "Frameworks" },
    { name: "Next.js", level: 4, type: "Frameworks" },
    { name: "Flutter", level: 4, type: "Frameworks" },

    // Tools
    { name: "Git", level: 5, type: "Tools" },
    { name: "Docker", level: 4, type: "Tools" },
    { name: "AWS", level: 4, type: "Tools" },
    { name: "Jenkins", level: 4, type: "Tools" },
    { name: "Redis", level: 4, type: "Tools" },
    { name: "Turborepo", level: 3, type: "Tools" },
    { name: "Postman", level: 5, type: "Tools" },
    { name: "JUnit", level: 5, type: "Tools" },
    { name: "Jasmine/Karma", level: 5, type: "Tools" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      const size = Math.random() * 5 + 1;

      particle.className = "particle absolute rounded-full bg-[#ddbda0]/20";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.zIndex = "1";

      return particle;
    };

    const particles = Array(100).fill(null).map(createParticle);
    particles.forEach((particle) => container.appendChild(particle));

    let mouseX = 0;
    let mouseY = 0;
    let rafId;

    const animateParticles = () => {
      particles.forEach((particle, i) => {
        const rect = particle.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = mouseX - centerX;
        const distanceY = mouseY - centerY;
        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        );
        const maxDistance = 200;
        const speed = Math.max(0, 1 - distance / maxDistance);

        const angle = Math.atan2(distanceY, distanceX);
        const velocity = speed * 2;

        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity;

        const currentX = parseFloat(particle.style.left) || 0;
        const currentY = parseFloat(particle.style.top) || 0;

        particle.style.left = `${currentX + dx * 0.2}%`;
        particle.style.top = `${currentY + dy * 0.2}%`;

        if (currentX < 0) particle.style.left = "100%";
        if (currentX > 100) particle.style.left = "0%";
        if (currentY < 0) particle.style.top = "100%";
        if (currentY > 100) particle.style.top = "0%";
      });

      rafId = requestAnimationFrame(animateParticles);
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX;
      mouseY = e.clientY;

      container.style.setProperty(
        "--mouse-x",
        `${((e.clientX - rect.left) / rect.width) * 100}%`
      );
      container.style.setProperty(
        "--mouse-y",
        `${((e.clientY - rect.top) / rect.height) * 100}%`
      );
    };

    container.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animateParticles);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  const FilterButton = ({ type, count }) => (
    <button
      onClick={() => setActiveFilter(type)}
      className={`
        px-4 py-2 rounded-full font-medium transition-all duration-300
        ${
          activeFilter === type
            ? "bg-[#ddbda0] text-[#023636] shadow-lg scale-105"
            : "bg-[#023636]/40 text-[#ddbda0] border border-[#ddbda0] hover:bg-[#034444]/60"
        }
        transform hover:scale-105 active:scale-95
      `}
    >
      {type}
      <span className="ml-2 text-sm opacity-75">({count})</span>
    </button>
  );

  const SkillBadge = ({ skill }) => {
    const getStars = (level) => {
      const stars = [];
      const fullStars = Math.floor(level);
      const hasHalfStar = level % 1 !== 0;

      for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
          stars.push(
            <Star key={i} className="w-4 h-4 fill-[#ddbda0] text-[#ddbda0]" />
          );
        } else if (i === fullStars && hasHalfStar) {
          stars.push(
            <div key={i} className="relative">
              <Star className="w-4 h-4 fill-[#ddbda0] text-[#ddbda0] opacity-30" />
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Star className="w-4 h-4 fill-[#ddbda0] text-[#ddbda0]" />
              </div>
            </div>
          );
        } else {
          stars.push(
            <Star
              key={i}
              className="w-4 h-4 fill-[#ddbda0] text-[#ddbda0] opacity-30"
            />
          );
        }
      }
      return stars;
    };

    return (
      <div
        className="backdrop-blur-md bg-[#2b2a2a]/30 rounded-lg p-4
        transform transition-all duration-500 hover:scale-105
        hover:shadow-xl border border-[#ddbda0] border-opacity-20
        hover:border-opacity-100 hover:bg-[#023636]/50
        relative overflow-hidden z-10"
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-[#ddbda0]">
              {skill.name}
            </h3>
            <span className="px-2 py-1 text-xs rounded-full bg-[#023636]/60 text-[#ddbda0] border border-[#ddbda0] border-opacity-20">
              {skill.type}
            </span>
          </div>
          <div className="flex space-x-1">{getStars(skill.level)}</div>
        </div>
      </div>
    );
  };

  const filteredSkills = skills.filter(
    (skill) => activeFilter === "all" || skill.type === activeFilter
  );

  const counts = {
    Languages: skills.filter((s) => s.type === "Languages").length,
    Databases: skills.filter((s) => s.type === "Databases").length,
    Frameworks: skills.filter((s) => s.type === "Frameworks").length,
    Tools: skills.filter((s) => s.type === "Tools").length,
  };

  return (
    <div ref={ref}>
      <div
        ref={containerRef}
        className=" bg-black p-8 m-4 rounded-lg relative overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {/* Animated gradient background - increased z-index */}
        <div
          className="absolute inset-0 bg-gradient-radial from-[#ddbda0]/5 to-transparent pointer-events-none"
          style={{
            backgroundPosition: "var(--mouse-x, 50%) var(--mouse-y, 50%)",
            transition: "background-position 0.3s ease-out",
            zIndex: 1,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto ">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#ddbda0] mb-8">SKILLS</h1>
            <div className="flex justify-center space-x-4 flex-wrap gap-2">
              <FilterButton type="Languages" count={counts.Languages} />
              <FilterButton type="Databases" count={counts.Databases} />
              <FilterButton type="Frameworks" count={counts.Frameworks} />
              <FilterButton type="Tools" count={counts.Tools} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="opacity-0 animate-fadeIn"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <SkillBadge skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .particle {
          transition: all 0.3s ease-out;
          pointer-events: none;
          position: absolute;
        }

        .bg-gradient-radial {
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(221, 189, 160, 0.05),
            transparent
          );
        }
      `}</style>
    </div>
  );
});

export default Skills;
