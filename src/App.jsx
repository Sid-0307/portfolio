import React, { useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "@components/Contact";

function App() {
  const aboutRef = useRef(null);
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

  return (
    <div className="app">
      <Navbar
        onAboutClick={scrollToAbout}
        onProjectClick={scrollToProjects}
        onSkillClick={scrollToSkill}
      />
      <About ref={aboutRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
      {/* <Skill ref={skillRef} /> */}
    </div>
  );
}

export default App;
