import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  // bg-[#100e29]

    


  return (
    <main className="bg-gradient-to-tr from-[#100e29] via-[#152b44] flex flex-col gap-y-12  to-[#0F172A]  ">
      <div className="">
        <Navbar />
      </div>
      <div  >
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer/>
      </div>
      {/* <div>
        <Blogs/>
      </div> */}
    </main>
  );
}
