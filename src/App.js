import React, { useState } from "react";
import "./App.css";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import TopContainer from "./components/TopContainer/TopContainer";
import Header from "./components/Header/Header";
import ExperienceContainer from "./components/ExperienceContainer/ExperienceContainer";
import Contact from "./components/Contact/Contact";


function App() {
  const [selected, setSelected] = useState("about");
  const [, setOpen] = useState(false);
  return (
    <div className="app">
      <Header selected={selected} setSelected={setSelected} setOpen={setOpen} />
      
      <TopContainer setSelected={setSelected} />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  );
}

export default App;
