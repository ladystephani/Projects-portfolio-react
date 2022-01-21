import React, { useState } from "react";

function PhotoList({ directory, directoryState }) {
  const [photos] = useState([
    {
      name: "homepage",
      directory: "review-blog",
    },
    {
      name: "homepage",
      directory: "e-commerce",
    },

    {
      name: "home",
      directory: "park-search",
    },

    {
      name: "mainpage",
      directory: "food-search",
    },
    {
      name: "mainpage",
      directory: "scheduler",
    },
    {
      name: "mainpage",
      directory: "quiz",
    },
    {
      name: "mainpage",
      directory: "repository-search",
    },
  ]);
  const currentPhotos = photos.filter((photo) => photo.directory === directory);

  return (
    <div>
      <div className="flex-row">
        <h4>{directoryState.name}</h4>
      </div>
      <div className="flex-row">
        {currentPhotos.map((eachDirectory, i) => (
          <img
            src={require(`../../assets/projects/${directory}/${i}.png`)}
            alt={eachDirectory.name}
            className="img-thumbnail mx-1"
            key={eachDirectory.name}
          ></img>
        ))}
      </div>
      <div className="flex-row">
        <a href={directoryState.githublink}>Github</a>
      </div>
      <div className="flex-row">
        <a href={directoryState.deployedlink}>Deployed App</a>
      </div>
    </div>
  );
}
export default PhotoList;
