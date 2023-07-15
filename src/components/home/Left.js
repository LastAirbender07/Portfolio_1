import React from 'react'
import { jay } from '../../assets/index'
import { BsCloudLightningFill } from 'react-icons/bs'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { FiMail, FiSend } from 'react-icons/fi'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import CV from '../../assets/Jayaraj_Resume.pdf'

const Left = () => {
    const [text] = useTypewriter({
        words: ['Cyber Security Enthusiast', 'CTF Player', 'Web Developer', 'UI Designer'],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 2000
    })
  return (
    <div className='w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10'>
        <div className='w-full h-3/5'>
            <img className="w-full h-full object-cover rounded-2xl" src={jay} alt="Profile_Photo" loading='priority'/>
        </div>
        <div className='w-full h-2/5'>
            { /* contains Intro */ }
            <div className='flex flex-col items-center gap-2 py-10'>
                <h1 className='text-textColor text-4xl font-semibold'>Jayaraj Viswanathan</h1>
                <p className='text-base text-yellow tracking-wide'>{text}<Cursor cursorBlinking="false" cursorStyle="|" /></p>
                <div className='flex justify-center gap-3 mt-2'>
                    <a 
                    href='https://github.com/LastAirbender07/'
                    target='_blank' 
                    rel='noreferrer'
                    className='hover:text-yellow duration-300 cursor-pointer text-xl'><AiFillGithub/>
                    </a>
                    <a 
                    href='https://www.linkedin.com/in/jayaraj-viswanathan-a7634b222/'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-yellow duration-300 cursor-pointer text-xl'><FaLinkedinIn/>
                    </a>
                    <a 
                    href='https://www.instagram.com/jayaraj_07/'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-yellow duration-300 cursor-pointer text-xl'><FaInstagram/>
                    </a>
                    <a 
                    href = "mailto: jayarajviswanathan@gmail.com"
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-yellow duration-300 cursor-pointer text-xl'><FiMail/>
                    </a>
                </div>
            </div>
            { /* Buttons */ }
            <div className='flex h-14'>
                <a href={CV} className='w-1/2 h-full flex justify-center items-center gap-2 borderRight borderTop text-sm tracking-wide uppercase hover:text-yellow duration-300s'  target='_blank' rel='noreferrer'>
                <button className='w-full h-full flex justify-center items-center gap-2'>
                    Download CV <BsCloudLightningFill/>
                </button>
            </a>
                <button className='w-1/2 h-full flex justify-center items-center gap-2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-yellow duration-300s'>
                    Contact me <FiSend/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Left
