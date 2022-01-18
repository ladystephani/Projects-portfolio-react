import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { directories = [], directoryState, setDirectoryState } = props;
  return (
    <header>
      <h2>
        <a href="/">JESSIE LI</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          <li className="mx-2">
            <span>Resume</span>
          </li>
          {directories.map((directory) => (
            <li
              className={`mx-1 ${
                directoryState.title === directory.title && "navActive"
              } `}
              key={directory.title}
            >
              <span
                onClick={() => {
                  setDirectoryState(directory);
                }}
              >
                {capitalizeFirstLetter(directory.title)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
