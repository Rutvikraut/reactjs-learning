import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length,setlength]=useState(6)
  const [numAllowed,isnumAllowed]=useState(false)
  const [charAllowed,ischarAllowed]=useState(false)
  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass=''
    let string='ABCDEFGHIJKLMNOPQRSRTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const sym='()%^&!@#$*{}[]~`|'
    const num='123456789'
    if (numAllowed) string+=num
    if(charAllowed) string+=sym
    for (let i = 1; i <= length; i++) {
      let char =Math.floor(Math.random()*string.length+1)
      pass+=string.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  const copypasswordtoclip=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,setPassword])
  return (
    <>
      <div className='h-screen bg-slate-800 flex justify-center items-center'>
        <div className='w-auto bg-slate-900 text-center h-auto px-4 py-6 rounded-xl'>
          <h1 className='text-slate-200 font-semibold text-2xl mb-4'>Password Generator</h1>
          <div className='flex gap-3 mb-4'>
          <input type="text" value={password} readOnly className='w-full h-10 rounded-md bg-slate-400 border-none text-xl px-3 font-medium text-black ' ref={passwordRef}/>
          <button onClick={copypasswordtoclip} className='text-slate-50 font-semibold bg-blue-500 px-3 rounded-lg'>Copy</button>
          </div>
          <div className='w-full flex text-slate-100 gap-2'>
            <input type="range" onChange={(e)=>setlength(e.target.value)} min={6} max={100} value={length}/>
            <label htmlFor="length" className='text-slate-100'>Length ({length})</label>
            <input type="checkbox" defaultChecked={numAllowed} onChange={()=>isnumAllowed((prev)=>!prev)} className='border-none'/>
            <label htmlFor="number">Number</label>
            <input type="checkbox" defaultChecked={charAllowed} onChange={()=>ischarAllowed((prev)=>!prev)} className='border-none' />
            <label htmlFor="checkbox">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
