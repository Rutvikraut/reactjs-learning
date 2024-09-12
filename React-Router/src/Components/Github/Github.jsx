import React from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()
  // const [data,setData]=useState([])
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Rutvikraut")
  //   .then(res => res.json())
  //   .then(data=>{
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])
  return (
    <div>Github : {data.public_repos}
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/Rutvikraut")
  const data = await res.json()
  return data
}

