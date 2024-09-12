import { useReducer } from "react"
import reducer from "./reducer"

const initial_state={count:0}
function App() {
  const [state,dispatch]=useReducer(reducer,initial_state)
  console.log(state)

  const handleIncrement=()=>{
    dispatch({type:'Increment'})
  }
  const handleDecrement=()=>{
    dispatch({type:'Decrement'})
  }
  return (
    <>
    <h1>{state.count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
