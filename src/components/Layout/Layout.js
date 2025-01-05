import React from 'react'
import Navbars from '../navbar/Navbars'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <div>
      <Navbars/>
      <main>
        <Outlet/> 
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
