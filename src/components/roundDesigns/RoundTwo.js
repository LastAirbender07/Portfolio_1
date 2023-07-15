import React from 'react'

const RoundTwo = () => {
  return (
    <div className='w-[500px] h-[500px] rounded-full absolute bottom-o right-32'>
      <div className="w-full h-full relative animate-spin-slow">
        <div className="w-52 h-52 rounded-full bg-designColor absolute top-[-4rem] blur-2xl">
            <div className="w-24 h-24 rounded-full bg-green-500  absolute -bottom-[2rem] left-[25rem] blur-xl">
                <div className="w-28 h-28 rounded-full bg-yellow  absolute top-[13rem] right-[19rem] blur-xl">
                </div>    
            </div>
        </div>
      </div>
    </div>
  )
}

export default RoundTwo
