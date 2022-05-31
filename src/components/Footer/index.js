import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="flex-row">
        <a href="https://github.com/ladystephani" target="_blank">
          <FaGithub size={30}></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/zheqi-jessie-li" target="_blank">
          <FaLinkedin size={30}></FaLinkedin>
        </a>
        <a href="https://twitter.com/ladystephani_" target="_blank">
          <FaTwitter size={30}></FaTwitter>
        </a>
      </div>
      <p>&copy; Copyright 2022 Made with ❤️ by ZHEQI JESSIE LI</p>
    </footer>
  );
}

export default Footer;
