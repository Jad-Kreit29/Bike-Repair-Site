import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram }  from 'react-icons/fa'

const Footer = () => {
  return (

    <footer className='bottom-0'>

      <div className="flex justify-center items-center py-4 gap-x-6 text-3xl">

        <FaLinkedin />
        <FaFacebook />
        <FaInstagram />

      </div>

    </footer>
  )
}

export default Footer