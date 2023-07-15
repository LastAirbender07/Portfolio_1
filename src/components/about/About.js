import React from 'react'
import Title from '../home/Title'
import AboutMe from './AboutMe'
import MyServices from './MyServices'
import Extras from './Extras'

const About = () => {
  return (
    <section id="about" className='w-full'>
        <Title title="About" subTitle="Me"/>
        <AboutMe/>
        <Title title="My" subTitle="Interests"/>
        <MyServices/>
        <Title title="Extras" subTitle="♘"/>
        <Extras/>
    </section>
  )
}

export default About
