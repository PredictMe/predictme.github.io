import React from 'react'
import Navbar from './Navbar'
import { useLocation } from "react-router-dom";

function NavBarController() {

    let location = useLocation()
    console.log(location.pathname)

  return (
    location.pathname == "/Dapp" ? null : <Navbar/>
  )
}

export default NavBarController