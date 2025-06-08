import React from 'react'
import RepairImage from '../images/repair_image.png'

const Homepage = () => {
  return (

    <div className='bg-[#EAE0D5]'>

      <div className='flex justify-center items-center space-x-4 py-5'>

        <img src={RepairImage} className='h-50 rounded-2xl'/>

        <div className='ml-6'> 

          <h1 className='flex font-josefin text-5xl font-extrabold'>Helping YOU move forward!</h1>

        </div>


      </div>

    </div>

  )
}

export default Homepage