
import './App.css'
import Button from './components/Button'
import { useState } from 'react'

export const styles1 = {
  backgroundColor: "green",
  fontSize: "20px",
  border: "2px solid green",
  width: "fit-content",
  color: "white",
  padding: "10px 20px",
};

function App() {

  const [number , setNumber] = useState(20)

  return (
    <>
      <Button num={number}/>
      <button style={styles1} onClick={() => setNumber(number - 1)}>Click Me</button>
    </>
  )
}

export default App
