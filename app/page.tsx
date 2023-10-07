import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  // bg-[#100e29]
  return (
    <main className="bg-gradient-to-tr from-[#100e29] via-[#152b44] flex flex-col gap-y-12  to-[#0F172A]  ">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Banner />
      </div>
      <div className="">
        <About/>
      </div>
      <div>
        <Skills/>
      </div>
    </main>
  );
}
