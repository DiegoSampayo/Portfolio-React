import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/Me.png"
import HeaderSocials from "./headerSocials"

const Header = () => {
  return (
    <header>
      <HeaderSocials />
      <div className = "container header__container">
          <h5>Hello I´m</h5>
          <h1>Diego Sampayo</h1>
          <h5 className= "text-light"> Fullstack Developer</h5>
          <CTA />

      </div>
    </header>
  )
}

export default Header
