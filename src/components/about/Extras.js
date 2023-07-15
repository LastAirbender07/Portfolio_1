import React from 'react'
import ExtraCrad from './ExtraCrad'
import { BiCodeAlt } from 'react-icons/bi'
import { BsTrophyFill } from 'react-icons/bs'
import { FaRunning } from 'react-icons/fa'
import { PiCertificateFill } from 'react-icons/pi'

const Extras = () => {
  return (
    <div className='px-0 grid grid-cols-4 pb-10'>
      <ExtraCrad 
        icon={<BsTrophyFill/>} 
        des="Runner Up in Talos CTF 2023"
      />
      <ExtraCrad 
        icon={<BiCodeAlt/>} 
        des="5+ Projects Completed"
      />
      <ExtraCrad 
        icon={<PiCertificateFill/>} 
        des="20+ Course Completion Certificates"
      />
      <ExtraCrad 
        icon={<FaRunning/>} 
        des="Participated in social well being activities"
      />
    </div>
  )
}

export default Extras
