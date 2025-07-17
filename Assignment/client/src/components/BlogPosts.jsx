import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import Card from './Card';

const BlogPosts = () => {

  const { blogsData,setShowModal, showModal, modelBlog } = useAppContext();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-10'>
      {
        blogsData.map((item, index) => (
          <Card key={index} title={item.title} image={item.image} description={item.description}/>
        ))
      }

      {/* modal */}
      <div className={`fixed flex justify-center items-center z-50 inset-0 backdrop-blur-sm ${showModal ? '' : 'hidden'}`}>
        {
          modelBlog 
          ? 
            <div className="bg-white rounded-2xl shadow-xl w-full sm:w-3/4 p-6 relative animate-fade-in">
            {/* Close Button */}
              <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold">
                &times;
              </button>

              {/* Blog Content */}
              <h2 className="text-2xl font-bold text-center mb-4">{modelBlog.title}</h2>
              <img src={modelBlog.image} alt="Blog" className="rounded-lg w-full h-90 object-cover mb-4" />
              <p className="text-gray-700 text-sm text-justify">{modelBlog.description}</p>
              <div className='mt-4 flex flex-col'>
                <h3 className='font-semibold'>comments</h3>
                <ul className='flex flex-col'>
                  <li className='flex justify-between text-sm'>love it <span>3 days ago</span></li>
                  <li className='flex justify-between text-sm'>love it <span>3 days ago</span></li>
                  <li className='flex justify-between text-sm'>love it <span>3 days ago</span></li>
                </ul>
              </div>
            </div>
          :
            ''
        }
      </div>
    </div>
  )
}

export default BlogPosts