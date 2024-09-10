import { useState } from 'react'

import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"Rutvik",
    age:22
  }
  let newarr=[1,2,3,4,5]
  return (
    <>
      <h1>Tailwind Test</h1>
      <Card newObj={myobj} newArr={newarr}/>
    </>
  )
}

export default App
