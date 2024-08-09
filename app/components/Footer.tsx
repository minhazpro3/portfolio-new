"use client"
import React from 'react'
import ScrollToTop from 'react-scroll-to-top'

const Footer = () => {
    return (
        <div className='container mx-auto px-8 md:px-0 z-30' >
            <div className='border-t-2 border-gray-400 mb-2'>

            </div>
        <div className='flex justify-between'>
        <div className='mb-6'>
                <span className='text-gray-500'> All rights reserved©<a className='text-blue-600' href="" target='_blank'>Minhaz</a></span>
            </div>
            <div>
                <span className='text-gray-500 font-semibold'>2024</span>
            </div>
        </div>
        <ScrollToTop smooth top={800} color='#fff' width='15' height='15'  style={{padding:"3px 12px", borderRadius:"50px", backgroundColor:"#100e29",  marginBottom:"20px"   }} />
        </div>
    )
}

export default Footer
