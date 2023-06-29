import React, { useState } from 'react'
import './account.scss'
import dance from '../../../Assets/dance.png'
import { Navbar } from '../../Common/Navbar'
import {Link} from 'react-router-dom'
import {RiLockPasswordFill} from 'react-icons/ri'
import {FaUserAlt,FaEyeSlash,FaEye} from 'react-icons/fa'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Loader from '../../Common/Loader'
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { loginAction } from '../../ReduxStores/AuthSlice'


const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword1, setshowPassword1] = useState(false);
  const [customError, setcustomError] = useState(null);
  const [isLoading, setisLoading] = useState(false)
  const LoginSchema = yup.object().shape({
    email: yup.string("Invalid Email Id!").email("Invalid Email Id!").required("Email is Required!"),
    password: yup.string().required("Enter your password"),
  });

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(LoginSchema)
  });

  const onSubmit = async (data)=>{
    console.log(data);
    try {
      setisLoading(true)
      console.log(data);
      await dispatch(loginAction(data))
      return navigate("/");
    } catch (err) {
      setcustomError("Invalid username or password");
    }finally{
      setisLoading(false)
    }
  }

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
        <form className="right" onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          { customError && <p>{customError}</p>}
          <div className={`inp ${errors?.email && 'error'}`}>
            <FaUserAlt />
            <input type='text' id="email" placeholder="Your Email" {...register('email')} />
          </div>
          <div className={`inp ${errors?.password && 'error'}`}>
            <RiLockPasswordFill />
            <input type={showPassword1 ? 'text' :'password'} id="password" placeholder="Password" {...register('password')} />
            {showPassword1?<FaEye onClick={()=>setshowPassword1(!showPassword1)} /> : <FaEyeSlash onClick={()=>setshowPassword1(!showPassword1)} />}
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
    {isLoading && <Loader /> }
    </>
  )
}

export default Login