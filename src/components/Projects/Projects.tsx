import React from 'react'
import { projects} from '../../helpers/projects'
import Project from '../Project/Project'

export const Projects = () => {
  return (
    
    <div className='w-[100%] max-w-[1200px] px-20 bg-white z-49 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28 gap-y-14 min-h-screen p-4'>
        {projects.map((project) => {
        return(
            <Project {...project} key={project.name}/>
        )
    })}</div>
  )
}
