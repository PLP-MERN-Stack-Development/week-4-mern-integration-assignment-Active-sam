import React from 'react'
import { useAppContext } from '../context/AppContext'

const Input = () => {

  const { input, setInput } = useAppContext();


  return (
    <div className='w-full'>
      <input value={input} onChange={(e) =>setInput(e.target.value)} className='w-full h-10 border rounded pl-4' type="text" placeholder='Search Here ...'/>
    </div>
  )
}

export default Input