import React, { useState } from 'react'
import './account.scss'
import dance from '../../../Assets/dance.png'
import { Navbar } from '../../Common/Navbar'
import {Link} from 'react-router-dom'
import {RiLockPasswordFill} from 'react-icons/ri'
import {FaUserAlt,FaEyeSlash,FaEye} from 'react-icons/fa'
import {AiFillGoogleCircle} from 'react-icons/ai'

const Login = () => {

  const [showPassword1, setshowPassword1] = useState(false);

  return (
    <>
    <Navbar />
    <div className='CardContainer'>
      <div className="center_card">
        <div className="left">
          <img src={dance} alt="" />
          <Link to={'/signup'}>Create an Account</Link>
          <button id='google'>Google <AiFillGoogleCircle /></button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <div className="inp">
            <FaUserAlt />
            <input type='text' id="email" placeholder="Your Email"/>
          </div>
          <div className="inp">
            <RiLockPasswordFill />
            <input type={showPassword1 ? 'text' :'password'} id="password" placeholder="Password"/>
            {showPassword1?<FaEye onClick={()=>setshowPassword1(!showPassword1)} /> : <FaEyeSlash onClick={()=>setshowPassword1(!showPassword1)} />}
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login