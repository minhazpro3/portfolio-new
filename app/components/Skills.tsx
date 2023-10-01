"use client"
import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  return (
    <div>
        <div className='container mx-auto px-8 md:px-0'>
            <div className='grid grid-cols-2 justify-center items-center gap-x-4 w-full'>
                <div>
                    <h2>Design + Development</h2>
                    <h2>Technologies</h2>
                    <h2>Always Responsive</h2>
                </div>
                <div className='list-none'>
                    <li> <ProgressBar completed={60} /></li>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills