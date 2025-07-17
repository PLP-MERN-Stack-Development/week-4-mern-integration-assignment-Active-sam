import React from 'react'
import { useAppContext } from '../context/AppContext'

const Card = ({ title, image, description }) => {

  const { setShowModal, setModalBlog } = useAppContext();

  const toModalData = {
    title, image, description
  };

  const handleCartCLick = () => {
    setShowModal(true);
    setModalBlog(toModalData);
  };


  return (
   <>
    <div onClick={handleCartCLick} className='flex flex-col border p-6 rounded hover:cursor-pointer transition-transform duration-300 hover:-translate-y-[5px]'>
      <h3 className='font-bold'>{title}</h3>
      <div className='w-full h-60 flex justify-center items-center'>
        <img className='h-3/4 w-auto rounded-2xl' src={image} alt="" />
      </div>
      <p className='text-sm font-semibold'>
        {description}
      </p>
    </div>
   </>
  )
}

export default Card