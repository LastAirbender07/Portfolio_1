import React from 'react'

const ExtraCrad = ({icon, des}) => {
  return (
    <div className='full'>
      <div className='w-full flex flex-col items-center gap-2 py-8 border-r-[1px] border-zinc-800 border-b-[1px] border-b-zinc-800'>
        <span className='text-2xl text-yellow'>{icon}</span>
        <p className='text-base w-32 h-10 text-center text-gray-300 hover:text-white'>{des}</p>
      </div>
    </div>
  )
}

export default ExtraCrad
