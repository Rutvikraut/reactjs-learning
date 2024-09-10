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

  // For interview
  const addMulitple=()=>{
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
  }
  const RemoveMulitple=()=>{
    if(counter<=0){
      setCounter(0)
    }else{
      setCounter((prevCounter)=>prevCounter-1)
      setCounter((prevCounter)=>prevCounter-1)
      setCounter((prevCounter)=>prevCounter-1)
      setCounter((prevCounter)=>prevCounter-1)
    }
  }
  return (
    <>
    <h1>Count is {counter}</h1>
      <div className="card">
        <button onClick={addCounter}>
          Add Counter
        </button>
        <button onClick={removeCounter}>Remove Count</button>
        <button onClick={addMulitple}>Add Count by 4</button>
        <button onClick={RemoveMulitple}>Remove Count by 4</button>
      </div>
    </>
  )
}

export default App
