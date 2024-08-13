import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
function Contact() {
  return (
    <>
    <div className='container contact' id='contact'>
      <h1>CONTACT ME</h1>
      <div className='contact-icon'data-aos="zoom-in" data-aos-duration="1000">
        <a href="https://www.instagram.com/sparks__surya731/" target='_blank' className='items'><FaInstagram  className='icons'/></a>
        <a href="https://github.com/SuryaYadav731" target='_blank' className='items'><FaGithub className='icons' /></a>
        <a href="https://www.linkedin.com/in/surya-yadav-b51007218/" target='_blank' className='items'><FaLinkedin className='icons'/></a>
        <a href="mailto:suryayadav222003@gmail.com" target='_blank' className='items'><MdOutlineEmail className='icons'/></a>
        <a href="https://www.facebook.com/profile.php?id=100077367023818" target='_blank' className='items'><FaFacebookF className='icons'/></a>
      </div>
      </div>

    </>
  )
}

export default Contact
