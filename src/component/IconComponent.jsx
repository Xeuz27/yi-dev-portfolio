import React from 'react'
import { IconContext } from 'react-icons/lib'

const IconComponent = ({children}) => {
  return (
    <IconContext.Provider value={{className:'global-class-name'}}>
        {children}
    </IconContext.Provider>
  )
}

export default IconComponent