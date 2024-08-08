"use client"
/* eslint-disable react/jsx-key */
import Image from "next/image";
import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai"
import { BiCodeAlt } from "react-icons/bi"


const projectsData = [
  {
    title: "Bug Tracker",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt enim rerum aspernatur? Accusamus aperiam non minima. Fugiat, dolor illum?",
    image: "https://i.ibb.co/kJ1yGbN/LIFE-CARE.png",
    skills: ["React", "TailwindCss", "React-hooks", "Node", "Mondodb", "Express", "Mongoose", "Firebase", "Github"]
  },
  {
    title: "Workfleek Freelance (Team Project)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt enim rerum aspernatur? Accusamus aperiam non minima. Fugiat, dolor illum?",
    image: "https://i.ibb.co/g9r5y8J/Screenshot-13.png",
    skills: ["React", "TailwindCss", "React-hooks", "Node", "Mondodb", "Express", "Mongoose", "Firebase", "Github"]
  },
  {
    title: "Will Jobs",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt enim rerum aspernatur? Accusamus aperiam non minima. Fugiat, dolor illum?",
    image: "https://i.ibb.co/kJ1yGbN/LIFE-CARE.png",
    skills: ["React", "TailwindCss", "React-hooks", "Node", "Mondodb", "Express", "Mongoose", "Firebase", "Github"]
  },
  {
    title: "Kart bazar",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt enim rerum aspernatur? Accusamus aperiam non minima. Fugiat, dolor illum?",
    image: "https://i.ibb.co/ZzFtT5j/Screenshot-12.png",
    skills: ["React", "TailwindCss", "React-hooks", "Node", "Mondodb", "Express", "Mongoose", "Firebase", "Github"]
  },
  {
    title: "Programming Blogs",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt enim rerum aspernatur? Accusamus aperiam non minima. Fugiat, dolor illum?",
    image: "https://i.ibb.co/MnR2nmB/Screenshot-14.png",
    skills: ["React", "TailwindCss", "React-hooks", "Node", "Mondodb", "Express", "Mongoose", "Firebase", "Github"]
  },
]


const Projects = () => {

  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div>
      <div className="container mx-auto px-8 md:px-0 mb-8">
        <h2 className="text-3xl text-sky-400 font-bold text-center mb-12 ">My Projects <span className="text-[#8ff577]">__</span></h2>
        <div>
          {
            projectsData.slice(0,showAllProjects?projectsData.length:3).map(project => (
              <div className="grid grid-cols-1 md:grid-cols-2  gap-x-4 my-12 [perspective:1000px] group" key={project.title}>
                <div>
                  <h2 className="text-3xl text-[#8ff577] font-medium">{project.title}</h2>
                  <p className="text-base text-gray-400">
                    {project.desc}
                  </p>
                  <h5 className="text-xl font-bold text-sky-400 my-4 opacity-80">Technologies</h5>
                  {project.skills.map(skill => (<p className="text-white bg-gradient-to-r from-[#4239c2] to-[#100e29] inline-block px-4 py-1 rounded-full m-1">{skill} </p>))}
                  <div className="flex gap-x-4 my-6">
                    <button className="flex items-center gap-x-2 border-2 border-[#4239c2] text-white px-4 py-1 rounded-md bg-gradient-to-r from-[#3629e9d0] to-[#25233c] " > <AiFillEye /> View Code</button>
                    <button className="flex items-center gap-x-2 border-2 border-[#4239c2] text-white px-4 py-1 rounded-md bg-gradient-to-r from-[#3629e9d0] to-[#25233c]" > <BiCodeAlt /> Live Demo</button>
                  </div>
                </div>
                <div className="relative w-full h-[300px] sm:h-[450px] md:h-[270px] lg:h-[300px] transition-all duration-500 group-hover:[transform:rotateY(12deg)]   ">
                  <Image
                    className="rounded-lg "
                    src={project.image}
                    alt="minhaz dev"
                    fill
                    priority
                  />
                </div>
              </div>
            ))
          }

        </div>
        <div className="flex justify-center">
           <button onClick={() => setShowAllProjects(!showAllProjects)} className="text-sm  mx-auto px-5 py-3 rounded-lg text-white underline">{!showAllProjects?"All Projects": "View Less"} </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
