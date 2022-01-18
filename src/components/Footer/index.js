import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <a href="https://github.com/ladystephani" target="_blank">
        <FaGithub></FaGithub>
      </a>
      <a href="https://www.linkedin.com/in/zheqi-jessie-li" target="_blank">
        <FaLinkedin></FaLinkedin>
      </a>
      <a href="https://twitter.com/ladystephani_" target="_blank">
        <FaTwitter></FaTwitter>
      </a>
      <p>&copy; Copyright 2022 Made with ❤️ by ZHEQI JESSIE LI</p>
    </div>
  );
}

export default Footer;
