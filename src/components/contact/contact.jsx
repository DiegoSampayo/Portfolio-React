import React from 'react'
import "./contact.css"
import {AiTwotoneMail} from "react-icons/ai"

const contact = () => {
  return (
    <section id='contact'>
        <h5> Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
            <div className='contact__options'>

                <article className='contact__option'>
                    <AiTwotoneMail />
                    <h4>Email</h4>
                    <h5>diegodimas.ds@gmail.com</h5>
                    <a href="mailto:diegodimas.ds@gmail.com" target='_blank'>Send a message</a>
                </article>

                <article className='contact__option'>
                    <AiTwotoneMail />
                    <h4>WhatsApp</h4>
                    <h5>+54-9-379-486-6097</h5>
                    <a href="https://api.whatsapp.com/send?phone=5493794866097" target='_blank'>Send a message</a>
                </article>
            </div>

            <form action="">
                <input type="text" name='name' placeholder='Your full name' required />
                <input type="email" name='email' placeholder='Your email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submite' className='btn btn-primary'>Send Message</button>
            </form>
        </div>

    </section>
  )
}

export default contact
