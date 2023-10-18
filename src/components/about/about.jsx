import React from 'react'
import "./about.css"
import {BsAward} from "react-icons/bs"

const about = () => {
  return (
    <section id = "about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src="{ME}" alt="" />
          </div>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <BsAward className='about__icon' />
            <h5>Experience</h5>
            <small>3+ years working</small>
          </article>

          <article className='about__card'>
            <BsAward className='about__icon' />
            <h5>Experience</h5>
            <small>3+ years working</small>
          </article>

          <article className='about__card'>
            <BsAward className='about__icon' />
            <h5>Experience</h5>
            <small>3+ years working</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora ab sunt culpa tenetur, obcaecati aliquid sed explicabo blanditiis sapiente quasi reprehenderit! Saepe cum aspernatur beatae iure mollitia facilis eius!
        </p>

        <a href="#contact" className='btn btn-primary'></a>
      </div>
    </section>
  )
}

export default about
