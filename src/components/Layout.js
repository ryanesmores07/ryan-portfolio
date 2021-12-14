import React from "react"
import "../assets/css/main.css"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
