import React from "react";

function Nav() {
  return (
    <header>
      <h2>
        <a href="/">Portfolio</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#projects">Projects</a>
          </li>
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          <li className="mx-2">
            <span>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
