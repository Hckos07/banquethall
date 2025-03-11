import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Noida from './Pages/Noida'
import Photos from './Pages/Photos'
import Testimonials from './Pages/Testimonials'
import Whyus from './Pages/whyus'
import Images from './Pages/Images'
import Hotelgrandhighway from './Banquets/Hotelgrandhighway'
import Hotelrajmahal from './Banquets/Hotelrajmahal'
import Milanvatica from './Banquets/Milanvatica'
import Samargrand from './Banquets/Samargrand'
import Sarovarporico from './Banquets/Sarovarportico'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noida" element={<Noida />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/whyus" element={<Whyus />} />
          <Route path="/images" element={<Images />} />
          <Route path="/venues/Hotelgrandhighway" element={<Hotelgrandhighway />} />
          <Route path="/venues/Hotelrajmahal" element={<Hotelrajmahal />} />
          <Route path="/venues/Milanvatica" element={<Milanvatica />} />
          <Route path="/venues/Samargrand" element={<Samargrand />} />
          <Route path="/venues/Sarovarportico" element={<Sarovarporico />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App