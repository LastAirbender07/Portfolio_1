import React from 'react'
import { 
  crop,
  Cyber,
  FaceReg,
  LibApp,
  ML,
  ToDo,
  webDesign,
  Portfolio,
  SocialMedia
} from '../../assets/index'

import Title from '../home/Title'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects"/>
      <div className='w-full grid grid-cols-2 gap-10'>
        <div className='px-6'>
          <ProjectCard
            title='Smart Attendance System'
            category='Face Recognition | Web Development'
            img={FaceReg}
          />
          <ProjectCard
          title='Web Design'
          category='React Js | UI Design'
          img={webDesign}
          />
          <ProjectCard
          title='Crop Recommendation'
          category='Machine Learning'
          img={crop}
          />
          <ProjectCard
          title='To Do App'
          category='React Js'
          img={ToDo}
          />
          <ProjectCard
          title='Mini Social Media App'
          category='React Js'
          img={SocialMedia}
          />
        </div>
        <div className='px-6'>
        <ProjectCard
          title='Library App'
          category='App Development'
          img={LibApp}
          />
          <ProjectCard
          title='ML project'
          category='Machine Learning'
          img={ML}
          />
          <ProjectCard
            title='AWS HoneyPot Analysis'
            category='CyberSecurity | Machine Learning'
            img={Cyber}
          />
          <ProjectCard
          title='Portfolio Website'
          category='React | Tailwind CSS'
          img={Portfolio}
          />
        </div>
      </div>
    </div>
  )
}

export default Project
