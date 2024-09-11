import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
  console.log("Parent Component")
  const [addone,setaddone]=useState(0)
  // const [count,setcount]=useState(0)
  const handleFunction=useCallback(()=>{

  },[ ])
  const caladdone=()=>{
    setaddone(addone+1)
  }
  // const counter=()=>{
  //   setcount(count+1)
  // }
  return (
    <>
    <div>Parent ({addone})</div>
    <button onClick={caladdone}>Add One</button>
    <Child handler={handleFunction}/>
    {/* <button onClick={counter}>Add Count</button> */}
    </>
  )
}

export default Parent