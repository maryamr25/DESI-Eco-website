import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Modules/home/Home'
import Footer from './components/footer/Footer'

import Singleproduct from './components/singleproduct/Singleproduct'
import AllProducts from './Modules/allProducts/AllProducts'
import SpecficCategory from './Modules/specficCategory/SpecficCategory'
import About from './components/about/About'
import Cart from './Modules/carts/Cart'
import CheckOut from './Modules/checkout/CheckOut'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/categories/:name' element={<SpecficCategory/>}/>
      <Route path='/products' element={<AllProducts/>}/>
      <Route path='/products/:id' element={<Singleproduct/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
    </Routes>
    <Footer/>

    
    </>
  )
}

export default App