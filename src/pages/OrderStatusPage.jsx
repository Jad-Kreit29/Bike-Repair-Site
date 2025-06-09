import React from 'react'
import { useState } from 'react'
import ProgressBar from '../images/progress_bar.svg'


const OrderStatusPage = () => {

  const [showStatus, setShowStatus] = useState(true);
  
  let firstPageVisability = ""
  let secondPageVisability = "hidden"
  
  if (!showStatus) {
  
    firstPageVisability = "hidden"
    secondPageVisability = ""
  
  }

  return (
    <div className='bg-[#EFDECD] py-20'>

      <h1 className='flex justify-center font-josefin font-extrabold text-5xl'>ORDER STATUS</h1>

      {/* Input Order Status */}
      <div className={firstPageVisability}>
            
        <p className='flex mt-5 justify-center font-lato text-lg'>Want to check the status of your order? Input your repair order number</p>

        <br />

        {/* Input Field */}

        <div className='flex justify-center'>

          <input type="text" name='ordernumber' placeholder="Repair Order Number:" className={`${firstPageVisability} bg-[#EFEFEF] w-100 h-10 p-5 font-josefin font-bold rounded-sm shadow-lg`}/>

        </div>

        {/* Button */}

        <div className='flex justify-center'>

          <button onClick={() => setShowStatus((prevState) => !prevState)} className='bg-[#C6AC8F] p-3 mt-7 rounded-lg text-white font-josefin font-bold text-lg duration-200 ease-in hover:shadow-md'>

            Check Status

          </button>

        </div>

      </div>      

      {/* Progress Bar Status */}
      <div className={secondPageVisability}>

        <div className='flex justify-center mt-10'>

          <img src={ProgressBar} className='h-20'/>

        </div>

        <p className='flex justify-center mt-5 font-lato font-bold text-lg'>STAGE 2: REPAIR ANALYZED</p>

        <p className='flex justify-center font-lato mt-2'>
          We have determined the appropriate repair for your bike, and will begin the process soon!
        </p>

        <p className='flex justify-center font-lato'>
          <br />
          Your estimated repair date is: June 12th
        </p>

      </div>

    </div>
  )
}

export default OrderStatusPage