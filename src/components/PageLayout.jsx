import React from 'react'

const PageLayout = ({children}) => {
  return (
    <div className="m-16 md:m-5 p-2 md:p-10 bg-white  dark:bg-secondary-dark-bg rounded-3xl">
      {children}
 </div>
  )
}

export default PageLayout