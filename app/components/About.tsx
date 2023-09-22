import Image from "next/image";
import React from "react";
import minhaz from "../../public/images/minhaz.jpg";
const About = () => {
  return (
    <div className="container mx-auto px-8 md:px-0 mb-8">
      <div className="">
        <div className="relative">
          <div className="relative w-[50%] h-[500px] ">
            <Image
              className=" md:px-7 "
              src={minhaz}
              alt="minhaz"
              fill
              priority
            />
          </div>
          <div className="z-10  bg-gradient-to-tr from-[#100e29] via-[#152b44]  to-[#0F172A] absolute pl-14 pr-20  py-12 top-20 left-[40%] rounded-tr-full">
            <h2 className="text-3xl text-[#8ff577] font-bold">Hi! I'm Md Minhaz</h2>
            <p className="text-base mb-2 text-[#8e8affc2]">
              Front End Developer, Content Creator
            </p>
            <p className="text-sm text-gray-400 leading-7">
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
  );
};

export default About;
