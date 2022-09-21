import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem name='Reciplease' about='A recipe tracking app' technologies='Bootstrap Css'><span>Rails</span></ProjectItem>
        <ProjectItem name='Kibbles N Bitz' about='Tinder for dogs' technologies='React'><span>Redux</span></ProjectItem>
        <ProjectItem name='Alienwares' about='Etsy for Aliens' technologies='Rails'><span>React</span><span>Redux</span></ProjectItem>
      </div>
    </div>
  );
}

export default ProjectList;
