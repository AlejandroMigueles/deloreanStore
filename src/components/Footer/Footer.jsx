import React from 'react'
import './Footer.scss'
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const
  Footer = () => {
    return (
      <footer className='text-center text-white position'>
        {/* Grid container */}
        <div className='container p-4 pb-0'>
          {/* Section: Social media */}
          <section className='mb-4'>
            {/* Facebook */}
            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'><FaFacebook /></a>
            {/* Twitter */}
            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'><FaTwitter /></a>
            {/* Google */}
            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'><FaGoogle /></a>
            {/* Instagram */}
            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'><FaInstagram /></a>
            {/* Linkedin */}
            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'><FaLinkedin /></a>
            {/* Github */}
            <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'><FaGithub /></a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2022 Copyright:
          <a className='text-white'> Alejandro Migueles</a>
        </div>
        {/* Copyright */}
      </footer>
    )
  }

export default
Footer
