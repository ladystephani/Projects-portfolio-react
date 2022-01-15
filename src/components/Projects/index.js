import React from "react";
import parkImg from "../../assets/projects/findParks_app.png";

function Projects() {
  return (
    <div className="my5">
      <h3 id="projects">Projects</h3>
      <img
        src={parkImg}
        className="my-2"
        style={{ width: "100%" }}
        alt="project-park"
      ></img>
    </div>
  );
}

export default Projects;
