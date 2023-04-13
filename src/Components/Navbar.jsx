import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-end p-2 gap-2 mr-3">
      <a href="https://github.com/loBoda0/" target="_blank" rel="noreferrer">
        <FaGithub size={27} className="hover:text-[#5c6bc0]" />
      </a>
      <a
        href="https://www.linkedin.com/in/martin-loboda-476810204/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={27} className="hover:text-[#0077b5]" />
      </a>
    </div>
  );
};

export default Navbar;
