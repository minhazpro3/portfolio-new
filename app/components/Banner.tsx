"use client";
import React from "react";
import Laptop from "../../public/images/laptop.jpg";
import minhaz from "../../public/images/output-onlinegiftools (1).gif";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Abyssinica_SIL,
  Abhaya_Libre,
  Akaya_Kanadaka,
  Abril_Fatface,
  Aguafina_Script,
  Alfa_Slab_One,
  Alegreya_Sans_SC,
} from "next/font/google";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const inter = Akaya_Kanadaka({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const Banner = () => {
  const profession = "Hi, This's ";
  return (
    <div className="container mx-auto mb-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-4 p-6  -z-20">
        <div className="flex items-center h-full bg-gradient-to-tr from-[#100e29] via-[#152b44]  to-[#0F172A] rounded-r-full  ">

      
        <div className="relative mt-16 md:mt-0 px-12 py-8 md:py-0 ">
          <h2 className="text-3xl text-sky-400 opacity-75 font-bold ">
            {profession} <span className="text-[#8ff577] ">Minhaz</span>
          </h2>

          <TypeAnimation
            className={`${inter.className} text-3xl sm::text-7xl   font-bold text-[#8ff577] my-3 md:my-5`}
            sequence={[
              // Same substring at the start will only be typed once, initially

              " Front End Developer",
              1500,
              " Web Developer",
              1500,
            ]}
            style={{ fontSize: '2.5em',  }}
            speed={20}
            repeat={Infinity}
             
          />
          {/* <h2 className={`${inter.className} first-letter:text-7xl first-letter:float-top text-5xl font-bold text-[#8ff577]`}>Junior Web Developer</h2> */}
          <div className="flex gap-x-4 sm-gap-x-12 items-center">
            <div className="flex gap-x-3 my-4">
              <FaFacebook
                className="text-sky-700 hover:scale-125 transition-all duration-150 hover:cursor-pointer shadow-md  shadow-[#8e8affc2] rounded-full"
                size={30}
              />
              <FaLinkedin
                className="text-sky-700 hover:scale-125 transition-all duration-150 hover:cursor-pointer shadow-md  shadow-[#8e8affc2] rounded-sm"
                size={30}
              />
              <FaGithub
                className="text-sky-700 hover:scale-125 transition-all duration-150 hover:cursor-pointer shadow-md  shadow-[#8e8affc2] rounded-full"
                size={30}
              />
            </div>
            <button className="text-sm sm:text-base px-8 py-2 rounded-full bg-[#8e8affc2]">
              Download
            </button>
          </div>
        </div>
        </div>
        <div className=" mt-16 md:mt-0">
          <div className="relative w-full h-[300px] sm:h-[450px] md:h-[350px] lg:h-[480px]">
            <Image
              className="rounded-lg opacity-40"
              src={Laptop}
              alt="minhaz"
              fill
              priority
            />

            <Image
              className=" md:px-7 "
              src={minhaz}
              alt="minhaz"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
