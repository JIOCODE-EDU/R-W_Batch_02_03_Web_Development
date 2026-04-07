import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Theme = () => {

  const {theme , toggleTheme} = useTheme()

  return (
    <div style={theme === "light" ? {backgroundColor:"white"} : {backgroundColor:"black" , color:"white"}}>
      <h1>Theme : {theme}</h1>
      <button onClick={toggleTheme}>ToggleMode</button>
    </div>
  )
}

export default Theme