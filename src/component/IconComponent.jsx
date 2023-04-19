import React, { useContext } from 'react'
import { IconContext } from 'react-icons/lib'
import { ConfigContext } from '../context/configContext'

const IconComponent = ({children}) => {
  const {state} = useContext(ConfigContext)
  const colorstate = state.color
  return (
    <IconContext.Provider value={{className:`global-class-name shadow-${colorstate}`}}>
        {children}
    </IconContext.Provider>
  )
}

export default IconComponent