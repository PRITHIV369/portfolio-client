import React, { useState, useEffect } from 'react'
import { getProjects } from '../service/api'
import ProjectCard from '../components/ProjectCard'
const Projects = () => {
  const [projectdata, setProjectdata] = useState(null)
  const fetchprojects = async () => {
    try {
      const { data } = await getProjects()
      setProjectdata(data)
    } catch (error) {
      console.warn(error);
    }
  }
  useEffect(() => {
    fetchprojects()
  }, [])
  if(!projectdata){
    return (
       <div className='w-[100%] h-[90vh] bg-slate-950 flex justify-center items-center'></div>
    )
  }
  return (
    <>
    <div className='w-[100%] h-[90vh] bg-slate-950 flex justify-center items-center'>
              {
          projectdata.map((data, index) => (
            <ProjectCard title={data.title} disp={data.disp}/>))
        }
</div>
    </>
  )
}

export default Projects