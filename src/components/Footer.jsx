import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram }  from 'react-icons/fa'

const Footer = () => {
  return (
      <div className="flex justify-center items-center w-full py-4 gap-x-6 text-3xl">
      <FaLinkedin />
      <FaFacebook />
      <FaInstagram />

    </div>
  )
}

export default Footer