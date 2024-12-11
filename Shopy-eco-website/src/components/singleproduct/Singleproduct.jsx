import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

function Singleproduct() {

  const [singleproducts , setSingleProducts] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

  const fetchSingepro = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    // console.log("single product data" , data)
    setSingleProducts(data)
  }
  useEffect(()=>{
    fetchSingepro()
  },[])






 
  const addToCard = (fetchSingepro , redirect) => { 
     const carts = JSON.parse(localStorage.getItem('cart')) || []
     const existing = carts.find((item) => item.id === fetchSingepro.id) 
     if (existing) {
      const update = carts.map((item) => {
        if(item.id === fetchSingepro.id) {
          return {...item , quantity : item.quantity + 1}

        }
        return item
      })
      localStorage.setItem('cart' , JSON.stringify(update))
     }
     else{
      localStorage.setItem('cart' , JSON.stringify([...carts , {...fetchSingepro , quantity : 1}])) 
  
     }
     alert('That product add in bag')
  
     if(redirect) {
      navigate('/cart')
     }
   
    
  }
 


  return (
    <section className=" body-font overflow-hidden">
  <div className="container px-5 py-20 mx-auto ">

          <div   className="lg:w-4/5 bg-tan rounded py-5 shadow-lg shadow-tan mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/3  lg:h-auto h-auto object-contain object-center rounded  mx-auto" src={singleproducts?.image}/>

      <div className="lg:w-1/2 w-full lg:pr-10 px-5 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-lablue tracking-widest">{singleproducts?.category}</h2>
        <h1 className=" text-3xl title-font font-medium mb-4 text-brown">{singleproducts?.title}</h1>
        <div className="flex mb-4">
          <a className="flex-grow  border-b-2 text-lablue py-2 text-lg px-1">Description</a>
          <a className="flex-grow border-b-2 text-lablue border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a className="flex-grow border-b-2 text-lablue border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p className="leading-relaxed mb-4 text-brown">{singleproducts?.description}</p>
        
      
        <div className="flex">
          <span className="title-font  font-bold text-2xl text-lablue">${singleproducts?.price}</span>
          <button className="flex ml-auto text-white bg-lablue border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full font-semibold" onClick={()=> addToCard(singleproducts)}>Add to Bag</button>
          <button className=" w-10 h-10  p-0 border-0 inline-flex products-center justify-center text-lablue  ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mt-2" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
   
   
 
  </div>
</section>
  )
}

export default Singleproduct




