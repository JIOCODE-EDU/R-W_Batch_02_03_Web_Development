import React from 'react'
import {useState} from 'react'

const State = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [items, setItems] = useState([])
  const [user, setUser] = useState({ name: '', age: 0 })
  const [theme, setTheme] = useState('light')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
    <div>State</div>
    <div>Count: {count}</div>
    <div>Name: {name}</div>
    <button className='btn' onClick={() => setCount(count + 1)}>increment</button>
    <button className='btn' onClick={() => setName('John')}>Set Name</button>
    </>
  )
}

export default State