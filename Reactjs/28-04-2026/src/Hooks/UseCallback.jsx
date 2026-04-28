import { useCallback , useState , useMemo } from "react";

const UseCallback = () => {

  const [a , setA] = useState(5);
  const [b , setB] = useState(10);

  // const sum1 = a + b; // Recalculate on Every Render

  const Sum = useMemo(() => {
    console.log("Calculate sum....");
    return a + b
  } , [a , b])

  // const Increment = () => {
  //   console.log("useCallback");
  //   setA(prev => prev + 1)
  // }

  const Increments = useCallback(() => {
    console.log("useCallback");
     setA(prev => prev + 1)
  } , [])


  return (
    <>
    <div>UseCallback</div>
    <p>A:{a} , B:{b}</p>
    <p>Sum:{Sum}</p>
    <button className="btn" onClick={Increment}>Increment A</button>
    <button className="btn" onClick={() => setB(prev => prev + 1)}>Increment B</button>
    <button className="btn">Click Me</button>
    </>
  )
}

export default UseCallback