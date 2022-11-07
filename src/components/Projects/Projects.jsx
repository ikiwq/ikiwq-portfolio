import React, { useEffect, useRef } from 'react'
import Project from './Project'
import {gql, useQuery} from '@apollo/client'
import { PROJECT_QUERY } from '../../services'

 const Projects = ({nightMode}) => {
 
  const {data, loading, error} =  useQuery(PROJECT_QUERY);
  const projects = data?.projectsConnection.edges || [];
  
  return (
    <div name="portfolio" className={`container max-w-6xl mx-auto px-4 py-4 ${ nightMode ? "bg-black" : "bg-white"} transition-all duration-500`}>
      <h1 className='text-red-600 font-Bebas text-7xl text-center md:text-end mt-10 md:mt-0'>MY PORTFOLIO</h1>
      <div className='flex flex-col gap-60 mt-8 md:gap-32'>
        {projects.map((project, index)=>(
            <Project nightMode={nightMode} project={project.node} right={index % 2 != 0} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Projects