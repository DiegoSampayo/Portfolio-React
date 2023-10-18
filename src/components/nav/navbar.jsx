import React from 'react'
import "./nav.css"
import {AiTwotoneHome} from "react-icons/ai"
import {SiAboutdotme} from "react-icons/si"
import {MdWork} from "react-icons/md"
import {MdOutlineDesignServices} from "react-icons/md"
import {AiOutlineContacts} from "react-icons/ai"
import { useState } from 'react'



const Nav  = () => {
  const [ activeNav , setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className= {activeNav === "#" ? "active" : ""}><AiTwotoneHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className= {activeNav === "#about" ? "active" : ""} ><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className= {activeNav === "#experience" ? "active" : ""} ><MdWork/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className= {activeNav === "#services" ? "active" : ""} ><MdOutlineDesignServices/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className= {activeNav === "#contact" ? "active" : ""} ><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav
