import { useState } from "react"
import Sum from './Sum.jsx'
function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  console.log("APP")



  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increse</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <h3>your total sum</h3>
      <button onClick={() => setNumber(number + 10)}>SUM</button>
      <Sum number={number}></Sum>
    </>
  )

}

export default App
