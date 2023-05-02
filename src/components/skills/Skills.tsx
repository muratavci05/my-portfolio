import React from "react";
import "./Skills.css";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import { Slide } from "react-awesome-reveal";
const Skills: React.FC = () => {
  return (
    <section className="skills section" id="skills">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Skills</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">My technical level</span>
      </Slide>
      <div className="skills__container container grid">
        <Slide direction="left" triggerOnce>
          <FrontEnd />
        </Slide>
        <Slide direction="right" triggerOnce>
          <BackEnd />
        </Slide>
      </div>
    </section>
  );
};

export default Skills;
