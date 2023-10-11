import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="container mx-auto px-8 md:px-0 mb-8">
        <h2 className="text-3xl text-sky-400 font-bold text-center mb-12 ">My Projects <span className="text-[#8ff577]">__</span></h2>
        <div>
          <div className="grid grid-cols-2 gap-x-4 ">
            <div>
              <h2 className="text-3xl text-[#8ff577] font-medium">Bug Tracker</h2>
              <p className="text-base text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                incidunt enim rerum aspernatur? Accusamus aperiam non minima.
                Fugiat, dolor illum?
              </p>
              <h5 className="text-xl font-bold text-sky-400 my-4 opacity-80">Skills</h5>
              <p className="text-white bg-gradient-to-r from-[#4239c2] to-[#100e29] inline-block px-4 py-1 rounded-full">React </p>
              <div>
                <button>View Code</button>
                <button>Live Demo</button>
              </div>
            </div>
            <div className="relative w-full h-[300px] sm:h-[450px] md:h-[270px] lg:h-[300px]">
              <Image
                className="rounded-lg "
                src="https://i.ibb.co/kJ1yGbN/LIFE-CARE.png"
                alt="minhaz"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
