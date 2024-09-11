import React from 'react'
import { useEffect } from 'react'

const LifeCycleMethod = () => {
    useEffect(()=>{
        console.log('render !')

        return ()=>console.log("Unmounting...")
    })
  return (
    <div>I am LifeCycleMethod</div>
  )
}

export default LifeCycleMethod