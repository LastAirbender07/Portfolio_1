import React from 'react'
import ProjectCard from '../projects/ProjectCard'
import { 
    AWS_1,
    AWS_2,
    BugBounty,
    CTF_1,
    CTF_2,
    CTF_3,
    CTF_4,
    Deloitte,
    EHE,
    ELT,
    Google,
    SQLI
  } from '../../assets/index'

const Certifications = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-5'>
        <div className='px-6'>
          <ProjectCard
            title='Virtual Experience Program' 
            category='Deloitte'
            img={Deloitte}
          />
          <ProjectCard
            title='Cloud Quest' 
            category='AWS'
            img={AWS_2}
          />
          <ProjectCard
            title='Digital Marketing'
            category='Google'
            img={Google}
          />
          <ProjectCard
            title='Bug Bounty' 
            category='Codered'
            img={BugBounty}
          />
          <ProjectCard
            title='Shaastra 2023-CTF' 
            category='IIT Madras'
            img={CTF_1}
          />
          <ProjectCard
            title='SQL Injection' 
            category='Codered'
            img={SQLI}
          />
        </div>
        <div className='px-6'>
          <ProjectCard
            title='CTF Runner-up' 
            category='Chennai Institute of Technology'
            img={CTF_4}
          />
          <ProjectCard
          title='Cloud Practitioner'
          category='AWS'
          img={AWS_1}
          />
          <ProjectCard
            title='Ethical Hacking Essentials' 
            category='Codered'
            img={EHE}
          />
          <ProjectCard
            title='Cepheus-CTF' 
            category='IIT Goa'
            img={CTF_2}
          />
          <ProjectCard
            title='Energy Literacy Training' 
            category='Energy Swaraj Foundation'
            img={ELT}
          />
          <ProjectCard
            title='Prometeo-CTF' 
            category='IIT Jodhpur'
            img={CTF_3}
          />
        </div>
    </div>
  )
}

export default Certifications
