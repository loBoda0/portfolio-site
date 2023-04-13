import React from "react";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="max-w-5xl h-screen flex items-start justify-center flex-col mx-auto px-6">
      <h1 className="text-5xl flex flex-col lg:block sm:text-6xl">
        Hi, my name is <span className="text-purple-500">Martin Loboda</span>
      </h1>
      <h2 className="text-4xl sm:text-5xl text-slate-500">
        I am a Full-Stack Web Developer
      </h2>
      <Link to="projects" smooth={true} duration={500}>
        <button className="group border-2 border-black px-6 py-2 my-2 flex items-center hover:bg-black hover:text-white transition hover:ease-in duration-100 active:scale-95">
          See My Work
          <TbArrowRight className="ml-3 group-hover:rotate-90 duration-100" />
        </button>
      </Link>
    </div>
  );
};

export default Hero;
