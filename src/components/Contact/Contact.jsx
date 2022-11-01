import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'

const Contact = ({nightMode}) => {
  return (
    <div name="contact"className={`w-full h-screen ${nightMode ? "bg-black" : "bg-white"} transition-all duration-500 mt-44 md:mt-20 flex items-center`}>
        <div className='max-w-6xl mx-auto mt-10 w-full px-4 md:px-0'>
            <h1 className='text-7xl text-red-600 font-Bebas'>Contact Me!</h1>
            <div className='w-full grid grid-cols-1 xl:grid-cols-2 space-x-0 space-y-4 xl:space-x-4 xl:space-y-0'>
              <div className=' col-span-1 flex justify-center items-center'>
                <span className={`${ nightMode ? "text-white" : "text-black"} text-3xl`}>As a developer, I am seeking new opportunities everyday. I am willing learn new things and give my contribute
                to interesting and innovative works.</span>
              </div>
              <div className='col-span-1 text-red-600 text-6xl flex xl:flex-col justify-around items-start h-full'>
                <a className="flex items-center justify-center text-4xl hover:scale-110 transition-all duration-300" href="https://github.com/ikiwq" rel='noreferrer noopener' target="_blank"><AiFillGithub className="text-6xl"/><p className='hidden xl:flex'>Ikiwq</p></a>
                <a className="flex items-center justify-center text-4xl hover:scale-110 transition-all duration-300" href='https://www.linkedin.com/in/christopher-domenicano-169468251/' rel='noreferrer noopener' target="_blank"><AiFillLinkedin className='text-6xl'/><p className='hidden xl:flex'>Christopher Domenicano</p></a>
                <a className="flex items-center justify-center text-4xl hover:scale-110 transition-all duration-300" href="mailto:domenicano.chris@gmail.com"><AiOutlineMail className="text-6xl"/><p className='hidden xl:flex'>domenicano.chris@gmail.com</p></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact