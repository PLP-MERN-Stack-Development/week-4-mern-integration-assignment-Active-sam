import React, { useState } from 'react'
import { assets } from '../assets/assets';
import axios from 'axios'

const Admin = () => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ image, setImage ] = useState(false);
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ category, setCategory ] = useState('Lifestyle');

  // console.log(image);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {

      const blog = {
        title, description, category
      };

      const formData = new FormData();
      formData.append('blog', JSON.stringify(blog));
      formData.append('image', image);

      const response = await axios.post('http://localhost:4000/api/add-blog', formData);

      if (response.data.success) {
        alert(response.data.message);
        setImage(false);
        setTitle('');
        setDescription('');
        setCategory('Lifestyle');
      } else {
        alert(response.data.message);
      }
      
      
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
    
  };
  

  return (
    <div className='flex flex-col justify-center items-center gap-6 w-full h-[100vh]'>
      <h1 className='text-3xl font-bold text-sky-500'>Add Blog</h1>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-3'>
        <label htmlFor="image">
          <img className='w-20 rounded' src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
          <input onChange={(e) =>setImage(e.target.files[0])} className='w-50 h-20' type="file" id='image' hidden/>
        </label>
        <input onChange={(e) =>setTitle(e.target.value)} value={title} type="text" placeholder='title'/>
        <input onChange={(e) =>setDescription(e.target.value)} value={description} type="text" placeholder='description'/>
        <select onChange={(e) =>setCategory(e.target.value)} name="" id="">
           <option value="Lifestyle">Lifestyle</option>
          <option value="Fashion">Fashion</option>
          <option value="Travel">Travel</option>
          <option value="Technology">Technology</option>
          <option value="Coding">Coding</option>
        </select>
        <button type='submit' className='w-28 py-3 mt-4 bg-black text-white rounded'>{isLoading ? 'processing...' : 'Add'}</button>
      </form>
    </div>
  )
};

export default Admin;