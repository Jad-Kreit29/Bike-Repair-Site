import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.svg'

const NavBar = () => {
  return (

    <nav className='bg-[#2A3439] text-white text-lg font-mono px-25 py-2 border-b-4 border-[#01161E]'>

      <div className='flex justify-between items-center mx-auto'>

      <div className='flex items-center space-x-10'>
          <NavLink to='/' className='flex space-x-2 items-center'>
            <img src={Logo} className=' w-25 h-25' />
            <p className='font-playfair text-4xl font-extrabold'>Bikety</p>
          </NavLink>
        </div>

      <div className='flex space-x-10 items-center-safe'>

          <NavLink to='/status' className='text-lg font-josefin font-extrabold hover:text-gray-300 px-6'>Order Status</NavLink>

          <NavLink to='/appointment_book'>
            <button className='bg-red-500 hover:bg-red-600 text-white font-josefin font-extrabold py-2 px-4 rounded-md transition-colors duration-200'>
            Book Appointment
            </button>
          
          </NavLink>

      </div>

      </div>

    </nav>

  )
}

export default NavBar