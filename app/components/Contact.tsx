/* eslint-disable @next/next/no-sync-scripts */
"use client"
import { RiSendPlaneFill } from "react-icons/ri";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import React from 'react'
import { useForm } from "react-hook-form";


const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <div >
            <div className='container mx-auto px-0 md:px-0 my-4'>
                <div>
                    <h2 className="text-3xl text-sky-400 font-bold text-center mb-12 ">Get into Touch <span className="text-[#8ff577]">__</span></h2>
                </div>
               

                <div className='flex justify-around items-center z-20'>

                    <div className='flex justify-center '>
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/4a0352ce-5041-4b90-b63a-2f63cabd5023/r8OGTFKzvI.json"
                            style={{ height: '500px', width: '500px' }}
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>

                    </div>
                    <div>
                        <form className='' onSubmit={handleSubmit(onSubmit)}>
                            <div className=''>

                                <input className='my-3 w-full h-10 px-3 focus:border-green-400 border-2 outline-none rounded-md focus:shadow-2xl shadow-indigo-900 ' type='text' required {...register("fullName")} placeholder='Full-Name' />
                                <input className='my-3 w-full h-10 px-3 focus:border-green-400 border-2 outline-none rounded-md focus:shadow-2xl shadow-indigo-900 ' type='text' required {...register("email")} placeholder='E-mail' />
                                <textarea className='my-3 w-full h-10 px-3 focus:border-green-400 border-2 outline-none rounded-md focus:shadow-2xl shadow-indigo-900 ' required style={{ height: "160px" }}  {...register("description")} placeholder="What's you mind?" ></textarea>
                            </div>

                            <button className='border-2 text-xl border-white hover:border-green-700 px-3 py-2 bg-transparent rounded-lg flex items-center gap-2 hover:text-red-700 hover:bg-white bg-green-400 text-black transition-all duration-200 active:bg-zinc-500    ' type='submit'>Get into Touch <RiSendPlaneFill className="text-xl" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
