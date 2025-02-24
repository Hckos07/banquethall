import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Noida from './Pages/Noida'
import Photos from './Pages/Photos'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noida" element={<Noida />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App