import React, { useState } from "react";
import Project from "../Project/Project";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import img1 from "../../assets/Screenshot 2024-03-05 111711.png";
import img2 from "../../assets/Screenshot 2024-03-05 111300.png";

import img8 from "../../assets/project8.png";


const ProjectContainer = () => {
  const [choosen, setChoosen] = useState(true);

  const guvi_projects = [
    {
      img: img1,
      title: "The Arkm dairy Manager",
      desc:
        "Dairy products or milk products, also known as lacticinia, are food products made from (or containing) milk.",
      link: "https://jolly-platypus-888d6d.netlify.app/",
    },
    {
      img: img2,
      title: "Diary Manager Application",
      desc:
        "Diary Manager Application this my capstone project in guvi .",
      link: "https://aquamarine-kulfi-ebbdb2.netlify.app/login",
    },
   
  ];

  const clone_works = [
   
    {
      img: img8,
      title: "Amazon Clone",
      desc:
        "Clone of Amazon with some functionalities like authentication, adding items to the cart, etc.",
      link: "https://magnificent-mooncake-eda188.netlify.app/",
    },
   
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects which i devleoped and also amazon clone.
      </p>
      <div className="projectContainer__title">
        <h4
          className={choosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChoosen(true)}
        >
           Projects
        </h4>
        <h4
          className={!choosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChoosen(false)}
        >
          Clone Projects
        </h4>
      </div>

      {choosen ? (
        <div className="projectContainer__projects">
          {guvi_projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      ) : (
        <div className="projectContainer__projects">
          {clone_works.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      )}
    </Element>
  );
};

export default ProjectContainer;
