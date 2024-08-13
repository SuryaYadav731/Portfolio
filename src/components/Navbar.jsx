import React from 'react'

function Navbar() {
  return (
    <>
      <div className='container nav_bar' data-aos="zoom-in-down" data-aos-duration="1000">
        <div className='left nav_item'>Protfolio</div>
        <div className='right'>
             <a href='#home' className='nav_item'>Home</a>
             <a href='#experience' className='nav_item'>Education</a>
             <a href='#skills' className='nav_item'>Skills</a>
             <a href='#project' className='nav_item'>Project </a>
             <a href='#contact' className='nav_item'>Contact</a>
        </div>
      </div>

    </>
  )
}

export default Navbar
