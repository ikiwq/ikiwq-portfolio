import React, { useEffect, useRef } from 'react'
import { BiRightArrow } from 'react-icons/bi'
import Scrambler from "scrambling-letters"
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import javascript from '../../assets/icons/javascript.png'
import react from '../../assets/icons/react.png'
import express from '../../assets/icons/express.png'
import mongodb from '../../assets/icons/mongodb.png'
import nodejs from '../../assets/icons/nodejs.png'
import nextjs from '../../assets/icons/nextjs.png'
import cpp from '../../assets/icons/cpp.png'
import python from '../../assets/icons/python.png'
import java from '../../assets/icons/Java.png'

const Skills = ({nightMode}) => {
    const divRef = useRef(null);
    useEffect(()=>{
        let divRef = document.querySelector(".divRef");
        const observer = new IntersectionObserver(()=>{
                Scrambler({target: "#skill-text",
                random: [500, 1000],
                speed: 50,});
        });
        observer.threshold = [0.00, 0.01];
        observer.observe(divRef); 
    },[]);

    
  return (
    <div name="skills" className={`w-full md:h-screen flex justify-center items-center transition-all duration-500 ${nightMode ? "bg-black" : "bg-white"}`}>
        <div className='container mx-auto max-w-6xl px-4 rounded-xl py-4 divRef mt-10 md:mt-0'>
            <h1 className=' font-Bebas text-red-600 text-6xl text-center md:text-start' id="skill-text">MY SKILLS<span className='font-Source'></span></h1>
            <div className={`flex flex-col md:flex-row justify-between items-center md:items-start md:grid-cols-3 mt-2 text-2xl text-white font-Source gap-4 md:gap-0 ${nightMode ? "text-white" : "text-black"}`}>
                <div className='flex flex-col justify-start items-center text-3xl gap-6 md:items-start'>
                <div className='flex items-center text-red-600'><BiRightArrow className='text-base'/><h1>Web-development();</h1></div>
                    <div className="flex items-center justify-center">
                        <img src={html} className="w-10"/>
                        <p id='skill-text'>Html</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={css} className="w-10"/>
                        <p id='skill-text'>Css</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={javascript} className="w-10"/>
                        <p id='skill-text'>Javascript</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={react} className="w-8"/>
                        <p id='skill-text'>React</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={nextjs} className="w-8 bg-white rounded-full"/>
                        <p id='skill-text'>NextJS</p>
                    </div>
                </div>

                <div className='flex flex-col justify-start items-center text-3xl gap-6 md:items-start'>
                    <div className='flex items-center text-red-600'><BiRightArrow className='text-base'/><h1>Backend();</h1></div>
                    <div className='flex items-center justify-center'>
                        <img src={express} className="w-8"/>
                        <p id='skill-text'>Express</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={mongodb} className="w-8"/>
                        <p id='skill-text'>Mongodb</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={nodejs} className="w-8"/>
                        <p id='skill-text'>NodeJS</p>
                    </div>
                </div>

                <div className='flex flex-col justify-start items-center text-3xl gap-6 md:items-start'>
                <div className='flex items-center text-red-600'><BiRightArrow className='text-base'/><h1>Languages();</h1></div>
                    <div className='flex items-center justify-center'>
                        <img src={cpp} className="w-8"/>
                        <p id='skill-text'>C++</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={python} className="w-8"/>
                        <p id='skill-text'>Python</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={java} className="w-8"/>
                        <p id='skill-text'>Java</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills