import { useEffect, useState } from 'react'

function App() {
  const [color, setcolor] = useState('olive')

  useEffect(()=>{
    const savedColor=localStorage.getItem('backgroundColor') //getting the background
    if(savedColor){
      setcolor(savedColor) // when document reload background color will be same which is previous
    }
  },[])
  const handleClick=(e)=>{
    const colorName=e.target.innerText
    setcolor(colorName)
    localStorage.setItem('backgroundColor',colorName) // saving the background color in local storage
  }
  return (
    <>
    <div className='w-screen h-screen' 
    style={{backgroundColor:color}}>
      <div className='fixed flex bottom-12 inset-x-0 px-2 justify-center'>
        <div className='bg-white flex justify-center gap-3 px-3 py-2 rounded-3xl'>
        <button onClick={handleClick} className='bg-red-600 px-3 py-1 rounded-2xl'>Red</button>
        <button onClick={handleClick} className='bg-blue-600 px-3 py-1 rounded-2xl'>Blue</button>
        <button onClick={handleClick} className='bg-green-600 px-3 py-1 rounded-2xl'>Green</button>
        <button onClick={handleClick} className='bg-yellow-600 px-3 py-1 rounded-2xl'>Yellow</button>
        <button onClick={handleClick} className='bg-black text-white px-3 py-1 rounded-2xl'>Black</button>

        {/* <button onClick={handleClick}>Button</button> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
