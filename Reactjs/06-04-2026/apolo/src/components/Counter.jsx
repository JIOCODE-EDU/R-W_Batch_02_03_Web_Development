import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterProvider'

const Counter = () => {

  const {count , setCount} = useContext(CounterContext)


  return (
    <>
    <div>Counter {count}</div>
    <button onClick={() => setCount(count + 1)}>click</button>
    </>
  )
}

export default Counter