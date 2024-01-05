import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as Btnline } from "../assets/btnline.svg";

import Linkedin from "../assets/linkedin.png";
import Github from "../assets/git.png";
import X from "../assets/x.png";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidetext">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          activeClass="activeBtn"
          className="side-btn"
        >
          Home
          <Btnline className="btnbase" alt="btnline" />
        </Link>

        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          activeClass="activeBtn"
          className="side-btn"
        >
          About
          <Btnline className="btnbase" alt="btnline" />
        </Link>

        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          activeClass="activeBtn"
          className="side-btn"
        >
          Skills
          <Btnline className="btnbase" alt="btnline" />
        </Link>

        <Link
          to="works"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          activeClass="activeBtn"
          className="side-btn"
        >
          Works
          <Btnline className="btnbase" alt="btnline" />
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          activeClass="activeBtn"
          className="side-btn"
        >
          Contact
          <Btnline className="btnbase" alt="btnline" />
        </Link>
      </div>
      <div className="logos">
        <img src={Linkedin} alt="LinkedIn" />
        <img src={Github} alt="Github" />
        <img src={X} alt="X" />
      </div>
    </div>
  );
}

export default Sidebar;
