import { useState } from "react";
function App() {
  let [color, setColor] = useState("red");
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
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
      <div className="pt-12 flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="p-4">Counter : {counter}</div>
        <div><button className="p-4 w-28 bg-black text-white rounded-3xl" onClick={addCounter}>Add</button>
        <button className="w-28 ml-4 p-4 bg-black text-white rounded-3xl" onClick={removeCounter}>Remove</button></div>
      </div>
      <div className="pt-40 flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3
        py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "red"}}>Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "green"}}>Green</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "yellow"}}>Yellow</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: "pink"}}>Pink</button>
        </div>
      </div>
    </div>
  );
}

export default App;
