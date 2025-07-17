import React from 'react'
import Header from '../components/Header'
import Input from '../components/Input';
import BlogPosts from '../components/BlogPosts';

const Home = () => {
  return (
    <div className='px-10 sm:px-20'>
      <Header/>
      <Input/>
      <BlogPosts/>
    </div>
    
  )
}

export default Home;