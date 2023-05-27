import React from 'react'

const FlexContent = ({ ifExists, endpoint: { title, heading, text, img, btn, url } }) => {
  return (
   <>

      <div className={`flex mb-16 items-center justify-between nike-container 
      sm:justify-center ${ifExists ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className='max-w-lg lg:max-w-none w-full 
        md:text-center grid items-center lg:justify-items-center'>
         <h1 className='text-4xl sm:text-3xl font-bold text-gradient
           dark:text-slate-400'>{heading}</h1>
           <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl 
          font-bold text-slate-900  dark:text-slate-200 filter
           drop-shadow-lg'>{title}</h1>
          <p className='xl:text-sm my-4 text-slate-900
           dark:text-slate-200'>{text}</p> 

          <a href={url} className="flex items-center" target={"_blank"} role="button">
            <button type='button' className='button-theme
             bg-slate-900 shadow-slate-900 text-slate-100 py-2 px-2 rounded-xl'>{btn}</button>
          </a>
        </div>
        <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full'>
          <img
            src={img}
            alt={`img/${heading}`}
            className={`w-auto object-fill transitions-theme h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36
         `}
          />
        </div>
      </div>
   </>
  )
}

export default FlexContent