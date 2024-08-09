/* eslint-disable @next/next/no-sync-scripts */
"use client"
import { RiSendPlaneFill } from "react-icons/ri";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useForm } from "react-hook-form";
import React from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const { register, handleSubmit , reset} = useForm();
     
    const onSubmit = (data: any) => {
         
        // service id , template id, public key
        const service_id = "service_1ielev7"
        const template_id = "template_ioia06t"
        const public_key="aOMxOPCaxIn6IdqCc"

        const mailTemplates= {
            from_name: data.user_name,
            from_email: data.user_email,
            to_name:"Minhaz",
            message:data.message
        }
        
        emailjs
        .send(service_id, template_id, mailTemplates, {
          publicKey: public_key,
        })
        .then(
          (response) => {
            if(response.status){
                toast.success("Submit Successful",{
                    position:'bottom-right'
                });
                reset()
            }
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    
   
    return (
        <div >
            <div className='container mx-auto px-0 md:px-0 my-4'>
                <div>
                    <h2 className="text-3xl text-sky-400 font-bold text-center mb-12 ">Get into Touch <span className="text-[#8ff577]">__</span></h2>
                    
                </div>
               

                <div className='md:flex justify-around items-center  z-20'>

                    <div className='flex justify-center '>
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/4a0352ce-5041-4b90-b63a-2f63cabd5023/r8OGTFKzvI.json"
                             
                            className="md:w-[500px] w-[300px] md:h-[500px] h-[300px]"
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>

                    </div>
                    <div className='px-8 md:px-0'> 
                        <form className='' onSubmit={handleSubmit(onSubmit)}>
                            <div >

                                <input className='my-3 w-full h-10 px-3 focus:border-green-400 border-2 outline-none rounded-md focus:shadow-2xl shadow-indigo-900 ' type='text' required {...register("user_name")} placeholder='Full-Name' />
                                <input className='my-3 w-full h-10 px-3 focus:border-green-400 border-2 outline-none rounded-md focus:shadow-2xl shadow-indigo-900 ' type='text' required {...register("user_email")} placeholder='E-mail' />
                                <textarea className='my-3 w-full h-10 px-3 focus:border-green-400 border-2 outline-none rounded-md focus:shadow-2xl shadow-indigo-900 ' required style={{ height: "160px" }}  {...register("message")} placeholder="What's you mind?" ></textarea>
                            </div>

                            <button className='border-2 text-xl border-white hover:border-green-700 px-3 py-2 bg-transparent rounded-lg flex items-center gap-2 hover:text-red-700 hover:bg-white bg-green-400 text-green-400 transition-all duration-200 active:bg-zinc-500    ' type='submit'>Get into Touch <RiSendPlaneFill className="text-xl" /></button>
                        </form>
                    </div>
                </div>
            </div>
         <ToastContainer/>
        </div>
    )
}

export default Contact
