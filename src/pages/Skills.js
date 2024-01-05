import React from "react";
import "./Skills.css"
import SkillBox from "../components/SkillBox";
import Cpp from '../assets/skills/cpp.png';
import JS from  "../assets/skills/js.png";
import ReactIcon from "../assets/skills/react.png";
import NodeJS from "../assets/skills/nodejs.png";
import MongoDB from "../assets/skills/mongo.png";
import MySQL from "../assets/skills/sql.png";
import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";

function Skills() {
  const skillsArr = [
    { name: "C++", url: Cpp },
    { name: "JavaScript", url: JS },
    { name: "React", url: ReactIcon },
    { name: "NodeJS", url: NodeJS },
    { name: "MongoDB", url: MongoDB },
    { name: "MySQL", url: MySQL },
    { name: "HTML", url: HTML },
    { name: "CSS", url: CSS },
  ]
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="allskills">
        {skillsArr.map((item, ind) => (
          <SkillBox name={item.name} urlLoc={item.url} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
