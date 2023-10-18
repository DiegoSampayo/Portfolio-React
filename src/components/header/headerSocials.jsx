import React from 'react'
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="" target = "_blank"><AiOutlineLinkedin size={50}/></a>
        <a href="" target='_blank'><AiOutlineGithub size={50}/></a> 
    </div>
  )
}

export default HeaderSocials
