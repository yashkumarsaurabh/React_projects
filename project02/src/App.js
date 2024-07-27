import { useState } from "react";
import "./App.css"
function App() {
  let [counter, setCounter] = useState(10);

  let addCounter = () => {
    if (counter+1>15){
      return alert("We can't add more than 15");
    }
    setCounter((counter) => counter+1);
    return counter;
  }
  let removeCounter = () => {
    if (counter-1<0){
      return alert("Negative counter is not allowed");
    }
    setCounter((counter) => counter-1);
    return counter;
  }

  return (
    <div className="flex-box">
      <div>Counter App: {counter}</div>
      <div><button onClick={addCounter}>Add Counter</button>
      <button onClick={removeCounter}>Remove Counter</button></div>
    </div>
  );
}

export default App;
