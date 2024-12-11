import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero    body-font">
    <div className="  container  px-5 sm:py-54 py-40  ">
      
      
      
    </div>
    <div className='flex justify-end items-end  mr-28   '>
        <Link to={'/products'} className='bg-lablue mb-10 text-white font-semibold px-3 py-3 rounded-full hover:bg-blue-950 transition-all duration-300   '>Shop Now</Link>
      </div>
  </section>
  )
}

export default Hero