import React, { useEffect } from 'react'

import "./Styles.scss"
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

const Project = ({right, nightMode, project}) => {
  const esRight = document.getElementsByClassName("start-right");
  const esLeft = document.getElementsByClassName("start-left");

  useEffect(()=>{

    for(let i=0;i<esRight.length;i++){
      observerRight.observe(esRight[i]);
    }

    for(let i=0;i<esLeft.length;i++){
      observerLeft.observe(esLeft[i]);
    }
    
    },[esRight, esLeft])

  const observerLeft = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("end-left");
      }
    })
  })

  const observerRight = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("end-right");
      }
    })
  })

  const openLink = () => {
    let url;
    if( project.linkUrl){
      url = project.linkUrl;
    }else{
      url = project.githubUrl;
    }
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="">
      <div className={`hidden ${right ? "justify-end" : "justify-start" } "items-end relative md:flex`}>
        <div className='img-container relative w-4/6 hover:scale-110 hover:cursor-pointer transition-all duration-300' onClick={()=>{openLink()}}>
            <div className='overflow-hidden max-w-5xl max-h-96'>
              <img src={project?.postImage?.url} className={`block w-full h-auto ${right ? "left-0 start-right": "right-0 start-left"} img-class`}/>
            </div>
            <div className={`absolute bottom-0 left-0 right-0 overflow-hidden h-full img-cover ${right ? "start-right": "start-left"}`}/>
        </div>
        <div className={`z-10 col-span-3 flex flex-col absolute ${ right ? "left-0 start-left" : "right-0 start-right"} md:top-0 xl:top-10 md:gap-4`}>
            <h1 className={`text-red-600 font-Bebas text-7xl ${right ? "text-start" : "text-end"} md:relative`}>{project.title}</h1>
            <div className={`${ right ? "text-start pr-2" : "text-end"} text-white font-Source px-2 bg-red-600 md:max-w-md xl:max-w-xl`}>
                <span>{project.projectDescription}</span>
            </div>
            <p className={`${ right ? "text-start" : "text-end"} ${nightMode ? "text-neutral-300" : "text-neutral-900"}  font-Source`}>{project.technologies}</p>
            <div className={`flex text-4xl text-red-600 items-center ${ right ? "justify-star" : "justify-end"}`}>
              { project.linkUrl ? <a target="_blank" href={project.linkUrl} rel="noreferr noopener"><AiOutlineLink className='hover:cursor-pointer hover:scale-110 duration-200 transition-all'/></a> : null}
              { project.githubUrl ? <a target="_blank" href={project.githubUrl} rel="noreferr noopener"><AiFillGithub className='hover:cursor-pointer hover:scale-110 duration-200 transition-all'/></a> : null}
            </div>
        </div>
      </div>
      <div className={`flex flex-col ${right ? "items-end" : "items-start" } "justify-end relative md:hidden`}>
        <h1 className={`text-red-600 font-Bebas w-full text-7xl ${right ? "text-start start-right" : "text-end start-left"} md:relative`}>{project.title}</h1>
        <img src={project?.postImage?.url} className={`w-4/5 ${right ? "left-0 start-right": "right-0 start-left"}`} onClick={()=>{openLink()}}/>
        <div className={`${ right ? "text-start left-0 start-left" : "text-end right-0 start-right"} px-2 text-white font-Source bg-red-600 max-w-xs absolute top-52 right-0 flex flex-col gap-2`}>
          <span className='text-sm'>{project?.projectDescription}</span>
          <span className='text-neutral-900 text-sm'>{project.technologies}</span>
            <div className={`flex text-3xl text-neutral-900 items-center ${ right ? "justify-star" : "justify-end"}`}>
              { project.linkUrl ? <a target="_blank" href={project.linkUrl} rel="noreferr noopener"><AiOutlineLink className='hover:cursor-pointer hover:scale-110 duration-200 transition-all'/></a> : null}
              { project.githubUrl ? <a target="_blank" href={project.githubUrl} rel="noreferr noopener"><AiFillGithub className='hover:cursor-pointer hover:scale-110 duration-200 transition-all'/></a> : null}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project