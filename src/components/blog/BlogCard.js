import React from 'react'

const BlogCard = ({img, title, subTitle}) => {
  return (
    <div className='py-6 gap-2 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800 group'>
      <div className='w-full h-full mb-2 overflow-hidden relative cursor-pointer'>
        <img src={img} alt="cardImage" />
        <div className='w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-green-600 to-green-200 opacity-10'></div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <span className='text-designColor text-sm border-[1px] border-designColor px-2'>{title}</span>
      </div>
      <h2 className='font-titleFont text-base text-center font-semibold text-[#ccc] group-hover:text-designColor duration-300'>{subTitle}</h2>
    </div>
  )
}

export default BlogCard
