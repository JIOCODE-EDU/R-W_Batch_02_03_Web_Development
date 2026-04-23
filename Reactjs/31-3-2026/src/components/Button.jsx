import style from "./Button.module.css";
import { useState } from "react";
import Card from "./Card";

export const styles = {
  backgroundColor: "blue",
  fontSize: "20px",
  border: "2px solid green",
  width: "fit-content",
  color: "white",
  padding: "10px 20px",
};

const Button = ({num}) => {
  
  const [counter , setCounter] = useState(0)
  
  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <>
    <button style={styles} onClick={handleClick}>Click Me {counter}{num}</button>
    <Card num={num}/>
    </>
  )
};

export default Button;
