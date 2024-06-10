import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

  const[currState, setCurrState]= useState("login") 
  return (
    <div className='login-popup'>

      <form className="login-popup-container">
        <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" srcset="" />
        </div>

        <div className="login-popup-input">
          {currState==="login"?<></>: <input type="text" placeholder='Your name' required />}
          
          <input type="email" placeholder='Your email' required />
          <input type="password"  placeholder='password' required/>
        </div>
        <button>{currState==="sign up" ?"create account" :"login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
        {
          currState==="login"
          ?<p>create a new account? <span onClick={()=>setCurrState("sign up")} >click here </span></p>
          :<p>already have an account? <span onClick={()=>setCurrState("login")}>login here</span></p>
        }
        
        
      </form>

    </div>
  )
}

export default LoginPopUp