import React from 'react'
import Navbars from '../navbar/Navbars'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Home from '../../pages/Home/Home'

function Layout() {
  return (
    <div>
      <Navbars/>
      <main>
        <Outlet/> 
        <Home/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
