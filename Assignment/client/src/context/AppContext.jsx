import React, { createContext, useContext, useState, useEffect } from 'react'
import { blogsPosts } from '../assets/assets.js'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [ blogsData, setBlogsData ] = useState([]);
  const [ input, setInput ] = useState('');
  const [ showModal, setShowModal ] = useState(false);
  const [ modelBlog, setModalBlog ] = useState({});
  
    const fetchBlogs = async () => {

      try {

        const { data } = await axios.get('/api/all-blogs');

        data.success ? setBlogsData(data.blogs) : console.log(error.message);
        
      } catch (error) {
        console.log(error.message);
      }
      
      // setBlogsData(blogsPosts);
    };

    const applyFilters = () => {
      let blogsCopy = blogsData.slice();

      if (blogsData.length > 0 && input.trim()) {
        blogsCopy = blogsCopy.filter(item => 
          item.title.toLowerCase().includes(input.toLowerCase())
        );
      }

      setBlogsData(blogsCopy);
    };

    useEffect(() => {
      if (input.trim()) {
        applyFilters();
      } else {
        fetchBlogs()
      }
    }, [input]);

  const value = {
    input, setInput, blogsData, showModal, setShowModal, modelBlog, setModalBlog
  }

  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
};