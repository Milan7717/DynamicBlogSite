import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Travelling from './pages/Travelling';
import Friends from './pages/Friends';





function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/travelling' element={<Travelling />} />
          <Route path='/friends' element={<Friends />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}
export default App


