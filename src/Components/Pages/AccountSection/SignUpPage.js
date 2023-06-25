import React, { useState } from 'react'
import './account.scss'
import dance from '../../../Assets/dance.png'
import { Navbar } from '../../Common/Navbar'
import {Link} from 'react-router-dom'
import {RiLockPasswordFill} from 'react-icons/ri'
import {FaUserAlt,FaEyeSlash,FaEye} from 'react-icons/fa'
import {AiFillGoogleCircle} from 'react-icons/ai'

const SignUpPage = () => {

  const [showPassword1, setshowPassword1] = useState(false);
  const [showPassword2, setshowPassword2] = useState(false);

  return (
    <>
    <Navbar />
    <div className='CardContainer'>
      <div className="center_card">
        <div className="left">
          <img src={dance} alt="" />
          <div id='loginPromt'>
            <p>Already have an account? </p>
            <Link to={'/login'}> Login</Link>
          </div>
          <button id='google'>Google <AiFillGoogleCircle /></button>
        </div>
        <div className="right">
          <h1>Sign up</h1>
          <div className="inp">
            <FaUserAlt />
            <input type='text' id="email" placeholder="Your Email"/>
          </div>
          <div className="inp">
            <RiLockPasswordFill />
            <input type={showPassword1 ? 'text' :'password'} id="password" placeholder="Password"/>
            {showPassword1?<FaEye onClick={()=>setshowPassword1(!showPassword1)} /> : <FaEyeSlash onClick={()=>setshowPassword1(!showPassword1)} />}
          </div>
          <div className="inp">
            <RiLockPasswordFill />
            <input type={showPassword2 ? 'text' :'password'} id="confirm_password" placeholder="Confirm Password"/>
            {showPassword2?<FaEye onClick={()=>setshowPassword2(!showPassword2)} /> : <FaEyeSlash onClick={()=>setshowPassword2(!showPassword2)} />}
          </div>
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUpPage