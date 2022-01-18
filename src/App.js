import React, { useState } from "react";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [directories] = useState([
    {
      title: "e-commerce",
      technologies:
        "Node.js, Sequelize, MySQL, Handlebars, Heroku, CSS, Javascript, jQuery, Bootstrap",
      githubLink: "https://smagums-store.herokuapp.com/",
    },
    {
      title: "park-search",
      technologies:
        "HTML, CSS, Javascript, jQuery, Bulma, Google Fonts, Google Maps API, New York Open Data APIs",
      githubLink: "https://ladystephani.github.io/ParkSharkNYC/",
    },
    {
      title: "food-search",
      technologies:
        "HTML, CSS, Javascript, jQuery, Materialize, Documenu API, Giphy API",
      githubLink: "https://ladystephani.github.io/DiscoverEats/",
    },
  ]);
  const [directoryState, setDirectoryState] = useState(directories[0]);

  return (
    <div>
      <Nav
        directories={directories}
        directoryState={directoryState}
        setDirectoryState={setDirectoryState}
      ></Nav>
      <main>
        <Projects directoryState={directoryState}></Projects>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
