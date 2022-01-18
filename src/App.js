import React from "react";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
