/* eslint-disable @next/next/no-sync-scripts */
"use client"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import React from 'react'
import { useForm } from "react-hook-form";


const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <div>
            <div className='container mx-auto px-0 md:px-0'>
                <div>
                    <h2>Get in Touch</h2>
                </div>
                <div className='flex justify-around'>

                    <div className='flex justify-center'>
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/4a0352ce-5041-4b90-b63a-2f63cabd5023/r8OGTFKzvI.json"
                            style={{ height: '350px', width: '350px' }}
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>

                        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

                    </div>
                    <div>
                        <form className='' onSubmit={handleSubmit(onSubmit)}>
                            <div className=''>

                                <input className='my-3 w-full h-10 px-3 focus:border-green-400 border-2 outline-none rounded-md focus:shadow-2xl shadow-indigo-900 ' type='text' required {...register("fullName")} placeholder='Full-Name' />
                                <input className='my-3 w-full h-10 px-3 focus:border-green-400 border-2 outline-none rounded-md focus:shadow-2xl shadow-indigo-900 ' type='text' required {...register("email")} placeholder='E-mail' />
                                <textarea className='my-3 w-full h-10 px-3 focus:border-green-400 border-2 outline-none rounded-md focus:shadow-2xl shadow-indigo-900 '  required  style={{ height: "160px" }}  {...register("description")} placeholder="What's you mind?" ></textarea>
                            </div>
                            <input type="submit" placeholder='Get in Touch' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
