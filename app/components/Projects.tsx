"use client"
/* eslint-disable react/jsx-key */
import Image from "next/image";
import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai"
import { BiCodeAlt } from "react-icons/bi"


const projectsData = [
  {
    title: "Doctor Appointment & Shop",
    desc: "There are admin site, products management and order. Conditions with make a new admin, update, delete, add, payment gateway. it have admin facility. Responsive MERN Project with firebase authentication.",
    image: "https://i.ibb.co/kJ1yGbN/LIFE-CARE.png",
    skills: ["React", "TailwindCss", "React-hooks", "Node", "Mondodb", "Express", "Mongoose", "Firebase", "Github"],
    demo: "https://life-care-web.netlify.app/",
    client: "https://github.com/minhazpro3/doctors-appointment-shop-client",
    server: "https://github.com/minhazpro3/doctors-appointment-shop-server"
  },
  {
    title: "Workfleek Freelance (Team Project)",
    desc: "Freelance Marketplace related like seller & buyer. Seller can create a gig and can publish for service.",
    image: "https://i.ibb.co/g9r5y8J/Screenshot-13.png",
    skills: ["Nextjs", "TailwindCss", "React-hooks", "Node", "Mondodb", "Express", "Mongoose", "Firebase", "Github", "socket-io"],
    demo: "https://freelance-marketplace-project-client.vercel.app/",
    client: "https://github.com/minhazpro3/freelance-marketplace-project-client",
    server: "https://github.com/minhazpro3/freelance-marketplace-project-server"
  },

  {
    title: "Kart bazar shop",
    desc: "Front end e-commerce template made by nextjs. created pages shop, cart, register & contact. ",
    image: "https://i.ibb.co/ZzFtT5j/Screenshot-12.png",
    skills: ["React", "TailwindCss", "React-hooks", "Github"],
    demo: "https://kart-bazar-next-client.vercel.app/",
    client: "https://github.com/minhazpro3/kart-bazar-next-client",
    server: ""
  },
  {
    title: "Programming Blogs",
    desc: "Users can read blogs and language tutorial like Javascript, python etc. Beginner to advanced tutorial for a lerner with example.",
    image: "https://i.ibb.co/MnR2nmB/Screenshot-14.png",
    skills: ["Next.js", "TailwindCss", "Mdx", "Node", "Mondodb", "Express", "Mongoose", "Github"],
    demo: "https://docreader-rho.vercel.app/",
    client: "https://github.com/minhazpro3/docreader",
    server: ""
  },
]


const Projects = () => {
  const [show,setShow]=useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div>
      <div className="container mx-auto px-8 md:px-0 mb-8">
        <h2 className="text-3xl text-sky-400 font-bold text-center mb-12 ">My Projects <span className="text-[#8ff577]">__</span></h2>
        <div>
          {
            projectsData.slice(0, showAllProjects ? projectsData.length : 3).map(project => (
              <div className="grid grid-cols-1 md:grid-cols-2  hover:backdrop-blur-sm hover:bg-[#100e29]/30 px-3 py-6 transition-all duration-300 rounded-md  gap-x-4 my-12  [perspective:1000px] group" key={project.desc}>
                <div className="relative">
                  <h2 className="text-3xl text-[#8ff577] font-medium">{project.title}</h2>
                  <p className="text-base text-gray-400">
                    {project.desc}
                  </p>
                  <h5 className="text-xl font-bold text-sky-400 my-4 opacity-80">Technologies</h5>
                  {project.skills.map(skill => (<p className="text-white bg-gradient-to-r from-[#4239c2] to-[#100e29] inline-block px-4 py-1 rounded-full m-1" key={skill.length}>{skill} </p>))}
                  
                  <div className="flex gap-2 sm:gap-x-4 my-6 ">
                    {/* view button */}
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"> <button   className="flex text-xs   items-center gap-x-2 border-2 border-[#4239c2] text-white px-2 py-2 sm:py-2 rounded-md bg-gradient-to-r from-[#3629e9d0] to-[#25233c] " > <AiFillEye  />  Demo</button></a>

                    {/* code button */}
                    <a href={project.client} target="_blank" rel="noopener noreferrer"> <button   className="flex text-xs  items-center gap-x-2 border-2 border-[#4239c2] text-white px-2 py-2 sm:py-2 rounded-md bg-gradient-to-r from-[#3629e9d0] to-[#25233c] " > <BiCodeAlt  />  Client  
                    </button></a>

                    { project.server?<a href={project.server} target="_blank" rel="noopener noreferrer"> <button   className="flex text-xs  items-center gap-x-2 border-2 border-[#4239c2] text-white px-2 py-2 sm:py-2 rounded-md bg-gradient-to-r from-[#3629e9d0] to-[#25233c] " > <BiCodeAlt  />  Server  
                    </button></a>:""}
                    
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
          <button onClick={() => setShowAllProjects(!showAllProjects)} className="text-sm  mx-auto px-5 py-3 rounded-lg text-white underline">{!showAllProjects ? "All Projects" : "View Less"} </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
