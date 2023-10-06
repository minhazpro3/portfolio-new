"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";


const languages = ["HTML", "CSS", "Tailwindcss", "Bootstrap", "MUI", "Scss", "Javascript", "Typescript","Next", "API","FIrebase", "Github", "Node", "Mongodb", "express", "Mongoose" ]


const Skills = () => {
  return (
    <div  >
      <div className="container mx-auto px-8 md:px-0 py-8">
        <div className="grid grid-cols-2 justify-center items-center gap-x-4 w-full">
          <div className="flex flex-col gap-y-3">
            <h2 className="text-3xl text-sky-400 font-bold">Design + Development</h2>
            <h2 className="text-3xl">Technologies</h2>
            <h2 className="text-3xl">Always Responsive</h2>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 ">
           {languages.map(language=>
           <div className="flex ">
           <h2 className="bg-[#8ff577] px-3 py-1 rounded-2xl font-bold text-[#0F172A]">{language}</h2>{" "}
           {/* <div className="relative ">
             <div className="overflow-hidden h-5  text-xs text-center rounded bg-emerald-200 ">
               <div
                 style={{ width: "80%" }}
                 className="shadow-none h-5 absolute top-0  text-center whitespace-nowrap text-white justify-center bg-emerald-500"
               ></div>
               <h2 className="absolute right-[50%] text-sm ">80%</h2>
             </div>
           </div> */}
         </div>
           ) }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
