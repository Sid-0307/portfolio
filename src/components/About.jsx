import React, { useState, useEffect, forwardRef } from "react";
import sid from "../assets/sid.jpg";
import IconCloud from "@components/components/ui/icon-cloud";
import "./About.css";

const About = forwardRef((props, ref) => {
  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
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

  return (
    <div className="about">
      <div className="box box1" ref={ref}>
        <p className="box1-text">
          I am a web developer, fervently devoted to crafting elegant,
          responsive, and user focused websites.
        </p>
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
            <div className="companyName">CITI</div>
            <div className="companyContent">
              <div className="duration">6 MONTHS</div>
              <div className="timeline">JUL 2024 - PRESENT</div>
            </div>
          </div>

          <div className="item">
            <div className="companyName">SPENZA</div>
            <div className="companyContent">
              <div className="duration">6 MONTHS</div>
              <div className="timeline">FEB 2024 - JUL 2024</div>
            </div>
          </div>

          <div className="item item-last">
            <div className="companyName">CITI</div>
            <div className="companyContent">
              <div className="duration">2 MONTHS</div>
              <div className="timeline">JUN 2023 - AUG 2023</div>
            </div>
          </div>
        </div>
      </div>
      <div className="box box4">
        <div className="box4-text">LinkedIn</div>
        <div className="box4-text">Github</div>
        <div className="box4-text">Mail</div>
      </div>
      <div className="box box5">
        <p className="box5-text">FULL STACK DEVELOPER</p>
      </div>
      <div className="box6 box">
        <div className="box6-text">Resume</div>
      </div>
    </div>
  );
});

export default About;
