import React from 'react'
import { useState } from 'react'


const OrderStatusPage = () => {

  const [showStatus, setShowStatus] = useState(true);
  
  let pageVisability = ""
  
  if (!showStatus) {
  
    pageVisability = "hidden"
  
  }

  return (
    <div className='bg-[#EFDECD]'>

      <div className='py-20'>
            
        {/* Main Page Text */}

        <h1 className={`flex justify-center font-josefin font-extrabold text-5xl`}>ORDER STATUS</h1>

        <p  className={`${pageVisability} flex mt-5 justify-center font-lato text-lg`}>Want to check the status of your order? Input your repair order number</p>

        <br />

        {/* Input Field */}

        <div className='flex justify-center'>

          <input type="number" name='ordernumber' placeholder="Repair Order Number:" className={`${pageVisability} bg-[#EFEFEF] w-100 h-10 p-5 font-josefin font-bold rounded-sm shadow-lg`}/>

        </div>

        {/* Button */}

        <div className='flex justify-center'>

          <button onClick={() => setShowStatus((prevState) => !prevState)} className='bg-[#C6AC8F] p-3 mt-7 rounded-lg text-white font-josefin font-bold text-lg duration-200 ease-in hover:shadow-md'>

            Check Status

          </button>

        </div>

      </div>      
      
    </div>
  )
}

export default OrderStatusPage