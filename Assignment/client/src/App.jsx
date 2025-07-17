import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Admin from './pages/Admin'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:id' element={<Blog/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  )
}

export default App;