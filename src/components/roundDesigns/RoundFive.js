import React from 'react'

const RoundFive = () => {
  return (
    <div className='w-96 h-96 rounded-full absolute bottom-0 -left-10'>
      <div className="w-full h-full relative animate-reverse-spin">
        <div className="w-24 h-24 rounded-full bg-yellow absolute top-[-4rem] blur-2xl">
            <div className="w-24 h-24 rounded-full bg-designColor absolute -bottom-[2rem] left-[25rem] blur-xl">   
            </div>
        </div>
      </div>
    </div>
  )
}

export default RoundFive
