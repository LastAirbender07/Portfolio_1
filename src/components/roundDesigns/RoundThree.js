import React from 'react'

const RoundThree = () => {
  return (
    <div className='w-96 h-96 rounded-full absolute top-72 left-72'>
      <div className="w-full h-full relative animate-reverse-spin">
        <div className="w-32 h-32 rounded-full bg-gray-400 absolute top-[-4rem] blur-2xl">
            <div className="w-24 h-24 rounded-full bg-slate-500  absolute -bottom-[2rem] left-[25rem] blur-xl">
                <div className="w-28 h-28 rounded-full bg-blue-600 absolute top-[13rem] right-[19rem] blur-xl">
                </div>    
            </div>
        </div>
      </div>
    </div>
  )
}

export default RoundThree
