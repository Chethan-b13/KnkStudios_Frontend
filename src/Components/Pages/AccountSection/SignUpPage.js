import React, { useState } from 'react'
import './account.scss'
import dance from '../../../Assets/dance.png'
import { Navbar } from '../../Common/Navbar'
import {Link} from 'react-router-dom'
import {RiLockPasswordFill} from 'react-icons/ri'
import {FaUserAlt,FaEyeSlash,FaEye} from 'react-icons/fa'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {GiConfirmed} from 'react-icons/gi'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { postRequest } from '../../../axios'
import Loader from '../../Common/Loader'
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
  let navigate = useNavigate();
  const [showPassword1, setshowPassword1] = useState(false);
  const [showPassword2, setshowPassword2] = useState(false);
  const [customError, setcustomError] = useState(null);
  const [isLoading, setisLoading] = useState(false)


  const signupSchema = yup.object().shape({
    name: yup.string("Invalid Name!").required("Full Name is Required!"),
    email: yup.string("Invalid Email Id!").email("Invalid Email Id!").required("Email is Required!"),
    password: yup.string().min(6,"Password should be minimum 6 Characters").max(20).required("Create a password"),
    password2: yup.string().oneOf([yup.ref('password'),null]).required("Confirm your password!")
  });

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(signupSchema)
  });

  const onSubmit = async (data)=>{
    try {
      setisLoading(true)
      console.log(data);
      await postRequest('accounts/signup',data)
      return navigate("/login");
    } catch (err) {
      setcustomError(err.response.data.Error);
    }finally{
      setisLoading(false)
    }
    
  }
  return (
    <>
    <Navbar swap={true} />
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
        <form className="right" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign up</h1>
          {/* { Object.values(errors)[0] && <p>{Object.values(errors)[0]?.message}</p>} */}
          { customError && <p>{customError}</p>}
          <div className={`inp ${errors?.name && 'error'}`} >
            <FaUserAlt />
            <input type='text' id="name" placeholder="Full Name" {...register("name")}/>
          </div>
          <div className={`inp ${errors?.email && 'error'}`}>
            <MdEmail />
            <input type='text' id="email" placeholder="Your Email" {...register("email")}/>
          </div>
          <div className={`inp ${errors?.password && 'error'}`}>
            <RiLockPasswordFill />
            <input type={showPassword1 ? 'text' :'password'} id="password" placeholder="Password" {...register("password")}/>
            {showPassword1?<FaEye onClick={()=>setshowPassword1(!showPassword1)} /> : <FaEyeSlash onClick={()=>setshowPassword1(!showPassword1)} />}
          </div>
          <div className={`inp ${errors?.password2 && 'error'}`}>
            <GiConfirmed />
            <input type={showPassword2 ? 'text' :'password'} id="confirm_password" placeholder="Confirm Password" {...register("password2")}/>
            {showPassword2?<FaEye onClick={()=>setshowPassword2(!showPassword2)} /> : <FaEyeSlash onClick={()=>setshowPassword2(!showPassword2)} />}
          </div>
          <button type='submit'>SIGN UP</button>
        </form>
      </div>
    </div>
    {isLoading && <Loader /> }
    </>
  )
}

export default SignUpPage