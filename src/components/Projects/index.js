import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from "../PhotoList";

function Projects({ directoryState }) {
  const { title, technologies } = directoryState;
  return (
    <div className="my5">
      <h1>{capitalizeFirstLetter(title)}</h1>
      <p>{technologies}</p>
      <PhotoList
        directory={directoryState.title}
        directoryState={directoryState}
      ></PhotoList>
    </div>
  );
}

export default Projects;
