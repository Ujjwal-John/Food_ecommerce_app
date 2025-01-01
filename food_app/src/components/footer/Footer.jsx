import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer_content'>
        <div className="footer_content_left">
            <img src={assets.logo} alt="" />
            <p>hello this my footer section of this food delivery website which is made by uhheal john the webs developer</p>
            <div className='footer_social_icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer_content_middle">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer_content_right">
            <h2>Get IN TOUCH</h2>
            <ul>
                <li>+1 2234-122-2112</li>
                <li>ujjwal@gmail.com</li>
            </ul>

        </div>
      </div>
        <hr />
        <p className='footer_copyright'>Copyright 2024 c Tomato.com All Right Reserved </p>
        
    </div>
  )
}

export default Footer
