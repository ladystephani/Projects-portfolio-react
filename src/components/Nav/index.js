import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    directories = [],
    directoryState,
    setDirectoryState,
    contactSelected,
    setContactSelected,
  } = props;
  return (
    <header className="flex-row">
      <h2>
        <a href="/">Jessie Li</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

          {directories.map((directory) => (
            <li
              className={`mx-1 ${
                directoryState.title === directory.title &&
                !contactSelected &&
                "navActive"
              } `}
              key={directory.title}
            >
              <span
                onClick={() => {
                  setDirectoryState(directory);
                  setContactSelected(false);
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
