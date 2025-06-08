import React from 'react'
import { Link } from 'react-router-dom'
import RepairImage from '../images/repair_image.png'

const Homepage = () => {
  return (

    <div className='bg-[#EFDECD]'>

      <div className='flex justify-center items-center space-x-4 py-15'>

        {/* Image of Homepage */}

        <img className='object object-cover object-right h-100 w-120 rounded-xl' src={RepairImage}/>

        {/* Text of Homepage */}

        <div className='ml-20 w-80'> 

          <h1 className='flex font-josefin text-4xl font-extrabold'>Helping YOU move forward!</h1>

          <br />

          <p className='text-[18px] font-josefin'>
            At bike mate, we make our mission to get you back up-to-speed to the things you love most and onto your travelling journey.
            <br /><br />
            With affordable repair pricing, and experts to help guide you and teach you, we have you covered every step of the way.
          </p>

          <br />

          {/* Button */}

          <div className='flex justify-center'>

            <button className='bg-[#F71735] p-4 rounded-xl font-josefin font-extrabold text-white text-lg'>

              <Link to='/appointment_book'>

                Book An Appointment!
              
              </Link>

            </button>

          </div>


        </div>

      </div>

    </div>

  )
}

export default Homepage