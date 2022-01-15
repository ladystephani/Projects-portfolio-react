import React from "react";
import profileImg from "../../assets/about/profilePic.png";

function About() {
  return (
    <section className="my5">
      <h1 id="about">JESSIE LI</h1>
      <img
        src={profileImg}
        className="my-2"
        style={{ width: "50%" }}
        alt="profilepic"
      ></img>
      <p>
        Hi! I’m a coding bootcamp student at Columbia Engineering. Welcome to my
        page! A few fun facts about me: With Hakka Chinese roots, I am currently
        residing in metro Vancouver in the Pacific Northwest. I’m a recent Johns
        Hopkins alum, and my ties with Columbia started when I did a Columbia
        Global Centers exchange program in Paris back then. Starting out college
        in the pre-med path but later shifted towards the arts and sciences, I
        have a background in pure mathematics and German and Roman languages
        with a focus on French literature. I’m passionate about technology,
        especially digital healthcare, and have work experience with the UN,
        organizing a UNOPS international health summit in 2019. As of right now,
        I’m working on building my toolkit in full-stack web development. Please
        look forward to more of my upcoming projects.
      </p>
    </section>
  );
}

export default About;
