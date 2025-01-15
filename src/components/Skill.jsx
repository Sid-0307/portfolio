import React, { forwardRef } from "react";
import IconCloud from "@components/components/ui/icon-cloud";
import TextReveal from "@components/components/ui/text-reveal";

import "./Skill.css";

const Skill = forwardRef((props, ref) => {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const Languages = [
    { name: "C", img: "/skills/C.png" },
    { name: "C++", img: "/skills/C++.png" },
    { name: "Python", img: "/skills/Python.png" },
    { name: "Java", img: "/skills/Java.png" },
    { name: "JavaScript", img: "/skills/Js.png" },
    { name: "TypeScript", img: "/skills/TypeScript.png" },
  ];

  const Frameworks = [
    { name: "React", img: "/skills/react.png" },
    { name: "Angular", img: "/skills/angular.png" },
    { name: "NodeJs", img: "/skills/node.png" },
    { name: "Bootstrap", img: "/skills/bootstrap.png" },
    { name: "ExpressJs", img: "/skills/express.png" },
    { name: "FastAPI", img: "/skills/fastAPI.png" },
    { name: "flask", img: "/skills/flask.png" },
    { name: "nestJs", img: "/skills/nest.png" },
    { name: "springboot", img: "/skills/springboot.png" },
    { name: "tailwind", img: "/skills/tailwind.png" },
  ];

  const Tools = [
    { name: "mongoDb", img: "/skills/mongoDB.png" },
    { name: "mySql", img: "/skills/mySQL.png" },
    { name: "git", img: "/skills/git.png" },
    { name: "oracleSQL", img: "/skills/oracleSQL.png" },
    { name: "docker", img: "/skills/docker.png" },
    { name: "bash", img: "/skills/bash.png" },
    { name: "postman", img: "/skills/postman.png" },
    { name: "postman", img: "/skills/postman.png" },
  ];

  return (
    <div className="skill" ref={ref}>
      <h1 className="skills-text">Skills</h1>
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg skillset">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
});

export default Skill;
