import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Categories() {

  const [category , setCategory] = useState([])

  const fetchCategory = async() => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = await response.json()
    // console.log("category ka data" , data)
    setCategory(data)
  }

  useEffect(() => {
    fetchCategory()
  })


  return (
    <section className=" body-font">
      <div className='mx-auto mt-14 text-center'><h1 className='uppercase font-bold text-2xl '>Differnt Types Of Categories</h1></div>
      
  <div className="container px-5 py-20 mx-auto flex flex-wrap">
  
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" className="object-cover object-center h-full w-full" src='/c2.jpg'/>
    </div>
    {/* differnt categories blocks */}
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      { 
      category.map((card) => {
        return (
          <Link
          //  to={'/categories'}
           to={`/categories/${card}`}
             className="flex flex-col  bg-tan mb-10 text-lablue   rounded-lg px-3 py-3 lg:items-start items-center cursor-pointer">
       
        <div className="flex-grow">
          <h2 className="uppercase font-bold text-lablue text-2xl title-font  mb-3">{ card || example}</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <p className="mt-3 text-brown inline-flex items-center">Learn More
           
          </p>
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

export default Categories