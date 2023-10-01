"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  return (
    <div>
      <div className="container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-2 justify-center items-center gap-x-4 w-full">
          <div>
            <h2>Design + Development</h2>
            <h2>Technologies</h2>
            <h2>Always Responsive</h2>
          </div>
          <div className="list-none ">
            <li className="">
              <h2>HTML</h2>{" "}
              <div className="relative ">
                <div className="overflow-hidden h-5  text-xs text-center rounded bg-emerald-200 ">
                  <div
                    style={{ width: "80%" }}
                    className="shadow-none h-5 absolute top-0  text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                  ></div>
                  <h2 className="absolute right-[50%] text-sm ">80%</h2>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
