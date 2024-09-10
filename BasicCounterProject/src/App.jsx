import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addCounter=()=>{
    setCounter(counter+1)
  }
  const removeCounter=()=>{
    counter<=0?setCounter(0):setCounter(counter-1)
  }
  return (
    <>
    <h1>Count is {counter}</h1>
      <div className="card">
        <button onClick={addCounter}>
          Add Counter
        </button>
        <button onClick={removeCounter}>Remove Count</button>
      </div>
    </>
  )
}

export default App
