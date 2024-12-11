import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products({products}) {
  // console.log('products/.....' ,products)



  return (
    <section className=" body-font">
       <div className='mx-auto mt-14 text-center'><h1 className='uppercase font-bold text-2xl '>Most popular products</h1></div>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap ">

        {
          products.map((product) => {
           

            return(
              <Link to={`/products/${product?.id}`} className="lg:w-1/5 md:w-1/2 p-4 m-6  bg-tan shadow-lg shadow-tan  rounded-lg  w-full hover:bg-pink-200 transition-all duration-300 ease-in-out cursor-pointer">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={product.image}/>
          </a>
          <div className="mt-4">
            <h3 className=" text-xs tracking-widest title-font mb-1">{product.category}</h3>
            <h2 className="text-lablue title-font text-xl font-bold">{product.title}</h2>
            <p className="mt-1 text-lablue text-xl font-semibold">${product.price}</p>
          </div>
        </Link>

            )

          })
        }

        


      
      </div>
    </div>
  </section>
  )
}

export default Products