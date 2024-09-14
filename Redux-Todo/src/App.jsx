import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-slate-500 pt-8'>
      <h1 className='text-black font-semibold text-3xl'>Todo List</h1>
      <AddTodo/>
      <Todos/>
      </div>
    </>
  )
}

export default App
