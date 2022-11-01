import React, {useRef, useEffect} from 'react'
import './Styles.scss'

import { Link } from 'react-scroll'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useState } from 'react'
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'
import { AiFillGithub, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'

const NavBar = ({nightMode, setNightMode}) => {

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

  const [menu, setMenu] = useState(false);
  const socialRef = useRef(null);

  const switchTheme = () => {
    if(nightMode){
      setNightMode(false);
      localStorage.setItem("theme", false);
      return;
    }
    setNightMode(true);
    localStorage.setItem("theme", true);
  }

  useEffect(()=>{
    let links = document.getElementsByClassName('navbar-link');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry=>{
          entry.target.classList.add('navbar-link-active');
          entry.target.classList.remove('navbar-link');
      })
    });

    for(let i=0;i<links.length;i++){
      observer.observe(links[i]);
    }
  });

  const switchMenu = () => {
    if(menu){
      setMenu(false);
      return;
    }
    setMenu(true);
  }

  return (
    <div className= {`py-1 text-3xl font-Bebas fixed top-0 left-0 w-full transition-all z-50 duration-500 ${nightMode ? "bg-black" : "bg-white" }`}>
      {menu && 
        <div ref={socialRef} className={`mobile-menu h-screen w-screen ${nightMode ? "bg-black" : "bg-white"} absolute z-50`}>
          <div className='text-red-600 absolute right-5 top-5 flex gap-2'>
          </div>
          <div className='text-red-600 gap-4 justify-center items-center flex flex-col h-full text-6xl'>
            <Link to='home' smooth duration={500} onClick={()=>{setMenu(false)}}><p className='navbar-link'>Home</p></Link>
            <Link to='about' smooth duration={500} onClick={()=>{setMenu(false)}}><p className='navbar-link'>About</p></Link>
            <Link to='skills' smooth duration={500} onClick={()=>{setMenu(false)}}><p className='navbar-link'>Skills</p></Link>
            <Link to='portfolio' smooth duration={500} onClick={()=>{setMenu(false)}}><p className='navbar-link'>Portfolio</p></Link>
            <Link to='contact' smooth duration={500} onClick={()=>{setMenu(false)}}><p className='navbar-link'>Contact</p></Link>
            <div className='flex'>
              {socials.map((social)=>{
                  return(
                    <a href={social.link} target="_blank" rel='noreferr' className={`navbar-link ${ nightMode ? "text-white" : "text-black"} `}>{social.component}</a>
                  )
                })}
            </div>
          </div>
        </div>}

        <div className='flex justify-between container mx-auto px-2'>
        <div className='text-red-600'>
            <p className='font-handwrite text-4xl'>Iki</p>
        </div>
        <div className='hidden text-red-600 gap-4 justify-center items-center md:flex'>
            <Link to='home' smooth duration={500}><p className='navbar-link-active'>Home</p></Link>
            <Link to='about' smooth duration={500}><p className='navbar-link-active'>About</p></Link>
            <Link to='skills' smooth duration={500}><p className='navbar-link-active'>Skills</p></Link>
            <Link to='portfolio' smooth duration={500} onClick={()=>{setMenu(false)}}><p className='navbar-link-active'>Portfolio</p></Link>
            <Link to='contact' smooth duration={500} onClick={()=>{setMenu(false)}}><p className='navbar-link-active'>Contact</p></Link>
        </div>
          <div className='flex text-red-600 items-center justify-center gap-2 text-xl'>
            <div className='hover:cursor-pointer z-50' onClick={()=>{switchTheme()}}>
              {!nightMode ? <BsFillMoonFill className='moon-icon'/> : <BsFillSunFill className='sun-icon'/>}
            </div>
            <div className='text-2xl hover:cursor-pointer md:hidden z-50' onClick={()=>{switchMenu()}} >
              {menu ? <AiFillCloseCircle/> : <AiOutlineMenu/>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavBar