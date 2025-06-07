import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import OrderStatusPage from './pages/OrderStatusPage'
import AppointmentPage from './pages/AppointmentPage'


const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<MainLayout />}>

      <Route index element={<Homepage />} />
      <Route path='/status' element={<OrderStatusPage />} />
      <Route path='/appointment_book' element={<AppointmentPage />}  />


    </Route>


  )


)


const App = () => {
  return (

    <div className='antialiased'>

      <RouterProvider router={ router }/>

    </div>

  )
}

export default App