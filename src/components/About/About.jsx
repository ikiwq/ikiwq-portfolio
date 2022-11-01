import React from 'react'
import { IoMdPaper } from 'react-icons/io'
import Logo from '../../assets/logo.jpg'

const About = ({nightMode}) => {
  return (
    <div name="about" className={`${nightMode ? "bg-black" : "bg-white"} w-full flex flex-col items-center justify-center pb-10 transition-all duration-500 md:h-screen`}>
        <div className='max-w-6xl mt-2 md:mt-10 gap-5 md:grid md:grid-cols-5'>
            <div className='col-span-2 px-4 flex justify-center'>
                <img src={Logo} className='rounded-xl object-cover'></img>
            </div> 
            <div className={`${nightMode ? "text-white" : "text-black"} col-span-3 flex flex-col items-center gap-3 px-5 md:px-0 md:items-start`}>
                <div className='flex flex-col items-center justify-between text-center md:text-start md:items-start md:justify-start'>
                    <span className='text-5xl font-Bebas md:text-7xl mt-2 md:mt-0'>Something about <span className='text-red-600'>me</span></span>
                    <span className='text-4xl font-Fira font-normal text-center md:text-start'>Hello, I am Iki. I am a <span className='text-red-600'>Web Developer</span>.</span>
                    <span className='text-2xl font-Fira font-light mt-2'>I am an  18 years old full-stack web developer currently living in Italy.
                    I've always been interested in technology and I'm keen to learn new things everyday. </span>
                    <span className='text-2xl font-Fira font-light mt-2 text-red-600'>My projects are built around frameworks and popular stacks from the ground up, but sometimes I like to code
                    something that isn't web related: I am very interested also in game and graphics development.</span>
                    <span className='text-2xl font-Fira font-light mt-2 '>Html, Css and Javascript are my most used tools,but I can also write in Java, C++ and Python.</span>
                </div>
                <button className={`bg-red-600 text-white px-3 py-4 transition-all 
                    duration-300 rounded-md flex items-center gap-2 hover:scale-110`}>Download my curriculum!<IoMdPaper className='text-2xl'/></button>
            </div>
        </div>
    </div>
  )
}

export default About