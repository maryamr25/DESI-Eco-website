import React, { useEffect, useState } from 'react'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'

function AllProducts() {
  const [products , setProducts] = useState([])

  const fetchProducts = async() => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    // console.log("products wala data" ,data)
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  })
  return (
   <div>
    <Categories/>
    <Products products={products}/>
   </div>
  )
}

export default AllProducts