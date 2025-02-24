import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Noida from './Pages/Noida'
import Photos from './Pages/Photos'
import Testimonials from './Pages/Testimonials'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noida" element={<Noida />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/Testimonials" element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App