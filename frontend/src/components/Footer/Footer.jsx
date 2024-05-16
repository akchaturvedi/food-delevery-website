import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora inventore nemo, cumque eaque tempore vitae. Iste, cumque atque. Atque natus accusantium voluptate sequi quam laboriosam vero iusto esse ratione ad?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">

                <h2>COMPANY</h2>
                <ul>
                   <li>Home</li>
                   <li>About Us</li>
                   <li>Delevery</li>
                   <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">

                <h2>GET IN TOUCH</h2>

                <ul>
                    <li>8957229133</li>
                    <li>adeshchaturvedi51@gmail.com</li>
                </ul>

            </div>

        </div>

        <hr/>
         
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved</p>       
    </div>
  )
}

export default Footer