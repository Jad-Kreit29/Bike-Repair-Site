import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.svg'

const NavBar = () => {
  return (

    <nav className='bg-[#22333B] text-white text-lg font-mono px-4 py-2 border-b-4 border-[#01161E]'>

      <div className='flex space-x-10 items-center-safe'>

          <NavLink to='/' className='flex space-x-2 items-center'>

            <img src={Logo} className='w-25 h-25'/>
            <p className='font-playfair text-4xl font-extrabold'>Bikety</p>

          </NavLink>

          <NavLink to='/status'>Order Status</NavLink>

          <NavLink to='/appointment_book'>Book Appointment</NavLink>


      </div>

    </nav>

  )
}

export default NavBar