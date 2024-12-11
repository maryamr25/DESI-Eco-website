import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import Products from '../../components/products/Products'


function SpecficCategory() {
  const [products , setProducts] = useState([])
  const {name} = useParams()

  console.log("categories name" , name)

  const fetchSpecficCate = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
    // const response = await fetch('https://fakestoreapi.com/products/category/jewelery')

    const data = await response.json()
    console.log("SpecficCategory ka data" , data)
    setProducts(data)
  }

  useEffect(() => {
    fetchSpecficCate()
  },[name])



  return (
    <div>
     
    <Products products={products}/>
    
    </div>
  )
}

export default SpecficCategory