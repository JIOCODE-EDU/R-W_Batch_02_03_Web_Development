import React from 'react'
import { useCallback , useState , useMemo } from 'react'

const UseMemo = () => {

  const [num , setNum] = useState(1)
  const[toggle , setToggle] = useState(false)

  const squareNum = useMemo(() => {
    console.log("Computing value....");
    return num * num
  } , [num])

  // let multi = num * num

  // const increment = () => {
  //    console.log("Computing value....");
  //   setNum((prev) => prev + 1)
  // }

  const increment = useCallback(() => {
    setNum((prev) => prev + 1)
  } , [])

  return (
    <>
    <div>UseMemo</div>
    <h2>Square : {squareNum}</h2>
    <button className='btn' onClick={increment}>Increment num</button>
    <button className='btn' onClick={() => setToggle(!toggle)}>Toggle</button>
    <p>Toggle state: {toggle.toString()}</p>
    </>
  )
}

export default UseMemo