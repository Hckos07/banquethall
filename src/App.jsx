import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Noida from './Pages/Noida'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noida" element={<Noida />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App