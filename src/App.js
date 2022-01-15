import React from "react";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
