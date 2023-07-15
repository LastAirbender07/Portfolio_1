import React from 'react'
import { 
  Tech, 
  Peace, 
  Cricket,
  Movie 
} from '../../assets/index'

import Title from '../home/Title'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div>
      <Title title="My" subTitle="Hobies"/>
      <div className='w-full grid grid-cols-2 gap-10'>
        <div className='px-6'>
            <BlogCard
              img={Movie}
              title='Movies'
              subTitle='Across the Spider-Verse'
            />
            <BlogCard
              img={Cricket}
              title='Cricket'
              subTitle='🔥 Duo'
            />
        </div>
        <div className='px-6'>
            <BlogCard
              img={Tech}
              title='Technology'
              subTitle='Building Projects'
            />
            <BlogCard
              img={Peace}
              title='Entertainment'
              subTitle='Music'
            />
            
        </div>
      </div>
    </div>
  )
}

export default Blog
