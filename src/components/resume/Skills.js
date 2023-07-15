import React from 'react'
import ResumeTitle from './ResumeTitle'
import { SiArtstation } from 'react-icons/si'
import { FaFlag } from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='w-full grid grid-cols-9 px-6'>
        <div className='col-span-4'>
            <ResumeTitle title="Design" icon={<SiArtstation/>}/>
            <div className='py-4'>
            <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Cyber Security</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[56%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>

                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Web Development</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[78%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>

                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Machine Learning</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[68%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>

                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>App Development</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[28%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>
        </div>
        <div className='w-full h-full flex justify-center items-center'>
            <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
        </div>
        <div className='col-span-4'>
        <ResumeTitle title="Languages" icon={<FaFlag/>}/>
            <div className='py-4'>
                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>English</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[78%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>

                <div className='py-3 border-b-[1px] border-zinc-800'>
                    <p className='text-base text-textColor -mb-1.5'>Tamil</p>
                    <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
                        <span className='w-[90%] h-full absolute top-0 left-0 bg-designColor'></span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
