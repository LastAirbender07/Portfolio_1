import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex pb-6'>
      <div className='w-1/2 text-zinc-400 p-6 borderRight flex flex-col'>
        <div className='py-6'>
            <h2 className='text-lg font-semibold mb-1'>Hello! I'm Jayaraj</h2>
            <p className='text-base leading-6'>
                A cyber-security student with a self-starter attitude. A budding full stack developer and has the willingness to take on added responsibilities. Looking for opportunities that will help me actualize my full potential.
            </p>
        </div>
      </div>
      <div className='w-1/2 p-6'>
        <ul>
            <li className='aboutRightli'><span className='aboutRightliSpan'>Age:</span>19</li>
            <li className='aboutRightli'><span className='aboutRightliSpan'>Residence:</span>Chennai</li>
            <li className='aboutRightli'><span className='aboutRightliSpan'>Freelance:</span>Available</li>
            <li className='aboutRightli'><span className='aboutRightliSpan'>Address:</span>Thandalam, Sriperumbudur</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
