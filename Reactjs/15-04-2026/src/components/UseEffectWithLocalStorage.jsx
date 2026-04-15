import React from 'react'
import { useEffect , useState } from 'react'

const UseEffectWithLocalStorage = () => {

  const [theme , setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme' , theme)
  },  [theme])

  return (
    <>
    <div>UseEffectWithLocalStorage</div>
    <button className='btn' onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>Current Theme : {theme}</button>
    </>
  )
}

export default UseEffectWithLocalStorage