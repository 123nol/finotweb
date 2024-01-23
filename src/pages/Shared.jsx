import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
// import { useState } from 'react'
const Shared = () => {
  // const [top,setTop]=useState(true)
  // const handleScroll= (e)=>{
  //     e.currentTarget.scrollTop !== 0? setTop(false) : setTop(true);
  // }
  // window.addEventListener('scroll', handleScroll)
  return (
    <>
    <div  >
      <NavBar />
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default Shared