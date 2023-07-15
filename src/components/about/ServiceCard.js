import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='py-8 px-6 flex flex-col items-center gap-2 borderRight borderBottom'>
        <span className='text-4xl text-yellow mb-2'>
            {props.icons}
        </span>
        <h2 className='font-titleFont text-lg font-semibold'>{props.title}</h2>
        <p className='text-sm text-center text-zinc-400 px-6'>
            {props.subTitle}
        </p>
    </div>
  )
}

export default ServiceCard
