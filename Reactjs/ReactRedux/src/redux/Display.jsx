import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement , reset } from './action'

const Display = () => {

  const count = useSelector(state => state.count)

  const dispatch = useDispatch()

  return (
    <>
    <div>Display</div>
    <div>count:{count}</div>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  )
}

export default Display