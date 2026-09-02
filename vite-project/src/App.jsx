import { useState } from "react";

function App() {

  let [count, setCount] = useState(3);
  // let count = 0;

  // function increaseNum() {
  //   count++;
  //   console.log(count)
  //   incrmnt.textContent = `Counter:${count}`;
  //   button.textContent = `Increase:${count}`;
  // }
  function increaseNum() {
    count++;
    setCount(count);
  }

  return (
    <>
      <p id="incrmnt">Counter:{count}</p>
      <button onClick={increaseNum}>Increment:{count}</button>
    </>
  )
}

export default App;