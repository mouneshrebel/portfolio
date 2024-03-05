import React from "react";
import { Element } from "react-scroll";
import Experience from "../ExperienceBox/Experience";
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="experienceContainer__info">
        <Experience number="20+" title=" projects learn from Guvi " />
        <Experience
          number="5 "
          title="Projects"
          style={{ backgroundColor: "#f64c08" }}
        />
        <Experience number="6+" title="Months train in Guvi IIT Madras" />
  
      </div>
    </Element>
  );
};

export default ExperienceContainer;
