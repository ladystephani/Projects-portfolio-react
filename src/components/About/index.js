import React from "react";
import profileImg from "../../assets/about/profilePic.png";

function About() {
  return (
    <section className="my5">
      <h1 id="about">About me</h1>
      <img
        src={profileImg}
        className="my-2"
        style={{ width: "50%" }}
        alt="profilepic"
      ></img>
      <p>
        Good day from Vancouver, Canada. I’m a passionate full stack web
        developer with project management experience. As a young Chinese
        immigrant, I grew up in very different cities and cultures across Canada
        and China. After obtaining an undergraduate degree in French literature
        and a minor in mathematics, I worked in New York City and Beijing in
        areas including but not limited to assistance to the designer at an NYFW
        show, company-wide blockchain deployment research and development, and
        organization of a UN international summit. With a grown interest in the
        applications of technology in the modern day society, even amidst
        challenges in my personal life plus the global pandemic, I managed to
        upscale my tech skills by building some really cool projects in the
        Columbia University online full stack bootcamp.
      </p>
      <p>
        I’m scheduled for a Cognizant Java Boot Camp in June to August, 2022. In
        addition, I’m working on personal projects as well as starting out with
        learning to be a great open source contributor on GitHub. Connect with
        me through my socials to stay tuned for upcoming updates in my web
        development projects or see what skills I’ve been learning.
      </p>
    </section>
  );
}

export default About;
