import React, { useState } from "react";
import Nav from "./components/Nav";
import ContactForm from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [directories] = useState([
    {
      title: "e-commerce",
      name: "Smagums Store",
      technologies:
        "Node.js, Sequelize, MySQL, Handlebars, Heroku, CSS, Javascript, jQuery, Bootstrap",
      githubLink: "https://github.com/ladystephani/smagums",
      deployedlink: "https://smagums-store.herokuapp.com/",
    },
    {
      title: "park-search",
      name: "ParkSharkNYC",
      technologies:
        "HTML, CSS, Javascript, jQuery, Bulma, Google Fonts, Google Maps API, New York Open Data APIs",
      githubLink: "http://github.com/ladystephani/ParkSharkNYC",
      deployedlink: "https://ladystephani.github.io/ParkSharkNYC/",
    },
    {
      title: "food-search",
      name: "DiscoverEats",
      technologies:
        "HTML, CSS, Javascript, jQuery, Materialize, Documenu API, Giphy API",
      githubLink: "https://github.com/ladystephani/DiscoverEats",
      deployedlink: "https://ladystephani.github.io/DiscoverEats/",
    },
  ]);
  const [directoryState, setDirectoryState] = useState(directories[0]);

  return (
    <div>
      <Nav
        directories={directories}
        directoryState={directoryState}
        setDirectoryState={setDirectoryState}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      <main>
        {!contactSelected ? (
          <>
            <Projects directoryState={directoryState}></Projects>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
