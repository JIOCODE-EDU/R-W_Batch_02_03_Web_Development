import React from 'react'
import { useEffect , useState } from 'react'

// syntax: useEffect(() => { }, [dependencies])

const UseEffect = () => {

  const [count , setCount] = useState(0)
  const [number , setNumber] = useState(20)
  const [task , setTask] = useState([])


  // useEffect(() => {
  //   // side effect code

  //   return () => {
  //    // clenup code
  //   }
  // }, [dependencies])


  // useEffect(() => {
  //   console.log("Components load in first time....");
  // } , [])


  // useEffect(() => {
  //    console.log("Components load in first time....");
  // } , [count])

  //  useEffect(() => {
  //    console.log("Components load in second time....");
  // } , [number])


  // useEffect(() => {

  //   const timer = setInterval(() => {
  //     console.log("Timer is running");
  //   } , 1000);

  //   return () => {
  //     clearInterval(timer)
  //     console.log(timer);
  //     console.log("Components remove.....");
  //   }
  // } , [])

  // useEffect(() => {
  //   setCount(count + 1)
  //   console.log("Component create....");
  //   return () => {
  //     console.log("Component Removed.......");
  //   }
  // } , [])

  // const fetchData = async() => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  //   const data = await res.json()
  //   setTask(data)
  // }

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then((res) => res.json())
  //   .then((data) => setTask(data))
  // } , [])


  return (
    <>
      <div>
        {/* <span>Count : {count}</span>
        <span>Count : {number}</span>
        <button onClick={() => setCount(count + 1)}>counting</button>
        <button onClick={() => setNumber(number + 1)}>counting</button> */}
        {/* <button onClick={fetchData}>fetching</button> */}
        {
          task.map((t) => {
            return <li key={t.id}>{t.title}</li>
          })
        }
      </div>
    </>
  )
}

export default UseEffect