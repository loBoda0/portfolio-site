import React from "react";

const Work = () => {
  return (
    <div
      name="projects"
      className="min-h-screen flex justify-center items-center my-10"
    >
      <div className="max-w-5xl w-full min-h-[90%] px-6">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-purple-500">
            My Projects
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="group container rounded-md flex justify-center items-center content-div bg-LobSocial bg-cover bg-center h-72">
            {/* hover effects */}
            <div className="sm:opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://lob-social.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/loBoda0/LobSocial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="group container rounded-md flex justify-center items-center content-div bg-LobShop bg-cover bg-center h-72">
            {/* hover effects */}
            <div className="sm:opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold tracking-wider">
                Next JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://lobshop.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/loBoda0/lobshop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
