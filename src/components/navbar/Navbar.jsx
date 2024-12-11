import React, { useEffect, useState } from 'react'
import { IoBagHandleOutline, IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { PiTShirt } from "react-icons/pi";

function Navbar() {
 const navList = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Products',
    path: '/products'
  }
 ]

//  change the themes
const [theme , setTheme] = useState('light')
 document.querySelector('body').className=theme
 
const changeTheme = () => {
  if(theme === 'light'){
    setTheme('dark')
  }else{
    setTheme('light')
  }
}

// show the cart  lenght 
// let carts = JSON.parse(localStorage.getItem('cart')) || []

 
//  console.log('carts data' , carts)


  
  return (
    <header className=" body-font">
  <div className="container mx-auto  flex flex-wrap py-4 flex-col md:flex-row items-center shadow-lg">
    <nav className="flex lg:w-2/5 flex-wrap  items-center text-base md:ml-auto">
     {
      navList.map((nav) => {
        return (
          <Link to={nav.path} className='m-3 text-1xl font-semibold'>{nav.name}</Link>
        )
      })
     }
     
    </nav>
    <Link to={'/'} className="flex order-first lg:order-none lg:w-1/5 title-font font-medium  items-center  lg:items-center lg:justify-center mb-4 md:mb-0">
    <div className='flex flex-col text-2xl font-bold '><PiTShirt className='mx-auto ' /> <span >D  E  S  I</span> </div>

      
    </Link>
    <div className="lg:w-2/5 inline-flex  lg:justify-end ml-5 lg:ml-0 text-3xl">
    <div onClick={changeTheme} className=' inline-flex items-center mt-4 md:mt-0 mx-3 cursor-pointer'>{theme === 'light' ? <IoSunnyOutline />  : <IoMoonOutline />}</div>
     <Link to={'/cart'} className="inline-flex items-center  border-0 py-1 px-3   mt-4 md:mt-0"><IoBagHandleOutline />
     {/* <p className='mb-1 text-sm font-semibold bg-tan px-2 rounded-full'>{carts?.length}</p> */}
        
      </Link>
      
      
    </div>
  </div>
</header>
  )
}

export default Navbar