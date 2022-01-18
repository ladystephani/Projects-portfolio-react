import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Projects({ directoryState }) {
  const { title, technologies, githublink } = directoryState;
  return (
    <div className="my5">
      <h3>{capitalizeFirstLetter(title)}</h3>
      <p>{technologies}</p>
    </div>
  );
}

export default Projects;
