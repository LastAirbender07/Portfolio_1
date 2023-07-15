import React from 'react'
import ServiceCard from './ServiceCard'
import { BiCodeAlt } from 'react-icons/bi'
import { FaAppStoreIos } from 'react-icons/fa'
import { AiTwotoneAppstore } from 'react-icons/ai'
import { SiAntdesign } from 'react-icons/si'

const MyServices = () => {
  return (
    <div className='grid grid-cols-2'>
        <ServiceCard
            icons={<BiCodeAlt/>}
            title="Web Development"
            subTitle="As a passionate web developer, I have successfully completed more than 5 projects in this field. Through these projects, I have gained hands-on experience in creating responsive and visually appealing websites using modern web technologies such as HTML, CSS, JavaScript, and frameworks like React. I enjoy designing and developing intuitive user interfaces and implementing interactive features to enhance the user experience."
        />
        <ServiceCard
            icons={<SiAntdesign/>}
            title="Cyber Security"
            subTitle="With a growing interest in cyber security, I am actively learning concepts and techniques related to cybersecurity, including understanding different types of attacks, vulnerabilities, and defensive strategies. I am also familiarizing myself with tools and technologies used in the field of cybersecurity, such as Kali Linux, to strengthen my skills in this domain."
        />
        <ServiceCard
            icons={<AiTwotoneAppstore/>}
            title="Machine Learning"
            subTitle="Through projects, I have gained experience in using machine learning algorithms and frameworks to analyze and interpret complex datasets. I enjoy exploring patterns and insights from data, and leveraging machine learning techniques to build predictive models and solve real-world problems."
        />
        <ServiceCard
            icons={<FaAppStoreIos/>}
            title="App Development"
            subTitle="I have successfully completed a project in this domain, which involved designing and building a functional Android application using Java. I find app development intriguing as it allows me to create innovative and user-friendly mobile applications that can cater to the needs of users in various domains."
        />

    </div>
  )
}

export default MyServices
