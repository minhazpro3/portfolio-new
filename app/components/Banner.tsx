import React from 'react'
import Laptop from "../../public/images/laptop.jpg"
import minhaz from "../../public/images/minhaz.jpg"
import { FaFacebook,FaLinkedin,FaGithub } from 'react-icons/fa';
import { Abyssinica_SIL, Abhaya_Libre, Akaya_Kanadaka, Abril_Fatface, Aguafina_Script, Alfa_Slab_One, Alegreya_Sans_SC } from "next/font/google"
import Image from 'next/image'
const inter = Akaya_Kanadaka({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})
const Banner = () => {
    const profession = "This's "
    return (
        <div className='container mx-auto  '>
            <div className='grid grid-cols-2 items-center gap-x-4 p-6  -z-20'>
                <div className='relative '>
                    <h2 className='text-2xl text-sky-400 opacity-75 font-bold '>{profession} <span className='text-[#8ff577]'>Minhaz</span></h2>
                    <h2 className={`${inter.className} first-letter:text-7xl first-letter:float-top text-5xl font-bold text-[#8ff577]`}>Junior Web Developer</h2>
                    <div className='flex gap-x-12 items-center'>
                        <div className='flex gap-x-3 my-4'>
                            <FaFacebook className="text-sky-700 hover:scale-125 transition-all duration-150 hover:cursor-pointer shadow-md  shadow-[#8e8affc2] rounded-full" size={30} />
                            <FaLinkedin className="text-sky-700 hover:scale-125 transition-all duration-150 hover:cursor-pointer shadow-md  shadow-[#8e8affc2] rounded-sm" size={30} />
                            <FaGithub className="text-sky-700 hover:scale-125 transition-all duration-150 hover:cursor-pointer shadow-md  shadow-[#8e8affc2] rounded-full" size={30} />
                        </div>
                        <button className='text-base px-8 py-2 rounded-full bg-[#8e8affc2]'>Download</button>
                    </div>
                </div>
                {/* <div className=''>
                    <div className="relative w-full h-[450px]">
                        <Image className='rounded-lg opacity-40' src={Laptop} alt='' fill priority />
                        <div className="relative w-[27rem] h-[370px] p-4 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 right-0">
                            <Image className='rounded-lg   absolute' src={minhaz} alt='' fill priority />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Banner