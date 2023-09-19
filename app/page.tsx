import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";

export default function Home() {
  return (
    <main className="bg-[#100e29]">
      <div className="">
        <Navbar />
      </div>
      <div className="   w-full border-t-[1px] border-sky-800">
        <Banner />
      </div>
      <div>
        <About/>
      </div>
    </main>
  );
}
