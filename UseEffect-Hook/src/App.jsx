import { useEffect } from "react"
import { useState } from "react"
// import LifeCycleMethod from "./LifeCycleMethod"

function App() {
  // const [random,setrandom]=useState(Math.random())
  // const [mounted,setmounted]=useState(true)

  // const reRender=()=>{setrandom(Math.random())}
  // const toggle=()=>{setmounted(!mounted)}

  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);
  return (
    <>
      {/* <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/ Hide Life Cycle</button>
      {mounted && <LifeCycleMethod/>} */}

      <p>I have counted {count} times</p>
    </>
  )
}

export default App
