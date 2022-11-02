import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home'
import About from './Components/About'
import Error404 from './Components/Error404'
import ProductDetails from './Components/Product/ProductDetails'
import { Product } from './Components/Product/Product';
import {ProductIndex} from './Components/Product/ProductIndex'

const RouterApp = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route  path='/about' element={<About />}/>
         <Route path='product' element={<Product  />}>
          <Route path='/product/' element={<ProductIndex />} />
          <Route path=':id' element={<ProductDetails />} />
          </Route>
         <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default RouterApp
