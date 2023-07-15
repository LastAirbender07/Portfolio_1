import React from 'react'
import Title from '../home/Title'
import Education from './Education'
import Skills from './Skills'
import Certifications from './Certifications'

const Resume = () => {
  return (
    <section id='resume'>
      <Title title="My" subTitle="Resume"/>
      <Education/>
      <Title title="My" subTitle="Skills"/>
      <Skills/>
      <Title title="My" subTitle="Certifications"/>
      <Certifications/>
    </section>
  )
}

export default Resume
