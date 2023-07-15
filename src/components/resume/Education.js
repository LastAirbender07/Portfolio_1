import React from 'react'
import { GiGraduateCap } from 'react-icons/gi'
import { MdWork } from 'react-icons/md'
import ResumeTitle from './ResumeTitle'
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
    <div className='w-full grid grid-cols-9 px-6'>
      <div className='col-span-4'>
        <ResumeTitle
              icon={<MdWork/>}
              title='Experience'
          />
        <ResumeCard
          badge="May 2023"
          title="Virtual Experience Program Participant"
          subTitle="Deloitte · Internship"
          des="During this virtual internship program, I had the opportunity to gain hands-on experience in various domains, expanding my skills and knowledge in the field of Cyber Security."  
        />
        <ResumeCard
          badge="2023-Present"
          title="Cybersecurity Mentor"
          subTitle="AMCFOSS Club · Amrita Vishwa Vidyapeetham"
          des="From network security to ethical hacking, as a learning community we share knowledge, and encourage practical learning through projects and competitions. Together, we build a strong foundation for our cybersecurity careers."  
        />
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
      </div>
      <div className='col-span-4'>
      <ResumeTitle
              icon={<GiGraduateCap/>}
              title='Education'
          />
        <ResumeCard
          badge=""
          title="B-Tech in Cyber Security"
          subTitle="Amrita Vishwa Vidyapeetham, Chennai"
          des="I am a 3rd-year student pursuing CSE with a specialization in Cybersecurity with a CGPA of 9.14. My college is known for its emphasis on practical knowledge, providing hands-on experience in cybersecurity."  
        />
        <ResumeCard
          badge="2019 - 2021"
          title="High School"
          subTitle="Narayana e-techno School"
          des="Rigorous training and guidance helped me build a strong foundation for the JEE Main curriculum. The school's dedicated approach and resources were instrumental in shaping my academic journey."  
        />
        <ResumeCard
          badge="2007-2019"
          title="Primary School"
          subTitle="NSN Memorial School"
          des="The serene environment and positive atmosphere created a conducive learning environment. The dedicated teachers fostered a sense of harmony and tranquility. It truly provided me with moments of peace and cherished memories that will stay with me forever."  
        />
      </div>
    </div>
  )
}

export default Education
