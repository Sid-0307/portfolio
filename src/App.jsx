import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Loading from "@components/Loading";

function App() {
  const aboutRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkill = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const content = (
      <div className="app" style={{ display: "none" }}>
        <Navbar
          onAboutClick={scrollToAbout}
          onProjectClick={scrollToProjects}
          onSkillClick={scrollToSkill}
          onContactClick={scrollToContact}
        />
        <About ref={aboutRef} />
        <Project ref={projectRef} />
        <Skill ref={skillRef} />
        <Contact ref={contactRef} />
        <footer className="footer">
          <p>Built by Sid ©️ 2025</p>
        </footer>
      </div>
    );

    setShouldRender(true);

    const loadingTime = 5000;

    setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {shouldRender && (
        <div
          className="app"
          style={{ visibility: isLoading ? "hidden" : "visible" }}
        >
          <Navbar
            onAboutClick={scrollToAbout}
            onProjectClick={scrollToProjects}
            onSkillClick={scrollToSkill}
            onContactClick={scrollToContact}
          />
          <About ref={aboutRef} />
          <Project ref={projectRef} />
          <Skill ref={skillRef} />

          <Contact ref={contactRef} />
          <footer className="footer">
            <p>Built by Sid ©️ 2025</p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
