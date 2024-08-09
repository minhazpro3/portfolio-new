"use client"
import React, { useState } from 'react'
import { Inter, Roboto_Mono, Monda, Monoton, Allura, Tangerine, Shanti, Cedarville_Cursive, Ceviche_One } from 'next/font/google'
import { AiOutlineMenuFold } from "react-icons/ai"
import { IoCloseSharp } from "react-icons/io5"
import Link from 'next/link'
const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
})
const monda = Ceviche_One({
    subsets: ["latin"],
    weight: '400'
})



const Navbar = () => {
    const [value, setValue] = useState<boolean>(true)

    return (
        <header className="bg-transparent w-full ">
            <div className='container mx-auto md:px-0 px-8'>
                <div className='flex justify-between items-center  py-4 '>
                    <h2 className={` text-[#878a8fe7]  text-2xl md:text-3xl font-bold z-20`}>Dev_Minhaz</h2>
                    <div className={` ${!value ? "top-[0%] md:-top-[80%] " : " -top-[80%] "}  md:static absolute bg-[#152b44] md:bg-transparent md:min-h-fit min-h-[80vh] left-0 w-full ease-in-out   flex  justify-center items-center md:justify-end transition-all transform duration-300 z-10 `}>
                        <div className='flex md:flex-row flex-col gap-y-5 py-8 md:py-0 md:gap-x-4 text-[#878a8fe7] '>

                            <a className='bg-indigo-950 md:bg-transparent md:border-2 md:border-white   md:rounded-3xl py-1 md:py-0 w-full px-20 md:px-4' href=""  >Home</a>

                            <a className='bg-indigo-950 md:bg-transparent py-1 md:py-0 w-full px-20 md:px-1 ' href="">Projects</a>
                            <a className='bg-indigo-950 md:bg-transparent py-1 md:py-0 w-full px-20 md:px-1 ' href="">About</a>
                            <a className='bg-indigo-950 md:bg-transparent py-1 md:py-0 w-full px-20 md:px-1  ' href="">Contact</a>
                        </div>
                    </div>
                    <div className='text-white md:hidden z-20'>
                        {
                            value ? <button onClick={() => setValue(!value)} className='pt-1.5 border-2 border-gray-800  px-1.5 pb-1.5'><AiOutlineMenuFold size={20} /></button> : <button onClick={() => setValue(!value)} className='pt-1.5 border-2 border-gray-800 rounded-full px-1.5 pb-1.5'><IoCloseSharp size={20} /></button>
                        }
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar