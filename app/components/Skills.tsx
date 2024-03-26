"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";

const languages = [
  "HTML",
  "CSS",
  "Tailwindcss",
  "Bootstrap",
  "MUI",
  "Scss",
  "Javascript",
  "Typescript",
  "Next",
  "API",
  "FIrebase",
  "Github",
  "Node",
  "Mongodb",
  "express",
  "Mongoose",
];

const Skills = () => {
  return (
    <div>
      <div className="container mx-auto px-8 md:px-0 py-8">
        <div className="flex justify-center">

        <h2 className="text-3xl text-sky-400 font-bold text-center opacity-70">
          Design && Development <span className=" bg-gradient-to-r from-[#4239c2] to-[#100e29] inline-block px-4 py-1 rounded-3xl shadow-2xl opacity-100 text-white">Skills</span>
        </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1  justify-center items-center gap-y-8 md:gap-x-4 w-full">
            <div className="flex justify-center items-center">
              <div className="relative w-96  h-80">
                <Image
                  src="https://i.ibb.co/W5fpk8N/skills-removebg-preview.png"
                  fill
                  alt="minhaz dev"
                />
              </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-y-4 ">
            {languages.map((language,index) => (
              <div key={index} className="flex ">
                <h2 className="bg-[#8ef577bd] px-3 py-1 rounded-2xl font-bold text-[#0F172A]">
                  {language}
                </h2>{" "}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
