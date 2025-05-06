import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import intagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Gift Store</p>
      </div>
      <ul className="footer-links">
        <ul>Company</ul>
        <ul>Products</ul>
        <ul>Offices</ul>
        <ul>About</ul>
        <ul>Contact</ul>
      </ul>
      <div className="footer-social-item">
        <div className="footer-icons-container">
            <img src={intagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copright @2024 - All Right reserved</p>
      </div>
    </div>
  )
}

export default Footer
