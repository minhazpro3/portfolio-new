import Image from "next/image";
import React from "react";
import minhaz from "../../public/images/minhaz.jpg";
const About = () => {
  const im = "I'm"
  return (
    <div >
      <div className="container mx-auto px-8 md:px-0 mb-8">
        <div className="">
          <h2 className="text-3xl text-sky-400 font-bold text-center mb-12 ">About me <span className="text-[#8ff577]">__</span></h2>
          <div className="relative">
            <div className="absolute bg-gradient-to-tr from-[#100e29] via-[#152b44] w-full md:w-[50%]  sm:h-[450px] h-[350px] md:h-[300px] rounded-[8%] lg:h-[500px]">

            </div>
            <div className="relative w-full md:w-[50%] sm:h-[450px] h-[350px] md:h-[300px] lg:h-[550px] ">
              <Image
                className="  p-4   rounded-[8%] "
                src="https://i.ibb.co/Q6Vy5WV/minhaz.jpg"
                alt="minhaz"
                fill
                priority
              />
            </div>

            <div className="z-10  bg-gradient-to-tr from-[#100e29] via-[#152b44] to-[#0F172A] relative md:absolute lg:pl-14 md:pl-8 md:pr-16 lg:pr-20 lg:py-12 py-6 px-4 sm:px-0 sm:pl-5 sm:pr-12 my-10 md:my-0 md:top-6 lg:top-28 md:left-[40%] sm:rounded-tr-full rounded-tr-[6rem] sm:rounded-none">
              <h2 className="xl:text-3xl lg:text-2xl md:text-[16px sm:text-2xl text-2xl text-[#8ff577] font-bold">Hi! {im} Md Minhaz</h2>
              <p className="xl:text-base lg:text-base md:text-[14px] sm:text-xl text-sm mb-2 text-[#8e8affc2]">
                Front End Developer || Mern Stack Developer 
              </p>
              <p className="xl:text-sm lg:text-[12px] md:text-[10px] sm:text-xs text-[10px] text-gray-400 xl:leading-7 ">
                I am a Front-end Developer who specializes in Next.js, React.js,
                TypeScript, and Tailwind CSS. My specialty is creating engaging
                and responsive user interfaces that enhance the user experience on
                the web. I build modular and efficient web components with
                Next.js. I use TypeScript to ensure code reliability, and Tailwind
                CSS to streamline styling for consistency. As a Next.js expert, I
                can build fast, SEO-friendly web applications. My goal is to
                create visually appealing, high-performance websites that offer
                seamless user interaction and stay on top of modern web
                development trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
