import React from 'react'
import { categoriesData } from '../data/dummy'


const Categories = () => {
  return (
    <div className='flex ml-2 justify-start overflow-auto hover:overflow-scroll sm:mt-10'>
        {categoriesData.map((item,i)=>
        (<button className='bg-white 
        dark:text-gray-200 dark:bg-secondary-dark-bg rounded-full py-2 px-4 mx-1'
         key={i}>
            {item.name}
        </button>))}
    </div>
  )
}

export default Categories