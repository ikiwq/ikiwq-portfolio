import React, { useEffect, useRef } from 'react'
import { Link } from 'react-scroll';
import { AiFillGithub, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import {IoIosArrowRoundBack, IoIosArrowRoundForward, IoMdPaperPlane} from 'react-icons/io'
import { BsMouse2, BsTwitch } from 'react-icons/bs'
import ThreeJS from '../ThreeJSScene/ThreeJS'
import './Styles.scss'

const Home = ({nightMode}) => {

  const socials = [{
    name: "GitHub",
    link: "https://github.com/ikiwq",
    component: <AiFillGithub/>,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCwdhc-Phu8SVeQkwyjQUfsA",
    component: <AiFillYoutube/>
  },
  {
    name: "Twitter",
    link: "https://twitter.com/iki_wq",
    component: <AiFillTwitterCircle/>
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/ikiwq_",
    component: <BsTwitch/>
  }]
  
    useEffect(()=>{
      let tags = document.getElementsByClassName("social-icon-start");

      for(let i=0;i<tags.length;i++){
        let duration = 600 * i;
        tags[i].style.cssText = `transition-duration:${duration}ms;`;
      }

      const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add("social-icon")
          }else{
            entry.target.classList.remove("social-icon")
          }
        })
      })

      for(let i=0;i<tags.length;i++){
        observer.observe(tags[i]);
      }

    },[])
    
      

  return (
    <div name="home" className={`max-w-6xl mx-auto h-screen mt-10 ${nightMode ? "bg-black" : "bg-white" } transition-all duration-500`}>
        <div className='grid grid-cols-1 h-full md:grid-cols-2'>
          <div className='flex flex-row'>
            <div className='hidden text-red-600 justify-center items-center pr-5 md:flex'>
              <div className='border-red-500 flex gap-2 border-r-2 px-2 pr-8 flex-col text-3xl md:pr-2'>
                {socials.map((social)=>{
                  return(
                    <div key={social.name} className={`text-4xl hover:scale-110 hover:cursor-pointer social-icon-start`}>
                      <a href={social.link} target="_blank" rel='noreferr' className={`${ nightMode ? "hover:text-white" : "hover:text-black"}`}>{social.component}</a>
                    </div>
                  )
                })}
              </div>
            </div>
              <div className=' relative w-full h-full flex flex-col items-center md:items-start justify-center gap-3 col-span-1 text-white pr-3md:pr-0'>
                <div className='flex w-full justify-center items-center'>
                  <span className={`text-4xl text-center md:text-start md:text-6xl ${nightMode ? "text-white" : "text-black" }`}>
                    Hello, I am 
                    <span className='text-red-600'> Iki </span> 
                    and I am a
                    <span className='text-red-600'> Developer</span>.
                  </span>
                </div>
                <Link to="contact" smooth duration={500}><button className=' contact-button px-5 py-3 bg-red-600 rounded-md flex items-center justify-center gap-2 mx-auto md:mx-0'>Contact me! <IoMdPaperPlane className='paper-plane text-xl'/></button></Link>
                <Link to="about" smooth duration={500}><button className={`hidden ${ nightMode ? "text-white" : "text-black"} absolute bottom-20 flex items-center text-xl animate-bounce md:flex`}><BsMouse2/>Scroll Down!</button></Link>
              </div>
            </div>
            <div className='h-full flex items-center justify-center col-span-1'>
              <div className='h-96 w-full'>
                <span className={`flex items-center justify-center ${nightMode ? "text-white" : "text-black"} text-center text-xl gap-2 move-div`}><IoIosArrowRoundBack/> Move me around!<IoIosArrowRoundForward/></span>
                <ThreeJS nightMode={nightMode}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home

