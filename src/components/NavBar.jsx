import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (

    <nav className='bg-amber-400 font-mono px-4 py-2 border-b-4 border-[#01161E] sticky top-0 z-1'>

        <div className='flex space-x-10'>

            <NavLink to='/'>Home</NavLink>
            
            <NavLink to='/about'>About</NavLink>

            <NavLink to='/contact'>Contact</NavLink>

            <NavLink to='/status'>Order Status</NavLink>

            <NavLink to='/appointment_book'>Book Appointment</NavLink>


        </div>

    </nav>

  )
}

export default NavBar