import React from 'react'
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className='w-full h-15 flex justify-between items-center'>
      <div className='flex gap-4 w-fit'>
        <img src={assets.logo} alt="" />
        <h3 className='text-2xl font-bold text-sky-500'>Blog Posts</h3>
      </div>
      <button onClick={() =>navigate('/admin')} className='font-semibold bg-gray-400 px-3 py-1 rounded-full active:opacity-50'>Admin</button>
    </div>
  )
}

export default Header;