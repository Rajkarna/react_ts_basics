import React, { useContext } from 'react'
import { themeContext } from './ThemeContext'


const Box = () => {

    const theme = useContext(themeContext)
  return (
    <div style={{backgroundColor:theme.primary.color, color:theme.primary.text}}>Box</div>
  )
}

export default Box